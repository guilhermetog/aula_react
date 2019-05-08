import React from "react";

class Instacard extends React.Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}} >
                <div style={{flex:1, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{display:"flex", alignItems:"center", margin:"5px"}}>
                        <div style={{
                            backgroundColor:"black",
                            width:"50px",
                            height:"50px",
                            borderRadius:"50%", 
                            marginRight:"15px"
                        }}></div>
                        <span>guilhermetog</span>
                    </div>
                    <div style={{width:"50px", height:"50px", display:"flex", alignItems:"center"}}>...</div>
                </div>
                <div style={{flex:10, backgroundColor:"green"}}>

                </div>
                <div style={{flex:4, display:"flex", flexDirection:"column"}}>
                        <div style={{flex:2, display:"flex", justifyContent:"space-between"}}>
                            <div style={{display:"flex"}}>
                                <div style={{width:"50px", height:"50px", margin:"5px", backgroundColor:"green"}}></div>
                                <div style={{width:"50px", height:"50px", margin:"5px", backgroundColor:"yellow"}}></div>
                                <div style={{width:"50px", height:"50px", margin:"5px", backgroundColor:"red"}}></div>
                            </div>
                            <div>
                            <div style={{width:"50px", height:"50px", margin:"5px", backgroundColor:"blue"}}></div>
                            </div>
                        </div>
                        <div style={{flex:1}}>
                            <span>3 curtidas</span>
                        </div>
                        <div style={{flex:3}}>
                            <p>ahuidaisuhdiasdhpasdhas asidhasivpoasscjp opij dopiavjadoip sopdi jsdoip jcpoi js poids opidsj dsopi 
                            jdsop ijds opjdsdsopij dospi jds poij d posdij sd pojsd posdj sdp oidsj dspo jds posdj </p>
                        </div>
                </div>
                <div style={{flex:3, backgroundColor:"blue"}}>

                </div>
                <div style={{flex:2, display:"flex"}}>
                        <input style={{flex:5}} type="text" placeholder="Adicionar um comentario..."/>
                        <div style={{flex:1, display:"flex", alignItems:"center", justifyContent:"center"}}>Publicar</div>
                </div>
            </div>
        )
    }
}


export default Instacard