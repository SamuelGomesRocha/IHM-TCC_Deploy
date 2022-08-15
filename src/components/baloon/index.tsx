import { useEffect, useState } from 'react'
import './styles.css'

export function Baloon(){

    const [b1, setB1] = useState<boolean>(false)
    const [b2, setB2] = useState<boolean>(false)
    const [b3, setB3] = useState<boolean>(false)

    useEffect(() =>{
        setTimeout(() =>{
            setB1(true)
            setTimeout(() =>{
                setB2(true)
                setTimeout(() =>{
                    setB3(true)
                }, 3000)
            }, 3000)
            
        }, 3000)
        
    })


    return(

        <div className='baloons'>
            {b1 && 
                <div className='b1'> 
                        teste
                </div>
            }
            {b2 && 
                <div className='b2'> 

                </div>
            }
            {b3 && 
                <div className='b3'> 

                </div>
            }
        </div>

    )

}