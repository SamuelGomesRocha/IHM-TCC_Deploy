import TwitterImage from '../../img/twitter_image.png'
import Lupa from '../../img/search.svg'
import KeyImage from '../../img/key.ico'
import IFG from '../../img/ifg.png'
import './styles.css'
import Modal from 'react-modal'
import { KeysModal } from '../../components/keys-modal'
import { useEffect, useState } from 'react'
import { Baloon } from '../../components/baloon'
import Typewriter from "typewriter-effect"


Modal.setAppElement('#root')

export function Search(){

    const [validateBackgroundImg, setValidateBackgroundImg] = useState<boolean>(true)
    const [backGroundImg, setBackgroundImg] = useState<string>(`url(${Lupa})`)
    const [openModal, setOpenModal] = useState<boolean>(false)

    function handleOpenModal(){
        setOpenModal(true)
    }

    function handleCloseModal(){
        setOpenModal(false)
    }

    return(

        <div className="search-container">
            

            <div className='search-title' style={{
                marginBottom: "-21%",
                marginTop: "12%",
                display: "flex"
            }}> 
                <h1
                    style={{color:"var(--verde)", marginBottom:'-5%'}}
                >recupere os sentimentos inerentes a</h1>
                <h1 style={{fontFamily: "Ubuntu", color:"var(--laranja)"}}>
                <Typewriter
                    options={{
                        strings: ['PESSOAS',
                          'NOMES', 'COISAS',
                          'IDEIAS', 'LOCAIS',
                          'EVENTOS', 'EMPREENDIMENTOS'  
                        ],
                        autoStart: true,
                        loop: true
                    }}
                />
                </h1>
            </div>


            <input className='search-input' 
            style={{
            backgroundImage: `${backGroundImg}`,
            backgroundSize: "15px 15px",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left 8px',
            backgroundPositionX: '10px',
            backgroundColor: 'var(--verde))'}}
            title="Pesquise algo"
            >    
            </input>
            <div className="search-keys"
                onClick={handleOpenModal}
                title="Insira as chaves para se conectar à API do Twitter."
            >
                <img 
                    src={KeyImage}
                    style={{width:"20px"}}
                />
            </div>

            <img src={IFG} style={{width:"60px", marginTop:"29%", position:"fixed"}}/>

        <Modal 
            className="main-modal"
            isOpen={openModal}
            onRequestClose={handleCloseModal}
        >
            <h1 className='modal-title'><img src={KeyImage} style={{width:"30px"}}/> Keys <img src={KeyImage} style={{width:"30px"}}/></h1>
            <form className='main-modal-form'>
                <label>API Key</label>
                <input type='text'></input>
                <label>API Secret</label>
                <input type='text'></input>
                <label>Access Token</label>
                <input type='text'></input>
                <label>Access Secret</label>
                <input type='text'></input>
            </form>
            <div className='search-modal-buttons'>
                <button className = "search-modal-btn" 
                    style={{backgroundColor:'var(--laranja)'}}
                onClick={handleCloseModal}>Retornar</button>
                <button className = "search-modal-btn" onClick={handleCloseModal}>Inserir</button>
            </div>
          
        </Modal>




        <footer className="search-rodape"> 
                <div className = "search-footernote" style={{backgroundColor: 'var(--verde)'}}>
                    <img src={TwitterImage} 
                    style={{width:"13px", backgroundColor: 'var(--verde)'}}/> 
                Luc e Sam © www.git.opinionetc.com.br   </div>
        </footer>   
        </div>

    )
}