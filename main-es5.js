(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--LOGUEADO###############################################################################################-->\r\n<mat-sidenav-container *ngIf=\"identity\" class=\"sidenav-container\">\r\n\r\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\r\n\r\n        <mat-nav-list class=\"nav-list\">\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/inicio']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">home \r\n                </span>Inicio\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/buscar']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">search\r\n                </span>Buscar\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/productos']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">shopping_cart\r\n                </span>Productos\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/ventas']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">attach_money\r\n                </span>Ventas\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/inversion']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">money_off\r\n                </span>Inversiones\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/reportes']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">trending_up\r\n                </span>Reportes\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item [routerLink]=\"['/mis-datos']\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">account_circle\r\n                </span>Mis datos\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n            <a mat-list-item href=# (click)=\"logout()\" class=\"btn-logout\">\r\n                <span class=\"material-icons\" aria-hidden=\"true\">exit_to_app\r\n                </span>Salir\r\n            </a>\r\n            <mat-divider></mat-divider>\r\n        </mat-nav-list>\r\n\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n\r\n        <div [class.hidden]=\"!identity\" class=\"central\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n<!--NO LOGUEADO###############################################################################################-->\r\n\r\n<div *ngIf=\"!identity\">\r\n    <!--class=\"fixed-top\"-->\r\n    <mat-toolbar color=\"primary\">\r\n        <span class=\"spacer\"></span>\r\n        <mat-icon class=\"icono-vg\" aria-hidden=\"false\">home</mat-icon>\r\n        <h3>Almacen Veronica Godoy Coltters</h3>\r\n        <span class=\"spacer\"></span>\r\n    </mat-toolbar>\r\n</div>\r\n\r\n<div class=\"col col-lg-14\" *ngIf=\"!identity\">\r\n\r\n    <!--INICIAR-SESION##########################################################################################-->\r\n    <mat-tab-group>\r\n        <mat-tab label=\"INICIAR SESIÓN\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"well well-sm\">\r\n                            <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n\r\n                                <h1 class=\"text-left header\">INICIAR SESIÓN</h1>\r\n\r\n                                <div *ngIf=\"errorMessage\" class=\"col-md-8\">\r\n                                    <div class=\"alert alert-info\">\r\n                                        <strong>Error</strong> {{errorMessage}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Rut:</label>\r\n                                        <input type=\"text\" #rut=\"ngModel\" name=\"rut\" [(ngModel)]=\"usuario.rut\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!rut.valid && rut.touched\" class=\"span-alert\">\r\n                                            El Rut es obligatorio\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Contraseña:</label>\r\n                                        <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"usuario.password\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!password.valid && password.touched\" class=\"span-alert\">\r\n                                            La Contraseña es obligatoria\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8 text-right\">\r\n                                        <button mat-raised-button color=\"primary\">Aceptar</button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </mat-tab>\r\n\r\n        <!--REGISTRO##########################################################################################-->\r\n        <!-- <mat-tab label=\"REGISTRO\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"well well-sm\">\r\n                            <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmitRegister()\" class=\"form-horizontal\">\r\n\r\n                                <h1 class=\"text-left header\">REGISTRO</h1>\r\n\r\n                                <div *ngIf=\"alertRegister\" class=\"col-md-8\">\r\n                                    <div class=\"alert alert-info\">\r\n                                        {{alertRegister}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Nombre:</label>\r\n                                        <input type=\"text\" #nombre=\"ngModel\" name=\"nombre\" [(ngModel)]=\"usuario_registro.nombre\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!nombre.valid && nombre.touched\" class=\"span-alert\">\r\n                                            El Nombre es obligatorio\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Apellido:</label>\r\n                                        <input type=\"text\" #apellido=\"ngModel\" name=\"apellido\" [(ngModel)]=\"usuario_registro.apellido\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!apellido.valid && apellido.touched\" class=\"span-alert\">\r\n                                            El Apellido es obligatorio\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Email:</label>\r\n                                        <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"usuario_registro.email\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!email.valid && email.touched\" class=\"span-alert\">\r\n                                            El Email es obligatorio\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Rut:</label>\r\n                                        <input type=\"text\" #rut=\"ngModel\" name=\"rut\" [(ngModel)]=\"usuario_registro.rut\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!rut.valid && rut.touched\" class=\"span-alert\">\r\n                                            El Rut es obligatorio\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <label>Contraseña:</label>\r\n                                        <input type=\"password\" #password=\"ngModel\" name=\"password\" [(ngModel)]=\"usuario_registro.password\" class=\"form-control\" required>\r\n                                        <span *ngIf=\"!password.valid && password.touched\" class=\"span-alert\">\r\n                                            La Contraseña es obligatoria\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-8 text-right\">\r\n                                        <button mat-raised-button color=\"primary\">Registrarse</button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-tab> -->\r\n\r\n    </mat-tab-group>\r\n\r\n    <div class=\"fixed-bottom\">\r\n        <mat-toolbar color=\"primary\">\r\n            <span class=\"spacer\"></span>\r\n            <h3>© Copyright ecald 2020</h3>\r\n            <span class=\"spacer\"></span>\r\n        </mat-toolbar>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buscar-productos/buscar-productos.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buscar-productos/buscar-productos.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">search\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"mostrar-listas\" *ngIf=\"identity\">\r\n\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar Producto\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <!-- Columna Número -->\r\n        <ng-container matColumnDef=\"nro\">\r\n            <th mat-header-cell *matHeaderCellDef> N° </th>\r\n            <td mat-cell *matCellDef=\"let transaction; let i = index\"> {{i+1}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Columna Nombre -->\r\n        <ng-container matColumnDef=\"nombre\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Producto </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.nombre}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Precio Compra-->\r\n        <ng-container matColumnDef=\"precio_compra\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio de Compra </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_compra}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Precio Venta-->\r\n        <ng-container matColumnDef=\"precio_venta\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio de Venta </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_venta}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Stock-->\r\n        <ng-container matColumnDef=\"stock\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Cantidad Disponible </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.stock}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Imagen-->\r\n        <ng-container matColumnDef=\"image\">\r\n            <th mat-header-cell *matHeaderCellDef> Imagen </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n                <div *ngIf=\"transaction.image != 'null'\">\r\n                    <img src=\"{{ url + 'get-image-producto/' + transaction.image}}\" style=\"width: 80px; height: 80px;\" />\r\n                </div>\r\n                <div *ngIf=\"transaction.image == 'null'\">\r\n                    <img src=\"../../../assets/imagenes/noimage.png\" style=\"width: 80px; height: 80px;\" />\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!--Footer-->\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buscar-reportes/buscar-reportes.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buscar-reportes/buscar-reportes.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">search\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buscar-ventas/buscar-ventas.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buscar-ventas/buscar-ventas.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">search\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"mostrar-listas\" *ngIf=\"identity\">\r\n\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <!-- Columna Fecha venta -->\r\n        <ng-container matColumnDef=\"fecha\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.fecha | date:'medium'}} </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Precio Venta<-->\r\n        <ng-container matColumnDef=\"precio_total\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_total}} </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Estado-->\r\n        <ng-container matColumnDef=\"estado\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Estado </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.estado}} </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"opciones\">\r\n            <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/editar-venta', transaction._id]\" class=\"material-icons\" style=\"margin-right: 2%; width:120px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE417;</i>Ver Detalle\r\n                </button>\r\n\r\n            </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Footer-->\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <div class=\"mat-elevation-z8\">\r\n        <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/buscar/buscar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/buscar/buscar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">search\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"tarjetas\">\r\n\r\n    <div style=\"text-align: left; margin-top: 30px; margin-bottom: 40px;\">\r\n        <p class=\"lead\">En esta sección puede buscar todos los datos almacenados que se encuentran en la base de datos del sistema, puede seleccionar cualquiera de las opciones mostradas en la parte de abajo para buscar algo si es que lo considera necesario.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"card-deck\">\r\n        <div class=\"card\">\r\n            <img src=\"../../../assets/imagenes/productos.jpg\" class=\"card-img-top\" height=\"210\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Buscar Productos</h5>\r\n                <p class=\"card-text\">Seleccione esta opción para encontrar <strong>productos</strong> que esten almacenados en el sistema</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <small class=\"text-muted\">\r\n                    <button mat-raised-button color=\"primary\" [routerLink]=\"['/buscar-productos']\">\r\n                    <i class=\"material-icons\">search</i>Buscar Productos\r\n                </button>\r\n                </small>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <img src=\"../../../assets/imagenes/venta.jpg\" class=\"card-img-top\" height=\"210\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Buscar Ventas</h5>\r\n                <p class=\"card-text\">Seleccione esta opción para encontrar las <strong>ventas</strong> que se han realizado a lo largo del sistema.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <small class=\"text-muted\">\r\n                    <button mat-raised-button color=\"primary\" [routerLink]=\"['/buscar-ventas']\">\r\n                        <i class=\"material-icons\">search</i>Buscar Ventas\r\n                    </button>\r\n                </small>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <img src=\"../../../assets/imagenes/reportes.jpg\" class=\"card-img-top\" height=\"210\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Buscar Reportes</h5>\r\n                <p class=\"card-text\">Seleccione esta opción para encontrar los <strong>reportes</strong> que se han generado debido a las ventas concretadas.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <small class=\"text-muted\">\r\n                    <button mat-raised-button color=\"primary\" [routerLink]=\"['/reportes']\">\r\n                        <i class=\"material-icons\">search</i>Buscar Reportes\r\n                    </button>\r\n                </small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/crear-inversion/crear-inversion.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/crear-inversion/crear-inversion.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span class=\"material-icons\" aria-hidden=\"true\">money_off\n    </span>\n    <h1 class=\"text-left\">{{titulo}}</h1>\n</mat-toolbar>\n\n<div class=\"col-lg-12\" *ngIf=\"identity\">\n    <form #inversionForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n\n        <hr>\n        <div *ngIf=\"alertMessage\" style=\"margin-top: 5px;\" class=\"col-md-4\">\n            <div class=\"alert alert-info\">\n                {{alertMessage}}\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-md-4\">\n                <label>Fecha:</label>\n                <input type=\"date\" #fecha=\"ngModel\" name=\"fecha\" [(ngModel)]=\"inversion_realizada.fecha\" class=\"form-control\" required>\n                <span *ngIf=\"!fecha.valid && fecha.touched\" class=\"span-alert\">\n                    Recuerde ingresar la fecha\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-md-4\">\n                <label>Inversión: $</label>\n                <input type=\"number\" min=\"1\" name=\"inversion\" #inversion=\"ngModel\" [(ngModel)]=\"inversion_realizada.inversion\" class=\"form-control\" required>\n                <span *ngIf=\"!inversion.valid && inversion.touched\" class=\"span-alert\">\n                    La inversión debe tener un valor numerico\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-md-6\">\n                <label>Comentarios:</label>\n                <hr>\n                <textarea style=\"width: 100%; height: 210px;\" name=\"comentarios\" #comentarios=\"ngModel\" [(ngModel)]=\"inversion_realizada.comentarios\" placeholder=\"Comentarios sobre factura o inversiones realizadas...\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <div class=\"col-md-6 text-right\">\n                <button mat-raised-button color=\"primary\" name=\"button\" [disabled]=\"loading || !inversionForm.valid\">\n                    <i [ngClass]=\"{ 'fa-save': !loading, 'fa-refresh fa-spin': loading }\"  class=\"fa\"></i> \n                    <span style=\"margin-left: 5px;\" *ngIf=\"!loading\">Guardar inversion</span>\n                    <span style=\"margin-left: 5px;\" *ngIf=\"loading\">Espere por favor</span>\n                </button>\n            </div>\n        </div>\n\n        <mat-divider></mat-divider>\n\n    </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/crear-producto/crear-producto.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/crear-producto/crear-producto.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">shopping_cart\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"col-lg-8\" *ngIf=\"identity\">\r\n    <form #formProducto=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n\r\n        <hr>\r\n        <div *ngIf=\"alertMessage\" class=\"col-md-8\">\r\n            <div class=\"alert alert-info\">\r\n                {{alertMessage}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-8\">\r\n                <label>Nombre:</label>\r\n                <input type=\"text\" #nombre=\"ngModel\" name=\"nombre\" [(ngModel)]=\"producto.nombre\" class=\"form-control\" required>\r\n                <span *ngIf=\"!nombre.valid && nombre.touched\" class=\"span-alert\">\r\n                    El Nombre del producto es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-8\">\r\n                <label>Precio de Compra (Unitario):</label>\r\n                <input type=\"number\" min=\"0\" #precio_compra=\"ngModel\" name=\"precio_compra\" [(ngModel)]=\"producto.precio_compra\" class=\"form-control\" required>\r\n                <span *ngIf=\"!precio_compra.valid && precio_compra.touched\" class=\"span-alert\">\r\n                    El precio de compra es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-8\">\r\n                <label>Precio de Venta (Unitario):</label>\r\n                <input type=\"number\" min=\"0\" #precio_venta=\"ngModel\" name=\"precio_venta\" [(ngModel)]=\"producto.precio_venta\" class=\"form-control\" required>\r\n                <span *ngIf=\"!precio_venta.valid && precio_venta.touched\" class=\"span-alert\">\r\n                    El precio de venta es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-8\">\r\n                <label>Stock o Cantidad:</label>\r\n                <input type=\"number\" min=\"0\" #stock=\"ngModel\" name=\"stock\" [(ngModel)]=\"producto.stock\" class=\"form-control\" required>\r\n                <span *ngIf=\"!stock.valid && stock.touched\" class=\"span-alert\">\r\n                    El stock es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"is_edit\" class=\"form-group\">\r\n            <!--se muestra solo si exsite is_edit-->\r\n\r\n            <div class=\"col-md-8\">\r\n                <div class=\"product_image_for_edit\" *ngIf=\"producto.image != 'null'\">\r\n                    <img src=\"{{url + 'get-image-producto/' + producto.image }}\" />\r\n                    <p><label>Subir o Actualizar imagen del Producto:</label></p>\r\n                </div>\r\n\r\n                <div class=\"product_image_for_edit\" *ngIf=\"producto.image == 'null'\">\r\n                    <img src=\"../../../assets/imagenes/noimage.png\" />\r\n                    <p><label>Sube la imagen del Producto:</label></p>\r\n                </div>\r\n\r\n                <p>\r\n                    <input type=\"file\" placeholder=\"Subir imagen...\" (change)=\"fileChangeEvent($event)\" />\r\n                </p>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-8 text-right\">\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"!formProducto.valid\">\r\n                    <i class=\"fa fa-save\"></i> Guardar producto\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n\r\n\r\n\r\n    </form>\r\n</div>\r\n\r\n<div class=\"col-lg-6\" *ngIf=\"!identity\">\r\n    <h1>Error</h1>\r\n    <p>No tienes acceso a esta parte de la aplicación</p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/crear-venta/crear-venta.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/crear-venta/crear-venta.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <mat-toolbar color=\"primary\">\r\n        <span class=\"material-icons\" aria-hidden=\"true\">attach_money\r\n    </span>\r\n        <h1 class=\"text-left\">{{titulo}}</h1>\r\n    </mat-toolbar>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!--Mostrar Productos para añadir al carro-->\r\n            <div class=\"col-md-7\">\r\n                <hr>\r\n                <h1 style=\"color: #3f51b5;\">Seleccionar Productos</h1>\r\n                <hr>\r\n                <div class=\"mostrar-listas\" *ngIf=\"identity\">\r\n\r\n                    <mat-form-field>\r\n                        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar productos\">\r\n                    </mat-form-field>\r\n\r\n                    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n                        <!--Columna Imagen-->\r\n                        <ng-container matColumnDef=\"image\">\r\n                            <th mat-header-cell *matHeaderCellDef> </th>\r\n                            <td mat-cell *matCellDef=\"let transaction\">\r\n                                <div *ngIf=\"transaction.image != 'null'\">\r\n                                    <img src=\"{{ url + 'get-image-producto/' + transaction.image}}\" style=\"width: 80px; height: 80px;\" />\r\n                                </div>\r\n                                <div *ngIf=\"transaction.image == 'null'\">\r\n                                    <img src=\"../../../assets/imagenes/noimage.png\" style=\"width: 80px; height: 80px;\" />\r\n                                </div>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <!-- Columna Nombre -->\r\n                        <ng-container matColumnDef=\"nombre\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Producto </th>\r\n                            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.nombre}} </td>\r\n                        </ng-container>\r\n\r\n                        <!--Columna Precio Venta-->\r\n                        <ng-container matColumnDef=\"precio_venta\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio Venta </th>\r\n                            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_venta}} </td>\r\n                        </ng-container>\r\n\r\n                        <!--Columna Stock-->\r\n                        <ng-container matColumnDef=\"stock\">\r\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Cantidad Disponible </th>\r\n                            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.stock}} </td>\r\n                        </ng-container>\r\n\r\n                        <!--Columna Agregar cantidad-->\r\n                        <ng-container matColumnDef=\"cantidad\">\r\n                            <th mat-header-cell *matHeaderCellDef> Cantidad a Agregar</th>\r\n                            <td mat-cell *matCellDef=\"let transaction, let i = index\">\r\n                                <div *ngIf=\"!transaction.stock == 0\">\r\n\r\n                                    <div class=\"col-md-9\">\r\n                                        <input type=\"number\" name=\"cantidad_ingresada\" min=\"1\" max=\"{{transaction.stock}}\" class=\"form-control\" [(ngModel)]=\"cantidad_ing[i]\" required>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <!--Columna Botones-->\r\n                        <ng-container matColumnDef=\"opciones\">\r\n                            <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n                            <td mat-cell *matCellDef=\"let transaction, let i = index\">\r\n\r\n                                <div *ngIf=\"!transaction.stock == 0\">\r\n\r\n                                    <button mat-raised-button color=\"primary\" (click)=\"anadirProducto(transaction._id, transaction.nombre, transaction.precio_venta, transaction.stock, (cantidad_ing[i]))\" class=\"material-icons\" style=\"margin-right: 2%; margin-bottom: 2%; width:100px; height:36px\">\r\n                                    <i class=\"material-icons\">add_shopping_cart</i>Añadir \r\n                                </button>\r\n\r\n                                </div>\r\n                                <div *ngIf=\"transaction.stock == 0\">\r\n                                    <span class=\"span-alert\">Producto Agotado!</span>\r\n                                </div>\r\n\r\n                            </td>\r\n                        </ng-container>\r\n\r\n                        <!--Footer-->\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n                    </table>\r\n                    <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n                </div>\r\n            </div>\r\n\r\n            <!--Mostrar Prodcutos que han sido asginado a la venta----| paso por arreglo -- [idproducto]=\"pasarle el id del producto\" [idproducto]=\"[pasarnombre, pasarprecio, pasarcantidad]\">-->\r\n            <div class=\"col\">\r\n                <app-datos-venta [id_producto]=\"pasarid\" [nombre_producto]=\"pasarnombre\" [precio_producto]=\"pasarprecio\" [cant_producto]=\"pasarcantidad\" [nro_producto]=\"nro\" [total_productos]=\"total_productos\" [total_precio]=\"total_precio\" [id_prods]=\"id_productos\" [cant_prods]=\"prodCantidad\"\r\n                    [precios_prods]=\"prodPrecio\" [array]=\"foros\">\r\n                </app-datos-venta>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/datos-venta/datos-venta.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/datos-venta/datos-venta.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #VentaForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n    <hr>\r\n    <h1 style=\"color: #3f51b5;\">Datos de Venta</h1>\r\n    <hr>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-5\">\r\n            <mat-form-field>\r\n                <mat-label>Fecha</mat-label>\r\n                <input matInput value=\"{{fecha_ | date:'medium'}}\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <mat-form-field>\r\n                        <mat-label>Opcion de Venta</mat-label>\r\n                        <mat-select [(value)]=\"selected\">\r\n                            <mat-option value=\"Vendido\">Vendido</mat-option>\r\n                            <mat-option value=\"Fiado\">Fiado</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"col\" *ngIf=\"selected == 'Fiado'\">\r\n                    <mat-form-field>\r\n                        <mat-label>Nombre Fiador</mat-label>\r\n                        <input matInput placeholder=\"Ejm: Eduardo Caldera\" #nombre_fiador=\"ngModel\" name=\"nombre_fiador\" [(ngModel)]=\"venta.nombre_fiador\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-12\">\r\n            <label><strong style=\"color: #3f51b5;\">Productos agregados: {{total_productos}}</strong></label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"table-wrapper-scroll-y my-custom-scrollbar col-md-12\">\r\n            <table class=\"table table-bordered table-striped mb-0\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\" style=\"color: #3f51b5;\">Producto</th>\r\n                        <th scope=\"col\" style=\"color: #3f51b5;\">Cantidad</th>\r\n                        <th scope=\"col\" style=\"color: #3f51b5;\">Precio Unitario</th>\r\n                        <th scope=\"col\" style=\"color: #3f51b5;\">Precio Total</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let arr of array;let i = index\">\r\n                        <td>{{arr[\"nombre\"]}}</td>\r\n                        <td>x{{arr[\"cant_vendidad\"]}}</td>\r\n                        <td>{{arr[\"precio\"]}}</td>\r\n                        <td>{{arr[\"precio_total\"]}}</td>\r\n                        <!--<td> \r\n                        <button mat-raised-button class=\"material-icons\" color=\"warn\" (click)=\"eliminarFila(i)\" style=\"margin-top: 2%; width:10px; height:36px\">\r\n                            <i class=\"material-icons\">&#xE872;</i> \r\n                        </button>\r\n                    </td>-->\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <mat-divider></mat-divider>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-5\">\r\n            <label><strong style=\"color: #3f51b5;\">Total Precio: $ {{total_precio}}</strong></label>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-12 text-right\">\r\n\r\n            <div *ngIf=\"alertMessage\" style=\"margin-top: 5px;\" class=\"col-md-12\">\r\n                <div class=\"alert alert-danger\">\r\n                    {{alertMessage}}\r\n                </div>\r\n            </div>\r\n\r\n            <button mat-raised-button color=\"primary\" style=\"margin-right: 2%; width:100px; height:36px\">\r\n                <i class=\"material-icons\">shopping_cart</i>Aceptar \r\n            </button>\r\n\r\n            <button mat-raised-button color=\"warn\" (click)=\"refresh()\" style=\"width:100px; height:36px\">\r\n                <i class=\"material-icons\">remove_shopping_cart</i>Vaciar\r\n            </button>\r\n\r\n        </div>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/editar-usuario/editar-usuario.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/editar-usuario/editar-usuario.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">account_circle\r\n        </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"col-lg-12\" *ngIf=\"identity\">\r\n    <form #userUpdateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n\r\n        <hr>\r\n        <div *ngIf=\"alertMessage\" style=\"margin-top: 5px;\" class=\"col-md-4\">\r\n            <div class=\"alert alert-info\">\r\n                {{alertMessage}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-4\">\r\n                <label>Nombre:</label>\r\n                <input type=\"text\" #nombre=\"ngModel\" name=\"nombre\" [(ngModel)]=\"usuario.nombre\" class=\"form-control\" required>\r\n                <span *ngIf=\"!nombre.valid && nombre.touched\" class=\"span-alert\">\r\n                    El Nombre es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-4\">\r\n                <label>Apellido:</label>\r\n                <input type=\"text\" #apellido=\"ngModel\" name=\"apellido\" [(ngModel)]=\"usuario.apellido\" class=\"form-control\" required>\r\n                <span *ngIf=\"!apellido.valid && apellido.touched\" class=\"span-alert\">\r\n                    El Apellido es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-4\">\r\n                <label>Email:</label>\r\n                <input type=\"email\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"usuario.email\" class=\"form-control\" required>\r\n                <span *ngIf=\"!email.valid && email.touched\" class=\"span-alert\">\r\n                    El Email es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-4\">\r\n                <label>Rut:</label>\r\n                <input type=\"text\" #rut=\"ngModel\" name=\"rut\" [(ngModel)]=\"usuario.rut\" class=\"form-control\" required>\r\n                <span *ngIf=\"!rut.valid && rut.touched\" class=\"span-alert\">\r\n                    El Rut es obligatorio\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-4 text-right\">\r\n                <button mat-raised-button color=\"primary\" name=\"button\" [disabled]=\"loading\">\r\n                    <i [ngClass]=\"{ 'fa-user': !loading, 'fa-refresh fa-spin': loading }\"  class=\"fa\"></i>\r\n                    <span style=\"margin-left: 5px;\" *ngIf=\"!loading\">Actualizar datos</span>\r\n                    <span style=\"margin-left: 5px;\" *ngIf=\"loading\">Espere por favor</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/editar-venta/editar-venta.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/editar-venta/editar-venta.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">attach_money\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"col-md-12\" style=\"margin-top: 2%;\">\r\n\r\n    <form #VentaForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n        <hr>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-3\">\r\n                <mat-form-field>\r\n                    <mat-label>Fecha</mat-label>\r\n                    <input matInput name=\"fecha\" value=\"{{fecha_ | date:'medium'}}\" disabled>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <mat-form-field>\r\n                            <mat-label>Opcion de Venta</mat-label>\r\n                            <mat-select [(value)]=\"selected\" disabled>\r\n                                <mat-option value=\"Vendido\">Vendido</mat-option>\r\n                                <mat-option value=\"Fiado\">Fiado</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4\" *ngIf=\"selected == 'Fiado'\">\r\n                        <mat-form-field>\r\n                            <mat-label>Nombre Fiador</mat-label>\r\n                            <input matInput #nombre_fiador=\"ngModel\" name=\"nombre_fiador\" [(ngModel)]=\"venta.nombre_fiador\" disabled>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-3\">\r\n                <mat-form-field>\r\n                    <mat-label>Productos agregados</mat-label>\r\n                    <input matInput #cant_productos=\"ngModel\" name=\"cant_productos\" [(ngModel)]=\"venta.cant_productos\" disabled>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"container-fluid\" style=\"margin-bottom: 10px;\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8\" style=\"margin-right: 0px;\">\r\n                            <table class=\"table table-bordered table-striped mb-0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\" style=\"color: #3f51b5;\">Producto</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let arr of producto; let i = index\">\r\n                                        <td> {{arr}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-2\" style=\"margin-left: -30px;\">\r\n                            <table class=\"table table-bordered table-striped mb-0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\" style=\"color: #3f51b5;\">Cantidad</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let cantidad of prodCantidad\">\r\n                                        <td> {{cantidad}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"col-md-2\" style=\"margin-left: -30px;\">\r\n                            <table class=\"table table-bordered table-striped mb-0\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\" style=\"color: #3f51b5;\">Precio</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let precio of prodPrecio\">\r\n                                        <td> {{precio}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-3\">\r\n                <mat-form-field>\r\n                    <mat-label>Total Precio: $</mat-label>\r\n                    <input matInput #precio_total=\"ngModel\" name=\"precio_total\" [(ngModel)]=\"venta.precio_total\" disabled>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-8 text-right\">\r\n\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/ventas']\" routerLinkActive=\"router-link-active\" style=\"margin-right: 2%; width:100px; height:36px\">\r\n                    Aceptar\r\n                </button>\r\n\r\n            </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inicio/inicio.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inicio/inicio.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">home\r\n    </span>\r\n<h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<body class=\"home\">\r\n\r\n    <!-- Page Content -->\r\n    <div class=\"container\">\r\n  \r\n      <!-- Jumbotron Header -->\r\n      <header class=\"jumbotron my-4\">\r\n        <h1 class=\"display-3\">{{identity.nombre}} {{identity.apellido}}</h1> \r\n        <p class=\"lead\">Para comenzar a trabajar puede seleccionar algunos de los modulos mostrados en la seccion de abajo o navegar a traves de la barra lateral izquierda.</p>\r\n        \r\n      </header>\r\n  \r\n      <!-- Page Features -->\r\n      <div class=\"row text-center\">\r\n  \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/imagenes/productos.jpg\" width=\"325\" height=\"170\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Productos</h4>\r\n              <p class=\"card-text\">Modulo para agregar, modificar, mostrar y eliminar todos los productos del almacen.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/productos']\">Modulo Productos</button>  \r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/imagenes/venta.jpg\" width=\"325\" height=\"170\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Ventas</h4>\r\n              <p class=\"card-text\">Modulo para agregar, modificar, mostrar y eliminar todas las ventas que realiza el almacen.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/ventas']\">Modulo Ventas</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/imagenes/reportes.jpg\" width=\"325\" height=\"170\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Reportes</h4>\r\n              <p class=\"card-text\">Modulo para generar reportes de ganacias del almacen.</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/reportes']\">Modulo Reportes</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card h-100\">\r\n            <img class=\"card-img-top\" src=\"../../../assets/imagenes/mis-datos.jpg\" width=\"325\" height=\"170\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Mis Datos</h4>\r\n              <p class=\"card-text\">En esta sección podra modificar los datos actuales almacenados del usuario</p>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/mis-datos']\">Mis datos</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n      <!-- /.row -->\r\n  \r\n    </div>\r\n    <!-- /.container -->\r\n  \r\n  </body>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inversion/inversion.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inversion/inversion.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">money_off\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"separador\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col\">\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"['/crear-inversion']\">\r\n                <i class=\"material-icons\">add</i>Añadir Inversión</button>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n        <div class=\"col\"></div>\r\n    </div>\r\n</div>\r\n\r\n<app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n<div class=\"mostrar-listas\" *ngIf=\"identity\">\r\n\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar inversiones\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <!-- Columna Fecha -->\r\n        <ng-container matColumnDef=\"fecha\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.fecha | date:'medium'}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Inversion-->\r\n        <ng-container matColumnDef=\"inversion\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Inversion </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.inversion}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Comentarios-->\r\n        <ng-container matColumnDef=\"comentarios\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Comentarios </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n                <textarea style=\"width: 90%; height: 50px;\" name=\"comentarios\" #comentarios=\"ngModel\" [(ngModel)]=\"transaction.comentarios\" disabled></textarea>\r\n                <!-- {{transaction.comentarios}} -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Botones-->\r\n        <ng-container matColumnDef=\"opciones\">\r\n            <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/editar-inversion', transaction._id]\" class=\"material-icons\" style=\"margin-right: 2%; width:100px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE254;</i>Editar\r\n                </button>\r\n\r\n                <button (click)=\"onDeleteConfirm(transaction._id)\" mat-raised-button color=\"warn\" class=\"material-icons\" style=\"width:100px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE872;</i>Borrar\r\n                </button>\r\n\r\n                <div class=\"seguro\" *ngIf=\"confirmado == transaction._id\">\r\n\r\n                    <button (click)=\"onDeleteInversion(transaction._id)\" mat-raised-button color=\"warn\" class=\"material-icons\" style=\"margin-right: 2%; margin-top: 2%; width:100px; height:36px\">\r\n                        Eliminar\r\n                    </button>\r\n\r\n                    <button (click)=\"onCancelInversion()\" mat-raised-button color=\"primary\" class=\"material-icons\" style=\"width:100px; height:36px\">\r\n                        Cancelar\r\n                    </button>\r\n                </div>\r\n\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!--Footer-->\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/lista-productos/lista-productos.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/lista-productos/lista-productos.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">shopping_cart\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"separador\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col\">\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"['/crear-producto']\">\r\n                <i class=\"material-icons\">add</i>Añadir Producto\r\n            </button>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n        <div class=\"col\"></div>\r\n    </div>\r\n</div>\r\n\r\n<app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n<div class=\"mostrar-listas\" *ngIf=\"identity\">\r\n\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar Producto\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <!-- Columna Nombre -->\r\n        <ng-container matColumnDef=\"nombre\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Producto </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.nombre}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Precio Compra-->\r\n        <ng-container matColumnDef=\"precio_compra\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio de Compra </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_compra}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Precio Venta-->\r\n        <ng-container matColumnDef=\"precio_venta\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio de Venta </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_venta}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Stock-->\r\n        <ng-container matColumnDef=\"stock\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Cantidad Disponible </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.stock}} </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Imagen-->\r\n        <ng-container matColumnDef=\"image\">\r\n            <th mat-header-cell *matHeaderCellDef> Imagen </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n                <div *ngIf=\"transaction.image != 'null'\">\r\n                    <img src=\"{{ url + 'get-image-producto/' + transaction.image}}\" style=\"width: 80px; height: 80px;\" />\r\n                </div>\r\n                <div *ngIf=\"transaction.image == 'null'\">\r\n                    <img src=\"../../../assets/imagenes/noimage.png\" style=\"width: 80px; height: 80px;\" />\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Botones-->\r\n        <ng-container matColumnDef=\"opciones\">\r\n            <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/editar-producto', transaction._id]\" class=\"material-icons\" style=\"margin-right: 2%; width:100px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE254;</i>Editar\r\n                </button>\r\n\r\n                <button (click)=\"onDeleteConfirm(transaction._id)\" mat-raised-button color=\"warn\" class=\"material-icons\" style=\"width:100px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE872;</i>Borrar \r\n                </button>\r\n\r\n                <div class=\"seguro\" *ngIf=\"confirmado == transaction._id\">\r\n\r\n                    <button (click)=\"onDeleteProducto(transaction._id)\" mat-raised-button color=\"warn\" class=\"material-icons\" style=\"margin-right: 2%; margin-top: 2%; width:100px; height:36px\">\r\n                            Eliminar\r\n                        </button>\r\n\r\n                    <button (click)=\"onCancelProducto()\" mat-raised-button color=\"primary\" class=\"material-icons\" style=\"width:100px; height:36px\">\r\n                            Cancelar\r\n                        </button>\r\n                </div>\r\n\r\n            </td>\r\n        </ng-container>\r\n\r\n        <!--Footer-->\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/lista-ventas/lista-ventas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/lista-ventas/lista-ventas.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">attach_money\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"separador\">\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row align-items-start\">\r\n        <div class=\"col\">\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"['/crear-venta']\">\r\n                <i class=\"material-icons\">add</i>Añadir Venta\r\n            </button>\r\n        </div>\r\n        <div class=\"col\"></div>\r\n        <div class=\"col\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n<div class=\"mostrar-listas\" *ngIf=\"identity\">\r\n\r\n    <mat-form-field>\r\n        <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Buscar\">\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <!-- Columna Fecha venta -->\r\n        <ng-container matColumnDef=\"fecha\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.fecha | date:'medium'}} </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Precio Venta<-->\r\n        <ng-container matColumnDef=\"precio_total\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.precio_total}} </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Columna Estado-->\r\n        <ng-container matColumnDef=\"estado\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Estado </th>\r\n            <td mat-cell *matCellDef=\"let transaction\"> {{transaction.estado}} </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Columna opciones-->\r\n        <ng-container matColumnDef=\"opciones\">\r\n            <th mat-header-cell *matHeaderCellDef> Opciones </th>\r\n            <td mat-cell *matCellDef=\"let transaction\">\r\n\r\n                <button mat-raised-button color=\"primary\" [routerLink]=\"['/editar-venta', transaction._id]\" class=\"material-icons\" style=\"margin-right: 2%; width:120px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE417;</i>Ver Detalle\r\n                </button>\r\n\r\n                <button (click)=\"onDeleteConfirm(transaction._id)\" mat-raised-button color=\"warn\" class=\"material-icons\" style=\"margin-right: 2%; width:90px; height:36px\">\r\n                    <i class=\"material-icons\">&#xE872;</i>Borrar\r\n                </button>\r\n\r\n                <div class=\"seguro\" *ngIf=\"confirmado == transaction._id\">\r\n\r\n                    <a (click)=\"onDeleteVenta(transaction._id)\" mat-raised-button color=\"warn\" class=\"material-icons\" style=\"margin-right: 2%; margin-top: 2%; width:100px; height:36px\">\r\n                            Eliminar\r\n                        </a>\r\n\r\n                    <a (click)=\"onCancelVenta()\" mat-raised-button color=\"primary\" class=\"material-icons\" style=\"width:100px; height:36px\">\r\n                            Cancelar\r\n                        </a>\r\n                </div>\r\n\r\n            </td>\r\n            <td mat-footer-cell *matFooterCellDef> </td>\r\n        </ng-container>\r\n\r\n        <!--Footer-->\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <div class=\"mat-elevation-z8\">\r\n        <mat-paginator [pageSizeOptions]=\"[10, 25, 50, 100]\"></mat-paginator>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loading/loading.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loading/loading.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center animated fadeIn\">\n    <div class=\"col\">\n        <i class=\"fas fa-sync fa-spin fa-5x\" style=\"color: #3f51b5;\"></i>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reportes/reportes.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reportes/reportes.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"material-icons\" aria-hidden=\"true\">trending_up\r\n    </span>\r\n    <h1 class=\"text-left\">{{titulo}}</h1>\r\n</mat-toolbar>\r\n\r\n<div class=\"container-fluid\" style=\"margin-top: 20px; margin-bottom: 20px;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            <label>Fecha inicio:</label>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fecha_inicio\" required>\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            <label>Fecha termino:</label>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fecha_termino\" required>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <button (click)=\"consultar()\" mat-raised-button color=\"primary\">\r\n                <i class=\"material-icons\">search</i>Consultar\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<mat-divider></mat-divider>\r\n<br>\r\n\r\n<app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n<div *ngIf=\"mostrar\" style=\"text-align: center;\">\r\n    <h1 style=\"color: #3f51b5; text-align: center;\">Información de Reporte</h1>\r\n    <br>\r\n\r\n    <aside id=\"sidebar\">\r\n        <div id=\"nav-blog\" class=\"sidebar-item\">\r\n            <h3 style=\"color: green;\">Cantidad de ventas realizadas: {{cant_ventas}}</h3>\r\n        </div>\r\n        <div id=\"nav-blog\" class=\"sidebar-item\">\r\n            <h3 style=\"color: green;\">Dinero ganado en ventas realizadas: $ {{total_ventas}}</h3>\r\n        </div>\r\n        <div id=\"nav-blog\" class=\"sidebar-item\">\r\n            <h3 style=\"color: red;\">Cantidad de inversiones realizadas: {{cant_inversiones}}</h3>\r\n        </div>\r\n        <div id=\"nav-blog\" class=\"sidebar-item\">\r\n            <h3 style=\"color: red;\">Dinero gastado en inversiones realizadas: $ {{total_inversion}}</h3>\r\n        </div>\r\n        <div id=\"nav-blog\" class=\"sidebar-item\">\r\n            <h3 style=\"color: #3f51b5;\">Total de ganancias: $ {{ganancias}}</h3>\r\n        </div>\r\n        <!-- <form>\r\n            <div class=\"col-md-8 text-right\">\r\n                <button mat-raised-button color=\"primary\">Ver Detalles</button>\r\n            </div>\r\n        </form> -->\r\n    </aside>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, FormFieldPrefixSuffixExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldPrefixSuffixExample", function() { return FormFieldPrefixSuffixExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(_userService, breakpointObserver) {
        this._userService = _userService;
        this.breakpointObserver = breakpointObserver;
        this.titulo = 'Almacen Veronica Godoy Coltters';
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])());
        this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '');
        this.usuario_registro = new _models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.usuario);
        //Conseguir los datos del usuario identificado
        this._userService.signup(this.usuario).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            if (!_this.identity._id) {
                alert("El usuario no esta correctamente identificado");
            }
            else {
                //crear elemento en el localstorage para tener al usuario en sesion
                localStorage.setItem('identity', JSON.stringify(identity));
                //Conseguir el token para enviarselo a cada peticion http
                _this._userService.signup(_this.usuario, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.lenght <= 0) {
                        alert("El token no se ha generado correctamente");
                    }
                    else {
                        //crear elemento en el localstorage para tener token disponible
                        localStorage.setItem('token', token);
                        _this.usuario = new _models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '');
                    }
                }, function (error) {
                    var errorMessage = error;
                    if (errorMessage != null) {
                        _this.errorMessage = error.error.message;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.errorMessage = error.error.message;
                console.log(error);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
        //this._router.navigate(['/']);
    };
    AppComponent.prototype.onSubmitRegister = function () {
        var _this = this;
        console.log(this.usuario_registro);
        this._userService.register(this.usuario_registro).subscribe(function (response) {
            var user = response.user;
            _this.usuario_registro = user;
            if (!user._id) {
                _this.alertRegister = 'Error al registrarse';
            }
            else {
                _this.alertRegister = 'El registro se ha realizado correctamente, identificate con tu Rut: ' + _this.usuario_registro.rut;
                _this.usuario_registro = new _models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"]('', '', '', '', '', '');
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.alertRegister = error.error.message;
                console.log(error);
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var FormFieldPrefixSuffixExample = /** @class */ (function () {
    function FormFieldPrefixSuffixExample() {
        this.hide = true;
    }
    return FormFieldPrefixSuffixExample;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/buscar/buscar.component */ "./src/app/components/buscar/buscar.component.ts");
/* harmony import */ var _components_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/editar-usuario/editar-usuario.component */ "./src/app/components/editar-usuario/editar-usuario.component.ts");
/* harmony import */ var _components_lista_productos_lista_productos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/lista-productos/lista-productos.component */ "./src/app/components/lista-productos/lista-productos.component.ts");
/* harmony import */ var _components_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/crear-producto/crear-producto.component */ "./src/app/components/crear-producto/crear-producto.component.ts");
/* harmony import */ var _components_editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/editar-producto/editar-producto.component */ "./src/app/components/editar-producto/editar-producto.component.ts");
/* harmony import */ var _components_lista_ventas_lista_ventas_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/lista-ventas/lista-ventas.component */ "./src/app/components/lista-ventas/lista-ventas.component.ts");
/* harmony import */ var _components_crear_venta_crear_venta_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/crear-venta/crear-venta.component */ "./src/app/components/crear-venta/crear-venta.component.ts");
/* harmony import */ var _components_datos_venta_datos_venta_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/datos-venta/datos-venta.component */ "./src/app/components/datos-venta/datos-venta.component.ts");
/* harmony import */ var _components_editar_venta_editar_venta_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/editar-venta/editar-venta.component */ "./src/app/components/editar-venta/editar-venta.component.ts");
/* harmony import */ var _components_buscar_productos_buscar_productos_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/buscar-productos/buscar-productos.component */ "./src/app/components/buscar-productos/buscar-productos.component.ts");
/* harmony import */ var _components_buscar_ventas_buscar_ventas_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/buscar-ventas/buscar-ventas.component */ "./src/app/components/buscar-ventas/buscar-ventas.component.ts");
/* harmony import */ var _components_buscar_reportes_buscar_reportes_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/buscar-reportes/buscar-reportes.component */ "./src/app/components/buscar-reportes/buscar-reportes.component.ts");
/* harmony import */ var _components_inversion_inversion_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/inversion/inversion.component */ "./src/app/components/inversion/inversion.component.ts");
/* harmony import */ var _components_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/reportes/reportes.component */ "./src/app/components/reportes/reportes.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _components_crear_inversion_crear_inversion_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/crear-inversion/crear-inversion.component */ "./src/app/components/crear-inversion/crear-inversion.component.ts");
/* harmony import */ var _components_editar_inversion_editar_inversion_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/editar-inversion/editar-inversion.component */ "./src/app/components/editar-inversion/editar-inversion.component.ts");










Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a);
//Angular Material
















