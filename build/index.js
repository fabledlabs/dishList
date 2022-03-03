var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/wking/sites/fabledlabs/dishlist/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/lib/seo.ts
init_react();
var import_remix_seo = require("remix-seo");
var baseUrl = false ? "https://dishlist.fabledlabs.com" : "http://localhost:3000";
var { getSeo, getSeoLinks, getSeoMeta } = (0, import_remix_seo.initSeo)({
  title: "Let's build great digital products",
  titleTemplate: "%s | DishList",
  description: "A library of curated resources and a labratory of useful experiments all about building great digital products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "DishList",
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: "DishList"
      }
    ]
  },
  twitter: {
    creator: "@wking__",
    site: "@wking__",
    card: "summary_large_image"
  }
});

// app/styles/app.css
var app_default = "/build/_assets/app-AIZGC2TF.css";

// app/components/Providers/index.tsx
init_react();
var React2 = __toESM(require("react"));

// app/components/Providers/Fathom.tsx
init_react();
var Fathom = __toESM(require("fathom-client"));
var import_react = require("react");
var import_react_router_dom = require("react-router-dom");

// app/hooks/useEnv.ts
init_react();
var import_remix2 = __toESM(require_remix());
var useEnv = () => {
  return (0, import_remix2.useMatches)()[0].data.ENV;
};

// app/components/Providers/Fathom.tsx
function FathomProvider() {
  const fathomLoaded = (0, import_react.useRef)(false);
  const location = (0, import_react_router_dom.useLocation)();
  const ENV = useEnv();
  (0, import_react.useEffect)(function setupFathom() {
    if (!fathomLoaded.current && ENV.FATHOM_ID) {
      Fathom.load(ENV.FATHOM_ID, {
        includedDomains: ["fabledlabs.com"],
        excludedDomains: ["fly.io,localhost"],
        spa: "auto"
      });
      fathomLoaded.current = true;
    } else {
      Fathom.trackPageview();
    }
  }, [location, ENV]);
  return null;
}

// app/components/Providers/Toaster.tsx
init_react();
var import_react_hot_toast = require("react-hot-toast");
function Toast() {
  return /* @__PURE__ */ React.createElement(import_react_hot_toast.Toaster, {
    position: "top-center",
    reverseOrder: false,
    gutter: 8,
    containerClassName: "",
    containerStyle: {},
    toastOptions: {
      className: "bg-white dark:bg-gray-700 text-primary",
      duration: 2e3,
      success: {
        duration: 2e3,
        theme: {
          primary: "green",
          secondary: "black"
        }
      },
      error: {
        duration: 2e3,
        theme: {
          primary: "red",
          secondary: "white"
        }
      }
    }
  });
}

// app/components/Providers/index.tsx
var globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val) => {
  }
};
var GlobalNavigationContext = React2.createContext(globalNavigationContext);
var Providers = ({ children }) => {
  const initialState = {
    isOpen: false,
    setIsOpen
  };
  const [state, setState] = React2.useState(initialState);
  function setIsOpen(isOpen) {
    return setState(__spreadProps(__spreadValues({}, state), { isOpen }));
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(FathomProvider, null), /* @__PURE__ */ React2.createElement(Toast, null), /* @__PURE__ */ React2.createElement(GlobalNavigationContext.Provider, {
    value: state
  }, children));
};

// app/components/SiteLayout.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_remix3 = __toESM(require_remix());
var SiteLayout = ({ children }) => {
  const { isOpen } = import_react2.default.useContext(GlobalNavigationContext);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "min-h-full"
  }, /* @__PURE__ */ import_react2.default.createElement("nav", {
    className: "border-b border-gray-200 bg-white"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex h-16 justify-between"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-shrink-0 items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "block h-8 w-auto lg:hidden",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",
    alt: "Workflow"
  }), /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "hidden h-8 w-auto lg:block",
    src: "https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg",
    alt: "Workflow"
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/plans/list",
    className: "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900",
    "aria-current": "page"
  }, "Meal Plans"), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/dish",
    className: "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  }, "Dishes"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "hidden sm:ml-6 sm:flex sm:items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    className: "rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "View notifications"), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative ml-3"
  }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    id: "user-menu-button",
    "aria-expanded": "false",
    "aria-haspopup": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "h-8 w-8 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: ""
  }))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "absolute right-0 mt-2 hidden w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "user-menu-button",
    tabIndex: -1
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/user",
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    tabIndex: -1,
    id: "user-menu-item-0"
  }, "Your Profile"), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/account",
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    tabIndex: -1,
    id: "user-menu-item-1"
  }, "Settings"), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "submit",
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    tabIndex: -1,
    id: "user-menu-item-2"
  }, "Sign out"))))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "-mr-2 flex items-center sm:hidden"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    "aria-controls": "mobile-menu",
    "aria-expanded": "false"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "block h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "hidden h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  })))))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "sm:hidden",
    id: "mobile-menu"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "space-y-1 pt-2 pb-3"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/plans/list",
    className: "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700",
    "aria-current": "page"
  }, "Meal Plans"), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/dish",
    className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
  }, "Dishes")), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "border-t border-gray-200 pt-4 pb-3"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex items-center px-4"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "h-10 w-10 rounded-full",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: ""
  })), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "ml-3"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "text-base font-medium text-gray-800"
  }, "Tom Cook"), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "text-sm font-medium text-gray-500"
  }, "tom@example.com")), /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    className: "ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "View notifications"), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  })))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mt-3 space-y-1"
  }, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/user",
    className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
  }, "Your Profile"), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/account",
    className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
  }, "Settings"), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "submit",
    className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
  }, "Sign out")))))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "py-10"
  }, children));
};
var SiteLayout_default = SiteLayout;

