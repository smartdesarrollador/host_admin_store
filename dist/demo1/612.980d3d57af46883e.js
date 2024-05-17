"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[612],{9612:(j,f,c)=>{c.r(f),c.d(f,{AttributesModule:()=>B});var l=c(6814),h=c(7304),t=c(5879);let A=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=t.Xpm({type:r,selectors:[["app-attributes"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[h.lC]})}return r})();var p=c(9862),Z=c(5619),b=c(4716),m=c(6988),v=c(3595);let g=(()=>{class r{http;authservice;isLoading$;isLoadingSubject;constructor(i,e){this.http=i,this.authservice=e,this.isLoadingSubject=new Z.X(!1),this.isLoading$=this.isLoadingSubject.asObservable()}listAttributes(i=1,e){this.isLoadingSubject.next(!0);let n=new p.WM({Authorization:"Bearer "+this.authservice.token});return this.http.get(m.$g+"/admin/attributes?page="+i+"&search="+e,{headers:n}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}createAttributes(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer "+this.authservice.token});return this.http.post(m.$g+"/admin/attributes",i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}updateAttributes(i,e){this.isLoadingSubject.next(!0);let n=new p.WM({Authorization:"Bearer "+this.authservice.token});return this.http.put(m.$g+"/admin/attributes/"+i,e,{headers:n}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}deleteAttributes(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer "+this.authservice.token});return this.http.delete(m.$g+"/admin/attributes/"+i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}createProperties(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer "+this.authservice.token});return this.http.post(m.$g+"/admin/properties",i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}deletePropertie(i){this.isLoadingSubject.next(!0);let e=new p.WM({Authorization:"Bearer "+this.authservice.token});return this.http.delete(m.$g+"/admin/properties/"+i,{headers:e}).pipe((0,b.x)(()=>this.isLoadingSubject.next(!1)))}static \u0275fac=function(e){return new(e||r)(t.LFG(p.eN),t.LFG(v.e8))};static \u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var _=c(2425),u=c(1274),o=c(6223);function T(r,d){1&r&&t._UZ(0,"span",15)}let x=(()=>{class r{attributeService;toastr;modal;attribute;AttributeD=new t.vpe;isLoading;constructor(i,e,n){this.attributeService=i,this.toastr=e,this.modal=n}ngOnInit(){this.isLoading=this.attributeService.isLoading$}delete(){this.attributeService.deleteAttributes(this.attribute.id).subscribe(i=>{403==i.message?this.toastr.error("Validaci\xf3n",i.message_text):(this.AttributeD.emit({message:200}),this.modal.close())})}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(_._W),t.Y36(u.Kz))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-delete-attribute"]],inputs:{attribute:"attribute"},outputs:{AttributeD:"AttributeD"},decls:21,vars:4,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-danger",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"p"),t._uU(12," \xbfESTAS SEGURO DE ELIMINAR ESTE ATRIBUTO? "),t.qZA(),t.TgZ(13,"div",10)(14,"button",11),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(15,"Cerrar"),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){return n.delete()}),t.TgZ(17,"span",13),t._uU(18,"ELIMINAR"),t.qZA(),t.YNc(19,T,1,0,"span",14),t.ALo(20,"async"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij('Delete Attribute: "',n.attribute.name,'"'),t.xp6(16),t.Q6J("ngIf",t.lcZ(20,2,n.isLoading)))},dependencies:[l.O5,o._Y,o.JL,o.F,l.Ov]})}return r})();function k(r,d){1&r&&t._UZ(0,"span",24)}let C=(()=>{class r{attributeService;modal;toastr;AttributeC=new t.vpe;name="";type_attribute=1;isLoading$;constructor(i,e,n){this.attributeService=i,this.modal=e,this.toastr=n}ngOnInit(){this.isLoading$=this.attributeService.isLoading$}store(){this.name&&this.type_attribute?this.attributeService.createAttributes({name:this.name,type_attribute:this.type_attribute,state:1}).subscribe(e=>{console.log(e),403!=e.message?(this.AttributeC.emit(e.attribute),this.toastr.success("Exitos","EL ATRIBUTO SE HA REGISTRADO CORRECTAMENTE"),this.modal.close()):this.toastr.error("Validaci\xf3n","EL NOMBRE DEL ATRIBUTO YA EXISTE EN LA BASE DE DATOS")}):this.toastr.error("Validaci\xf3n","Todos los campos son necesarios")}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.Kz),t.Y36(_._W))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-create-attribute"]],outputs:{AttributeC:"AttributeC"},decls:36,vars:5,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Atributo",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["name","XXXXX","placeholder","Select",1,"form-control","form-select-solid","fw-bolder",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"Add Attribute"),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Nombre del Attributo"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA()()(),t.TgZ(16,"div",11)(17,"label",12),t._uU(18,"Selec. un Tipo"),t.qZA(),t.TgZ(19,"select",14),t.NdJ("ngModelChange",function(s){return n.type_attribute=s}),t.TgZ(20,"option",15),t._uU(21,"Texto"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"Numero"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"Seleccionable"),t.qZA(),t.TgZ(26,"option",18),t._uU(27,"Seleccionable Multiple"),t.qZA()()(),t.TgZ(28,"div",19)(29,"button",20),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(30,"Cerrar"),t.qZA(),t.TgZ(31,"button",21),t.NdJ("click",function(){return n.store()}),t.TgZ(32,"span",22),t._uU(33,"Registrar"),t.qZA(),t.YNc(34,k,1,0,"span",23),t.ALo(35,"async"),t.qZA()()()()()),2&e&&(t.xp6(15),t.Q6J("ngModel",n.name),t.xp6(4),t.Q6J("ngModel",n.type_attribute),t.xp6(15),t.Q6J("ngIf",t.lcZ(35,3,n.isLoading$)))},dependencies:[l.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.On,o.F,l.Ov]})}return r})();function w(r,d){1&r&&t._UZ(0,"span",24)}let y=(()=>{class r{attributeService;modal;toastr;AttributeE=new t.vpe;attribute;name="";type_attribute=1;isLoading$;constructor(i,e,n){this.attributeService=i,this.modal=e,this.toastr=n}ngOnInit(){this.isLoading$=this.attributeService.isLoading$,this.name=this.attribute.name,this.type_attribute=this.attribute.type_attribute}store(){this.name&&this.type_attribute?this.attributeService.updateAttributes(this.attribute.id,{name:this.name,type_attribute:this.type_attribute,state:1}).subscribe(e=>{console.log(e),403!=e.message?(this.AttributeE.emit(e.attribute),this.toastr.success("Exitos","EL ATRIBUTO SE HA EDITADO CORRECTAMENTE"),this.modal.close()):this.toastr.error("Validaci\xf3n","EL NOMBRE DEL ATRIBUTO YA EXISTE EN LA BASE DE DATOS")}):this.toastr.error("Validaci\xf3n","Todos los campos son necesarios")}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.Kz),t.Y36(_._W))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-edit-attribute"]],inputs:{attribute:"attribute"},outputs:{AttributeE:"AttributeE"},decls:36,vars:6,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Atributo",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],["name","XXXXX","placeholder","Select",1,"form-control","form-select-solid","fw-bolder",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["value","3"],["value","4"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Nombre del Attributo"),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA()()(),t.TgZ(16,"div",11)(17,"label",12),t._uU(18,"Selec. un Tipo"),t.qZA(),t.TgZ(19,"select",14),t.NdJ("ngModelChange",function(s){return n.type_attribute=s}),t.TgZ(20,"option",15),t._uU(21,"Texto"),t.qZA(),t.TgZ(22,"option",16),t._uU(23,"Numero"),t.qZA(),t.TgZ(24,"option",17),t._uU(25,"Seleccionable"),t.qZA(),t.TgZ(26,"option",18),t._uU(27,"Seleccionable Multiple"),t.qZA()()(),t.TgZ(28,"div",19)(29,"button",20),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(30,"Cerrar"),t.qZA(),t.TgZ(31,"button",21),t.NdJ("click",function(){return n.store()}),t.TgZ(32,"span",22),t._uU(33,"Actualizar"),t.qZA(),t.YNc(34,w,1,0,"span",23),t.ALo(35,"async"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij('Edit Attribute : "',n.attribute.name,'"'),t.xp6(12),t.Q6J("ngModel",n.name),t.xp6(4),t.Q6J("ngModel",n.type_attribute),t.xp6(15),t.Q6J("ngIf",t.lcZ(35,4,n.isLoading$)))},dependencies:[l.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.On,o.F,l.Ov]})}return r})();function S(r,d){1&r&&t._UZ(0,"span",15)}let U=(()=>{class r{attributeService;toastr;modal;propertie;PropertieD=new t.vpe;isLoading;constructor(i,e,n){this.attributeService=i,this.toastr=e,this.modal=n}ngOnInit(){this.isLoading=this.attributeService.isLoading$}delete(){this.attributeService.deletePropertie(this.propertie.id).subscribe(i=>{403==i.message?this.toastr.error("Validaci\xf3n",i.message_text):(this.PropertieD.emit({message:200}),this.modal.close())})}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(_._W),t.Y36(u.Kz))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-sub-attribute-delete"]],inputs:{propertie:"propertie"},outputs:{PropertieD:"PropertieD"},decls:21,vars:4,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","mx-xl-15","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-danger",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"p"),t._uU(12," \xbfESTAS SEGURO DE ELIMINAR ESTA PROPIEDAD? "),t.qZA(),t.TgZ(13,"div",10)(14,"button",11),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(15,"Cerrar"),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){return n.delete()}),t.TgZ(17,"span",13),t._uU(18,"ELIMINAR"),t.qZA(),t.YNc(19,S,1,0,"span",14),t.ALo(20,"async"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij('Delete Propiedad: "',n.propertie.name,'"'),t.xp6(16),t.Q6J("ngIf",t.lcZ(20,2,n.isLoading)))},dependencies:[l.O5,o._Y,o.JL,o.F,l.Ov]})}return r})();function L(r,d){if(1&r){const i=t.EpF();t.TgZ(0,"div",15)(1,"label",36),t._uU(2,"Color: "),t.qZA(),t.TgZ(3,"input",37),t.NdJ("ngModelChange",function(n){t.CHM(i);const a=t.oxw();return t.KtG(a.color=n)}),t.qZA()()}if(2&r){const i=t.oxw();t.xp6(3),t.Q6J("ngModel",i.color)}}function q(r,d){1&r&&t._UZ(0,"span",38)}function E(r,d){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const i=t.oxw().$implicit;t.xp6(1),t.Oqu(i.code)}}function N(r,d){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"tr",39)(2,"td")(3,"span"),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t.YNc(6,E,2,1,"span",40),t.qZA(),t.TgZ(7,"td",41)(8,"a",42),t.NdJ("click",function(){const a=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.delete(a))}),t.TgZ(9,"i",43),t._UZ(10,"span",44)(11,"span",45)(12,"span",46)(13,"span",47)(14,"span",48),t.qZA()()()(),t.BQk()}if(2&r){const i=d.$implicit;t.xp6(4),t.Oqu(i.name),t.xp6(2),t.Q6J("ngIf",i.code)}}let M=(()=>{class r{attributeService;modal;toastr;modalService;attribute;properties=[];isLoading$;color;type_action=1;name="";constructor(i,e,n,a){this.attributeService=i,this.modal=e,this.toastr=n,this.modalService=a}ngOnInit(){this.isLoading$=this.attributeService.isLoading$,this.properties=this.attribute.properties}store(){this.name?2!=this.type_action||this.color?this.attributeService.createProperties({name:this.name,code:this.color,attribute_id:this.attribute.id,state:1}).subscribe(e=>{console.log(e),403!=e.message?(this.properties.unshift(e.propertie),this.toastr.success("Exitos","LA PROPIEDAD SE HA REGISTRADO CORRECTAMENTE")):this.toastr.error("Validaci\xf3n","EL NOMBRE DE LA PROPIEDAD YA EXISTE EN LA BASE DE DATOS")}):this.toastr.error("Validaci\xf3n","Necesitas seleccionar un color"):this.toastr.error("Validaci\xf3n","Todos los campos son necesarios")}delete(i){const e=this.modalService.open(U,{centered:!0,size:"md"});e.componentInstance.propertie=i,e.componentInstance.PropertieD.subscribe(n=>{let a=this.properties.findIndex(s=>s.id==i.id);-1!=a&&this.properties.splice(a,1)})}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.Kz),t.Y36(_._W),t.Y36(u.FF))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-sub-attribute-create"]],inputs:{attribute:"attribute"},decls:50,vars:8,consts:[[1,"modal-content"],["id","kt_modal_add_user_header",1,"modal-header"],[1,"fw-bolder"],["data-kt-users-modal-action","close",1,"btn","btn-icon","btn-sm","btn-active-icon-primary",3,"click"],[1,"svg-icon","svg-icon-1"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["opacity","0.5","x","6","y","17.3137","width","16","height","2","rx","1","transform","rotate(-45 6 17.3137)","fill","currentColor"],["x","7.41422","y","6","width","16","height","2","rx","1","transform","rotate(45 7.41422 6)","fill","currentColor"],[1,"modal-body","scroll-y","mx-5","my-7"],["id","kt_modal_add_user_form","action","#",1,"form"],["id","kt_modal_add_user_scroll","data-kt-scroll","true","data-kt-scroll-activate","{default: false, lg: true}","data-kt-scroll-max-height","auto","data-kt-scroll-dependencies","#kt_modal_add_user_header","data-kt-scroll-wrappers","#kt_modal_add_user_scroll","data-kt-scroll-offset","300px",1,"d-flex","flex-column","scroll-y","me-n7","pe-7"],[1,"fv-row","mb-7"],[1,"required","fw-bold","fs-6","mb-2"],["type","text","name","name","placeholder","Atributo",1,"form-control","form-control-solid","mb-3","mb-lg-0",3,"ngModel","ngModelChange"],[1,"fv-row","row","mb-7","align-items-center"],[1,"col-lg-6","col-12"],["name","XXXXX","placeholder","Select",1,"form-control","form-select-solid","fw-bolder",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["class","col-lg-6 col-12",4,"ngIf"],[1,"fv-row","row","mb-7"],[1,"col-6"],["type","button","data-kt-users-modal-action","submit",1,"btn","btn-primary",3,"click"],[1,"indicator-label"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],["id","kt_table_users_wrapper",1,"dataTables_wrapper","dt-bootstrap4","no-footer"],[1,"table-responsive"],["id","kt_table_users",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer"],[1,"text-start","text-muted","fw-bold","fs-7","text-uppercase","gs-0"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","User: activate to sort column ascending",1,"min-w-125px","sorting",2,"width","275.844px"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Role: activate to sort column ascending",1,"min-w-125px","sorting",2,"width","161.469px"],["rowspan","1","colspan","1","aria-label","Actions",1,"text-end","min-w-100px","sorting_disabled",2,"width","129.75px"],[1,"text-gray-600","fw-semibold"],[4,"ngFor","ngForOf"],[1,"text-center","pt-15"],["type","reset",1,"btn","btn-light","me-3",3,"click"],["for","etiqueta_especial",1,"required","fw-bold","fs-6","mb-2"],["type","color","id","color","name","color",1,"form-control",3,"ngModel","ngModelChange"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"odd"],[4,"ngIf"],[1,"text-end"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"],[1,"ki-duotone","ki-trash","fs-2"],[1,"path1"],[1,"path2"],[1,"path3"],[1,"path4"],[1,"path5"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t.NdJ("click",function(){return n.modal.dismiss()}),t.TgZ(5,"span",4),t.O4$(),t.TgZ(6,"svg",5),t._UZ(7,"rect",6)(8,"rect",7),t.qZA()()()(),t.kcU(),t.TgZ(9,"div",8)(10,"form",9)(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14,"Nombre del Propertie : "),t.qZA(),t.TgZ(15,"input",13),t.NdJ("ngModelChange",function(s){return n.name=s}),t.qZA()()(),t.TgZ(16,"div",14)(17,"div",15)(18,"label",12),t._uU(19,"Selec. un Tipo"),t.qZA(),t.TgZ(20,"select",16),t.NdJ("ngModelChange",function(s){return n.type_action=s}),t.TgZ(21,"option",17),t._uU(22,"Normal"),t.qZA(),t.TgZ(23,"option",18),t._uU(24,"Color"),t.qZA()()(),t.YNc(25,L,4,1,"div",19),t.qZA(),t.TgZ(26,"div",20)(27,"div",21)(28,"button",22),t.NdJ("click",function(){return n.store()}),t.TgZ(29,"span",23),t._uU(30,"Registrar"),t.qZA(),t.YNc(31,q,1,0,"span",24),t.ALo(32,"async"),t.qZA()()(),t.TgZ(33,"div",11)(34,"div",25)(35,"div",26)(36,"table",27)(37,"thead")(38,"tr",28)(39,"th",29),t._uU(40," Nombre "),t.qZA(),t.TgZ(41,"th",30),t._uU(42," Color "),t.qZA(),t.TgZ(43,"th",31),t._uU(44,"Actions"),t.qZA()()(),t.TgZ(45,"tbody",32),t.YNc(46,N,15,2,"ng-container",33),t.qZA()()()()(),t.TgZ(47,"div",34)(48,"button",35),t.NdJ("click",function(){return n.modal.dismiss()}),t._uU(49,"Cerrar"),t.qZA()()()()()),2&e&&(t.xp6(3),t.hij("Add Properties : ",n.attribute.name,""),t.xp6(12),t.Q6J("ngModel",n.name),t.xp6(5),t.Q6J("ngModel",n.type_action),t.xp6(5),t.Q6J("ngIf",2==n.type_action),t.xp6(6),t.Q6J("ngIf",t.lcZ(32,6,n.isLoading$)),t.xp6(15),t.Q6J("ngForOf",n.properties))},dependencies:[l.sg,l.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.On,o.F,l.Ov]})}return r})();function J(r,d){1&r&&t._UZ(0,"span",58)}function I(r,d){1&r&&(t.TgZ(0,"span",71),t._uU(1,"Activo"),t.qZA())}function O(r,d){1&r&&(t.TgZ(0,"span",72),t._uU(1,"Inactivo"),t.qZA())}function D(r,d){if(1&r){const i=t.EpF();t.TgZ(0,"a",64),t.NdJ("click",function(){t.CHM(i);const n=t.oxw().$implicit,a=t.oxw();return t.KtG(a.openModalRegisterProperties(n))}),t.TgZ(1,"i",73),t._UZ(2,"span",6)(3,"span",7),t.qZA()()}}function R(r,d){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"tr",59)(2,"td")(3,"span"),t._uU(4),t.qZA()(),t.TgZ(5,"td")(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t.YNc(9,I,2,0,"span",60),t.YNc(10,O,2,0,"span",61),t.qZA(),t.TgZ(11,"td")(12,"span"),t._uU(13),t.qZA()(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td",62),t.YNc(17,D,4,0,"a",63),t.TgZ(18,"a",64),t.NdJ("click",function(){const a=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.openModalEditAttribute(a))}),t.TgZ(19,"i",65),t._UZ(20,"span",6)(21,"span",7),t.qZA()(),t.TgZ(22,"a",66),t.NdJ("click",function(){const a=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.deleteAttribute(a))}),t.TgZ(23,"i",67),t._UZ(24,"span",6)(25,"span",7)(26,"span",68)(27,"span",69)(28,"span",70),t.qZA()()()(),t.BQk()}if(2&r){const i=d.$implicit,e=t.oxw();t.xp6(4),t.Oqu(i.name),t.xp6(3),t.Oqu(e.getNameAttribute(i.type_attribute)),t.xp6(2),t.Q6J("ngIf",1==i.state),t.xp6(1),t.Q6J("ngIf",2==i.state),t.xp6(3),t.hij(" ",i.properties.length," "),t.xp6(2),t.hij(" ",i.created_at," "),t.xp6(2),t.Q6J("ngIf",3==i.type_attribute||4==i.type_attribute)}}const Y=[{path:"",component:A,children:[{path:"list",component:(()=>{class r{attributesService;modalService;attributes=[];search="";totalPages=0;currentPage=1;isLoading$;constructor(i,e){this.attributesService=i,this.modalService=e}ngOnInit(){this.listAttributes(),this.isLoading$=this.attributesService.isLoading$}listAttributes(i=1){this.attributesService.listAttributes(i,this.search).subscribe(e=>{console.log(e),this.attributes=e.attributes,this.totalPages=e.total,this.currentPage=i})}getNameAttribute(i){var e="";switch(i=parseInt(i)){case 1:e="Texto";break;case 2:e="Numero";break;case 3:e="Seleccionable";break;case 4:e="Seleccionable Multiple"}return e}searchTo(){this.listAttributes()}loadPage(i){console.log(i),this.listAttributes(i)}openModalCreateAttribute(){this.modalService.open(C,{centered:!0,size:"md"}).componentInstance.AttributeC.subscribe(e=>{this.attributes.unshift(e)})}openModalEditAttribute(i){const e=this.modalService.open(y,{centered:!0,size:"md"});e.componentInstance.attribute=i,e.componentInstance.AttributeE.subscribe(n=>{let a=this.attributes.findIndex(s=>s.id==n.id);-1!=a&&(this.attributes[a]=n)})}deleteAttribute(i){const e=this.modalService.open(x,{centered:!0,size:"md"});e.componentInstance.attribute=i,e.componentInstance.AttributeD.subscribe(n=>{let a=this.attributes.findIndex(s=>s.id==i.id);-1!=a&&this.attributes.splice(a,1)})}openModalRegisterProperties(i){this.modalService.open(M,{centered:!0,size:"md"}).componentInstance.attribute=i}static \u0275fac=function(e){return new(e||r)(t.Y36(g),t.Y36(u.FF))};static \u0275cmp=t.Xpm({type:r,selectors:[["app-list-attribute"]],decls:87,vars:10,consts:[[1,"card"],["class","spinner-border spinner-border-sm align-middle ms-2",4,"ngIf"],[1,"card-header","border-0","pt-6"],[1,"card-title"],[1,"d-flex","align-items-center","position-relative","my-1"],[1,"ki-duotone","ki-magnifier","fs-3","position-absolute","ms-5"],[1,"path1"],[1,"path2"],["type","text","data-kt-user-table-filter","search","placeholder","Search Attributos",1,"form-control","form-control-solid","w-250px","ps-13",3,"ngModel","keyup.enter","ngModelChange"],[1,"card-toolbar"],["data-kt-user-table-toolbar","base",1,"d-flex","justify-content-end"],["data-kt-menu","true",1,"menu","menu-sub","menu-sub-dropdown","w-300px","w-md-325px"],[1,"px-7","py-5"],[1,"fs-5","text-gray-900","fw-bold"],[1,"separator","border-gray-200"],["data-kt-user-table-filter","form",1,"px-7","py-5"],[1,"mb-10"],[1,"form-label","fs-6","fw-semibold"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","role","data-hide-search","true","data-select2-id","select2-data-9-luti","tabindex","-1","aria-hidden","true","data-kt-initialized","1",1,"form-select","form-select-solid","fw-bold","select2-hidden-accessible"],["data-select2-id","select2-data-11-bbrq"],["value","Administrator"],["value","Analyst"],["value","Developer"],["value","Support"],["value","Trial"],["dir","ltr","data-select2-id","select2-data-10-4cpl",1,"select2","select2-container","select2-container--bootstrap5",2,"width","100%"],[1,"selection"],["role","combobox","aria-haspopup","true","aria-expanded","false","tabindex","0","aria-disabled","false","aria-labelledby","select2-n6kk-container","aria-controls","select2-n6kk-container",1,"select2-selection","select2-selection--single","form-select","form-select-solid","fw-bold"],["id","select2-n6kk-container","role","textbox","aria-readonly","true","title","Select option",1,"select2-selection__rendered"],[1,"select2-selection__placeholder"],["role","presentation",1,"select2-selection__arrow"],["role","presentation"],["aria-hidden","true",1,"dropdown-wrapper"],["data-kt-select2","true","data-placeholder","Select option","data-allow-clear","true","data-kt-user-table-filter","two-step","data-hide-search","true","data-select2-id","select2-data-12-cr6q","tabindex","-1","aria-hidden","true","data-kt-initialized","1",1,"form-select","form-select-solid","fw-bold","select2-hidden-accessible"],["data-select2-id","select2-data-14-2pp3"],["value","Enabled"],["dir","ltr","data-select2-id","select2-data-13-3y7a",1,"select2","select2-container","select2-container--bootstrap5",2,"width","100%"],["role","combobox","aria-haspopup","true","aria-expanded","false","tabindex","0","aria-disabled","false","aria-labelledby","select2-oer2-container","aria-controls","select2-oer2-container",1,"select2-selection","select2-selection--single","form-select","form-select-solid","fw-bold"],["id","select2-oer2-container","role","textbox","aria-readonly","true","title","Select option",1,"select2-selection__rendered"],[1,"d-flex","justify-content-end"],["type","reset","data-kt-menu-dismiss","true","data-kt-user-table-filter","reset",1,"btn","btn-light","btn-active-light-primary","fw-semibold","me-2","px-6"],["type","submit","data-kt-menu-dismiss","true","data-kt-user-table-filter","filter",1,"btn","btn-primary","fw-semibold","px-6"],["href","#","onclick","return false;",1,"btn","btn-primary",3,"click"],[1,"ki-duotone","ki-plus","fs-2"],[1,"card-body","py-4"],["id","kt_table_users_wrapper",1,"dataTables_wrapper","dt-bootstrap4","no-footer"],[1,"table-responsive"],["id","kt_table_users",1,"table","align-middle","table-row-dashed","fs-6","gy-5","dataTable","no-footer"],[1,"text-start","text-muted","fw-bold","fs-7","text-uppercase","gs-0"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","User: activate to sort column ascending",1,"min-w-125px","sorting",2,"width","275.844px"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Role: activate to sort column ascending",1,"min-w-125px","sorting",2,"width","161.469px"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Last login: activate to sort column ascending",1,"min-w-125px","sorting",2,"width","161.469px"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Two-step : activate to sort column ascending",1,"min-w-125px","sorting",2,"width","161.469px"],["tabindex","0","aria-controls","kt_table_users","rowspan","1","colspan","1","aria-label","Joined Date: activate to sort column ascending",1,"min-w-125px","sorting",2,"width","214.609px"],["rowspan","1","colspan","1","aria-label","Actions",1,"text-end","min-w-100px","sorting_disabled",2,"width","129.75px"],[1,"text-gray-600","fw-semibold"],[4,"ngFor","ngForOf"],[3,"collectionSize","page","pageSize","rotate","boundaryLinks","pageChange"],[1,"spinner-border","spinner-border-sm","align-middle","ms-2"],[1,"odd"],["class","badge badge-light-primary fs-7 fw-bold",4,"ngIf"],["class","badge badge-light-danger fs-7 fw-bold",4,"ngIf"],[1,"text-end"],["href","#","onclick","return false;","class","btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1",3,"click",4,"ngIf"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"ki-duotone","ki-pencil","fs-2"],["href","#","onclick","return false;",1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm",3,"click"],[1,"ki-duotone","ki-trash","fs-2"],[1,"path3"],[1,"path4"],[1,"path5"],[1,"badge","badge-light-primary","fs-7","fw-bold"],[1,"badge","badge-light-danger","fs-7","fw-bold"],[1,"ki-duotone","ki-switch","fs-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,J,1,0,"span",1),t.ALo(2,"async"),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"i",5),t._UZ(7,"span",6)(8,"span",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("keyup.enter",function(){return n.searchTo()})("ngModelChange",function(s){return n.search=s}),t.qZA()()(),t.TgZ(10,"div",9)(11,"div",10)(12,"div",11)(13,"div",12)(14,"div",13),t._uU(15,"Filter Options"),t.qZA()(),t._UZ(16,"div",14),t.TgZ(17,"div",15)(18,"div",16)(19,"label",17),t._uU(20,"Role:"),t.qZA(),t.TgZ(21,"select",18),t._UZ(22,"option",19),t.TgZ(23,"option",20),t._uU(24,"Administrator"),t.qZA(),t.TgZ(25,"option",21),t._uU(26,"Analyst"),t.qZA(),t.TgZ(27,"option",22),t._uU(28,"Developer"),t.qZA(),t.TgZ(29,"option",23),t._uU(30,"Support"),t.qZA(),t.TgZ(31,"option",24),t._uU(32,"Trial"),t.qZA()(),t.TgZ(33,"span",25)(34,"span",26)(35,"span",27)(36,"span",28)(37,"span",29),t._uU(38,"Select option"),t.qZA()(),t.TgZ(39,"span",30),t._UZ(40,"b",31),t.qZA()()(),t._UZ(41,"span",32),t.qZA()(),t.TgZ(42,"div",16)(43,"label",17),t._uU(44,"Two Step Verification:"),t.qZA(),t.TgZ(45,"select",33),t._UZ(46,"option",34),t.TgZ(47,"option",35),t._uU(48,"Enabled"),t.qZA()(),t.TgZ(49,"span",36)(50,"span",26)(51,"span",37)(52,"span",38)(53,"span",29),t._uU(54,"Select option"),t.qZA()(),t.TgZ(55,"span",30),t._UZ(56,"b",31),t.qZA()()(),t._UZ(57,"span",32),t.qZA()(),t.TgZ(58,"div",39)(59,"button",40),t._uU(60,"Reset"),t.qZA(),t.TgZ(61,"button",41),t._uU(62,"Apply"),t.qZA()()()(),t.TgZ(63,"a",42),t.NdJ("click",function(){return n.openModalCreateAttribute()}),t._UZ(64,"i",43),t._uU(65," Add Attribute "),t.qZA()()()(),t.TgZ(66,"div",44)(67,"div",45)(68,"div",46)(69,"table",47)(70,"thead")(71,"tr",48)(72,"th",49),t._uU(73," Nombre "),t.qZA(),t.TgZ(74,"th",50),t._uU(75," Tipo De Atributo "),t.qZA(),t.TgZ(76,"th",51),t._uU(77," State "),t.qZA(),t.TgZ(78,"th",52),t._uU(79," N\xb0 de Propiedades "),t.qZA(),t.TgZ(80,"th",53),t._uU(81," Fecha de Creaci\xf3n "),t.qZA(),t.TgZ(82,"th",54),t._uU(83,"Actions"),t.qZA()()(),t.TgZ(84,"tbody",55),t.YNc(85,R,29,7,"ng-container",56),t.qZA()(),t.TgZ(86,"ngb-pagination",57),t.NdJ("pageChange",function(s){return n.currentPage=s})("pageChange",function(s){return n.loadPage(s)}),t.qZA()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,8,n.isLoading$)),t.xp6(8),t.Q6J("ngModel",n.search),t.xp6(76),t.Q6J("ngForOf",n.attributes),t.xp6(1),t.Q6J("collectionSize",n.totalPages)("page",n.currentPage)("pageSize",25)("rotate",!0)("boundaryLinks",!0))},dependencies:[l.sg,l.O5,o.YN,o.Kr,o.Fj,o.JJ,o.On,u.N9,l.Ov]})}return r})()}]}];let F=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=t.oAB({type:r});static \u0275inj=t.cJS({imports:[h.Bz.forChild(Y),h.Bz]})}return r})();var $=c(53);let B=(()=>{class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=t.oAB({type:r});static \u0275inj=t.cJS({imports:[l.ez,F,p.JF,o.u5,u.IJ,o.UX,$.vi,u.bz,u.jF]})}return r})()}}]);