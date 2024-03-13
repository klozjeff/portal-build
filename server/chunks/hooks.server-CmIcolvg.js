import { I as IS_DEV } from './index3-DyeGipOI.js';
import './shared-server-i79vVjEm.js';

const authenticateUser = (event) => {
  const meFromCookie = event.cookies.get("me");
  const tokenFromCookie = event.cookies.get("auth.tk");
  if (meFromCookie && meFromCookie != "undefined" && tokenFromCookie && tokenFromCookie != "undefined") {
    const me = JSON.parse(meFromCookie);
    return {
      username: me.username,
      role: me.role,
      name: me.name,
      email: me.email,
      phone: me.phone,
      role: me.role,
      status: me.status
    };
  } else {
    return null;
  }
};
async function handle({ event, resolve }) {
  const url = new URL(event.request.url);
  const host = url.host;
  const protocol = !IS_DEV ? `https://` : `http://`;
  event.locals.origin = protocol + host;
  event.locals.host = url.host;
  event.locals.me = await authenticateUser(event);
  event.locals.token = event.cookies.get("auth.tk");
  const response = await resolve(event);
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-CmIcolvg.js.map
