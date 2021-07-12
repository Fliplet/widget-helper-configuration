<template>
  <div class="interface">
    <form ref="form" class="form-horizontal" v-on:submit.prevent="onSubmit">
      <header>
        <p>
          {{ displayName || name }}
          <a v-if="supportUrl" :href="supportUrl" class="help-icon" target="_blank">
            <i class="fa fa-question-circle-o"></i>
          </a>
        </p>
      </header>
      <template v-for="field in configuration.fields">
        <field ref="fieldInstances" v-bind="field" v-bind:key="field.name"></field>
      </template>
      <input ref="submitButton" type="submit" style="display:none"/>
    </form>
  </div>
</template>

<script>
import Field from './components/Field';
import { findAll, findOne, findChildren, registerFields } from './libs/lookups';

Vue.component('Field', Field);

export default {
  data() {
    return Fliplet.Widget.getData();
  },
  methods: {
    // Methods can be used when the Vue instance is passed as context for
    // the change and ready callback functions
    find: findAll,
    findOne: findOne,
    children: findChildren,
    async onSubmit() {
      if (window.currentProvider) {
        window.currentProvider.forwardSaveRequest();
        return;
      }

      var vm = this;
      var beforeSave;

      await Promise.all(this.$refs.fieldInstances.map((field) => {
        if (field.show === false) {
          delete vm.fields[field.name];

          return;
        }

        return field.onSubmit();
      }));

      if (this.configuration.beforeSave) {
        var beforeSaveFunction = new Function(this.configuration.beforeSave)();

        if (beforeSaveFunction) {
          try {
            beforeSave = beforeSaveFunction.call(this, this.fields, this.configuration);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('The beforeSave function has thrown an error', e, this.configuration.beforeSave);

            Fliplet.Modal.alert({ message: Fliplet.parseError(e) });
          }
        }
      }

      if (!(beforeSave instanceof Promise)) {
        beforeSave = Promise.resolve();
      }

      beforeSave.then(function() {
        // Remove reactivity so objects are properly converted
        // into data that can be transmitted
        const data = JSON.parse(JSON.stringify(vm.fields));

        Fliplet.Studio.emit('page-preview-send-event', {
          type: 'helper-configuration-updated',
          data: data
        });

        if (!Fliplet.Env.get('development')) {
          Fliplet.Studio.emit('widget-save-complete');
        } else {
          // eslint-disable-next-line no-console
          console.debug(data);
        }
      }).catch(function(err) {
        // eslint-disable-next-line no-console
        console.warn('Cannot save helper configuration', err);

        Fliplet.Modal.alert({ title: 'Error saving configurations', message: Fliplet.parseError(err) });
      });
    }
  },
  mounted() {
    var vm = this;

    Fliplet.Widget.onSaveRequest(function() {
      $(vm.$refs.submitButton).click();
    });

    if (this.configuration.ready) {
      var ready = new Function(this.configuration.ready)();

      if (ready) {
        try {
          ready.call(this, this.fields, this.configuration);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('The ready function is invalid', e, this.configuration.ready);
        }
      }
    }
  },
  created() {
    registerFields(this.configuration && this.configuration.fields);
  }
};
</script>
