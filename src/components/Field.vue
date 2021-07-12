<template>
  <div v-show="(typeof show === 'undefined' || show)" class="form-group clearfix" :data-field="name" :data-type="type">
    <input v-if="type === 'hidden'" type="hidden" v-model="value" />
    <template v-else>
      <div class="col-sm-4 control-label">
        <label v-if="label">{{ label }}</label>
        <p v-if="description" class="help-block" v-html="description"></p>
      </div>
      <div class="col-sm-8">
        <div v-if="type === 'list' && panelIsVisible" class="list-field">
          <div class="panel-group ui-sortable">
            <div v-sortable="{ group: { name: 'fields', pull: false }, scrollSensitivity: 116, scrollSpeed: 10, onStart: onStart, onEnd: onEnd, onUpdate: onSort, handle: '.screen-reorder-handle' }">
              <div class="panel panel-default" v-bind:key="index" v-for="(fieldList, index) in value">
                <div class="panel-heading ui-sortable-handle">
                  <h4 class="panel-title" data-toggle="collapse">
                    <div class="screen-reorder-handle">
                      <i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i>
                    </div>
                    <span v-on:click.prevent="onToggleAccordion" class="fa fa-chevron-right chevron"></span>
                    <span v-on:click.prevent="onToggleAccordion" class="panel-title-text">{{ fieldList | panelHeading(headingFieldName) }}</span>
                  </h4>
                  <a href="#" v-on:click.prevent="onDeleteItem(index)"><span class="icon-delete fa fa-trash"></span></a>
                </div>
                <div class="panel-collapse collapse">
                  <div class="panel-body">
                    <div class="form">
                      <div>
                        <template v-for="field in fieldList">
                          <field ref="fieldInstances" v-bind="field" v-bind:key="field.name" v-bind:index="index"></field>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!this.value || !this.value.length" v-html="emptyListPlaceholderHtml"></div>
          <p>
            <a class="btn btn-default" v-on:click.prevent="addItem" href="#">{{ addLabel || 'Add' }}</a>
            <a v-if="this.value && this.value.length" class="btn btn-link expand-items" v-on:click.prevent="onToggleAccordions" href="#">Expand/Collapse All</a>
          </p>
        </div>
        <input v-if="type === 'text'" type="text" class="form-control" v-model="value" :placeholder="placeholder" :required="requireValidation">
        <input v-if="type === 'email'" type="email" class="form-control" v-model="value" :placeholder="placeholder" :required="requireValidation">
        <textarea v-if="type === 'textarea'" class="form-control" v-model="value" :placeholder="placeholder" :required="requireValidation" :rows="rows || 4"></textarea>
        <template v-if="options && type === 'radio'">
          <div v-bind:key="option.value" v-for="option in options" class="radio radio-icon">
            <input :name="name" :id="name + '_' + option.value" type="radio" :value="option.value" v-model="value" :required="requireValidation">
            <label :for="name + '_' + option.value">
              <span class="check"><i class="fa fa-circle"></i></span> {{ option.label || option.value }}
            </label>
          </div>
        </template>
        <template v-if="options && type === 'checkbox'">
          <div v-bind:key="option.value" v-for="option in options" class="checkbox checkbox-icon">
            <input :name="name" :id="name + '_' + option.value" type="checkbox" :value="option.value" v-model="value">
            <label :for="name + '_' + option.value">
              <span class="check"><i class="fa fa-check"></i></span> {{ option.label || option.value }}
            </label>
          </div>
        </template>
        <template v-if="type === 'toggle'">
          <div class="checkbox checkbox-icon">
            <input :name="name" :id="name" type="checkbox" value="true" v-model="value" :required="requireValidation">
            <label :for="name">
              <span class="check"><i class="fa fa-check"></i></span> {{ toggleLabel }}
            </label>
          </div>
        </template>
        <template v-if="!isFullScreenProvider">
          <div v-if="html" v-html="html"></div>
        </template>
        <div v-if="type === 'provider'" class="provider">
          <template v-if="isFullScreenProvider">
            <div v-html="providerHtml"></div>
          </template>
        </div>
        <template v-if="warning">
          <br />
          <p class="alert alert-warning" v-html="warning"></p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { findAll, findOne, findChildren } from '../libs/lookups';

