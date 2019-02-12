import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface HTTPResponse {
  /**
   * The status number of the response
   */
  status: number;
  /**
   * The headers of the response
   */
  headers: any;
  /**
   * The URL of the response. This property will be the final URL obtained after any redirects.
   */
  url: string;
  /**
   * The data that is in the response. This property usually exists when a promise returned by a request method resolves.
   */
  data?: any;
  /**
   * Error response from the server. This property usually exists when a promise returned by a request method rejects.
   */
  error?: string;
}

/**
 * @name HTTP
 * @description
 * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
 *
 * Advantages over Javascript requests:
 * - Background threading - all requests are done in a background thread
 * - SSL Pinning
 *
 * @usage
 * ```typescript
 * import { HTTP } from '@ionic-native/http/ngx';
 *
 * constructor(private http: HTTP) {}
 *
 * ...
 *
 * this.http.get('http://ionic.io', {}, {})
 *   .then(data => {
 *
 *     console.log(data.status);
 *     console.log(data.data); // data received by server
 *     console.log(data.headers);
 *
 *   })
 *   .catch(error => {
 *
 *     console.log(error.status);
 *     console.log(error.error); // error message as string
 *     console.log(error.headers);
 *
 *   });
 *
 * ```
 * @interfaces
 * HTTPResponse
 */
@Plugin({
  pluginName: 'HTTP',
  plugin: 'cordova-plugin-advanced-http',
  pluginRef: 'cordova.plugin.http',
  repo: 'https://github.com/silkimen/cordova-plugin-advanced-http',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class HTTP extends IonicNativePlugin {
  /**
   * This returns an object representing a basic HTTP Authorization header of the form.
   * @param username {string} Username
   * @param password {string} Password
   * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
   */
  @Cordova({ sync: true })
  getBasicAuthHeader(
    username: string,
    password: string
  ): { Authorization: string } {
    return;
  }

  /**
   * This sets up all future requests to use Basic HTTP authentication with the given username and password.
   * @param username {string} Username
   * @param password {string} Password
   */
  @Cordova({ sync: true })
  useBasicAuth(username: string, password: string): void {}

  /**
   * Get all headers defined for a given hostname.
   * @param host {string} The hostname
   * @returns {string} return all headers defined for the hostname
   */
  @Cordova({ sync: true })
  getHeaders(host: string): string {
    return;
  }

  /**
   * Set a header for all future requests. Takes a hostname, a header and a value.
   * @param host {string} The hostname to be used for scoping this header
   * @param header {string} The name of the header
   * @param value {string} The value of the header
   */
  @Cordova({ sync: true })
  setHeader(host: string, header: string, value: string): void {}

  /**
   * Get the name of the data serializer which will be used for all future POST and PUT requests.
   * @returns {string} returns the name of the configured data serializer
   */
  @Cordova({ sync: true })
  getDataSerializer(): string {
    return;
  }

  /**
   * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
   * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
   */
  @Cordova({ sync: true })
  setDataSerializer(serializer: string): void {}

  /**
   * Add a custom cookie.
   * @param url {string} Scope of the cookie
   * @param cookie {string} RFC compliant cookie string
   */
  @Cordova({ sync: true })
  setCookie(url: string, cookie: string): void {}

  /**
   * Clear all cookies.
   */
  @Cordova({ sync: true })
  clearCookies(): void {}

  /**
   * Remove cookies for given URL.
   * @param url {string}
   * @param cb
   */
  @Cordova({ sync: true })
  removeCookies(url: string, cb: () => void): void {}

  /**
   * Resolve cookie string for given URL.
   * @param url {string}
   */
  @Cordova({ sync: true })
  getCookieString(url: string): string {
    return;
  }

  /**
   * Get global request timeout value in seconds.
   * @returns {number} returns the global request timeout value
   */
  @Cordova({ sync: true })
  getRequestTimeout(): number {
    return;
  }

  /**
   * Set global request timeout value in seconds.
   * @param timeout {number} The timeout in seconds. Default 60
   */
  @Cordova({ sync: true })
  setRequestTimeout(timeout: number): void {}

  /**
   * Set SSL Cert handling mode, being one of the following values
   * default: default SSL cert handling using system's CA certs
   * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
   * pinned: trust only provided certs
   * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
   * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
   */
  @Cordova()
  setSSLCertMode(mode: 'default' | 'nocheck' | 'pinned'): Promise<void> {
    return;
  }

  /**
   * Disable following redirects automatically.
   * @param disable {boolean} Set to true to disable following redirects automatically
   * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
   */
  @Cordova()
  disableRedirect(disable: boolean): Promise<void> {
    return;
  }

  /**
   * Make a POST request
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  post(url: string, body: any, headers: any): Promise<HTTPResponse> {
    return;
  }

  /**
   * Make a GET request
   * @param url {string} The url to send the request to
   * @param parameters {Object} Parameters to send with the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  get(url: string, parameters: any, headers: any): Promise<HTTPResponse> {
    return;
  }

  /**
   * Make a PUT request
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  put(url: string, body: any, headers: any): Promise<HTTPResponse> {
    return;
  }

  /**
   * Make a PATCH request
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  patch(url: string, body: any, headers: any): Promise<HTTPResponse> {
    return;
  }

  /**
   * Make a DELETE request
   * @param url {string} The url to send the request to
   * @param parameters {Object} Parameters to send with the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  delete(url: string, parameters: any, headers: any): Promise<HTTPResponse> {
    return;
  }

  /**
   * Make a HEAD request
   * @param url {string} The url to send the request to
   * @param parameters {Object} Parameters to send with the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  head(url: string, parameters: any, headers: any): Promise<HTTPResponse> {
    return;
  }

  /**
   *
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @param filePath {string} The local path of the file to upload
   * @param name {string} The name of the parameter to pass the file along as
   * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
   */
  @Cordova()
  uploadFile(
    url: string,
    body: any,
    headers: any,
    filePath: string,
    name: string
  ): Promise<any> {
    return;
  }

  /**
   *
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @param filePath {string} The path to download the file to, including the file name.
   * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
   */
  @Cordova()
  downloadFile(
    url: string,
    body: any,
    headers: any,
    filePath: string
  ): Promise<any> {
    return;
  }
}