//Componentes Globales


//Componentes de Usuario

//Componentes de Productos



//Componentes de Ventas












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_28__["EditarUsuarioComponent"],
                _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_26__["InicioComponent"],
                _components_lista_productos_lista_productos_component__WEBPACK_IMPORTED_MODULE_29__["ListaProductosComponent"],
                _components_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_30__["CrearProductoComponent"],
                _components_lista_ventas_lista_ventas_component__WEBPACK_IMPORTED_MODULE_32__["ListaVentasComponent"],
                _components_crear_venta_crear_venta_component__WEBPACK_IMPORTED_MODULE_33__["CrearVentaComponent"],
                _components_editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_31__["EditarProductoComponent"],
                _components_datos_venta_datos_venta_component__WEBPACK_IMPORTED_MODULE_34__["DatosVentaComponent"],
                _components_editar_venta_editar_venta_component__WEBPACK_IMPORTED_MODULE_35__["EditarVentaComponent"],
                _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_27__["BuscarComponent"],
                _components_buscar_productos_buscar_productos_component__WEBPACK_IMPORTED_MODULE_36__["BuscarProductosComponent"],
                _components_buscar_ventas_buscar_ventas_component__WEBPACK_IMPORTED_MODULE_37__["BuscarVentasComponent"],
                _components_buscar_reportes_buscar_reportes_component__WEBPACK_IMPORTED_MODULE_38__["BuscarReportesComponent"],
                _components_inversion_inversion_component__WEBPACK_IMPORTED_MODULE_39__["InversionComponent"],
                _components_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_40__["ReportesComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_41__["LoadingComponent"],
                _components_crear_inversion_crear_inversion_component__WEBPACK_IMPORTED_MODULE_42__["CrearInversionComponent"],
                _components_editar_inversion_editar_inversion_component__WEBPACK_IMPORTED_MODULE_43__["EditarInversionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"]
            ],
            providers: [_app_routing__WEBPACK_IMPORTED_MODULE_5__["appRoutingProviders"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'es' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "./src/app/components/inicio/inicio.component.ts");
/* harmony import */ var _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buscar/buscar.component */ "./src/app/components/buscar/buscar.component.ts");
/* harmony import */ var _components_buscar_productos_buscar_productos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buscar-productos/buscar-productos.component */ "./src/app/components/buscar-productos/buscar-productos.component.ts");
/* harmony import */ var _components_buscar_ventas_buscar_ventas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buscar-ventas/buscar-ventas.component */ "./src/app/components/buscar-ventas/buscar-ventas.component.ts");
/* harmony import */ var _components_buscar_reportes_buscar_reportes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/buscar-reportes/buscar-reportes.component */ "./src/app/components/buscar-reportes/buscar-reportes.component.ts");
/* harmony import */ var _components_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/editar-usuario/editar-usuario.component */ "./src/app/components/editar-usuario/editar-usuario.component.ts");
/* harmony import */ var _components_lista_productos_lista_productos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/lista-productos/lista-productos.component */ "./src/app/components/lista-productos/lista-productos.component.ts");
/* harmony import */ var _components_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/crear-producto/crear-producto.component */ "./src/app/components/crear-producto/crear-producto.component.ts");
/* harmony import */ var _components_editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editar-producto/editar-producto.component */ "./src/app/components/editar-producto/editar-producto.component.ts");
/* harmony import */ var _components_lista_ventas_lista_ventas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/lista-ventas/lista-ventas.component */ "./src/app/components/lista-ventas/lista-ventas.component.ts");
/* harmony import */ var _components_crear_venta_crear_venta_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/crear-venta/crear-venta.component */ "./src/app/components/crear-venta/crear-venta.component.ts");
/* harmony import */ var _components_editar_venta_editar_venta_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editar-venta/editar-venta.component */ "./src/app/components/editar-venta/editar-venta.component.ts");
/* harmony import */ var _components_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reportes/reportes.component */ "./src/app/components/reportes/reportes.component.ts");
/* harmony import */ var _components_inversion_inversion_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/inversion/inversion.component */ "./src/app/components/inversion/inversion.component.ts");
/* harmony import */ var _components_crear_inversion_crear_inversion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/crear-inversion/crear-inversion.component */ "./src/app/components/crear-inversion/crear-inversion.component.ts");
/* harmony import */ var _components_editar_inversion_editar_inversion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/editar-inversion/editar-inversion.component */ "./src/app/components/editar-inversion/editar-inversion.component.ts");

