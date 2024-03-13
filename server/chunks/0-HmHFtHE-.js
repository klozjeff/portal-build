var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const load = async ({ locals, url, fetch }) => {
  const currentPage = +url.searchParams.get("page") || 1;
  const q = url.searchParams.get("q") || "";
  const { pathname, host } = url;
  locals.currentPage = currentPage;
  locals.q = q;
  return { ...locals, pathname, host, q, currentPage };
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DRkq4HO2.js')).default;
const universal_id = "src/routes/+layout.js";
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.DNMO59H_.js","_app/immutable/chunks/scheduler.Bm87nGqA.js","_app/immutable/chunks/index.DcMJxoTv.js"];
const stylesheets = ["_app/immutable/assets/0.BvP1gaN_.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=0-HmHFtHE-.js.map
