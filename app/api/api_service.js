"use strict";

/**
 * API Service
 *
 * @param $http
 * @param $resource
 * @param ENV
 *
 * @returns {{Service: API.service}}
 */
function API($http, $resource, ENV) {

  var BASE_API = ENV.apiEndpoint;
  var apiData = {};

  var endpoints = [];

  // Account
  angular.extend(endpoints, [{
    "name": "Profile",
    "endpoint": "profile/"
  }, {
    "name": "User",
    "endpoint": "account/users/:user_id/" // GET
  }, {
    "name": "UserUpdate",
    "endpoint": "account/update-profile/" // PUT
  }, {
    "name": "PasswordReset",
    "endpoint": "account/password-reset/" // POST
  }, {
    "name": "ChangePassword",
    "endpoint": "account/change-password/" // POST
  }]);

  // Entry
  angular.extend(endpoints, [{
    "name": "Entry",
    "endpoint": "website/entry/:entry_id/" // GET, PUT, PATCH, DELETE
  }, {
    "name": "EntryAdd",
    "endpoint": "website/entry/" // POST
  }, {
    "name": "Entries",
    "endpoint": "website/entry/" // GET
  }]);

  // Sushial
  angular.extend(endpoints, [{
    "name": "Comment",
    "endpoint": "sushial/comment/:comment_id/" // GET, PUT, PATCH, DELETE
  }, {
    "name": "Comments",
    "endpoint": "sushial/comment/" // GET
  }]);

  // Site
  angular.extend(endpoints, [{
    "name": "SiteNew",
    "endpoint": "website/site/" // POST
  }, {
    "name": "Site",
    "endpoint": "website/site/:site_id/" // GET, PUT, PATCH
  }, {
    "name": "SiteUpdate",
    "endpoint": "website/site/:site_id/update-settings/" // GET, PUT, PATCH
  }, {
    "name": "Navigation",
    "endpoint": "website/site/:site_id/navigation/" // GET
  }, {
    "name": "UpdateNavigation",
    "endpoint": "website/site/:site_id/update-navigation/" // GET, PUT, PATCH
  }]);

  // Tagool
  angular.extend(endpoints, [{
    "name": "Tag",
    "endpoint": "tagool/tag/:tag_id/" // GET, PUT, PATCH
  }, {
    "name": "Tags",
    "endpoint": "tagool/tag/" // GET, POST
  }, ]);

  // Dolphin
  angular.extend(endpoints, [{
    "name": "Dolphins",
    "endpoint": "dolphin/file/" // GET, POST
  }, {
    "name": "Dolphin",
    "endpoint": "dolphin/file/:file_id/" // GET, PUT, PATCH, DELETE
  }]);

  function createResourceObject(attrName, endpoint) {
    apiData[attrName] = $resource(endpoint, {}, {
      put: { method: "PUT" }
    });
  }

  function setAPIData() {
    for (var i in endpoints) {
      createResourceObject(endpoints[i].name, BASE_API + endpoints[i].endpoint);
    }
  }

  setAPIData();
  return apiData;
}

app.service("API", API);
API.$inject = ["$http", "$resource", "ENV"];