//Import Globales





//Import Usuario

//import Producto



//import Venta



//import Reportes

//import Inversion



var appRoutes = [
    { path: '', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"] },
    { path: 'inicio', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"] },
    { path: 'productos', component: _components_lista_productos_lista_productos_component__WEBPACK_IMPORTED_MODULE_7__["ListaProductosComponent"] },
    { path: 'crear-producto', component: _components_crear_producto_crear_producto_component__WEBPACK_IMPORTED_MODULE_8__["CrearProductoComponent"] },
    { path: 'editar-producto/:id', component: _components_editar_producto_editar_producto_component__WEBPACK_IMPORTED_MODULE_9__["EditarProductoComponent"] },
    { path: 'mis-datos', component: _components_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_6__["EditarUsuarioComponent"] },
    { path: 'ventas', component: _components_lista_ventas_lista_ventas_component__WEBPACK_IMPORTED_MODULE_10__["ListaVentasComponent"] },
    { path: 'crear-venta', component: _components_crear_venta_crear_venta_component__WEBPACK_IMPORTED_MODULE_11__["CrearVentaComponent"] },
    { path: 'editar-venta/:id', component: _components_editar_venta_editar_venta_component__WEBPACK_IMPORTED_MODULE_12__["EditarVentaComponent"] },
    { path: 'buscar', component: _components_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_2__["BuscarComponent"] },
    { path: 'buscar-productos', component: _components_buscar_productos_buscar_productos_component__WEBPACK_IMPORTED_MODULE_3__["BuscarProductosComponent"] },
    { path: 'buscar-ventas', component: _components_buscar_ventas_buscar_ventas_component__WEBPACK_IMPORTED_MODULE_4__["BuscarVentasComponent"] },
    { path: 'buscar-reportes', component: _components_buscar_reportes_buscar_reportes_component__WEBPACK_IMPORTED_MODULE_5__["BuscarReportesComponent"] },
    { path: 'inversion', component: _components_inversion_inversion_component__WEBPACK_IMPORTED_MODULE_14__["InversionComponent"] },
    { path: 'reportes', component: _components_reportes_reportes_component__WEBPACK_IMPORTED_MODULE_13__["ReportesComponent"] },
    { path: 'crear-inversion', component: _components_crear_inversion_crear_inversion_component__WEBPACK_IMPORTED_MODULE_15__["CrearInversionComponent"] },
    { path: 'editar-inversion/:id', component: _components_editar_inversion_editar_inversion_component__WEBPACK_IMPORTED_MODULE_16__["EditarInversionComponent"] },
    { path: '**', component: _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_1__["InicioComponent"] },
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true });


/***/ }),

