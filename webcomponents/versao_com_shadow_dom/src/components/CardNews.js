class CardNews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles());
    }
        build()
        {
            const componenteROOT=document.createElement("div");
            componenteROOT.setAttribute("class","card")
            
            const card_left=document.createElement("div")
            card_left.setAttribute("class","card_left")
           
            const card_right=document.createElement("div")
            card_right.setAttribute("class","card_right")
            
            const autor=document.createElement("span")
            autor.textContent="By "+(this.getAttribute("autor")||"unknown")
            
            const link_noticia=document.createElement("a")
            link_noticia.textContent=this.getAttribute("title")
            link_noticia.href=this.getAttribute("link-url")
            
            const paragrafo_noticia=document.createElement("p")
            paragrafo_noticia.textContent=this.getAttribute("contet")
            
            const imagen_vader=document.createElement("img")
            imagen_vader.src=this.getAttribute("photo")||"./src/img/foto-default.jpg"
            imagen_vader.alt="foto "
            
            card_left.appendChild(autor)
            card_left.appendChild(link_noticia)
            card_left.appendChild(paragrafo_noticia)
            card_right.appendChild( imagen_vader)
            componenteROOT.appendChild(card_left);
            componenteROOT.appendChild(card_right);
            
            
            
            return componenteROOT
        }
        styles()
        {const estilo = document.createElement("style")
        estilo.textContent=`
        .card{
            
            background-color: aliceblue;
            width: 88%;
            border:1px solid gray;
            display:flex;
            
            box-shadow:9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow:9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow:9px 9px 27px 0px rgba(0,0,0,0.75);
            flex-direction: row;
        }
        .card_left, .card_right{
            border: 1px solid blue;
         
        }
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            padding-right: 20px;
        
        }
        .card_left > span{
            font-weight:300;
        }
        .card_left > a{
            margin-top: 15px;
            font-size:25px ;
            color:black;
            text-decoration: none;
            font-weight: bold;
        
        }
        .card_left >p{
            color:rgb(70,70,70);
        
        }`
        return estilo
        }
    
}
//sempre colocar - no nome 
customElements.define('card-news',CardNews)