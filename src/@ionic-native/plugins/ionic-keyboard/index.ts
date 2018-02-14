/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import {Observable} from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';

/**
 * @name ionic-keyboard
 * @description
 *  This plugin has been designed to work seamlessly with `cordova-plugin-ionic-webview`, so make sure you have it installed first:
 *  - https://github.com/ionic-team/cordova-plugin-ionic-webview
 *  - https://ionicframework.com/docs/wkwebview/
 *
 *
 * @usage
 * ```typescript
 * import { IonicKeyboard } from '@ionic-native/ionic-keyboard';
 *
 *
 * constructor(private keyboard: IonicKeyboard) { }
 *
 * ...
 *
 * this.keyboard.hideFormAccessoryBar(true);
 *
 *
 * this.keyboard.hideFormAccessoryBar(false);
 *
 *
 * this.keyboard.hideFormAccessoryBar(null, (currentValue) => { console.log(currentValue); });
 *
 * ```
 */
@Plugin({
  pluginName: 'IonicKeyboard',
  plugin: 'cordova-plugin-ionic-keyboard', // npm package name, example: cordova-plugin-camera
  pluginRef: 'Keyboard', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard.git', // the github repository URL for the plugin
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class IonicKeyboard extends IonicNativePlugin {

  /**
   * Determine if the keyboard is visible.
   */
  isVisible: boolean;

  /**
   * Hide the keyboard toolbar.
   * @param {boolean} value
   * @param {(vale: string) => any} callback
   */
  @Cordova()
  hideFormAccessoryBar(value: boolean, callback?: (vale: string) => any): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Hide the keyboard
   */
  @Cordova()
  hide(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  /**
   * Show the keyboard
   */
  @Cordova()
  show(): void {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova({
    eventObservable: true,
    event: 'keyboardDidHide',
    element: window
  })
  onKeyboardDidHide(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'keyboardDidShow',
    element: window
  })
  onKeyboardDidShow(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'keyboardWillShow',
    element: window
  })
  onKeyboardWillShow(): Observable<any> { return; }

  @Cordova({
    eventObservable: true,
    event: 'keyboardWillHide',
    element: window
  })
  onKeyboardWillHide(): Observable<any> { return; }

}