/***/ "./src/app/components/buscar-productos/buscar-productos.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/buscar-productos/buscar-productos.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2FyLXByb2R1Y3Rvcy9idXNjYXItcHJvZHVjdG9zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/buscar-productos/buscar-productos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/buscar-productos/buscar-productos.component.ts ***!
  \***************************************************************************/
/*! exports provided: BuscarProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarProductosComponent", function() { return BuscarProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");









var BuscarProductosComponent = /** @class */ (function () {
    function BuscarProductosComponent(_route, _router, _userService, _productService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._productService = _productService;
        this.id_nro = [];
        this.displayedColumns = ['nro', 'nombre', 'precio_compra', 'precio_venta', 'stock', 'image'];
        this.titulo = "Buscar Productos";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
    }
    BuscarProductosComponent.prototype.ngOnInit = function () {
        console.log('Componente de productos cargado!');
        //Conseguir el listado de productos
        this.getProductos();
    };
    BuscarProductosComponent.prototype.getProductos = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._productService.getAllProductos(_this.token).subscribe(function (response) {
                if (!response.productos) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.productos = response.productos;
                    _this.transactions = _this.productos;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.transactions);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    console.log(error);
                }
            });
        });
    };
    BuscarProductosComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BuscarProductosComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
    ], BuscarProductosComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false })
    ], BuscarProductosComponent.prototype, "paginator", void 0);
    BuscarProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-productos',
            template: __webpack_require__(/*! raw-loader!./buscar-productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buscar-productos/buscar-productos.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]],
            styles: [__webpack_require__(/*! ./buscar-productos.component.css */ "./src/app/components/buscar-productos/buscar-productos.component.css")]
        })
    ], BuscarProductosComponent);
    return BuscarProductosComponent;
}());