// route:/Users/wking/sites/fabledlabs/dishlist/app/root.tsx
var [seoMeta, seoLinks] = getSeo();
var meta = () => seoMeta;
var links = () => {
  return [
    ...seoLinks,
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }
  ];
};
var loader = async ({
  request
}) => {
  return {
    ENV: {
      FATHOM_ID: process.env.FATHOM_ID
    },
    user: null
  };
};
function App() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "font-sans"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "text-primary font-semibold",
    to: "#main"
  }, "Skip to content"), /* @__PURE__ */ React.createElement("span", null, "(if available)"), /* @__PURE__ */ React.createElement("span", null, "or"), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "text-primary font-semibold",
    to: "#list"
  }, "jump to list"), /* @__PURE__ */ React.createElement("span", null, "(if available)")), /* @__PURE__ */ React.createElement(Providers, null, /* @__PURE__ */ React.createElement(SiteLayout_default, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null))), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/plan/generate.tsx
var generate_exports = {};
__export(generate_exports, {
  action: () => action,
  default: () => Generate
});
init_react();
var React4 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var action = async () => {
};
function Generate() {
  return /* @__PURE__ */ React4.createElement("section", null, /* @__PURE__ */ React4.createElement("h1", null, "It's meal roulette time!"), /* @__PURE__ */ React4.createElement("p", null, "This will be for you meals the week of 1/22"), /* @__PURE__ */ React4.createElement(import_remix5.Form, {
    method: "post"
  }, /* @__PURE__ */ React4.createElement("button", {
    type: "submit"
  }, "Show me the meals")));
}

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/dish/$dishId.tsx
var dishId_exports = {};
init_react();

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/plan/$planId.tsx
var planId_exports = {};
__export(planId_exports, {
  default: () => PlanRoute,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/lib/prisma/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/plan/$planId.tsx
var loader2 = async ({ params }) => {
  const plan = await db.plan.findUnique({
    where: { id: params.planId }
  });
  if (!plan)
    throw new Error("Plan not found");
  const data = { plan };
  return data;
};
function PlanRoute() {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Plan:"), /* @__PURE__ */ React.createElement("p", null, data.plan.id));
}

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/dish/create.tsx
var create_exports = {};
__export(create_exports, {
  action: () => action2,
  default: () => CreateRoute
});
init_react();
var import_react3 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var import_react4 = require("@headlessui/react");
var import_solid = require("@heroicons/react/solid");

// app/utils.ts
init_react();
function enumList(e) {
  return Object.values(e);
}

// app/types.ts
init_react();
var DishType = /* @__PURE__ */ ((DishType2) => {
  DishType2["Appetizer"] = "appetizer";
  DishType2["Main"] = "main";
  DishType2["Side"] = "side";
  DishType2["Dessert"] = "dessert";
  return DishType2;
})(DishType || {});

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/dish/create.tsx
var action2 = async () => {
};
function CreateRoute() {
  const dishTypes = enumList(DishType);
  console.log(dishTypes);
  const [dishType, setDishType] = (0, import_react3.useState)("main" /* Main */);
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("header", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    className: "text-3xl font-bold leading-tight text-gray-900"
  }, "Create a dish"))), /* @__PURE__ */ import_react3.default.createElement("main", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react3.default.createElement("p", null, "This will be for you meals the week of 1/22"), /* @__PURE__ */ import_react3.default.createElement(import_remix7.Form, {
    method: "post",
    className: "mt-6 space-y-3"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "space-y-1"
  }, /* @__PURE__ */ import_react3.default.createElement("label", {
    htmlFor: "name",
    className: "block text-sm font-medium text-gray-700"
  }, "Name"), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm",
    placeholder: "Roasted Brussel Sprouts",
    required: true
  }))), /* @__PURE__ */ import_react3.default.createElement(import_react4.Listbox, {
    value: dishType,
    onChange: setDishType
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "space-y-1"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react4.Listbox.Label, {
    className: "block text-sm font-medium text-gray-700"
  }, "Dish Type:"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react4.Listbox.Button, {
    className: "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 sm:text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "block truncate capitalize"
  }, dishType), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
  }, /* @__PURE__ */ import_react3.default.createElement(import_solid.SelectorIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ import_react3.default.createElement(import_react4.Transition, {
    as: import_react3.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react4.Listbox.Options, {
    className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
  }, dishTypes.map((current, i) => /* @__PURE__ */ import_react3.default.createElement(import_react4.Listbox.Option, {
    key: `dishType-${current}-${i}`,
    value: current,
    className: ({ active }) => `relative flex cursor-default select-none items-center py-2 pl-10 pr-4 ${active ? "bg-emerald-100 text-emerald-900" : "text-gray-900"}`
  }, ({ selected }) => /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: `block flex-1 truncate capitalize ${selected ? "font-medium" : "font-normal"}`
  }, current), selected ? /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "flex items-center pl-3 text-emerald-600"
  }, /* @__PURE__ */ import_react3.default.createElement(import_solid.CheckIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })) : null)))))))), /* @__PURE__ */ import_react3.default.createElement("button", {
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
  }, "Create dish")))));
}

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/dish/index.tsx
var dish_exports = {};
init_react();

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/plan/index.tsx
var plan_exports = {};
init_react();

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/plan/list.tsx
var list_exports = {};
init_react();

