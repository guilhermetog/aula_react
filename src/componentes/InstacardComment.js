import React from "react";

class InstacardComment extends React.Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}}>
                <div style={{flex:3, display:"flex", flexDirection:"column" }}>
                    {/* Comentario */}
                    <div style={{display:"flex", flexBasis:"100px"}}>
                        <div style={{flex:1, display:"flex", flexDirection:"column"}}>
                            <p style={{flex:1}}>
                                Que cara gente fina!
                            </p>
                            <p style={{flexBasis:"30px", color:"#555"}}>09/05/2019 - 08:45</p>
                        </div>
                        <div style={{flexBasis:"50px", flexGrow:0, display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <i class="far fa-heart" style={{fontSize:20, color:"#999"}}></i>
                        </div>
                    </div>
                </div>
                <div style={{flexBasis:"60px", display:"flex", flexGrow:0}}>
                        <input style={{flex:5}} type="text" placeholder="Adicionar um comentario..."/>
                        <div style={{flex:1, display:"flex", alignItems:"center", justifyContent:"center"}}>Publicar</div>
                </div>
            </div>
        )
    }
}


export default InstacardComment