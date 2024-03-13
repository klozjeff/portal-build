import { c as create_ssr_component, a as subscribe, b as add_attribute } from './ssr-BiiuUNsT.js';
import { p as page } from './stores-CIT3vc0Q.js';
import Cookie from 'cookie-universal';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  Cookie();
  let username = "";
  let password = "";
  $page?.url?.searchParams.get("ref");
  $$unsubscribe_page();
  return `<div class="form-box"><form action="/auth/login?/login" method="POST" class="form"><div class="row"><div class="form-group mt-2"><label for="name" data-svelte-h="svelte-31xml">Username</label> <input type="text" name="username" id="username" class="form-control col-md-12" required${add_attribute("value", username, 0)}> ${``}</div> <div class="form-group mt-2"><label for="name" data-svelte-h="svelte-zd720i">Password</label> <input type="password" name="password" id="password" class="form-control" required${add_attribute("value", password, 0)}> ${``}</div> <div class="form-group mt-2"><button type="submit" class="btn btn-primary" data-svelte-h="svelte-1gc02ml">Submit</button></div></div></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DXmZ4LWS.js.map
