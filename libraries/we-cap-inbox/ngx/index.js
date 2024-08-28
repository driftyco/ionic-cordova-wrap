import { __decorate, __extends } from 'tslib';
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from '@angular/core';
var WECapInbox = /** @class */ (function (_super) {
  __extends(WECapInbox, _super);
  function WECapInbox() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  WECapInbox.prototype.resetNotificationCount = function () {
    return cordova(this, 'resetNotificationCount', {}, arguments);
  };
  WECapInbox.prototype.getNotificationCount = function (successCallback, errorCallback) {
    return cordova(this, 'getNotificationCount', {}, arguments);
  };
  WECapInbox.prototype.getNotificationList = function (offset, successCallback, errorCallback) {
    return cordova(this, 'getNotificationList', {}, arguments);
  };
  WECapInbox.prototype.markRead = function (notificationObject) {
    return cordova(this, 'markRead', {}, arguments);
  };
  WECapInbox.prototype.markUnread = function (notificationObject) {
    return cordova(this, 'markUnread', {}, arguments);
  };
  WECapInbox.prototype.trackClick = function (notificationObject) {
    return cordova(this, 'trackClick', {}, arguments);
  };
  WECapInbox.prototype.trackView = function (notificationObject) {
    return cordova(this, 'trackView', {}, arguments);
  };
  WECapInbox.prototype.markDelete = function (notificationObject) {
    return cordova(this, 'markDelete', {}, arguments);
  };
  WECapInbox.prototype.readAll = function (notificationList) {
    return cordova(this, 'readAll', {}, arguments);
  };
  WECapInbox.prototype.unReadAll = function (notificationList) {
    return cordova(this, 'unReadAll', {}, arguments);
  };
  WECapInbox.prototype.deleteAll = function (notificationList) {
    return cordova(this, 'deleteAll', {}, arguments);
  };
  WECapInbox.ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WECapInbox,
    deps: null,
    target: i0.ɵɵFactoryTarget.Injectable,
  });
  WECapInbox.ɵprov = i0.ɵɵngDeclareInjectable({
    minVersion: '12.0.0',
    version: '12.2.17',
    ngImport: i0,
    type: WECapInbox,
  });
  WECapInbox.pluginName = 'WECapInbox';
  WECapInbox.plugin = 'we-notificationinbox-cordova';
  WECapInbox.pluginRef = 'WENotificationInboxPlugin';
  WECapInbox.repo = 'https://github.com/WebEngage/we-ionic-notification-inbox';
  WECapInbox.platforms = ['Android', 'iOS'];
  WECapInbox = __decorate([], WECapInbox);
  return WECapInbox;
})(AwesomeCordovaNativePlugin);
export { WECapInbox };
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '12.2.17',
  ngImport: i0,
  type: WECapInbox,
  decorators: [
    {
      type: Injectable,
    },
  ],
  propDecorators: {
    resetNotificationCount: [],
    getNotificationCount: [],
    getNotificationList: [],
    markRead: [],
    markUnread: [],
    trackClick: [],
    trackView: [],
    markDelete: [],
    readAll: [],
    unReadAll: [],
    deleteAll: [],
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2UtY2FwLWluYm94L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUE2QjVELDhCQUEwQjs7OztJQU14RCwyQ0FBc0I7SUFXdEIseUNBQW9CLGFBQ2xCLGVBQXdDLEVBQ3hDLGFBQXNDO0lBYXhDLHdDQUFtQixhQUNqQixNQUF5QixFQUN6QixlQUE4RCxFQUM5RCxhQUFzQztJQVd4Qyw2QkFBUSxhQUFDLGtCQUE4QjtJQVV2QywrQkFBVSxhQUFDLGtCQUE4QjtJQVV6QywrQkFBVSxhQUFDLGtCQUE4QjtJQVV6Qyw4QkFBUyxhQUFDLGtCQUE4QjtJQVV4QywrQkFBVSxhQUFDLGtCQUE4QjtJQVV6Qyw0QkFBTyxhQUFDLGdCQUEyQjtJQVVuQyw4QkFBUyxhQUFDLGdCQUEyQjtJQVVyQyw4QkFBUyxhQUFDLGdCQUEyQjs0R0FwSDFCLFVBQVU7Z0hBQVYsVUFBVTs7Ozs7O0lBQVYsVUFBVSxrQkFBVixVQUFVO3FCQTlCdkI7RUE4QmdDLDBCQUEwQjtTQUE3QyxVQUFVOzRGQUFWLFVBQVU7a0JBRHRCLFVBQVU7OEJBT1Qsc0JBQXNCLE1BV3RCLG9CQUFvQixNQWVwQixtQkFBbUIsTUFjbkIsUUFBUSxNQVVSLFVBQVUsTUFVVixVQUFVLE1BVVYsU0FBUyxNQVVULFVBQVUsTUFVVixPQUFPLE1BVVAsU0FBUyxNQVVULFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFdFIENhcCBJbmJveFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBmdW5jdGlvbmFsaXRpZXMgdG8gbWFuYWdlIG5vdGlmaWNhdGlvbnMgaW4geW91ciBhcHAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXRUNhcEluYm94IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3dlLWNhcC1pbmJveCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3RUNhcEluYm94OiBXRUNhcEluYm94KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLndFQ2FwSW5ib3guZ2V0Tm90aWZpY2F0aW9uQ291bnQoKVxuICogICAudGhlbigoY291bnQ6IG51bWJlcikgPT4gY29uc29sZS5sb2coY291bnQpKVxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnV0VDYXBJbmJveCcsXG4gIHBsdWdpbjogJ3dlLW5vdGlmaWNhdGlvbmluYm94LWNvcmRvdmEnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnV0VOb3RpZmljYXRpb25JbmJveFBsdWdpbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1dlYkVuZ2FnZS93ZS1pb25pYy1ub3RpZmljYXRpb24taW5ib3gnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdFQ2FwSW5ib3ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIG5vdGlmaWNhdGlvbiBjb3VudC5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlc2V0Tm90aWZpY2F0aW9uQ291bnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgY291bnQgb2Ygbm90aWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gLSBUaGUgY291bnQgb2Ygbm90aWZpY2F0aW9ucy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Tm90aWZpY2F0aW9uQ291bnQoXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiAoY291bnQ6IFN0cmluZykgPT4gdm9pZCxcbiAgICBlcnJvckNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKi1cbiAgICogU2V0cyBXZWJFbmdhZ2UgU0RLIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIHtKc29uT2JqZWN0IHwgbnVsbH0gb2Zmc2V0IC0gT3B0aW9uYWwgb2Zmc2V0IGZvciBub3RpZmljYXRpb25zXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1Y2Nlc3NDYWxsYmFja1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlcnJvckNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE5vdGlmaWNhdGlvbkxpc3QoXG4gICAgb2Zmc2V0OiBKc29uT2JqZWN0IHwgbnVsbCxcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IChub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25SZXNwb25zZSkgPT4gdm9pZCxcbiAgICBlcnJvckNhbGxiYWNrOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyBhIHNwZWNpZmljIG5vdGlmaWNhdGlvbiBhcyByZWFkLlxuICAgKiBAcGFyYW0ge0pzb25PYmplY3R9IG5vdGlmaWNhdGlvbk9iamVjdCAtIFRoZSBub3RpZmljYXRpb24gdG8gbWFyayBhcyByZWFkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFya1JlYWQobm90aWZpY2F0aW9uT2JqZWN0OiBKc29uT2JqZWN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIGEgc3BlY2lmaWMgbm90aWZpY2F0aW9uIGFzIHVucmVhZC5cbiAgICogQHBhcmFtIHtKc29uT2JqZWN0fSBub3RpZmljYXRpb25PYmplY3QgLSBUaGUgbm90aWZpY2F0aW9uIHRvIG1hcmsgYXMgdW5yZWFkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFya1VucmVhZChub3RpZmljYXRpb25PYmplY3Q6IEpzb25PYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGEgY2xpY2sgZXZlbnQgb24gYSBub3RpZmljYXRpb24uXG4gICAqIEBwYXJhbSB7SnNvbk9iamVjdH0gbm90aWZpY2F0aW9uT2JqZWN0IC0gVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHdhcyBjbGlja2VkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tDbGljayhub3RpZmljYXRpb25PYmplY3Q6IEpzb25PYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHRoZSB2aWV3IGV2ZW50IG9mIGEgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge0pzb25PYmplY3R9IG5vdGlmaWNhdGlvbk9iamVjdCAtIFRoZSBub3RpZmljYXRpb24gdGhhdCB3YXMgdmlld2VkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tWaWV3KG5vdGlmaWNhdGlvbk9iamVjdDogSnNvbk9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyBhIHNwZWNpZmljIG5vdGlmaWNhdGlvbiBhcyBkZWxldGVkLlxuICAgKiBAcGFyYW0ge0pzb25PYmplY3R9IG5vdGlmaWNhdGlvbk9iamVjdCAtIFRoZSBub3RpZmljYXRpb24gdG8gZGVsZXRlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWFya0RlbGV0ZShub3RpZmljYXRpb25PYmplY3Q6IEpzb25PYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgYWxsIG5vdGlmaWNhdGlvbnMgYXMgcmVhZC5cbiAgICogQHBhcmFtIHtKc29uQXJyYXl9IG5vdGlmaWNhdGlvbkxpc3QgLSBBbiBhcnJheSBvZiBub3RpZmljYXRpb24gaWRlbnRpZmllcnMgdG8gbWFyayBhcyByZWFkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVhZEFsbChub3RpZmljYXRpb25MaXN0OiBKc29uQXJyYXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFya3MgYWxsIG5vdGlmaWNhdGlvbnMgYXMgdW5yZWFkLlxuICAgKiBAcGFyYW0ge0pzb25BcnJheX0gbm90aWZpY2F0aW9uTGlzdCAtIEFuIGFycmF5IG9mIG5vdGlmaWNhdGlvbiBpZGVudGlmaWVycyB0byBtYXJrIGFzIHVucmVhZC5cbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuUmVhZEFsbChub3RpZmljYXRpb25MaXN0OiBKc29uQXJyYXkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBhbGwgbm90aWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIHtKc29uQXJyYXl9IG5vdGlmaWNhdGlvbkxpc3QgLSBBbiBhcnJheSBvZiBub3RpZmljYXRpb24gaWRlbnRpZmllcnMgdG8gZGVsZXRlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGVsZXRlQWxsKG5vdGlmaWNhdGlvbkxpc3Q6IEpzb25BcnJheSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBKc29uVmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgbnVsbCB8IEpzb25PYmplY3QgfCBKc29uQXJyYXk7XG5cbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvblJlc3BvbnNlID0ge1xuICBoYXNOZXh0OiBib29sZWFuO1xuICBtZXNzYWdlTGlzdDogSnNvbkFycmF5O1xufTtcblxuZXhwb3J0IHR5cGUgSnNvbk9iamVjdCA9IHtcbiAgW2tleTogc3RyaW5nXTogSnNvblZhbHVlO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvbkFycmF5ID0gSnNvblZhbHVlW107XG4iXX0=
