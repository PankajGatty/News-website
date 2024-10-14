import React from 'react'

const Card = ({data}) => {
     console.log(data);
     if (!data || data.length === 0) {
        return <p>No news available. Please search again.</p>;  // You can display a message if no data is available
      }

      const readMore =(url)=>{
        window.open(url, '_blank');
      }
    
  return (
    <div className='cardContainer'>
        {data.map((curItem,index)=>{
            if(!curItem.urlToImage){
                return null
            }else{
                return(
                    <div key={index} className='card'>
                        <img src={curItem.urlToImage}/>
                        <div className='content'>
                            <a className='title' onClick={() => window.open(curItem.url)}>{curItem.title} </a>
                            <p>{curItem.description}</p>
                            <button onClick={() => window.open(curItem.url)}>Read More</button>
                        </div>
                    </div>
                )
            }
            
        })}
       
    </div>
  )
}

export default Card