/***/ }),

/***/ "./src/app/components/buscar-reportes/buscar-reportes.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/buscar-reportes/buscar-reportes.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2FyLXJlcG9ydGVzL2J1c2Nhci1yZXBvcnRlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/buscar-reportes/buscar-reportes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/buscar-reportes/buscar-reportes.component.ts ***!
  \*************************************************************************/
/*! exports provided: BuscarReportesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarReportesComponent", function() { return BuscarReportesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuscarReportesComponent = /** @class */ (function () {
    function BuscarReportesComponent() {
        this.titulo = "Buscar Reportes";
    }
    BuscarReportesComponent.prototype.ngOnInit = function () {
    };
    BuscarReportesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-reportes',
            template: __webpack_require__(/*! raw-loader!./buscar-reportes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buscar-reportes/buscar-reportes.component.html"),
            styles: [__webpack_require__(/*! ./buscar-reportes.component.css */ "./src/app/components/buscar-reportes/buscar-reportes.component.css")]
        })
    ], BuscarReportesComponent);
    return BuscarReportesComponent;
}());



/***/ }),

/***/ "./src/app/components/buscar-ventas/buscar-ventas.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/buscar-ventas/buscar-ventas.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2FyLXZlbnRhcy9idXNjYXItdmVudGFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/buscar-ventas/buscar-ventas.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/buscar-ventas/buscar-ventas.component.ts ***!
  \*********************************************************************/
/*! exports provided: BuscarVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarVentasComponent", function() { return BuscarVentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");









var BuscarVentasComponent = /** @class */ (function () {
    function BuscarVentasComponent(_route, _router, _userService, _ventaService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._ventaService = _ventaService;
        this.displayedColumns = ['fecha', 'estado', 'precio_total', 'opciones'];
        this.titulo = "Buscar Ventas";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    BuscarVentasComponent.prototype.ngOnInit = function () {
        console.log('Componente de ventas cargado!');
        this.getVentas();
    };
    BuscarVentasComponent.prototype.getVentas = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._ventaService.getVentas(_this.token).subscribe(function (response) {
                if (!response.ventas) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.ventas = response.ventas;
                    _this.transactions = _this.ventas;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.transactions);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.paginator._intl.itemsPerPageLabel = 'Ventas por pagina';
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    BuscarVentasComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BuscarVentasComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: false })
    ], BuscarVentasComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: false })
    ], BuscarVentasComponent.prototype, "paginator", void 0);
    BuscarVentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-ventas',
            template: __webpack_require__(/*! raw-loader!./buscar-ventas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buscar-ventas/buscar-ventas.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"]],
            styles: [__webpack_require__(/*! ./buscar-ventas.component.css */ "./src/app/components/buscar-ventas/buscar-ventas.component.css")]
        })
    ], BuscarVentasComponent);
    return BuscarVentasComponent;
}());



/***/ }),

/***/ "./src/app/components/buscar/buscar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/buscar/buscar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVzY2FyL2J1c2Nhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/buscar/buscar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/buscar/buscar.component.ts ***!
  \*******************************************************/
/*! exports provided: BuscarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarComponent", function() { return BuscarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BuscarComponent = /** @class */ (function () {
    function BuscarComponent() {
        this.titulo = "Buscar";
    }
    BuscarComponent.prototype.ngOnInit = function () {
    };
    BuscarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar',
            template: __webpack_require__(/*! raw-loader!./buscar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/buscar/buscar.component.html"),
            styles: [__webpack_require__(/*! ./buscar.component.css */ "./src/app/components/buscar/buscar.component.css")]
        })
    ], BuscarComponent);
    return BuscarComponent;
}());



/***/ }),

/***/ "./src/app/components/crear-inversion/crear-inversion.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/crear-inversion/crear-inversion.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXItaW52ZXJzaW9uL2NyZWFyLWludmVyc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/crear-inversion/crear-inversion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/crear-inversion/crear-inversion.component.ts ***!
  \*************************************************************************/
/*! exports provided: CrearInversionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearInversionComponent", function() { return CrearInversionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_inversion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inversion.service */ "./src/app/services/inversion.service.ts");
/* harmony import */ var _models_inversion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/inversion */ "./src/app/models/inversion.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CrearInversionComponent = /** @class */ (function () {
    function CrearInversionComponent(_userService, _inversionService, _router) {
        this._userService = _userService;
        this._inversionService = _inversionService;
        this._router = _router;
        this.loading = false;
        this.titulo = "Inversión";
        this.inversion_realizada = new _models_inversion__WEBPACK_IMPORTED_MODULE_4__["Inversion"](new Date(), 0, '');
    }
    CrearInversionComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    };
    CrearInversionComponent.prototype.onSubmit = function () {
        var _this = this;
        this._inversionService.crearInversion(this.token, this.inversion_realizada).subscribe(function (response) {
            if (!response.inversion) {
                _this.alertMessage = "Error en el servidor";
            }
            else {
                _this.ejecutar();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
    };
    CrearInversionComponent.prototype.ejecutar = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.alertMessage = "La inversión se ha guardado correctamente";
            _this.inversion_realizada = new _models_inversion__WEBPACK_IMPORTED_MODULE_4__["Inversion"](new Date(), 0, '');
            //this._router.navigate(['/inversion']);
        }, 1000);
    };
    CrearInversionComponent.ctorParameters = function () { return [
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_inversion_service__WEBPACK_IMPORTED_MODULE_3__["InversionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CrearInversionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crear-inversion',
            template: __webpack_require__(/*! raw-loader!./crear-inversion.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/crear-inversion/crear-inversion.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_inversion_service__WEBPACK_IMPORTED_MODULE_3__["InversionService"]],
            styles: [__webpack_require__(/*! ./crear-inversion.component.css */ "./src/app/components/crear-inversion/crear-inversion.component.css")]
        })
    ], CrearInversionComponent);
    return CrearInversionComponent;
}());



/***/ }),

/***/ "./src/app/components/crear-producto/crear-producto.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/crear-producto/crear-producto.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXItcHJvZHVjdG8vY3JlYXItcHJvZHVjdG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/crear-producto/crear-producto.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/crear-producto/crear-producto.component.ts ***!
  \***********************************************************************/
/*! exports provided: CrearProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoComponent", function() { return CrearProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/producto */ "./src/app/models/producto.ts");







