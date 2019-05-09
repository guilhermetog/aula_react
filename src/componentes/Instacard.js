import React from "react";
import InstacardComment from "./InstacardComment";

class Instacard extends React.Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%"}} >
                <div style={{flex:1, display:"flex", justifyContent:"space-between", alignItems:"center",  flexGrow:0}}>
                    <div style={{display:"flex", alignItems:"center", margin:"5px"}}>
                        <img src="https://avatars2.githubusercontent.com/u/26307271?s=460&v=4" style={{
                            backgroundColor:"black",
                            width:"50px",
                            height:"50px",
                            borderRadius:"50%", 
                            marginRight:"15px"
                        }}/>
                        <span>guilhermetog</span>
                    </div>
                    <div style={{width:"50px", height:"50px", display:"flex", alignItems:"center"}}>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                <img src="https://avatars2.githubusercontent.com/u/18492592?s=460&v=4" style={{flex:10, flexGrow:0}}/>
                <div style={{flex:4, display:"flex", flexDirection:"column"}}>
                        <div style={{flex:2, display:"flex", justifyContent:"space-between", flexGrow:0}}>
                            <div style={{display:"flex"}}>
                                <div style={{width:"50px", height:"50px", margin:"5px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <i class="far fa-heart" style={{fontSize:35, color:"#999"}}></i>
                                </div>
                                <div style={{width:"50px", height:"50px", margin:"5px", display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <i class="far fa-comment" style={{fontSize:35, color:"#999"}}></i>
                                </div>
                                <div style={{width:"50px", height:"50px", margin:"5px",display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <i class="fas fa-external-link-alt" style={{fontSize:35, color:"#999"}}></i>
                                </div>
                            </div>
                            <div style={{width:"50px", height:"50px", margin:"5px",display:"flex", alignItems:"center", justifyContent:"center"}}>
                                <i class="far fa-bookmark" style={{fontSize:35, color:"#999"}}></i>
                            </div>
                        </div>
                        <div style={{flex:1}}>
                            <span>3 curtidas</span>
                        </div>
                        <div style={{flexBasis:5}}>
                            <p>ahuidaisuhdiasdhpasdhas asidhasivpoasscjp opij dopiavjadoip sopdi jsdoip jcpoi js poids opidsj dsopi 
                            jdsop ijds opjdsdsopij dospi jds poij d posdij sd pojsd posdj sdp oidsj dspo jds posdj </p>
                        </div>
                        <InstacardComment/>
                </div>
            </div>
        )
    }
}


export default Instacard