# Routes From Library

![alt](https://img.shields.io/github/issues/netodeolino/routes-from-library.svg)
![alt](https://img.shields.io/github/forks/netodeolino/routes-from-library.svg)
![alt](https://img.shields.io/github/stars/netodeolino/routes-from-library.svg)

This project show a example how use routes from a external library. In this case we created the login library manually.
You can create your own library and publish on npm. Example: npm publish ./dist/login.tgz (create de .tgz for the build folder).

### Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
- To test the route of the login library navigate for: `http://localhost:4200/login`.

The LoginRoutingModule is imported in AppRoutingModule!

### Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
- Run `ng build login` to build de library login.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.