var CrearProductoComponent = /** @class */ (function () {
    function CrearProductoComponent(_route, _router, _userService, _productService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._productService = _productService;
        this.titulo = 'Añadir Producto';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.producto = new _models_producto__WEBPACK_IMPORTED_MODULE_6__["Producto"]('', 0, 0, 0, '');
    }
    CrearProductoComponent.prototype.ngOnInit = function () {
        console.log('Componente de crear-productos cargado!');
    };
    CrearProductoComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.producto);
        this._productService.crearProducto(this.token, this.producto).subscribe(function (response) {
            if (!response.producto) {
                _this.alertMessage = "Error en el servidor";
            }
            else {
                _this.alertMessage = "El producto se ha creado correctamente";
                _this.producto = response.producto;
                _this._router.navigate(['/editar-producto', response.producto._id]);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
    };
    CrearProductoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
    ]; };
    CrearProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crear-producto',
            template: __webpack_require__(/*! raw-loader!./crear-producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/crear-producto/crear-producto.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]],
            styles: [__webpack_require__(/*! ./crear-producto.component.css */ "./src/app/components/crear-producto/crear-producto.component.css")]
        })
    ], CrearProductoComponent);
    return CrearProductoComponent;
}());



/***/ }),

/***/ "./src/app/components/crear-venta/crear-venta.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/crear-venta/crear-venta.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXItdmVudGEvY3JlYXItdmVudGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/crear-venta/crear-venta.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/crear-venta/crear-venta.component.ts ***!
  \*****************************************************************/
/*! exports provided: CrearVentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearVentaComponent", function() { return CrearVentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");










var CrearVentaComponent = /** @class */ (function () {
    function CrearVentaComponent(_route, _router, _userService, _ventaService, _productService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._ventaService = _ventaService;
        this._productService = _productService;
        this.foros = []; //Arreglo de productos con sus respectivos datos
        this.prods = []; //Productos en la venta(no ocupando ahora)
        this.id_productos = []; //Guarda el id de productos
        this.prodCantidad = []; //Guarda la cantidad de productos por producto
        this.prodPrecio = []; //Guarda el precio de los productos por producto
        this.cantidad_ing = [1];
        this.displayedColumns = ['image', 'nombre', 'precio_venta', 'stock', 'cantidad', 'opciones'];
        this.titulo = 'Añadir Venta';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        this.nro = 0;
        this.total_productos = 0;
        this.total_precio = 0;
    }
    CrearVentaComponent.prototype.ngOnInit = function () {
        console.log('Componente de crear-productos cargado!');
        this.getProductos();
    };
    CrearVentaComponent.prototype.getProductos = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._productService.getAllProductos(_this.token).subscribe(function (response) {
                if (!response.productos) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.productos = response.productos;
                    _this.transactions = _this.productos;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.transactions);
                    for (var i = 0; i < _this.productos.length; i++) {
                        _this.cantidad_ing[i] = 1;
                    }
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    CrearVentaComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CrearVentaComponent.prototype.anadirProducto = function (id, nombre, precio, cantidad, cant_vendidad) {
        this.pasarid = id;
        this.pasarnombre = nombre;
        this.pasarprecio = precio;
        this.pasarcantidad = cantidad;
        this.cantidad_vendida = cant_vendidad;
        this.nro++;
        var precio_total = precio;
        if (this.nro == 1) {
            this.foros.push({ id: id, nombre: nombre, precio: precio, cantidad: cantidad, cant_vendidad: cant_vendidad, precio_total: precio_total });
            // this.prods.push({id, nombre, cant_vendidad, precio_total});
            this.id_productos.push(id);
            this.prodCantidad.push(cant_vendidad);
            this.prodPrecio.push(precio_total);
            this.TotalProductos();
            this.Total_Precio(precio);
        }
        else {
            for (var j = 0; j < this.foros.length; j++) {
                if (this.pasarid == this.foros[j]["id"]) {
                    this.foros[j]["cant_vendidad"] = this.foros[j]["cant_vendidad"] + cant_vendidad;
                    this.foros[j]["precio_total"] = this.foros[j]["cant_vendidad"] * precio;
                    this.prodCantidad[j] = this.prodCantidad[j] + cant_vendidad;
                    this.prodPrecio[j] = this.prodPrecio[j] + precio_total;
                    this.TotalProductos();
                    this.Total_Precio(precio);
                    this.nro = 0;
                }
            }
            if (this.nro == 0) {
                this.nro++;
            }
            else {
                this.foros.push({ id: id, nombre: nombre, precio: precio, cantidad: cantidad, cant_vendidad: cant_vendidad, precio_total: precio_total });
                this.id_productos.push(id);
                this.prodCantidad.push(cant_vendidad);
                this.prodPrecio.push(precio_total);
                this.TotalProductos();
                this.Total_Precio(precio);
                this.nro++;
            }
        }
    };
    CrearVentaComponent.prototype.TotalProductos = function () {
        this.total_productos = this.total_productos + (this.cantidad_vendida * 1);
    };
    CrearVentaComponent.prototype.Total_Precio = function (precio) {
        if (this.total_precio != null) {
            this.total_precio = this.total_precio + precio * this.cantidad_vendida;
        }
    };
    CrearVentaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_venta_service__WEBPACK_IMPORTED_MODULE_8__["VentaService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
    ], CrearVentaComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false })
    ], CrearVentaComponent.prototype, "paginator", void 0);
    CrearVentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crear-venta',
            template: __webpack_require__(/*! raw-loader!./crear-venta.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/crear-venta/crear-venta.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_8__["VentaService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]],
            styles: [__webpack_require__(/*! ./crear-venta.component.css */ "./src/app/components/crear-venta/crear-venta.component.css")]
        })
    ], CrearVentaComponent);
    return CrearVentaComponent;
}());



/***/ }),

/***/ "./src/app/components/datos-venta/datos-venta.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/datos-venta/datos-venta.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF0b3MtdmVudGEvZGF0b3MtdmVudGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/datos-venta/datos-venta.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/datos-venta/datos-venta.component.ts ***!
  \*****************************************************************/
/*! exports provided: DatosVentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosVentaComponent", function() { return DatosVentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _models_venta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/venta */ "./src/app/models/venta.ts");








var DatosVentaComponent = /** @class */ (function () {
    function DatosVentaComponent(_route, _router, _userService, _productService, _ventaService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._productService = _productService;
        this._ventaService = _ventaService;
        this.selected = 'Vendido';
        this.array = [];
        this.id_prods = [];
        this.cant_prods = [];
        this.precios_prods = [];
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.fecha_ = new Date();
    }
    DatosVentaComponent.prototype.ngOnChanges = function () {
        this.venta = new _models_venta__WEBPACK_IMPORTED_MODULE_7__["Venta"](this.fecha_, this.selected, '', this.total_productos, this.total_precio, this.id_prods, this.cant_prods, this.precios_prods);
    };
    DatosVentaComponent.prototype.ngOnInit = function () {
        console.log("Componente hijo datos-venta cargado");
    };
    DatosVentaComponent.prototype.refresh = function () {
        this.venta = new _models_venta__WEBPACK_IMPORTED_MODULE_7__["Venta"](this.fecha_, '', '', 0, 0, [], [], []);
        window.location.reload();
    };
    //Eliminar fila del arreglo de productos
    DatosVentaComponent.prototype.eliminarFila = function (index) {
        console.log(index);
        this._router.navigate(['/crear-venta']);
    };
    //Guardando la Venta
    DatosVentaComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.venta.cant_productos == 0) {
            this.alertMessage = "No se han ingresado productos!";
            return 0;
        }
        this._ventaService.addVentas(this.token, this.venta).subscribe(function (response) {
            if (!response.venta) {
                _this.alertMessage = "Error en el servidor";
            }
            else {
                _this.alertMessage = "La Venta se ha realizado correctamente";
                _this.venta = response.venta;
                console.log(_this.venta);
                var _loop_1 = function (i) {
                    _this._productService.getProducto(_this.token, _this.venta.productos[i]).subscribe(function (response) {
                        var productos_venta = response;
                        var cantidad = _this.venta.prodCantidad[i];
                        productos_venta.producto.stock = productos_venta.producto.stock - cantidad;
                        _this._productService.editarProducto(_this.token, _this.venta.productos[i], productos_venta.producto).subscribe(function (response) {
                            console.log(response);
                        });
                    });
                };
                for (var i = 0; i < _this.venta.productos.length; i++) {
                    _loop_1(i);
                }
                _this._router.navigate(['/ventas']);
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
    };
    DatosVentaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_venta_service__WEBPACK_IMPORTED_MODULE_6__["VentaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "id_producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "nombre_producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "precio_producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "cant_producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "cant_vendida", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "nro_producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "array", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "total_productos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "total_precio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "id_prods", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "cant_prods", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DatosVentaComponent.prototype, "precios_prods", void 0);
    DatosVentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datos-venta',
            template: __webpack_require__(/*! raw-loader!./datos-venta.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/datos-venta/datos-venta.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_6__["VentaService"]],
            styles: [__webpack_require__(/*! ./datos-venta.component.css */ "./src/app/components/datos-venta/datos-venta.component.css")]
        })
    ], DatosVentaComponent);
    return DatosVentaComponent;
}());



/***/ }),

/***/ "./src/app/components/editar-inversion/editar-inversion.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/editar-inversion/editar-inversion.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFyLWludmVyc2lvbi9lZGl0YXItaW52ZXJzaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/editar-inversion/editar-inversion.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/editar-inversion/editar-inversion.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditarInversionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarInversionComponent", function() { return EditarInversionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_inversion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/inversion.service */ "./src/app/services/inversion.service.ts");
/* harmony import */ var _models_inversion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/inversion */ "./src/app/models/inversion.ts");







var EditarInversionComponent = /** @class */ (function () {
    function EditarInversionComponent(_route, _router, _userService, _inversionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._inversionService = _inversionService;
        this.titulo = 'Editar Inversion';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.inversion_realizada = new _models_inversion__WEBPACK_IMPORTED_MODULE_6__["Inversion"](new Date(), 0, '');
        this.is_edit = true;
    }
    EditarInversionComponent.prototype.ngOnInit = function () {
        this.getInversion();
    };
    EditarInversionComponent.prototype.getInversion = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._inversionService.getInversion(_this.token, id).subscribe(function (response) {
                if (!response.inversion) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.inversion_realizada = response.inversion;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    EditarInversionComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._inversionService.editarInversion(_this.token, id, _this.inversion_realizada).subscribe(function (response) {
                _this.inversion_realizada = response.inversion;
                if (!response.inversion) {
                    _this.alertMessage = "Error en el servidor";
                }
                else {
                    _this.alertMessage = "La inversion se ha actualizado correctamente";
                    console.log("inversion actualizada");
                    _this._router.navigate(['/inversion']);
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    _this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    EditarInversionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_inversion_service__WEBPACK_IMPORTED_MODULE_5__["InversionService"] }
    ]; };
    EditarInversionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-inversion',
            template: __webpack_require__(/*! raw-loader!../../components/crear-inversion/crear-inversion.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/crear-inversion/crear-inversion.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_inversion_service__WEBPACK_IMPORTED_MODULE_5__["InversionService"]],
            styles: [__webpack_require__(/*! ./editar-inversion.component.css */ "./src/app/components/editar-inversion/editar-inversion.component.css")]
        })
    ], EditarInversionComponent);
    return EditarInversionComponent;
}());



/***/ }),

/***/ "./src/app/components/editar-producto/editar-producto.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/editar-producto/editar-producto.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFyLXByb2R1Y3RvL2VkaXRhci1wcm9kdWN0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/editar-producto/editar-producto.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/editar-producto/editar-producto.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditarProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoComponent", function() { return EditarProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/producto */ "./src/app/models/producto.ts");








