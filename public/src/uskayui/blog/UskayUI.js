export class UskayUI extends HTMLElement{render(e){const t=this.getStyle(e),n=this.getTemplate(e);n.then?n.then(e=>{this._render(t,e)}):this._render(t,n)}_render(e,t){const n=document.createElement("template");n.innerHTML=`<style>${e}</style>${t}`,window.ShadyCSS&&(ShadyCSS.prepareTemplate(n,this.getComponentName()),ShadyCSS.styleElement(this)),this.attachShadow({mode:"open"}).appendChild(document.importNode(n.content,!0)),this.addEvents&&this.addEvents()}};