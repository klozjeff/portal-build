import { r as redirect } from './index-DzcLzHBX.js';

const prerender = false;
async function load({ url, params, locals, parent }) {
  const { me, token } = locals;
  if (!me || !token) {
    redirect(307, `/auth/login?ref=${url.pathname}${url.search}`);
  }
  const isHome = url.pathname === "/";
  const currentPage = +url.searchParams.get("page") || 1;
  const q = url.searchParams.get("q") || "";
  return {
    url: url.href,
    currentPage,
    q,
    isHome,
    me
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-CMKuzxfB.js')).default;
const server_id = "src/routes/(app)/+layout.server.js";
const imports = ["_app/immutable/nodes/2.nNnc1vmL.js","_app/immutable/chunks/scheduler.Bm87nGqA.js","_app/immutable/chunks/index.DcMJxoTv.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.BkMh60V4.js","_app/immutable/chunks/entry.CB1J30oF.js","_app/immutable/chunks/index.AnU9jYwx.js","_app/immutable/chunks/forms.DIvzv1KR.js","_app/immutable/chunks/68.BSfmNplh.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-Odd1ZERZ.js.map
