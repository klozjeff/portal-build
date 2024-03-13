import { c as create_ssr_component, b as add_attribute } from './ssr-BiiuUNsT.js';
import { r as randomUser } from './68-LYbm4OjS.js';

const authLogo = "/_app/immutable/assets/auth-logo-dark.DE2O86sa.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="login"><div class="container"><div class="row"><div class="col-md-12 col-lg-12 col-xs-12 col-sm-12"><div class="box"><div class="ad" data-svelte-h="svelte-19s3zs3"><div class="logo"><img${add_attribute("src", authLogo, 0)} alt="unikorn logo" height="15px"></div> <div class="message"><h3>Let&#39;s us help you power up your event.</h3> <p>Our comprehensive suite of solutions help you market and manage your conference effortlessly.</p></div> <div class="testimonial"><p class="text-white">I&#39;m impressed with the results 
                                I&#39;ve seen since starting to use this product.  This is absolutely wonderful!</p> <div class="person"><img class="avatar"${add_attribute("src", randomUser, 0)} alt="Avatar of person"> <div class="info"><span class="text-white font-medium">Mary Johnson</span> <span class="title">CEO, Acme Inc.</span></div></div></div></div> ${slots.default ? slots.default({}) : ``}</div></div></div></div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Z84YG6QO.js.map
