import "./home.css"
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import {motion} from "framer-motion"
import Orb from '../components/Orb';

function Home(){
    return(
        <>
            <div style={{ width: '100%', height: '0px', position: 'relative',  }}>
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />

  
</div>
        <div className="Main">

        <motion.div className="redes"
        initial={{x:-550,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{
            duration:1.5,
            ease:"easeInOut"
        }}
        >
        <a href="https://github.com/KEVIN00017"  className="rede"><SlSocialGithub size={25} color="blueviolet"/> </a>
        <a href="" className="rede"><SlSocialLinkedin size={25} color="blueviolet"/></a>
        
        
        </motion.div>    




             <div className="p1">
                
        <motion.h1
        initial={{y:-500,opacity:0}}
             animate={{y:0,opacity:1}}
             transition={{
                duration:1,
            ease:"easeInOut"
             }}
        >
    Olá! Me Chamo Kevin
  </motion.h1>
  <motion.p className="apresentacao"
    initial={{y:550,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{
        duration:1.5,
        ease:"easeInOut"
                }}
  >
    Tenho grande interesse em múltiplas áreas do desenvolvimento, incluindo criação de jogos, 
    aplicações mobile, front-end e back-end. Gosto de explorar novas linguagens e ferramentas,
    sempre buscando aprender e aplicar soluções criativas em projetos reais. 
  </motion.p>
  
      </div>



        <br />


        <motion.div className="links"
        initial={{y:50,opacity:0}}
        animate={{y:0, opacity:1}}
        transition={
            {
                duration:2,
                ease:"easeInOut"
            }
        }
        >

        <a href="#Projetos" className="link">PROJETOS</a>
        <a href="#Contatos" className="link" id="CONTATOS">CONTATOS</a>
        
        </motion.div>



       </div>
        
        </>
    )
}


export default Home