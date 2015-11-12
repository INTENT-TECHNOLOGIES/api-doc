(function (window) {
  'use strict';

  var CustomRequestSigner = function (name) {
    this.name = name;
  };

  CustomRequestSigner.prototype.apply = function (obj) {
    obj.headers.Authorization = 'Bearer abcdef';
    return true;
  };

  window.intentApi = {
    init: function init (opts) {
      this.host = opts.host;
      this.baseUrl = opts.baseUrl;
      this.specs = opts.specs;
    },
    getClient: function getClient () {
      if (this.initPromise) {
        return this.initPromise;
      }
      var _this = this;
      var p = new Promise(function (resolve) {
        window.jQuery.get(_this.baseUrl, function (data) {
          var intentApiSpec = data;
          intentApiSpec.host = _this.host;
          intentApiSpec.schemes = ['https'];
          intentApiSpec.paths = {};
          intentApiSpec.definitions = {};

          var loaded = 0;
          _this.specs.forEach(function (spec) {
            window.jQuery.get(_this.baseUrl + spec, function (data) {
              for (var pathKey in data.paths) {
                intentApiSpec.paths[pathKey] = data.paths[pathKey];
              }
              for (var defKey in data.definitions) {
                intentApiSpec.definitions[defKey] = data.definitions[defKey];
              }
              loaded++;
              if (loaded === _this.specs.length) {
                var swaggerClient = new window.SwaggerClient({
                  spec: intentApiSpec,
                  authorizations: {
                    oauthToken: new CustomRequestSigner('oauthToken')
                  },
                  success: function () {
                    resolve(swaggerClient);
                  }
                });
              }
            });
          });
        });
      });
      this.initPromise = p;
      return p;
    },
    call: function call (scope, fnName, params) {
      return this.getClient()
      .then(function (client) {
        return new Promise(function (resolve, reject) {
          if (!client) {
            return reject({
              code: 'CLIENT_INIT_ERR'
            });
          }
          if (!client[scope]) {
            return reject({
              code: 'INVALID_SCOPE'
            });
          }
          if (typeof client[scope][fnName] !== 'function') {
            return reject({
              code: 'INVALID_ROUTE'
            });
          }
          client[scope][fnName](
            params || {},
            function (success) {
              resolve(success.obj);
            },
            function (error) {
              reject(error);
            }
          );
        });
      });
    }
  };
})(window);
