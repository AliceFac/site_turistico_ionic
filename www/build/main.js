webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <h2 class="about-titles">Um pouco de Hist??ria</h2>\n    <img class="img-history" src="../assets/imgs/map.jpg" alt="Mapa de Londres">\n    <p class="about-info">Londres ?? uma das maiores metr??poles do planeta, capital da Inglaterra e da Gr??-Bretanha, localizada ??s margens do Rio T??misa. Esta cidade abriga hoje mais de 7 milh??es de pessoas. Um dos mais importantes n??cleos financeiros mundiais, ela integra com destaque o circuito pol??tico, cultural, art??stico e fashion do globo. <br>\n            Ela nasceu como Londinium, edificada pelo imp??rio romano na margem norte do T??misa, em 43 d.C. N??o h?? vest??gios anteriores de uma localidade povoada pelos celtas. Este recanto foi constru??do perto da Ponte de Londres, criada pelos romanos para que fosse poss??vel a travessia do rio. O dom??nio de Roma perdurou inabal??vel at?? a chegada da tribo celta dos icenas, sob o comando da rainha Boadiceia. Os danos causados ?? cidade exigiram que ela fosse reedificada, o que impulsionou seu progresso. Ela chegou a atingir o status de capital da prov??ncia Romana Brit??nica no s??culo II. <br>\n            A queda de Roma levou ?? redu????o dos residentes da cidade, dando espa??o para o aparecimento de um n??cleo anglo-sax??o intitulado Lundenwic, a mais ou menos 1 km da antiga Londinium, onde hoje est?? localizado o Covent Garden. Em 851, com a chegada dos vikings, a cidade foi devastada. Depois de atravessar a era medieval, a era dos Tudors (1485-1603), e o per??odo dos Stuarts (1603-1714), emerge a Londres moderna. <br>\n            Embora houvesse um reduzido ??ndice de fertilidade entre as mulheres inglesas, em 1700 o n??vel populacional londrino atingia 700.000 habitantes, principalmente por conta da elevada onda imigrat??ria que alcan??ou ent??o este territ??rio, a qual consistia principalmente de judeus Sepharditas e Ashkenazim da Pol??nia e da Alemanha, e de negros. No in??cio do s??culo XIX esta cidade j?? era computada como uma das maiores do Planeta. Ela era habitada principalmente por integrantes do sexo feminino e por jovens. <br>\n            Atualmente ela ?? composta de um grande centro financeiro, a City; na zona oeste da cidade est??o situados os parques e os conjuntos residenciais; o setor leste abriga as ind??strias e recebeu h?? pouco tempo v??rias melhorias ??s margens do T??misa. Principal porto brit??nico, Londres ?? tamb??m um p??lo receptor das novidades culturais e religiosas transmitidas por todas as partes do globo. Ela recebe turistas de todas as localidades, interessados em conhecer o Parlamento, a Tower Bridge, o Pal??cio de Buckingham, o Museu Brit??nico, entre tantos outros pontos tur??sticos. <br>\n            Desde 1945, depois de ser seriamente bombardeada pelos alem??es durante a Segunda Guerra Mundial, o desenvolvimento da ??rea metropolitana sofreu uma desacelera????o, pois v??rias cidades foram criadas ao redor de Londres. Mas ela continua abrigando os mais ricos museus, salas de espet??culos e feiras culturais significativas.\n    </p>\n    <h2 class="about-titles">Geografia e Popula????o</h2>\n    <table class="table">\n        <tr>\n            <th>Regi??o</th>\n            <th>Popula????o Total</th>\n            <th>Popula????o por km2</th>\n          </tr>\n          <tr>\n            <td>Central</td>\n            <td>1,564,700</td>\n            <td>12,129</td>\n          </tr>\n          <tr>\n            <td>Leste</td>\n            <td>2,836,800</td>\n            <td>6,154</td>\n          </tr>\n          <tr>\n            <td>Norte</td>\n            <td>996,600</td>\n            <td>2,162</td>\n          </tr>\n          <tr>\n            <td>Sul</td>\n            <td>1,629,100</td>\n            <td>4,188</td>\n          </tr>\n          <tr>\n            <td>Oeste</td>\n            <td>1,880,800</td>\n            <td>4,774</td>\n          </tr>\n          <tr>\n            <td>Londres</td>\n            <td>8,908,000</td>\n            <td>5,667</td>\n          </tr>\n    </table>\n    <p class="dem-info">O tamanho da popula????o de Londres mudou dramaticamente no s??culo passado; caindo de uma alta pr??-Segunda Guerra Mundial de 8,6 milh??es de pessoas em 1939 para cerca de 6,8 milh??es na d??cada de 1980. A queda foi mais pronunciada em Inner London, que viu sua popula????o reduzir quase pela metade em 50 anos. <br> <br>\n        A popula????o de Londres est?? se recuperando desde o in??cio da d??cada de 1990 e atingiu um novo recorde de 9 milh??es em 2019. Em uma revers??o da tend??ncia de meados do s??culo 20, tanto o interior quanto o exterior de Londres t??m crescido continuamente, embora o interior de Londres ainda tenha menos de um milh??o de pessoas de sua popula????o em 1931. Em 2030, espera-se que a popula????o de Londres aumente, mas a uma taxa mais lenta, com uma popula????o total de 9,4 milh??es.</p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.nome = "";
        this.email = "";
        this.msg = "";
    }
    ContactPage.prototype.enviar = function () {
        this.showAlert(this.nome, this.email, this.msg);
        this.nome = "";
        this.email = "";
        this.msg = "";
    };
    ContactPage.prototype.showAlert = function (nome, email, msg) {
        var alert = this.alertCtrl.create({
            title: 'Ol??, ' + nome + "!",
            subTitle: 'Seu email para contato ??: ' + email,
            message: 'E sua mensagem foi: ' + msg,
            buttons: ['OK']
        });
        alert.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nome: </ion-label>\n      <ion-input [(ngModel)]="nome"  id="nome" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email: </ion-label>\n      <ion-input [(ngModel)]="email"  id="email" type="email"></ion-input>\n    </ion-item>\n\n    <ion-item> \n      <ion-label floating>Mensagem: </ion-label>\n      <ion-textarea [(ngModel)]="msg"  id="msg"></ion-textarea>\n    </ion-item>\n\n    <button (click)="enviar()" style="margin-left: 20px; margin-top: 20px;" ion-button color="light">Enviar</button>\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>O que eu mais gosto sobre Londres</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" padding>\n\n  <ion-card>\n    <img src="https://imagens.viajonarios.com.br/2016/12/museu-historia-natural-londres.jpg"/>\n    <div class= "text">\n      <div class="card-title">Museu de Hist??ria Natural</div>\n      <div class="card-subtitle">Um dos principais museus de Londres e est?? localizado na Exhibition Road, uma rua que d?? acesso a diversos museus e estabelecimentos acad??micos. Ele abriga cerca de 80 milh??es de esp??cies de ci??ncias naturais e da Terra, e tem seus itens divididos em cinco cole????es: bot??nica, entomologia, mineralogia, paleontologia e zoologia.</div>\n    </div>\n    <a class="about" href="https://www.nhm.ac.uk/"><ion-icon name="information-circle"></ion-icon></a>\n  </ion-card>\n  \n  <ion-card>\n    <img src="https://d15v4l58k2n80w.cloudfront.net/file/1396975600/25413908211/width=1280/height=720/format=-1/fit=crop/crop=456x0+8212x4622/rev=3/t=415310/e=never/k=6b962333/IMG_8216.jpg"/>\n    <div class= "text">\n      <div class="card-title">Albert Royal Hall</div>\n      <div class="card-subtitle">Sal??o de espet??culos em South Kensington, Londres, capital do Reino Unido, com capacidade para quase 6.000 pessoas. Foi inaugurado a 29 de mar??o de 1871 pela rainha Vit??ria, em mem??ria do seu falecido consorte Alberto de Saxe-Coburgo-Gota.</div>\n    </div>\n    <a class="about" href="https://www.royalalberthall.com/?gclid=CjwKCAjw64eJBhAGEiwABr9o2BGrNO-7e5B_J7v0xpd_FK47XmmQ4a7euA0IY5jb8OFbrTq6BFoAcRoCy-oQAvD_BwE"><ion-icon name="information-circle"></ion-icon></a>\n  </ion-card>\n  \n  <ion-card>\n    <img src="https://thumbs.dreamstime.com/b/sherlock-holmes-museum-londres-reino-unido-de-junho-baker-street-em-inglaterra-164383991.jpg"/>\n    <div class= "text">\n      <div class="card-title">Museu de Sherlock Holmes</div>\n      <div class="card-subtitle">Museu privado brit??nico dedicado ao detetive ficcional Sherlock Holmes. Foi fundado a 27 de mar??o de 1990 e est?? situado na Baker Street, em Londres, Inglaterra, na mesma rua onde Arthur Conan Doyle fez residir Holmes na fict??cia 221B.</div>\n    </div>\n    <a class="about" href="https://www.sherlock-holmes.co.uk/"><ion-icon name="information-circle"></ion-icon></a>\n  </ion-card>\n  \n  <ion-card>\n    <img src="https://m.belfasttelegraph.co.uk/entertainment/music/news/d0f7b/40235744.ece/AUTOCROP/w620/bpanews_ddb77c35-ddf4-4310-b308-cefdf18cd85e_1"/>\n    <div class= "text">\n      <div class="card-title">Biblioteca Brit??nica</div>\n      <div class="card-subtitle">Biblioteca Nacional do Reino Unido, uma das maiores do mundo. Atualmente, o seu acervo possui aproximadamente 150 milh??es de itens e a cada ano incorporam-se ?? cole????o cerca de tr??s milh??es de itens novos. Cont??m, al??m de livros, mapas, jornais, partituras, patentes, manuscritos, selos, dentre outros materiais.</div>\n    </div>\n    <a class="about" href="https://www.bl.uk/"><ion-icon name="information-circle"></ion-icon></a>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://casa.abril.com.br/wp-content/uploads/2016/12/01-afar.jpeg?quality=95&strip=info&w=680&h=453&crop=1"/>\n    <div class= "text">\n      <div class="card-title">Pal??cio de Buckingham</div>\n      <div class="card-subtitle">Resid??ncia oficial e principal local de trabalho do Monarca do Reino Unido em Londres. Localizado na Cidade de Westminster, o pal??cio ?? frequentemente o centro de ocasi??es de estado e hospitalidade real. Originalmente conhecido como Casa Buckingham, o pr??dio que hoje forma o n??cleo do pal??cio era uma grande casa.</div>\n    </div>\n    <a class="about" href="https://www.royal.uk/royal-residences-buckingham-palace"><ion-icon name="information-circle"></ion-icon></a>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\otaku\OneDrive\??rea de Trabalho\CIDTS\GitHub\site_turistico_ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map