import "./Contato.css";
import {motion} from "framer-motion"


const Contatos=( )=>{
    return(
       <div className="geral">

        <div className="container3" id="Contatos">
                <motion.div className="card"
                initial={{y:-190,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{
                    duration:0.3,
                    ease:"easeInOut"
                }}
                
                >
                  
                    <div className="back">
                    <div className="foto1">
                        </div>
                        </div>
<div className="co">
                    <div className="contato">

                        <h2 className="inf">silvakev08@gmail.com</h2>

                        </div>
                        </div>

                </motion.div>


                <motion.div className="card" id="card2"
                initial={{y:-190,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{
                    duration:0.8,
                    ease:"easeInOut"
                }}
                >
                    <div className="back">
                    <div className="foto2">

                    </div>
                    </div>
                    <div className="co">
                        <div className="contato">
                            <h2 className="inf">+55 11 954565113</h2>
                        </div>
                        </div>
                       
                </motion.div>
                    
                

                


        </div>
        <motion.div className="button"
        initial={{y:50, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{
            duration:1.5,
            ease:"easeInOut"
        }}
        >
                <a href="#SOBRE" className="link"  id="Button">SOBRE</a>
                </motion.div>
       </div>

    )
}
 export default Contatos