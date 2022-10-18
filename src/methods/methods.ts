import {defineAsyncComponent } from "vue";

export function dynamiIcon(iconName:String) {
  return defineAsyncComponent(() => import(`../icons/${this.icon}.vue`));
}
