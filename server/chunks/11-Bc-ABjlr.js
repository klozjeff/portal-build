import { r as redirect } from './index-DzcLzHBX.js';

const actions = {
  async default({ cookies, locals }) {
    try {
      cookies.set("auth.tk", null, {
        path: "/",
        expires: /* @__PURE__ */ new Date(0)
      });
      cookies.set("me", null, {
        path: "/",
        expires: /* @__PURE__ */ new Date(0)
      });
      locals.me = null;
      locals.token = null;
      redirect(307, "/auth/login");
    } catch (e) {
    }
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 11;
const server_id = "src/routes/auth/logout/+page.server.js";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-Bc-ABjlr.js.map
