class TituloDinamic extends HTMLElement{
    constructor(){
        super();
        const shadow=this.attachShadow({mode:"open"});
        const componenteROOT=document.createElement('h1');
        componenteROOT.textContent=this.getAttribute("titulo")
        const style=document.createElement('style');
        style.textContent=`
        h1{
            color:red;
        }`;
        shadow.appendChild(componenteROOT)
        shadow.appendChild(style)

    }
}

customElements.define("titulo-dinamico",TituloDinamic);
