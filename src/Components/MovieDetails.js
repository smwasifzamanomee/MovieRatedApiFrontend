import axios from 'axios'
import React, { useState } from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const MovieDetails = (props) => {
    const [highlighted, setHighlighted] = useState(-1)

    const highlightRate = high => evt =>{
        setHighlighted(high)
    }

    const mov = props.movie

    const rateClicked = rate => evt =>{
            axios.post(`http://127.0.0.1:8000/api/movies/${mov.id}/rate_movie/`,{
                
                method: 'POST',
                headers:{
                    'Content-Type':"application/json",
                    'Authorization': "Token 945107a5e5108e11122d69a3e2e1e8c3191906e0"
                },
                body: JSON.stringify({stars: rate + 1})
            }
            )
             .then (res => res.json())
             .then(res => {
               console.log(res)
             })
             .catch(err => {
               console.log(err)
             })
    }
    return (
        // just random get data
        // <div>
        //     <h1>{mov && mov.title}</h1>
        //     <p>{mov && mov.description}</p>
        // </div>

        // ternary oparator
    <React.Fragment>

        <div>
            {mov ? (
                <div>
                    <h1>{mov.title}</h1>
                    <p>{mov.description}</p>
                    <div className='flex pt-2 '>
                    <AiOutlineStar className={mov.avg_rating > 0 ? 'orange' : ''}/>
                    <AiOutlineStar className={mov.avg_rating > 1 ? 'orange' : ''}/>
                    <AiOutlineStar className={mov.avg_rating > 2 ? 'orange' : ''}/>
                    <AiOutlineStar className={mov.avg_rating > 3 ? 'orange' : ''}/>
                    <AiOutlineStar className={mov.avg_rating > 4 ? 'orange' : ''}/>
                    ({mov.no_of_ratings})

                    </div>
                    <div className='rate-container'>
                        <h2>Rate it</h2>
                        <div className='flex'>
                        {
                            
                            [...Array(5)].map((e, index)=>{
                                return <AiOutlineStar key={index} className={highlighted > index  - 1 ? 'purple' : ''}

                                onMouseEnter={highlightRate(index)}

                                onMouseLeave={highlightRate(-1)}

                                onClick={rateClicked(index)}
                                
                                />
                            })
                        }
                        </div>
                        
                    </div>
                    
                </div>
                ): null
            }
        </div>
    </React.Fragment>

    )
}

export default MovieDetails