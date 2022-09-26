var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/globals.css
var globals_default = "/build/_assets/globals-SRZSYTWH.css";

// app/styles/navBar.css
var navBar_default = "/build/_assets/navBar-SY2BONDK.css";

// app/styles/mainPage.css
var mainPage_default = "/build/_assets/mainPage-BF3TUSJL.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-X5J6IQJU.css";

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Tea Cozy",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: navBar_default },
  { rel: "stylesheet", href: globals_default },
  { rel: "stylesheet", href: mainPage_default },
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/Footer/index.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
  className: "nav-bar",
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
    children: "Copyright The Tea Cozy 2017"
  })
}), Footer_default = Footer;

// app/components/Nav/index.tsx
var import_react_burger_menu = require("react-burger-menu"), import_jsx_runtime = require("react/jsx-runtime"), Nav = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "nav-bar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            className: "logo",
            src: "/images/tealogo.png",
            alt: "logo"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "nav-text",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  id: "home",
                  className: "menu-item",
                  href: "/",
                  children: "Mission"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  id: "about",
                  className: "menu-item",
                  href: "/about",
                  children: "Featured Tea"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  id: "contact",
                  className: "menu-item",
                  href: "/contact",
                  children: "Locations"
                })
              ]
            })
          ]
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_burger_menu.bubble, {
      width: "100vw",
      pageWrapId: "page-wrap",
      outerContainerId: "outer-container",
      id: "bubble",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          id: "home",
          className: "menu-item",
          href: "/",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            className: "logo",
            src: "/images/tealogo.png",
            alt: "logo"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          id: "home",
          className: "menu-item",
          href: "/",
          children: "Mission"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          id: "about",
          className: "menu-item",
          href: "/about",
          children: "Featured Tea"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          id: "contact",
          className: "menu-item",
          href: "/contact",
          children: "Locations"
        })
      ]
    })
  ]
}), Nav_default = Nav;

// app/screens/MainPage/index.tsx
var import_jsx_runtime = require("react/jsx-runtime"), MainPage = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: 'id="outer-container"',
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
      id: "page-wrap",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "image1",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: "/images/img-mission-background.jpg",
              alt: "mission bg"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "header text-xl",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "",
                  children: "Our mission"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                  children: "Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea"
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "image2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "image2-text",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  children: "Tea of the Month"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                  children: "What's Steeping at The Tea Cozy"
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "image2-image",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: "/images/img-berryblitz.jpg",
                      alt: "berryblitz"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Fall Berry Blitz Tea"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: "/images/img-spiced-rum.jpg",
                      alt: "spiced-rum"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Spiced Rum Tea"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: "/images/img-donut.jpg",
                      alt: "donut"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Sezonal Donut "
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: "/images/img-myrtle-ave.jpg",
                      alt: "myrtle-ave"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Myrtle Ave Tea"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: "/images/img-berryblitz.jpg",
                      alt: "bedford-bizarre"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Bedford Bizarre Tea"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "location",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                children: "Locations"
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "big-box",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      children: "Downtown"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "384 West 4th St"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Suite 108"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Portland, Main"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      children: " East Bay   "
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "384 Phiser Ave"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "North Corner"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Portland, Main"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "box",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                      children: "OakdAle"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "3812 Crescent Ave"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Second Floor"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      children: "Portland, Main"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "contact",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              children: "The Tea Cozy"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
              children: "contact@theteacozy.com"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
              children: "917-555-8904"
            })
          ]
        })
      ]
    })
  })
}), MainPage_default = MainPage;

// app/routes/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainPage_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer_default, {})
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "117ae2b2", entry: { module: "/build/entry.client-GMTYNFBW.js", imports: ["/build/_shared/chunk-334RH2XI.js", "/build/_shared/chunk-WRE323JU.js", "/build/_shared/chunk-NNE7662T.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-J4J6K63O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-EOCBBVVI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-117AE2B2.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
