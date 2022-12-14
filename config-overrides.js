const { alias } = require("react-app-rewire-alias");
// import { alias } from "react-app-rewire-alias";

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@constans": "src/constans",
    "@hoc-helpers": "src/hoc-helpers",
    "@services": "src/services",
    "@utils": "src/utils",
    "@containers": "src/containers",
    "@routes": "src/routes",
    "@static": "src/static",
  })(config);

  return config;
};
