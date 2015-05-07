angular.module('igniteApp').factory("serRestApi", ['$http', '$resource', 'serAppLog', 'serUser', 'serUtils', '$log',
function($http, $resource, serAppLog, serUser, serUtils, $log) {

	this.doPOST = function(url, params, data, headers, cbSuccess, cbFailure) {

		var objParams = this.buildParams(data);
		var objHeaders = this.buildHeaders(headers);

		$http({
			method : 'POST',
			url : url,
			params : params,
			data : objParams,
			headers : objHeaders
		}).success(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('received data...............');
			$log.log('............................');
			if ( typeof (cbSuccess) == "function") {
				cbSuccess(result, status, headers, config);
			}
		}).error(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('failure.....................');
			$log.log('received data...............');
			$log.log('............................');
			cbFailure(result, status, headers, config);
		});
	};

	this.doGET = function(url, params, data, headers, cbSuccess, cbFailure) {

		var objParams = this.buildParams(params);
		var objHeaders = this.buildHeaders(headers);
		$http({
			method : 'GET',
			url : url,
			params : objParams,
			data : data,
			headers : objHeaders
		}).success(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('success.....................');
			$log.log('received data...............');
			$log.log('............................');
			$log.log(status);
			if ( typeof (cbSuccess) == "function") {
				cbSuccess(result, status, headers, config);
			}
		}).error(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('failure.....................');
			$log.log('received data...............');
			$log.log('............................');
			if ( typeof (cbFailure) == "function") {
				cbFailure(result, status, headers, config);
			}
		});
	};

	this.doPUT = function(url, params, data, headers, cbSuccess, cbFailure) {

		var objParams = this.buildParams(params);
		var objHeaders = this.buildHeaders(headers);

		var objParams = this.buildParams(params);
		var objHeaders = this.buildHeaders(headers);

		$http({
			method : 'PUT',
			url : url,
			params : objParams,
			data : data,
			headers : objHeaders
		}).success(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('received data...............');
			$log.log('............................');
			if ( typeof (cbSuccess) == "function") {
				cbSuccess(result, status, headers, config);
			}
		}).error(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('received data...............');
			$log.log('............................');
			cbFailure(result, status, headers, config);
		});
	}

	this.doDELETE = function(url, params, data, headers, cbSuccess, cbFailure) {

		var objParams = this.buildParams(params);
		var objHeaders = this.buildHeaders(headers);

		$http({
			method : 'DELETE',
			url : url,
			params : objParams,
			data : data,
			headers : objHeaders
		}).success(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('received data...............');
			$log.log('............................');
			if ( typeof (cbSuccess) == "function") {
				cbSuccess(result, status, headers, config);
			}
		}).error(function(result, status, headers, config) {
			$log.log('............................');
			$log.log('received data...............');
			$log.log('............................');
			if ( typeof (cbFailure) == "function") {
				cbFailure(result, status, headers, config);
			}
		});
	};

	this.buildParams = function(params) {
		var newParams = "";
		var dataObjLoggedUserData = serUser.dataLoggedUser;
		var authParams = {};

		if ( typeof (dataObjLoggedUserData.userInformation) != "undefined") {
			authParams.tenentID = dataObjLoggedUserData.userInformation.tenantID;
			authParams.userID = dataObjLoggedUserData.userInformation.userID;
		}

		newParams = serUtils.utilsMergeObjs(params, authParams);

		return params;
	}

	this.buildHeaders = function(headers) {
		var newHeaders = "";
		var dataObjLoggedUserData = serUser.dataLoggedUser;

		var authHeaders = {
		    'Content-Type' : 'application/json',
            'Authorization' : 'Bearer '+dataObjLoggedUserData.userToken
		};
		
		newHeaders = serUtils.utilsMergeObjs(headers, authHeaders);

		return newHeaders;
	}

	return this;

}]);

