const data = Fliplet.Widget.getData();
const helperInstances = _.get(data, 'helperInstances', []);
const instanceId = _.get(data, 'instanceId', '');
let fieldInstances = {};

/**
 * Returns a boolean indicating whether a nested helper instance matches a filter
 * @param {Helper} instance The helper instance
 * @param {Function} predicate The function invoked per iteration
 * @returns {Boolean} Whether the element matches
 */
function helperMatches(instance, predicate) {
  return instance.id !== instanceId
    && instance.isChildren
    && (predicate ? _.find([instance], predicate) : true);
}

/**
 * Prepares a predicate filter before it's sent to the various
 * find functions for helpers. This allows a given predicate shorthand
 * to be converted into the suitable filter.
 * @param {Function|String|Object} predicate A filter
 * @return {Function|Object} The prepared predicate
 */
function prepareFilter(predicate) {
  if (typeof predicate === 'string') {
    return { name: predicate };
  }

  return predicate;
}

/**
 * Finds all matching child helpers (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */
export function findAll(predicate) {
  predicate = prepareFilter(predicate);

  return _.filter(helperInstances, function(instance) {
    return helperMatches(instance, predicate);
  });
}

/**
 * Finds a matching child helper (through all levels)
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */
export function findOne(predicate) {
  predicate = prepareFilter(predicate);

  return _.find(helperInstances, function(instance) {
    return helperMatches(instance, predicate);
  });
}

/**
 * Finds matching direct children helpers
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helper
 */
export function findChildren(predicate) {
  predicate = prepareFilter(predicate);

  return _.filter(helperInstances, function(instance) {
    return instance.id !== instanceId
      && instance.parentId
      && instance.parentId === instanceId
      && (predicate ? _.find([instance], predicate) : true);
  });
}

export function registerFields(fields) {
  if (!fields) {
    return;
  }

  fieldInstances = fields;
}

/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} The matched helpers
 */
Fliplet.Helper.find = function(predicate) {
  return _.filter(helperInstances, prepareFilter(predicate));
};

/**
 * Finds matching helper instances
 * @param {Function} predicate The function invoked per iteration
 * @returns {Helper} The matched helpers
 */
Fliplet.Helper.findOne = function(predicate) {
  return _.find(helperInstances, prepareFilter(predicate));
};

Fliplet.Helper.field = function(name) {
  const field = _.find(fieldInstances, { name: name });

  if (!field) {
    return;
  }

  return {
    toggle: function(show) {
      if (typeof field.show === 'undefined') {
        Vue.set(field, 'show', true);
      }

      if (typeof show === 'undefined') {
        field.show = !field.show;

        return;
      }

      field.show = !!show;
    },
    get: function() {
      return field.value;
    },
    set: function(value) {
      field.value = value;
    }
  };
};
