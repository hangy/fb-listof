OAuth2WebAuthorizationFlowStrategy = function OAuth2WebAuthorizationFlowStrategy() {
  if (this.constructor !== OAuth2WebAuthorizationFlowStrategy) {
    return new OAuth2WebAuthorizationFlowStrategy();
  }
}

OAuth2WebAuthorizationFlowStrategy.prototype.canRefreshToken = function(oauth2) {
  return true;
}

OAuth2WebAuthorizationFlowStrategy.prototype.refreshToken = function(oauth2) {
  getNewToken().then(function() {
    var token = getAccessToken();
    token.expires_at = token.expires_at || oauth2.calculateExpiryDate();
    oauth2.token = token;
  });
}
