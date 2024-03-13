const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BaqI5hrQ.js","app":"_app/immutable/entry/app.DRGQ_aAN.js","imports":["_app/immutable/entry/start.BaqI5hrQ.js","_app/immutable/chunks/entry.CB1J30oF.js","_app/immutable/chunks/scheduler.Bm87nGqA.js","_app/immutable/chunks/index.AnU9jYwx.js","_app/immutable/entry/app.DRGQ_aAN.js","_app/immutable/chunks/scheduler.Bm87nGqA.js","_app/immutable/chunks/index.DcMJxoTv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":true},
		nodes: [
			__memo(() => import('./chunks/0-HmHFtHE-.js')),
			__memo(() => import('./chunks/1-2LVHOyEF.js')),
			__memo(() => import('./chunks/2-Odd1ZERZ.js')),
			__memo(() => import('./chunks/3-jCj2Bpgq.js')),
			__memo(() => import('./chunks/4-VgmKEwig.js')),
			__memo(() => import('./chunks/5-BUqoxzHX.js')),
			__memo(() => import('./chunks/6-DcLIChIX.js')),
			__memo(() => import('./chunks/7-DWGSY614.js')),
			__memo(() => import('./chunks/8-Vrf9bFE3.js')),
			__memo(() => import('./chunks/9-CtcTaUxz.js')),
			__memo(() => import('./chunks/10-hEcgY-h9.js')),
			__memo(() => import('./chunks/11-Bc-ABjlr.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/appointments",
				pattern: /^\/appointments\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/doctors",
				pattern: /^\/doctors\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/patients",
				pattern: /^\/patients\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/specialties",
				pattern: /^\/specialties\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
