// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // apiEndpoint: 'http://192.168.1.9:3000/town'
  apiEndpoint: 'http://localhost:3000/town',
  // apiEndpoint: 'https://johndog.herokuapp.com/town',
  apiEndpointCocktailRandom: 'http://www.thecocktaildb.com/api/json/v1/1/random.php',
  apiEndpointCocktailDrinks: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
};
