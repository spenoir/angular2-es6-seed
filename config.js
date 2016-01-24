System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  traceurOptions: {
    "annotations": true,
    "types": true,
    "memberVariables": true
  },
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92"
  }
});