var EditarProductoComponent = /** @class */ (function () {
    function EditarProductoComponent(_route, _router, _userService, _productService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._productService = _productService;
        this._uploadService = _uploadService;
        this.titulo = 'Editar Producto';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.producto = new _models_producto__WEBPACK_IMPORTED_MODULE_7__["Producto"]('', 0, 0, 0, '');
        this.is_edit = true;
    }
    EditarProductoComponent.prototype.ngOnInit = function () {
        console.log('Componente de editar-productos cargado!');
        //llamar  metodo del api para sacar un producto en base a su id getproducto
        this.getProducto();
    };
    EditarProductoComponent.prototype.getProducto = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productService.getProducto(_this.token, id).subscribe(function (response) {
                if (!response.producto) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.producto = response.producto;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    EditarProductoComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.producto);
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._productService.editarProducto(_this.token, id, _this.producto).subscribe(function (response) {
                _this.producto = response.producto;
                if (!response.producto) {
                    _this.alertMessage = "Error en el servidor";
                }
                else {
                    _this.alertMessage = "El producto se ha actualizado correctamente";
                    if (!_this.filesToUpload) {
                        _this._router.navigate(['/productos']);
                    }
                    else {
                        //Subir la imagen del artista
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-producto/' + id, [], _this.filesToUpload, _this.token, 'image')
                            .then(function (result) {
                            _this._router.navigate(['/productos']);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    _this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    EditarProductoComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EditarProductoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"] }
    ]; };
    EditarProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-producto',
            template: __webpack_require__(/*! raw-loader!../crear-producto/crear-producto.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/crear-producto/crear-producto.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]],
            styles: [__webpack_require__(/*! ./editar-producto.component.css */ "./src/app/components/editar-producto/editar-producto.component.css")]
        })
    ], EditarProductoComponent);
    return EditarProductoComponent;
}());



/***/ }),

/***/ "./src/app/components/editar-usuario/editar-usuario.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/editar-usuario/editar-usuario.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFyLXVzdWFyaW8vZWRpdGFyLXVzdWFyaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/editar-usuario/editar-usuario.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/editar-usuario/editar-usuario.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarUsuarioComponent", function() { return EditarUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");



var EditarUsuarioComponent = /** @class */ (function () {
    function EditarUsuarioComponent(_userService) {
        this._userService = _userService;
        this.loading = false;
        this.titulo = "Actualizar mis datos";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.usuario = this.identity;
    }
    EditarUsuarioComponent.prototype.ngOnInit = function () {
        console.log('Componente editar-usuario cargado');
    };
    EditarUsuarioComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.updateUser(this.usuario).subscribe(function (response) {
            if (!response.user) {
                _this.alertMessage = 'El usuario no se ha actualizado';
            }
            else {
                _this.ejecutar();
                localStorage.setItem('identity', JSON.stringify(_this.usuario));
                document.getElementById("identity_name").innerHTML = _this.usuario.nombre + ' ' + _this.usuario.apellido;
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error._body);
                _this.alertMessage = error.error.message;
                console.log(error);
            }
        });
    };
    EditarUsuarioComponent.prototype.ejecutar = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.alertMessage = 'Datos actualizados correctamente';
        }, 1000);
    };
    EditarUsuarioComponent.ctorParameters = function () { return [
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    EditarUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-usuario',
            template: __webpack_require__(/*! raw-loader!./editar-usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/editar-usuario/editar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./editar-usuario.component.css */ "./src/app/components/editar-usuario/editar-usuario.component.css")]
        })
    ], EditarUsuarioComponent);
    return EditarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/components/editar-venta/editar-venta.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/editar-venta/editar-venta.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGFyLXZlbnRhL2VkaXRhci12ZW50YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/editar-venta/editar-venta.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/editar-venta/editar-venta.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditarVentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarVentaComponent", function() { return EditarVentaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var src_app_models_venta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/venta */ "./src/app/models/venta.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");








var EditarVentaComponent = /** @class */ (function () {
    function EditarVentaComponent(_route, _router, _userService, _ventaService, _productService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._ventaService = _ventaService;
        this._productService = _productService;
        this.producto = [];
        this.id_productos = [];
        this.prodCantidad = [];
        this.prodPrecio = [];
        this.titulo = 'Detalle de Venta';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.is_edit = true;
        this.venta = new src_app_models_venta__WEBPACK_IMPORTED_MODULE_6__["Venta"](new Date(), '', '', 0, 0, [], [], []);
    }
    EditarVentaComponent.prototype.ngOnInit = function () {
        console.log('Componente de editar-productos cargado!');
        this.getVenta();
    };
    EditarVentaComponent.prototype.getVenta = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._ventaService.getVenta(_this.token, id).subscribe(function (response) {
                if (!response.venta) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.venta = response.venta;
                    _this.selected = _this.venta.estado;
                    _this.fecha_ = _this.venta.fecha;
                    _this.id_productos = _this.venta.productos;
                    _this.prodCantidad = _this.venta.prodCantidad;
                    _this.prodPrecio = _this.venta.prodPrecio;
                    console.log(_this.prodCantidad);
                    _this.getProductos();
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    console.log(error);
                }
            });
        });
    };
    EditarVentaComponent.prototype.getProductos = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var id = this_1.id_productos[i];
            this_1._productService.getProducto(this_1.token, id).subscribe(function (response) {
                if (!response.producto) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.producto[i] = response.producto.nombre;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    console.log(error);
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.id_productos.length; i++) {
            _loop_1(i);
        }
    };
    EditarVentaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] }
    ]; };
    EditarVentaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editar-venta',
            template: __webpack_require__(/*! raw-loader!./editar-venta.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/editar-venta/editar-venta.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"]],
            styles: [__webpack_require__(/*! ./editar-venta.component.css */ "./src/app/components/editar-venta/editar-venta.component.css")]
        })
    ], EditarVentaComponent);
    return EditarVentaComponent;
}());



/***/ }),

/***/ "./src/app/components/inicio/inicio.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\r\n    padding-top: 56px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/inicio/inicio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");



var InicioComponent = /** @class */ (function () {
    function InicioComponent(_userService) {
        this._userService = _userService;
        this.titulo = "Inicio";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.usuario = this.identity;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.ctorParameters = function () { return [
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inicio/inicio.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/components/inicio/inicio.component.css")]
        })
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/components/inversion/inversion.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/inversion/inversion.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZXJzaW9uL2ludmVyc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/inversion/inversion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/inversion/inversion.component.ts ***!
  \*************************************************************/
/*! exports provided: InversionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversionComponent", function() { return InversionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_inversion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/inversion.service */ "./src/app/services/inversion.service.ts");









var InversionComponent = /** @class */ (function () {
    function InversionComponent(_route, _router, _userService, _inversionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._inversionService = _inversionService;
        this.displayedColumns = ['fecha', 'inversion', 'comentarios', 'opciones'];
        this.titulo = "Inversión";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        this.loading = true;
        this.comentario = false;
    }
    InversionComponent.prototype.ngOnInit = function () {
        console.log('Componente de inversiones cargado!');
        this.getInversiones();
    };
    InversionComponent.prototype.getInversiones = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._inversionService.getInversiones(_this.token).subscribe(function (response) {
                if (!response.inversiones) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.inversiones = response.inversiones;
                    _this.transactions = _this.inversiones;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.transactions);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.paginator._intl.itemsPerPageLabel = 'Inversiones por pagina';
                    _this.loading = false;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    InversionComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    InversionComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    InversionComponent.prototype.onCancelInversion = function () {
        this.confirmado = null;
    };
    InversionComponent.prototype.onDeleteInversion = function (id) {
        var _this = this;
        this._inversionService.eliminarInversion(this.token, id).subscribe(function (response) {
            if (!response.inversion) {
                alert('Error en el servidor');
            }
            else {
                _this.getInversiones();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
    };
    InversionComponent.prototype.mostrarComentario = function () {
        this.comentario = true;
    };
    InversionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_inversion_service__WEBPACK_IMPORTED_MODULE_8__["InversionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
    ], InversionComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false })
    ], InversionComponent.prototype, "paginator", void 0);
    InversionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inversion',
            template: __webpack_require__(/*! raw-loader!./inversion.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inversion/inversion.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_inversion_service__WEBPACK_IMPORTED_MODULE_8__["InversionService"]],
            styles: [__webpack_require__(/*! ./inversion.component.css */ "./src/app/components/inversion/inversion.component.css")]
        })
    ], InversionComponent);
    return InversionComponent;
}());



/***/ }),

/***/ "./src/app/components/lista-productos/lista-productos.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/lista-productos/lista-productos.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEtcHJvZHVjdG9zL2xpc3RhLXByb2R1Y3Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/lista-productos/lista-productos.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/lista-productos/lista-productos.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListaProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductosComponent", function() { return ListaProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_producto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/producto.service */ "./src/app/services/producto.service.ts");









var ListaProductosComponent = /** @class */ (function () {
    function ListaProductosComponent(_route, _router, _userService, _productService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._productService = _productService;
        this.displayedColumns = ['nombre', 'precio_compra', 'precio_venta', 'stock', 'image', 'opciones'];
        this.titulo = 'Productos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_6__["GLOBAL"].url;
        this.loading = true;
    }
    ListaProductosComponent.prototype.ngOnInit = function () {
        console.log('Componente de productos cargado!');
        //Conseguir el listado de productos
        this.getProductos();
    };
    //Metodo para obtener productos de la BD
    ListaProductosComponent.prototype.getProductos = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._productService.getAllProductos(_this.token).subscribe(function (response) {
                if (!response.productos) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.productos = response.productos;
                    _this.transactions = _this.productos;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.transactions);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.paginator._intl.itemsPerPageLabel = 'Productos por pagina';
                    _this.loading = false;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    ListaProductosComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListaProductosComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    ListaProductosComponent.prototype.onCancelProducto = function () {
        this.confirmado = null;
    };
    ListaProductosComponent.prototype.onDeleteProducto = function (id) {
        var _this = this;
        this._productService.eliminarProducto(this.token, id).subscribe(function (response) {
            if (!response.producto) {
                //console.log(response);
                alert('Error en el servidor');
            }
            else {
                _this.getProductos();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                //this.alertMessage = error.error.message;
                console.log(error);
            }
        });
    };
    ListaProductosComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
    ], ListaProductosComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: false })
    ], ListaProductosComponent.prototype, "paginator", void 0);
    ListaProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-productos',
            template: __webpack_require__(/*! raw-loader!./lista-productos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/lista-productos/lista-productos.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_producto_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]],
            styles: [__webpack_require__(/*! ./lista-productos.component.css */ "./src/app/components/lista-productos/lista-productos.component.css")]
        })
    ], ListaProductosComponent);
    return ListaProductosComponent;
}());



/***/ }),

