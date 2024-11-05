"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8465],{8465:(v,u,r)=>{r.r(u),r.d(u,{ProfilePageModule:()=>A});var l=r(4556),g=r(6895),s=r(433),c=r(581),d=r(1407),f=r(7582),e=r(8256),m=r(5860),h=r(9251);function P(i,a){if(1&i&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij(" Apps you subscribed : ",o.profileAppsSubscribed.length," ")}}function Z(i,a){if(1&i&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.hij(" Apps you owned : ",o.profileAppsOwned.length," ")}}const M=[{path:"",component:(()=>{class i{constructor(o,n,p){this.router=o,this.fidjService=n,this.fidjConnectionService=p,this.appEndpoints=[],this.refresh(null)}refresh(o){return(0,f.mG)(this,void 0,void 0,function*(){try{this.appEndpoints=yield this.fidjService.getEndpoints(),this.me=yield this.fidjService.sendOnEndpoint({verb:"GET",key:"me",relativePath:"details"}),this.profileName=this.me.user.name,this.profileEmail=this.me.user.poc.email,this.profileMobile=this.me.user.poc.mobile,this.profileAppsOwned=this.me.user.appsOwned?this.me.user.appsOwned:[],this.profileAppsSubscribed=this.me.user.appsSubscribed?this.me.user.appsSubscribed:[]}catch(n){this.me=null,yield this.fidjConnectionService.checkError(n)}o&&o.target.complete()})}logout(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.fidjService.logout(),yield this.router.navigateByUrl("/")})}putChanges(){return(0,f.mG)(this,void 0,void 0,function*(){const o={};this.profileName!==this.me.name&&(o.name=this.profileName),this.profilePassword&&(o.password=this.profilePassword),yield this.fidjService.sendOnEndpoint({key:"me",verb:"PUT",data:o})})}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(d.F0),e.Y36(m.DR),e.Y36(h.G))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-profile"]],decls:50,vars:9,consts:[[3,"translucent"],["src","assets/fidj-logo.png","height","15em"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["collapse","condense"],["size","large"],["profileForm","ngForm"],["size-md","8","offset-md","2","size-sm","12"],["id","profileEmail","type","email","placeholder","valid.email@required.com","required","","name","profileEmail","pattern",".{1,}@[_a-z0-9A-Z]+(\\.[a-z0-9A-Z]+)+","disabled","",3,"ngModel","ngModelChange"],["id","profileMobile","type","telephone","name","profileMobile","disabled","",3,"ngModel","ngModelChange"],["position","floating"],["id","profileName","type","text","name","profileName",3,"ngModel","ngModelChange"],["id","profilePassword","type","password","name","profilePassword",3,"ngModel","ngModelChange"],[4,"ngIf"],["color","primary","expand","block",3,"disabled","click"],["color","danger","expand","block",3,"click"],[2,"padding-top","2em"],["href","https://api.fidj.ovh","target","_blank"]],template:function(o,n){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._UZ(3,"img",1),e._uU(4," Your profile "),e.qZA()()(),e.TgZ(5,"ion-content",2)(6,"ion-refresher",3),e.NdJ("ionRefresh",function(t){return n.refresh(t)}),e._UZ(7,"ion-refresher-content"),e.qZA(),e.TgZ(8,"ion-header",4)(9,"ion-toolbar")(10,"ion-title",5),e._uU(11,"Home"),e.qZA()()(),e.TgZ(12,"form",null,6)(14,"ion-grid")(15,"ion-row")(16,"ion-col",7)(17,"ion-row")(18,"ion-col")(19,"ion-item")(20,"ion-label"),e._uU(21,"Email"),e.qZA(),e.TgZ(22,"ion-input",8),e.NdJ("ngModelChange",function(t){return n.profileEmail=t}),e.qZA()(),e.TgZ(23,"ion-item")(24,"ion-label"),e._uU(25,"Mobile"),e.qZA(),e.TgZ(26,"ion-input",9),e.NdJ("ngModelChange",function(t){return n.profileMobile=t}),e.qZA()(),e.TgZ(27,"ion-item")(28,"ion-label",10),e._uU(29,"Name"),e.qZA(),e.TgZ(30,"ion-input",11),e.NdJ("ngModelChange",function(t){return n.profileName=t}),e.qZA()(),e.TgZ(31,"ion-item")(32,"ion-label",10),e._uU(33,"Update your password"),e.qZA(),e.TgZ(34,"ion-input",12),e.NdJ("ngModelChange",function(t){return n.profilePassword=t}),e.qZA()(),e.YNc(35,P,2,1,"ion-item",13),e.YNc(36,Z,2,1,"ion-item",13),e.qZA()(),e.TgZ(37,"ion-row")(38,"ion-col")(39,"ion-button",14),e.NdJ("click",function(){return n.putChanges()}),e._uU(40,"Update"),e.qZA()(),e.TgZ(41,"ion-col"),e._UZ(42,"p"),e.qZA(),e.TgZ(43,"ion-col")(44,"ion-button",15),e.NdJ("click",function(){return n.logout()}),e._uU(45,"Logout"),e.qZA()()(),e.TgZ(46,"ion-row",16)(47,"ion-col")(48,"a",17),e._uU(49,"You need more? Please use our API"),e.qZA()()()()()()()()),2&o&&(e.Q6J("translucent",!0),e.xp6(5),e.Q6J("fullscreen",!0),e.xp6(17),e.Q6J("ngModel",n.profileEmail),e.xp6(4),e.Q6J("ngModel",n.profileMobile),e.xp6(4),e.Q6J("ngModel",n.profileName),e.xp6(4),e.Q6J("ngModel",n.profilePassword),e.xp6(1),e.Q6J("ngIf",n.profileAppsSubscribed),e.xp6(1),e.Q6J("ngIf",n.profileAppsOwned),e.xp6(3),e.Q6J("disabled",!n.me))},dependencies:[l.YG,l.wI,l.W2,l.jY,l.Gu,l.pK,l.Ie,l.Q$,l.nJ,l.Wo,l.Nd,l.wd,l.sr,l.j9,g.O5,s._Y,s.JJ,s.JL,s.Q7,s.c5,s.On,s.F]}),i})()}];let b=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(M),d.Bz]}),i})(),A=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.Pc,g.ez,s.u5,c.e,b]}),i})()}}]);