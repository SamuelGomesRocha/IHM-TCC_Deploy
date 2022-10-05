import './styles.css'
import Lupa from '../../img/search.svg'
import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import loading from '../../img/load.gif'

export function ResultScreen(){

    const navigate = useNavigate()
    const [backGroundImg, setBackgroundImg] = useState<string>(`url(${Lupa})`)

    return(
        <>
        <div 
            className='result-header'
        >

            <div 
                className='btn-home'
                onClick={()=> navigate("/")}    
                title="Retorne ao menu inicial"
            >
                <AiOutlineHome color='#fff'/>

        </div>

                
            <input className='search-input-result' 
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

        </div>
    

        <div className='result-cards'>
            <div className='result-top-cards'>

            
                <div className='sentiment-card-1'>
                    <div className='sentiment-card-title'>
                            <h3>Vetor de Frequências</h3>
                    </div>

                    <div className='sentiment-card-content'>
                         <img className='img-loading' src={loading} alt='Loading'/>
                    </div>
                    
                </div>

                <div className='sentiment-card-1'>
                    <div className='sentiment-card-title'>
                            <h3>Análise de Sentimentos</h3>
                    </div>
                    <div className='sentiment-card-content'>
                         <img className='img-loading' src={loading} alt='Loading'/>
                    </div>
                </div>
            
            </div>
            <div className='sentiment-card-2'>
                   <div className='sentiment-card-title'>
                        <h3>hello, world!</h3>
                   </div>
                   <div className='sentiment-card-content'>
                         <img className='img-loading' src={loading} alt='Loading'/>
                    </div>
            </div>

        </div>
        </>
    )
}