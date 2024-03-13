import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-BiiuUNsT.js';
import { p as page } from './stores-CIT3vc0Q.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="page-content">${escape($page.url?.pathname)}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-nFrO3TqK.js.map
