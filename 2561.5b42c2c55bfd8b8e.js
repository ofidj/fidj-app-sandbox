"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2561],{2561:(D,c,o)=>{o.r(c),o.d(c,{AppPageModule:()=>I});var p=o(4556),a=o(1407),l=o(6895),g=o(433),h=o(7582),e=o(8256),u=o(5860),m=o(9251),A=o(529);function v(t,s){if(1&t&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Title : ",i.appDetail.title," ")}}function Z(t,s){if(1&t&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.hij(" Description : ",i.appDetail.description," ")}}function P(t,s){if(1&t&&(e.TgZ(0,"ion-item"),e._UZ(1,"img",8),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.s9C("src",i.appDetail.badge,e.LSH)}}let f=(()=>{class t{constructor(i,n,d,r,T){this.router=i,this.route=n,this.fidjService=d,this.fidjConnectionService=r,this.http=T}ngOnInit(){this.appId=this.route.snapshot.params.appId,this.refresh(null)}refresh(i){return(0,h.mG)(this,void 0,void 0,function*(){try{this.http.get(this.fidjConnectionService.getUrl()+`/apps/${this.appId}`).subscribe(n=>{console.log("data:",n),this.appDetail=n.app,this.appDetail.badge=this.fidjConnectionService.getUrl()+`/apps/${this.appId}/badge`})}catch(n){yield this.fidjConnectionService.checkError(n)}i&&i.target.complete()})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(u.DR),e.Y36(m.G),e.Y36(A.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-app"]],decls:18,vars:7,consts:[[3,"translucent"],["src","assets/fidj-logo.png","height","15em"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["collapse","condense"],["size","large"],["size-md","8","offset-md","2","size-sm","12"],[4,"ngIf"],[3,"src"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._UZ(3,"img",1),e._uU(4),e.qZA()()(),e.TgZ(5,"ion-content",2)(6,"ion-refresher",3),e.NdJ("ionRefresh",function(r){return n.refresh(r)}),e._UZ(7,"ion-refresher-content"),e.qZA(),e.TgZ(8,"ion-header",4)(9,"ion-toolbar")(10,"ion-title",5),e._uU(11),e.qZA()()(),e.TgZ(12,"ion-grid")(13,"ion-row")(14,"ion-col",6),e.YNc(15,v,2,1,"ion-item",7),e.YNc(16,Z,2,1,"ion-item",7),e.YNc(17,P,2,1,"ion-item",7),e.qZA()()()()),2&i&&(e.Q6J("translucent",!0),e.xp6(4),e.hij(" ",n.appId," "),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(6),e.Oqu(n.appId),e.xp6(4),e.Q6J("ngIf",n.appDetail),e.xp6(1),e.Q6J("ngIf",n.appDetail),e.xp6(1),e.Q6J("ngIf",n.appDetail))},dependencies:[p.wI,p.W2,p.jY,p.Gu,p.Ie,p.nJ,p.Wo,p.Nd,p.wd,p.sr,l.O5]}),t})();const j=[{path:"",component:f}];let x=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(j),a.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Pc,l.ez,g.u5,a.Bz.forChild([{path:"",component:f}]),x]}),t})()}}]);