/***/ "./src/app/components/lista-ventas/lista-ventas.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/lista-ventas/lista-ventas.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGEtdmVudGFzL2xpc3RhLXZlbnRhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/lista-ventas/lista-ventas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/lista-ventas/lista-ventas.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListaVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaVentasComponent", function() { return ListaVentasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");









var ListaVentasComponent = /** @class */ (function () {
    function ListaVentasComponent(_route, _router, _userService, _ventaService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._ventaService = _ventaService;
        this.displayedColumns = ['fecha', 'estado', 'precio_total', 'opciones'];
        this.titulo = 'Ventas';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.loading = true;
    }
    ListaVentasComponent.prototype.ngOnInit = function () {
        console.log('Componente de ventas cargado!');
        this.getVentas();
    };
    ListaVentasComponent.prototype.getVentas = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._ventaService.getVentas(_this.token).subscribe(function (response) {
                if (!response.ventas) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.ventas = response.ventas;
                    _this.transactions = _this.ventas;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.transactions);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.paginator._intl.itemsPerPageLabel = 'Ventas por pagina';
                    _this.loading = false;
                }
            }, function (error) {
                var errorMessage = error;
                if (errorMessage != null) {
                    //this.alertMessage = error.error.message;
                    console.log(error);
                }
            });
        });
    };
    ListaVentasComponent.prototype.onDeleteConfirm = function (id) {
        this.confirmado = id;
    };
    ListaVentasComponent.prototype.onCancelVenta = function () {
        this.confirmado = null;
    };
    ListaVentasComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListaVentasComponent.prototype.onDeleteVenta = function (id) {
        var _this = this;
        this._ventaService.deleteVenta(this.token, id).subscribe(function (response) {
            if (!response.venta) {
                alert('Error en el servidor');
            }
            else {
                _this.getVentas();
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
    };
    ListaVentasComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: false })
    ], ListaVentasComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"], { static: false })
    ], ListaVentasComponent.prototype, "paginator", void 0);
    ListaVentasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-ventas',
            template: __webpack_require__(/*! raw-loader!./lista-ventas.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/lista-ventas/lista-ventas.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_5__["VentaService"]],
            styles: [__webpack_require__(/*! ./lista-ventas.component.css */ "./src/app/components/lista-ventas/lista-ventas.component.css")]
        })
    ], ListaVentasComponent);
    return ListaVentasComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/loading/loading.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n\r\nbody {\r\n    background-color: black;\r\n    color: white !important;\r\n}\r\n\r\nhr {\r\n    border-color: white;\r\n}\r\n\r\n.puntero {\r\n    cursor: pointer;\r\n}\r\n\r\n.img-circle {\r\n    border-radius: 100%;\r\n    width: 150px;\r\n}\r\n\r\n.card-title,\r\n.card-text {\r\n    color: black;\r\n}\r\n\r\n.badge {\r\n    margin-left: 5px;\r\n}\r\n\r\n.btn-outline-success {\r\n    margin-left: 5px;\r\n}\r\n\r\n.img-thumb {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n/* Animaciones */\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.fast {\r\n    -webkit-animation-duration: 0.4s;\r\n    animation-duration: 0.4s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeIn {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.fadeIn {\r\n    -webkit-animation-name: fadeIn;\r\n            animation-name: fadeIn;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucHVudGVybyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWctY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlLFxyXG4uY2FyZC10ZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5pbWctdGh1bWIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBBbmltYWNpb25lcyAqL1xyXG5cclxuLmFuaW1hdGVkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmZhZGVJbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/loading/loading.component.css")]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/reportes/reportes.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/reportes/reportes.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0ZXMvcmVwb3J0ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/reportes/reportes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/reportes/reportes.component.ts ***!
  \***********************************************************/
/*! exports provided: ReportesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesComponent", function() { return ReportesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_inversion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/inversion.service */ "./src/app/services/inversion.service.ts");
/* harmony import */ var _services_venta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/venta.service */ "./src/app/services/venta.service.ts");







var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(_route, _router, _userService, _ventaService, _inversionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._ventaService = _ventaService;
        this._inversionService = _inversionService;
        this.fecha_inicio = new Date().toISOString();
        this.fecha_termino = new Date().toISOString();
        this.titulo = 'Reportes';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
        this.mostrar = false;
        this.total_inversion = 0;
        this.total_ventas = 0;
        this.cant_inversiones = 0;
        this.cant_ventas = 0;
        this.ganancias = 0;
        this.loading = false;
    }
    ReportesComponent.prototype.ngOnInit = function () {
    };
    ReportesComponent.prototype.consultar = function () {
        var _this = this;
        this.borrarValores();
        this.ejecutar();
        //obteniendo total de inversion
        this._inversionService.obtenerInverionesFecha(this.token, this.fecha_inicio, this.fecha_termino).subscribe(function (response) {
            _this.inversion = response.inversiones;
            for (var i = 0; i < _this.inversion.length; i++) {
                _this.total_inversion = _this.total_inversion + _this.inversion[i].inversion;
            }
            _this.cant_inversiones = _this.inversion.length;
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
        this._ventaService.obtenerVentasFecha(this.token, this.fecha_inicio, this.fecha_termino).subscribe(function (response) {
            _this.ventas = response.ventas;
            console.log(_this.ventas);
            for (var i = 0; i < _this.ventas.length; i++) {
                _this.total_ventas = _this.total_ventas + _this.ventas[i].precio_total;
            }
            _this.cant_ventas = _this.ventas.length;
            _this.ganancias = _this.total_ventas - _this.total_inversion;
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                console.log(error);
            }
        });
    };
    ReportesComponent.prototype.ejecutar = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.mostrar = true;
        }, 1500);
    };
    ReportesComponent.prototype.borrarValores = function () {
        this.total_inversion = 0;
        this.total_ventas = 0;
        this.cant_inversiones = 0;
        this.cant_ventas = 0;
        this.ganancias = 0;
    };
    ReportesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _services_venta_service__WEBPACK_IMPORTED_MODULE_6__["VentaService"] },
        { type: _services_inversion_service__WEBPACK_IMPORTED_MODULE_5__["InversionService"] }
    ]; };
    ReportesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! raw-loader!./reportes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/reportes/reportes.component.html"),
            providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_inversion_service__WEBPACK_IMPORTED_MODULE_5__["InversionService"], _services_venta_service__WEBPACK_IMPORTED_MODULE_6__["VentaService"]],
            styles: [__webpack_require__(/*! ./reportes.component.css */ "./src/app/components/reportes/reportes.component.css")]
        })
    ], ReportesComponent);
    return ReportesComponent;
}());



/***/ }),

/***/ "./src/app/models/inversion.ts":
/*!*************************************!*\
  !*** ./src/app/models/inversion.ts ***!
  \*************************************/
/*! exports provided: Inversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inversion", function() { return Inversion; });
var Inversion = /** @class */ (function () {
    function Inversion(fecha, inversion, comentarios) {
        this.fecha = fecha;
        this.inversion = inversion;
        this.comentarios = comentarios;
    }
    Inversion.ctorParameters = function () { return [
        { type: Date },
        { type: Number },
        { type: String }
    ]; };
    return Inversion;
}());



/***/ }),

/***/ "./src/app/models/producto.ts":
/*!************************************!*\
  !*** ./src/app/models/producto.ts ***!
  \************************************/
/*! exports provided: Producto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto(nombre, precio_compra, precio_venta, stock, image) {
        this.nombre = nombre;
        this.precio_compra = precio_compra;
        this.precio_venta = precio_venta;
        this.stock = stock;
        this.image = image;
    }
    Producto.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: String }
    ]; };
    return Producto;
}());



/***/ }),

/***/ "./src/app/models/usuario.ts":
/*!***********************************!*\
  !*** ./src/app/models/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(_id, nombre, apellido, email, rut, password) {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.rut = rut;
        this.password = password;
    }
    Usuario.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Usuario;
}());



/***/ }),

/***/ "./src/app/models/venta.ts":
/*!*********************************!*\
  !*** ./src/app/models/venta.ts ***!
  \*********************************/
/*! exports provided: Venta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Venta", function() { return Venta; });
var Venta = /** @class */ (function () {
    function Venta(fecha, estado, nombre_fiador, cant_productos, precio_total, productos, prodCantidad, prodPrecio) {
        this.fecha = fecha;
        this.estado = estado;
        this.nombre_fiador = nombre_fiador;
        this.cant_productos = cant_productos;
        this.precio_total = precio_total;
        this.productos = productos;
        this.prodCantidad = prodCantidad;
        this.prodPrecio = prodPrecio;
    }
    Venta.ctorParameters = function () { return [
        { type: Date },
        { type: String },
        { type: String },
        { type: Number },
        { type: Number },
        { type: Array },
        { type: Array },
        { type: Array }
    ]; };
    return Venta;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
var GLOBAL = {
    url: 'https://veronica-godoy.herokuapp.com/api/',
    ip: '0.0.0.0/0'
};


/***/ }),

/***/ "./src/app/services/inversion.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/inversion.service.ts ***!
  \***********************************************/
/*! exports provided: InversionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversionService", function() { return InversionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var InversionService = /** @class */ (function () {
    function InversionService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    //Metodo para obtener todas las inversiones realizadas
    InversionService.prototype.getInversiones = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'inversiones-almacenadas', { headers: headers });
    };
    //Metodo para obtener una inversion especifica
    InversionService.prototype.getInversion = function (token, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'inversion/' + id, { headers: headers });
    };
    //Metodo para actualizar una Inversion
    InversionService.prototype.editarInversion = function (token, id, inversion) {
        var params = JSON.stringify(inversion);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'inversion/' + id, params, { headers: headers });
    };
    //Crear una inversion
    InversionService.prototype.crearInversion = function (token, inversion) {
        var params = JSON.stringify(inversion);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'inversion', params, { headers: headers });
    };
    //Obtener inversiones por fecha
    InversionService.prototype.obtenerInverionesFecha = function (token, fecha_ini, fecha_ter) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'inversion/' + fecha_ini + '/' + fecha_ter, { headers: headers });
    };
    //Eliminar una inversion
    InversionService.prototype.eliminarInversion = function (token, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.delete(this.url + 'inversion/' + id, { headers: headers });
    };
    InversionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InversionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], InversionService);
    return InversionService;
}());



/***/ }),

/***/ "./src/app/services/producto.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/producto.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    //Metodo para obtener todos los productos de la BD 
    ProductService.prototype.getAllProductos = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'productos-almacenados', { headers: headers });
    };
    //Metodo para obtener un producto de la BD
    ProductService.prototype.getProducto = function (token, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'producto/' + id, { headers: headers });
    };
    //Metodo para añadir un nuevo producto a la BD
    ProductService.prototype.crearProducto = function (token, producto) {
        var params = JSON.stringify(producto);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'producto', params, { headers: headers });
    };
    //Metodo para editar un artista en la BD
    ProductService.prototype.editarProducto = function (token, id, producto) {
        var params = JSON.stringify(producto);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'producto/' + id, params, { headers: headers });
    };
    //Metodo para eliminar un producto especifico de la BD
    ProductService.prototype.eliminarProducto = function (token, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.delete(this.url + 'producto/' + id, { headers: headers });
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var UploadService = /** @class */ (function () {
    function UploadService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    //realiza la peticion AJAX y la subida al servidor de la imagen
    UploadService.prototype.makeFileRequest = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    UserService.prototype.signup = function (user_to_login, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        var json = JSON.stringify(user_to_login);
        var params = json;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'login', params, { headers: headers });
    };
    UserService.prototype.register = function (user_to_register) {
        var params = JSON.stringify(user_to_register);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'registro', params, { headers: headers });
    };
    UserService.prototype.updateUser = function (user_to_update) {
        var params = JSON.stringify(user_to_update);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this._http.put(this.url + 'actualizar-usuario/' + user_to_update._id, params, { headers: headers });
    };
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/venta.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/venta.service.ts ***!
  \*******************************************/
/*! exports provided: VentaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentaService", function() { return VentaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");




var VentaService = /** @class */ (function () {
    function VentaService(_http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    //Crear Venta
    VentaService.prototype.addVentas = function (token, venta) {
        var params = JSON.stringify(venta);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'venta', params, { headers: headers });
    };
    //Mostrar una Venta
    VentaService.prototype.getVenta = function (token, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'venta/' + id, { headers: headers });
    };
    //Mostrar Ventas
    VentaService.prototype.getVentas = function (token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'ventas', { headers: headers });
    };
    //Metodo para editar una venta en la BD
    VentaService.prototype.editarVenta = function (token, id, venta) {
        var params = JSON.stringify(venta);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url + 'venta/' + id, params, { headers: headers });
    };
    //Eliminar Venta
    VentaService.prototype.deleteVenta = function (token, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.delete(this.url + 'venta/' + id, { headers: headers });
    };
    VentaService.prototype.obtenerVentasFecha = function (token, fecha_ini, fecha_ter) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'venta/' + fecha_ini + '/' + fecha_ter, { headers: headers });
    };
    VentaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    VentaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VentaService);
    return VentaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ecald\Desktop\servidor-front\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map