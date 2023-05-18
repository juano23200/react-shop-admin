module.exports = {
  //environments que vamos a usar
  env: {
    browser: true, //Variables globales del navegador.
    amd: true, //Define require()y define()como variables globales.
    node: true, //Variables globales de Node.js y alcance de Node.js.
    es6: true, //Habilita todas las características de ECMAScript 6 excepto los módulos
  },
  //extender las configuraciones que hemos agregado como plugin o recursos que hemos
  //añadido a nuestro proyecto
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  //agregar reglas
  rules: {
    semi: ["error", "always"],
  },
};
