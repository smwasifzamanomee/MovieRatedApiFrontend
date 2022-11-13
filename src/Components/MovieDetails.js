import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'

const MovieDetails = (props) => {
    return (
        // just random get data
        // <div>
        //     <h1>{props.movie && props.movie.title}</h1>
        //     <p>{props.movie && props.movie.description}</p>
        // </div>

        // ternary oparator
        <div>
            {props.movie ? (
                <div>
                    <h1>{props.movie.title}</h1>
                    <p>{props.movie.description}</p>
                    <div className='flex pt-2 '>
                    <AiOutlineStar className={props.movie.avg_rating > 0 ? 'orange' : ''}/>
                    <AiOutlineStar className={props.movie.avg_rating > 1 ? 'orange' : ''}/>
                    <AiOutlineStar className={props.movie.avg_rating > 2 ? 'orange' : ''}/>
                    <AiOutlineStar className={props.movie.avg_rating > 3 ? 'orange' : ''}/>
                    <AiOutlineStar className={props.movie.avg_rating > 4 ? 'orange' : ''}/>
                    ({props.movie.no_of_ratings})
                    </div>
                    
                </div>
                ): null
            }
        </div>

    )
}

export default MovieDetails