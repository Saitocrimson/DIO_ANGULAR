function Exibe(version:string){
   return (target:any)=>{
    Object.assign(target.prototype, {__version:version,__name:"pudim"})
   };
}
function Minimo(length:number){
    return (target:any,key:string) =>
    {
        let _value=target[key];
        const getter=()=>_value;
        const setter=(value:string)=>{
            if(value.length<length){
                throw new Error(`Tamanho menor que ${length}`)
            }
            else{
                _value=value;
            }
        }
        Object.defineProperty(target,key,{
            get:getter,
            set:setter,

        })
    };
 }

//@Exibe("1.10")
class Api{
    @Minimo(3)
    names:string;
    constructor(names:string){
        this.names=names
    }

}
const api=new Api("alface")
console.log(api.names);
