class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build())
      //  shadow.appendChild(this.styles());
    }
        build()
        {
            const componenteROOT=document.createElement("div");
            componenteROOT.setAttribute("class","card")
            const card_left=document.createElement("div")
            card_left.setAttribute("class","card-left")
            const card_right=document.createElement("div")
            card_right.setAttribute("class","card-right")
            const autor=document.createElement("span")
            const link_noticia=document.createElement("a")
            const paragrafo_noticia=document.createElement("p")
            const imagen_vander=document.createElement("img")

            card_right.appendChild( imagen_vander)
            componenteROOT.appendChild(card_left);
            componenteROOT.appendChild(card_right);
            
            
            
            return componenteROOT
        }
        styles()
        {/**/
    
        }
    
}
//sempre colocar - no nome 
customElements.define('card-news',CardNews)