// route:/Users/wking/sites/fabledlabs/dishlist/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b33a947b", "entry": { "module": "/build/entry.client-7C67MKEH.js", "imports": ["/build/_shared/chunk-E7SZ33BO.js", "/build/_shared/chunk-CJCYJYKE.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NUSCHZJX.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dish/$dishId": { "id": "routes/dish/$dishId", "parentId": "root", "path": "dish/:dishId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dish/$dishId-5KW54D63.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dish/create": { "id": "routes/dish/create", "parentId": "root", "path": "dish/create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dish/create-ELOGYEDO.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dish/index": { "id": "routes/dish/index", "parentId": "root", "path": "dish", "index": true, "caseSensitive": void 0, "module": "/build/routes/dish/index-ZH7HYR6G.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-FCYZI5JK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan/$planId": { "id": "routes/plan/$planId", "parentId": "root", "path": "plan/:planId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan/$planId-NOR7K3QB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan/generate": { "id": "routes/plan/generate", "parentId": "root", "path": "plan/generate", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan/generate-TMPG2223.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan/index": { "id": "routes/plan/index", "parentId": "root", "path": "plan", "index": true, "caseSensitive": void 0, "module": "/build/routes/plan/index-GDQR32AK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/plan/list": { "id": "routes/plan/list", "parentId": "root", "path": "plan/list", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/plan/list-MSJML3WV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B33A947B.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/plan/generate": {
    id: "routes/plan/generate",
    parentId: "root",
    path: "plan/generate",
    index: void 0,
    caseSensitive: void 0,
    module: generate_exports
  },
  "routes/dish/$dishId": {
    id: "routes/dish/$dishId",
    parentId: "root",
    path: "dish/:dishId",
    index: void 0,
    caseSensitive: void 0,
    module: dishId_exports
  },
  "routes/plan/$planId": {
    id: "routes/plan/$planId",
    parentId: "root",
    path: "plan/:planId",
    index: void 0,
    caseSensitive: void 0,
    module: planId_exports
  },
  "routes/dish/create": {
    id: "routes/dish/create",
    parentId: "root",
    path: "dish/create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/dish/index": {
    id: "routes/dish/index",
    parentId: "root",
    path: "dish",
    index: true,
    caseSensitive: void 0,
    module: dish_exports
  },
  "routes/plan/index": {
    id: "routes/plan/index",
    parentId: "root",
    path: "plan",
    index: true,
    caseSensitive: void 0,
    module: plan_exports
  },
  "routes/plan/list": {
    id: "routes/plan/list",
    parentId: "root",
    path: "plan/list",
    index: void 0,
    caseSensitive: void 0,
    module: list_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb290LnRzeCIsICIuLi9hcHAvbGliL3Nlby50cyIsICIuLi9hcHAvY29tcG9uZW50cy9Qcm92aWRlcnMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb3ZpZGVycy9GYXRob20udHN4IiwgIi4uL2FwcC9ob29rcy91c2VFbnYudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvdmlkZXJzL1RvYXN0ZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NpdGVMYXlvdXQudHN4IiwgInJvdXRlOi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvcGxhbi9nZW5lcmF0ZS50c3giLCAicm91dGU6L1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL3JvdXRlcy9kaXNoLyRkaXNoSWQudHN4IiwgInJvdXRlOi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvcGxhbi8kcGxhbklkLnRzeCIsICIuLi9hcHAvbGliL3ByaXNtYS9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL3JvdXRlcy9kaXNoL2NyZWF0ZS50c3giLCAiLi4vYXBwL3V0aWxzLnRzIiwgIi4uL2FwcC90eXBlcy50cyIsICJyb3V0ZTovVXNlcnMvd2tpbmcvc2l0ZXMvZmFibGVkbGFicy9kaXNobGlzdC9hcHAvcm91dGVzL2Rpc2gvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvcGxhbi9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL3JvdXRlcy9wbGFuL2xpc3QudHN4IiwgInJvdXRlOi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvcGxhbi9nZW5lcmF0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL3JvdXRlcy9kaXNoLyRkaXNoSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvcGxhbi8kcGxhbklkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvd2tpbmcvc2l0ZXMvZmFibGVkbGFicy9kaXNobGlzdC9hcHAvcm91dGVzL2Rpc2gvY3JlYXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvd2tpbmcvc2l0ZXMvZmFibGVkbGFicy9kaXNobGlzdC9hcHAvcm91dGVzL2Rpc2gvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvcGxhbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3draW5nL3NpdGVzL2ZhYmxlZGxhYnMvZGlzaGxpc3QvYXBwL3JvdXRlcy9wbGFuL2xpc3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9Vc2Vycy93a2luZy9zaXRlcy9mYWJsZWRsYWJzL2Rpc2hsaXN0L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9wbGFuL2dlbmVyYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wbGFuL2dlbmVyYXRlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBsYW4vZ2VuZXJhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Rpc2gvJGRpc2hJZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGlzaC8kZGlzaElkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImRpc2gvOmRpc2hJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvcGxhbi8kcGxhbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9wbGFuLyRwbGFuSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGxhbi86cGxhbklkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9kaXNoL2NyZWF0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGlzaC9jcmVhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGlzaC9jcmVhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Rpc2gvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rpc2gvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGlzaFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3BsYW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3BsYW4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwicGxhblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3BsYW4vbGlzdFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvcGxhbi9saXN0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInBsYW4vbGlzdFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQge1xuICBMaW5rLFxuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE1ldGEsXG4gIE1ldGFGdW5jdGlvbixcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbn0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB7IEVudiB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBnZXRTZW8gfSBmcm9tICd+L2xpYi9zZW8nXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL2FwcC5jc3MnXG5pbXBvcnQgeyBQcm92aWRlcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXJzJ1xuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL1NpdGVMYXlvdXQnXG5cbmNvbnN0IFtzZW9NZXRhLCBzZW9MaW5rc10gPSBnZXRTZW8oKVxuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gc2VvTWV0YVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgLi4uc2VvTGlua3MsXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vcnNtcy5tZS9pbnRlci9pbnRlci5jc3MnIH0sXG4gIF1cbn1cblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBFTlY6IEVudlxuICB1c2VyOiBVc2VyIHwgbnVsbFxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHJlcXVlc3QsXG59KTogUHJvbWlzZTxMb2FkZXJEYXRhPiA9PiB7XG4gIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdG9yLmlzQXV0aGVudGljYXRlZChyZXF1ZXN0KVxuICByZXR1cm4ge1xuICAgIEVOVjoge1xuICAgICAgRkFUSE9NX0lEOiBwcm9jZXNzLmVudi5GQVRIT01fSUQsXG4gICAgfSxcbiAgICB1c2VyOiBudWxsLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKVxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJmb250LXNhbnNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10ZXJ0aWFyeSBhYnNvbHV0ZSBmbGV4IC10cmFuc2xhdGUteS1mdWxsIHRyYW5zZm9ybSBzcGFjZS14LTEgYm9yZGVyLWIgYm9yZGVyLWdyYXktMTUwIGJnLXdoaXRlIHAtMiBmb2N1cy13aXRoaW46cmVsYXRpdmUgZm9jdXMtd2l0aGluOnRyYW5zbGF0ZS15LTBcIj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiIHRvPVwiI21haW5cIj5cbiAgICAgICAgICAgIFNraXAgdG8gY29udGVudFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3Bhbj4oaWYgYXZhaWxhYmxlKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5vcjwvc3Bhbj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1zZW1pYm9sZFwiIHRvPVwiI2xpc3RcIj5cbiAgICAgICAgICAgIGp1bXAgdG8gbGlzdFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8c3Bhbj4oaWYgYXZhaWxhYmxlKTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8UHJvdmlkZXJzPlxuICAgICAgICAgIDxTaXRlTGF5b3V0PlxuICAgICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICAgIDwvU2l0ZUxheW91dD5cbiAgICAgICAgPC9Qcm92aWRlcnM+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7aW5pdFNlbyB9IGZyb20gJ3JlbWl4LXNlbydcblxuZXhwb3J0IGNvbnN0IGJhc2VVcmwgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vZGlzaGxpc3QuZmFibGVkbGFicy5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcbmV4cG9ydCBjb25zdCBiYXNlRW1haWwgPSAnaGlAZmFibGVkbGFicy5jb20nXG5cbmV4cG9ydCBjb25zdCB7IGdldFNlbywgZ2V0U2VvTGlua3MsIGdldFNlb01ldGEgfSA9IGluaXRTZW8oe1xuICB0aXRsZTogXCJMZXQncyBidWlsZCBncmVhdCBkaWdpdGFsIHByb2R1Y3RzXCIsXG4gIHRpdGxlVGVtcGxhdGU6IFwiJXMgfCBEaXNoTGlzdFwiLFxuICBkZXNjcmlwdGlvbjogXCJBIGxpYnJhcnkgb2YgY3VyYXRlZCByZXNvdXJjZXMgYW5kIGEgbGFicmF0b3J5IG9mIHVzZWZ1bCBleHBlcmltZW50cyBhbGwgYWJvdXQgYnVpbGRpbmcgZ3JlYXQgZGlnaXRhbCBwcm9kdWN0cy5cIixcbiAgb3BlbkdyYXBoOiB7XG4gICAgdHlwZTogJ3dlYnNpdGUnLFxuICAgIGxvY2FsZTogJ2VuX1VTJyxcbiAgICB1cmw6IGJhc2VVcmwsXG4gICAgc2l0ZU5hbWU6ICdEaXNoTGlzdCcsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogYCR7YmFzZVVybH0vc3RhdGljL29nL2RlZmF1bHQucG5nYCxcbiAgICAgICAgYWx0OiAnRGlzaExpc3QnLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB0d2l0dGVyOiB7XG4gICAgY3JlYXRvcjogJ0B3a2luZ19fJyxcbiAgICBzaXRlOiAnQHdraW5nX18nLFxuICAgIGNhcmQ6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyxcbiAgfSxcbn0pIiwgIi8vIGltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgRmF0aG9tUHJvdmlkZXIgfSBmcm9tICcuL0ZhdGhvbSdcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi9Ub2FzdGVyJ1xuXG5jb25zdCBnbG9iYWxOYXZpZ2F0aW9uQ29udGV4dCA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgc2V0SXNPcGVuOiAodmFsOiBib29sZWFuKSA9PiB7fSxcbn1cblxuZXhwb3J0IGNvbnN0IEdsb2JhbE5hdmlnYXRpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChcbiAgZ2xvYmFsTmF2aWdhdGlvbkNvbnRleHRcbilcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyczogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc09wZW46IGZhbHNlLFxuICAgIHNldElzT3BlbixcbiAgfVxuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxuXG4gIGZ1bmN0aW9uIHNldElzT3Blbihpc09wZW46IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaXNPcGVuIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmF0aG9tUHJvdmlkZXIgLz5cbiAgICAgIDxUb2FzdCAvPlxuXG4gICAgICA8R2xvYmFsTmF2aWdhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9HbG9iYWxOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCAqIGFzIEZhdGhvbSBmcm9tICdmYXRob20tY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlRW52IH0gZnJvbSAnfi9ob29rcy91c2VFbnYnXG5cbmV4cG9ydCBmdW5jdGlvbiBGYXRob21Qcm92aWRlcigpIHtcbiAgY29uc3QgZmF0aG9tTG9hZGVkID0gdXNlUmVmKGZhbHNlKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgRU5WID0gdXNlRW52KClcblxuICB1c2VFZmZlY3QoXG4gICAgZnVuY3Rpb24gc2V0dXBGYXRob20oKSB7XG4gICAgICBpZiAoIWZhdGhvbUxvYWRlZC5jdXJyZW50ICYmIEVOVi5GQVRIT01fSUQpIHtcbiAgICAgICAgRmF0aG9tLmxvYWQoRU5WLkZBVEhPTV9JRCwge1xuICAgICAgICAgIGluY2x1ZGVkRG9tYWluczogWydmYWJsZWRsYWJzLmNvbSddLFxuICAgICAgICAgIGV4Y2x1ZGVkRG9tYWluczogWydmbHkuaW8sbG9jYWxob3N0J10sXG4gICAgICAgICAgc3BhOiAnYXV0bycsXG4gICAgICAgIH0pXG4gICAgICAgIGZhdGhvbUxvYWRlZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRmF0aG9tLnRyYWNrUGFnZXZpZXcoKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2xvY2F0aW9uLCBFTlZdXG4gIClcblxuICByZXR1cm4gbnVsbFxufVxuIiwgImltcG9ydCB7IHVzZU1hdGNoZXMgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgRW52IH0gZnJvbSBcIn4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUVudiA9ICgpOiBFbnYgPT4ge1xuICByZXR1cm4gdXNlTWF0Y2hlcygpWzBdLmRhdGEuRU5WO1xufSIsICJpbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0J1xuXG5leHBvcnQgZnVuY3Rpb24gVG9hc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPFRvYXN0ZXJcbiAgICAgIHBvc2l0aW9uPVwidG9wLWNlbnRlclwiXG4gICAgICByZXZlcnNlT3JkZXI9e2ZhbHNlfVxuICAgICAgZ3V0dGVyPXs4fVxuICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwiXCJcbiAgICAgIGNvbnRhaW5lclN0eWxlPXt7fX1cbiAgICAgIHRvYXN0T3B0aW9ucz17e1xuICAgICAgICAvLyBEZWZpbmUgZGVmYXVsdCBvcHRpb25zXG4gICAgICAgIGNsYXNzTmFtZTogJ2JnLXdoaXRlIGRhcms6YmctZ3JheS03MDAgdGV4dC1wcmltYXJ5JyxcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgcHJpbWFyeTogJ2dyZWVuJyxcbiAgICAgICAgICAgIHNlY29uZGFyeTogJ2JsYWNrJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBwcmltYXJ5OiAncmVkJyxcbiAgICAgICAgICAgIHNlY29uZGFyeTogJ3doaXRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgTGluayB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgR2xvYmFsTmF2aWdhdGlvbkNvbnRleHQgfSBmcm9tICcuL1Byb3ZpZGVycydcblxuZXhwb3J0IGNvbnN0IFNpdGVMYXlvdXQ6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGlzT3BlbiB9ID0gUmVhY3QudXNlQ29udGV4dChHbG9iYWxOYXZpZ2F0aW9uQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLWZ1bGxcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xNiBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoLTggdy1hdXRvIGxnOmhpZGRlblwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3RhaWx3aW5kdWkuY29tL2ltZy9sb2dvcy93b3JrZmxvdy1tYXJrLWluZGlnby02MDAuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIldvcmtmbG93XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBoLTggdy1hdXRvIGxnOmJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LWxvZ28taW5kaWdvLTYwMC1tYXJrLWdyYXktODAwLXRleHQuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIldvcmtmbG93XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206LW15LXB4IHNtOm1sLTYgc206ZmxleCBzbTpzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89XCIvcGxhbnMvbGlzdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWItMiBib3JkZXItaW5kaWdvLTUwMCBweC0xIHB0LTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1lYWwgUGxhbnNcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPVwiL2Rpc2hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iLTIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTEgcHQtMSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERpc2hlc1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOm1sLTYgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTEgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSAxN2g1bC0xLjQwNS0xLjQwNUEyLjAzMiAyLjAzMiAwIDAxMTggMTQuMTU4VjExYTYuMDAyIDYuMDAyIDAgMDAtNC01LjY1OVY1YTIgMiAwIDEwLTQgMHYuMzQxQzcuNjcgNi4xNjUgNiA4LjM4OCA2IDExdjMuMTU5YzAgLjUzOC0uMjE0IDEuMDU1LS41OTUgMS40MzZMNCAxN2g1bTYgMHYxYTMgMyAwIDExLTYgMHYtMW02IDBIOVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1sLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtYXgtdy14cyBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlci1tZW51LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gdXNlciBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDcyMDk5NjQ1Nzg1LTU2NThhYmY0ZmY0ZT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1mYWNlYXJlYSZmYWNlcGFkPTImdz0yNTYmaD0yNTYmcT04MFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbXQtMiBoaWRkZW4gdy00OCBvcmlnaW4tdG9wLXJpZ2h0IHJvdW5kZWQtbWQgYmctd2hpdGUgcHktMSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJ1c2VyLW1lbnUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz1cIi91c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyLW1lbnUtaXRlbS0wXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBQcm9maWxlXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRvPVwiL2FjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXItbWVudS1pdGVtLTFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyLW1lbnUtaXRlbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiBmbGV4IGl0ZW1zLWNlbnRlciBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJnLXdoaXRlIHAtMiB0ZXh0LWdyYXktNDAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gaC02IHctNlwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIiBpZD1cIm1vYmlsZS1tZW51XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgcHQtMiBwYi0zXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz1cIi9wbGFucy9saXN0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgYm9yZGVyLWwtNCBib3JkZXItaW5kaWdvLTUwMCBiZy1pbmRpZ28tNTAgcHktMiBwbC0zIHByLTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtaW5kaWdvLTcwMFwiXG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD1cInBhZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNZWFsIFBsYW5zXG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPVwiL2Rpc2hcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBib3JkZXItbC00IGJvcmRlci10cmFuc3BhcmVudCBweS0yIHBsLTMgcHItNCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS01MCBob3Zlcjp0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRGlzaGVzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtNCBwYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9ZmFjZWFyZWEmZmFjZXBhZD0yJnc9MjU2Jmg9MjU2JnE9ODBcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgVG9tIENvb2tcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgdG9tQGV4YW1wbGUuY29tXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtYXV0byBmbGV4LXNocmluay0wIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTEgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlZpZXcgbm90aWZpY2F0aW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02XCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xNSAxN2g1bC0xLjQwNS0xLjQwNUEyLjAzMiAyLjAzMiAwIDAxMTggMTQuMTU4VjExYTYuMDAyIDYuMDAyIDAgMDAtNC01LjY1OVY1YTIgMiAwIDEwLTQgMHYuMzQxQzcuNjcgNi4xNjUgNiA4LjM4OCA2IDExdjMuMTU5YzAgLjUzOC0uMjE0IDEuMDU1LS41OTUgMS40MzZMNCAxN2g1bTYgMHYxYTMgMyAwIDExLTYgMHYtMW02IDBIOVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHRvPVwiL3VzZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFlvdXIgUHJvZmlsZVxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICB0bz1cIi9hY2NvdW50XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgPEZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlTGF5b3V0XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgZGIgfSBmcm9tICd+L2xpYi9wcmlzbWEvZGIuc2VydmVyJ1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgLy9hd2FpdCBkYi5wbGFuLmNyZWF0ZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmVyYXRlKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkl0J3MgbWVhbCByb3VsZXR0ZSB0aW1lITwvaDE+XG4gICAgICA8cD5UaGlzIHdpbGwgYmUgZm9yIHlvdSBtZWFscyB0aGUgd2VlayBvZiAxLzIyPC9wPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaG93IG1lIHRoZSBtZWFsczwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIiwgImV4cG9ydCB7fSIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IFBsYW4gfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICd+L2xpYi9wcmlzbWEvZGIuc2VydmVyJ1xuXG50eXBlIExvYWRlckRhdGEgPSB7IHBsYW46IFBsYW4gfVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBsYW4gPSBhd2FpdCBkYi5wbGFuLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBwYXJhbXMucGxhbklkIH0sXG4gIH0pXG4gIGlmICghcGxhbikgdGhyb3cgbmV3IEVycm9yKCdQbGFuIG5vdCBmb3VuZCcpXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7IHBsYW4gfVxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGFuUm91dGUoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5QbGFuOjwvcD5cbiAgICAgIDxwPntkYXRhLnBsYW4uaWR9PC9wPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBkYi4kY29ubmVjdCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTsiLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIEZvcm0gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IExpc3Rib3gsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IENoZWNrSWNvbiwgU2VsZWN0b3JJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICd+L2xpYi9wcmlzbWEvZGIuc2VydmVyJ1xuaW1wb3J0IHsgZW51bUxpc3QgfSBmcm9tICd+L3V0aWxzJ1xuaW1wb3J0IHsgTWVhc3VyZW1lbnRzLCBEaXNoVHlwZSB9IGZyb20gJ34vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvL2F3YWl0IGRiLnBsYW4uY3JlYXRlKClcbn1cblxuY29uc3QgU2VsZWN0TWVhc3VyZW1lbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBtZWFzdXJlbWVudHMgPSBlbnVtTGlzdDxNZWFzdXJlbWVudHM+KE1lYXN1cmVtZW50cylcbiAgY29uc3QgW21lYXN1cmVtZW50LCBzZXRNZWFzdXJlbWVudF0gPSB1c2VTdGF0ZShtZWFzdXJlbWVudHNbMF0pXG4gIHJldHVybiAoXG4gICAgPExpc3Rib3ggdmFsdWU9e21lYXN1cmVtZW50fSBvbkNoYW5nZT17c2V0TWVhc3VyZW1lbnR9PlxuICAgICAgPExpc3Rib3guQnV0dG9uPnttZWFzdXJlbWVudH08L0xpc3Rib3guQnV0dG9uPlxuICAgICAgPExpc3Rib3guT3B0aW9ucz5cbiAgICAgICAge21lYXN1cmVtZW50cy5tYXAoKGN1cnJlbnQsIGkpID0+IChcbiAgICAgICAgICA8TGlzdGJveC5PcHRpb24ga2V5PXtgbWVhc3VyZW1lbnQtJHtjdXJyZW50fS0ke2l9YH0gdmFsdWU9e2N1cnJlbnR9PlxuICAgICAgICAgICAge21lYXN1cmVtZW50fVxuICAgICAgICAgIDwvTGlzdGJveC5PcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0Ym94Lk9wdGlvbnM+XG4gICAgPC9MaXN0Ym94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVJvdXRlKCkge1xuICBjb25zdCBkaXNoVHlwZXMgPSBlbnVtTGlzdDxEaXNoVHlwZT4oRGlzaFR5cGUpXG4gIGNvbnNvbGUubG9nKGRpc2hUeXBlcylcbiAgY29uc3QgW2Rpc2hUeXBlLCBzZXREaXNoVHlwZV0gPSB1c2VTdGF0ZTxEaXNoVHlwZT4oRGlzaFR5cGUuTWFpbilcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBDcmVhdGUgYSBkaXNoXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxwPlRoaXMgd2lsbCBiZSBmb3IgeW91IG1lYWxzIHRoZSB3ZWVrIG9mIDEvMjI8L3A+XG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cIm10LTYgc3BhY2UteS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1lbWVyYWxkLTUwMCBmb2N1czpyaW5nLWVtZXJhbGQtNTAwIHNtOnRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSb2FzdGVkIEJydXNzZWwgU3Byb3V0c1wiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlzdGJveCB2YWx1ZT17ZGlzaFR5cGV9IG9uQ2hhbmdlPXtzZXREaXNoVHlwZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgPExpc3Rib3guTGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICBEaXNoIFR5cGU6XG4gICAgICAgICAgICAgICAgPC9MaXN0Ym94LkxhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Ym94LkJ1dHRvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgY3Vyc29yLWRlZmF1bHQgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB5LTIgcGwtMyBwci0xMCB0ZXh0LWxlZnQgc2hhZG93LXNtIGZvY3VzOmJvcmRlci1lbWVyYWxkLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctZW1lcmFsZC01MDAgc206dGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0cnVuY2F0ZSBjYXBpdGFsaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Rpc2hUeXBlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Rvckljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdGJveC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Ym94Lk9wdGlvbnMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbXQtMSBtYXgtaC02MCB3LWZ1bGwgb3ZlcmZsb3ctYXV0byByb3VuZGVkLW1kIGJnLXdoaXRlIHB5LTEgdGV4dC1iYXNlIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmUgc206dGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtkaXNoVHlwZXMubWFwKChjdXJyZW50LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGJveC5PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgZGlzaFR5cGUtJHtjdXJyZW50fS0ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgYWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHB5LTIgcGwtMTAgcHItNCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWVtZXJhbGQtMTAwIHRleHQtZW1lcmFsZC05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtZ3JheS05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgc2VsZWN0ZWQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayBmbGV4LTEgdHJ1bmNhdGUgY2FwaXRhbGl6ZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID8gJ2ZvbnQtbWVkaXVtJyA6ICdmb250LW5vcm1hbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwbC0zIHRleHQtZW1lcmFsZC02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Rib3guT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Rib3guT3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpc3Rib3g+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctZW1lcmFsZC02MDAgcHktMiBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctZW1lcmFsZC03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWVtZXJhbGQtNTAwIGZvY3VzOnJpbmctb2Zmc2V0LTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDcmVhdGUgZGlzaFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBlbnVtTGlzdDxUPihlOiBhbnkpOiBBcnJheTxUPiB7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGUpXG59IiwgImV4cG9ydCBlbnVtIE1lYXN1cmVtZW50cyB7XG4gIE91bmNlID0gJ296JyxcbiAgVGFibGVTcG9vbiA9ICd0YnNwJyxcbiAgVGVhc3Bvb24gPSAndHNwJyxcbiAgQ3ViID0gJ2N1cCcsXG4gIFF1YXJ0ID0gJ3F0JyxcbiAgUGludCA9ICdwdCcsXG4gIEdhbGxvbiA9ICdnYWwnLFxuICBDYW4gPSAnY2FuJyxcbiAgUG91bmQgPSAnbGInLFxuICBNTCA9ICdtbCcsXG4gIEwgPSAnbCcsXG4gIE1nID0gJ21nJyxcbiAgRyA9ICdnJyxcbiAgS2cgPSAna2cnLFxuICBPZlRoZW0gPSAnb2YgdGhlbSdcbn1cblxuZXhwb3J0IGVudW0gRGlzaFR5cGUge1xuICBBcHBldGl6ZXIgPSAnYXBwZXRpemVyJyxcbiAgTWFpbiA9ICdtYWluJyxcbiAgU2lkZSA9ICdzaWRlJyxcbiAgRGVzc2VydCA9ICdkZXNzZXJ0J1xufVxuXG5leHBvcnQgdHlwZSBFbnYgPSB7XG4gIEZBVEhPTV9JRDogc3RyaW5nIHwgdW5kZWZpbmVkXG59IiwgImV4cG9ydCB7fSIsICJleHBvcnQge30iLCAiZXhwb3J0IHt9IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFJlbWl4PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFscy9ibG9nXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDE1bSBRdWlja3N0YXJ0IEJsb2cgVHV0b3JpYWxcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi90dXRvcmlhbHMvam9rZXNcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVlcCBEaXZlIEpva2VzIEFwcCBUdXRvcmlhbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgUmVtaXggRG9jc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYjMzYTk0N2InLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTdDNjdNS0VILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FN1NaMzNCTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUNKQ1lKWUtFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUDJGVEdQT1guanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU5VU0NIWkpYLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kaXNoLyRkaXNoSWQnOnsnaWQnOidyb3V0ZXMvZGlzaC8kZGlzaElkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rpc2gvOmRpc2hJZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kaXNoLyRkaXNoSWQtNUtXNTRENjMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kaXNoL2NyZWF0ZSc6eydpZCc6J3JvdXRlcy9kaXNoL2NyZWF0ZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidkaXNoL2NyZWF0ZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kaXNoL2NyZWF0ZS1FTE9HWUVETy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGlzaC9pbmRleCc6eydpZCc6J3JvdXRlcy9kaXNoL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rpc2gnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rpc2gvaW5kZXgtWkg3SFlSNkcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1GQ1laSTVKSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3BsYW4vJHBsYW5JZCc6eydpZCc6J3JvdXRlcy9wbGFuLyRwbGFuSWQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncGxhbi86cGxhbklkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYW4vJHBsYW5JZC1OT1I3SzNRQi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGxhbi9nZW5lcmF0ZSc6eydpZCc6J3JvdXRlcy9wbGFuL2dlbmVyYXRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BsYW4vZ2VuZXJhdGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcGxhbi9nZW5lcmF0ZS1UTVBHMjIyMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcGxhbi9pbmRleCc6eydpZCc6J3JvdXRlcy9wbGFuL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BsYW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3BsYW4vaW5kZXgtR0RRUjMyQUsuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9wbGFuL2xpc3QnOnsnaWQnOidyb3V0ZXMvcGxhbi9saXN0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3BsYW4vbGlzdCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9wbGFuL2xpc3QtTVNKTUwzV1YuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQjMzQTk0N0IuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FB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