export default {
  data() {
    return {
      eventsBound: false,
      providerPromise: undefined,
      panelIsVisible: true,
      isFullScreenProvider: this.type === 'provider' && this.mode === 'full-screen'
    };
  },
  props: [
    'type',
    'name',
    'label',
    'html',
    'value',
    'ready',
    'change',
    'warning',
    'placeholder',
    'default',
    'description',
    'required',
    'rows',
    'options',
    'toggleLabel',
    'package',
    'fields',
    'addLabel',
    'index',
    'mode',
    'show',
    'headingFieldName',
    'emptyListPlaceholderHtml'
  ],
  computed: {
    providerHtml() {
      return Handlebars.compile(this.html)(this);
    },
    requireValidation() {
      return (typeof this.show === 'undefined' || this.show) && this.required;
    }
  },
  watch: {
    value(newValue) {
      if (this.$parent.type === 'list') {
        _.find(this.$parent.value[this.index], { name: this.name }).value = newValue;

        this.$parent.onListValueChanged(this.name, newValue);

        return;
      }

      this.$parent.fields[this.name] = newValue;

      const field = _.find(this.$parent.configuration.fields, { name: this.name });

      field.value = newValue;

      if (this.change) {
        const change = new Function(this.change)();

        change.call(this, newValue);
      }
    }
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: findAll,
    findOne: findOne,
    children: findChildren,
    val(newValue) {
      if (typeof newValue !== 'undefined') {
        this.value = newValue;
        return;
      }

      return this.value;
    },
    onListValueChanged(name) {
      if (name === this.headingFieldName) {
        this.$forceUpdate();
      }
    },
    async onSubmit() {
      if (this.$refs.fieldInstances) {
        await Promise.all(this.$refs.fieldInstances.map((field) => {
          return field.onSubmit().then((result) => {
            _.find(this.value[field.index], { name: field.name }).value = result;
          });
        }));

        const newValue = this.value.map((fields) => {
          const obj = {};

          fields.forEach((field) => {
            obj[field.name] = typeof field.value !== 'undefined' ? field.value : field.default;
          });

          return obj;
        });

        this.$parent.fields[this.name] = newValue;
      }

      if (!this.providerPromise) {
        return Promise.resolve(this.value);
      }

      this.provider.forwardSaveRequest();

      return this.providerPromise;
    },
    collapseAccordions($context) {
      $context.find('.panel-collapse').collapse('hide');
      $context.find('.fa-chevron-down').addClass('fa-chevron-right').removeClass('fa-chevron-down');
    },
    expandAccordions($context) {
      $context.find('.panel-collapse').collapse('show');
      $context.find('.fa-chevron-right').addClass('fa-chevron-down').removeClass('fa-chevron-right');
    },
    allAccordionsCollapsed($context) {
      return !$context.find('.fa-chevron-down').length;
    },
    onToggleAccordion(event) {
      const $target = $(event.target).parent().find('.chevron');
      const isExpanded = $target.hasClass('fa-chevron-down');
      const $field = $(event.target).closest('.list-field');

      // Close other items
      this.collapseAccordions($field);

      if (!isExpanded) {
        // Expand this item
        $target.closest('.panel').find('.panel-collapse').collapse('show');
        $target.addClass('fa-chevron-down').removeClass('fa-chevron-right');
      }
    },
    onToggleAccordions(event) {
      const $field = $(event.target).closest('.list-field');

      if (this.allAccordionsCollapsed($field)) {
        this.expandAccordions($field);
      } else {
        this.collapseAccordions($field);
      }
    },
    onDeleteItem(index) {
      this.value.splice(index, 1);
    },
    addItem() {
      if (!Array.isArray(this.value)) {
        this.value = [];
      }

      const item = JSON.parse(JSON.stringify(this.fields));

      this.value.push(item);
    },
    onStart() {
      this.collapseAccordions();
      this.onSubmit();
    },
    onEnd() {
      Promise.all(this.$refs.fieldInstances.map((field) => {
        field.initProvider();
      }));
    },
    onSort(event) {
      // Briefly hide the sortable panel to fix this issue
      // https://github.com/sagalbot/vue-sortable/issues/27#issuecomment-350014812
      this.panelIsVisible = false;

      this.value.splice(event.newIndex, 0, this.value.splice(event.oldIndex, 1)[0]);

      this.$nextTick(() => {
        this.panelIsVisible = true;
      });
    },
    initProvider() {
      if (this.type !== 'provider') {
        return;
      }

      if (!this.package) {
        throw new Error('Package is required');
      }

      const $provider = $(this.$el).find('.provider');

      if (this.isFullScreenProvider) {
        if (this.eventsBound) {
          return;
        }

        $provider.find('[data-open-provider]').click((event) => {
          event.preventDefault();
          this.openProvider();
          window.currentProvider = this.provider;
        });

        this.eventsBound = true;

        return;
      }

      this.openProvider($provider);
    },
    openProvider(target) {
      let value = this.value || {};

      // File picker wants a slightly different input from the original output
      if (this.package === 'com.fliplet.file-picker' && Array.isArray(value)) {
        value = { selectFiles: value };
      }

      this.provider = Fliplet.Widget.open(this.package, {
        selector: target ? target[0] : undefined,
        data: typeof value === 'object'
          // Normalize Vue objects into plain JSON objects
          ? JSON.parse(JSON.stringify(value))
          : value
      });

      this.providerPromise = new Promise((resolve) => {
        this.provider.then((result) => {
          if (_.isObject(result.data) && !Array.isArray(result.data)) {
            this.value = _.omit(result.data, [
              'package', 'version'
            ]);
          } else {
            this.value = result.data;
          }

          if (this.isFullScreenProvider) {
            delete window.currentProvider;
            delete this.provider;

            this.providerPromise = undefined;

            this.initProvider();
          }

          resolve(this.value);
        });
      });
    }
  },
  mounted() {
    this.initProvider();

    if (this.ready) {
      const ready = new Function(this.ready)();

      ready.call(this, this.$el, this.value);
    }
  }
};
</script>
