import React from 'react'

export const Time = () => {
    
        let seconds = data.duration;
        // let days = Math.floor(seconds / (3600 * 24));
        let hours = Math.floor((seconds % (3600 * 24)) / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        // let secs = Math.floor(seconds % 60);
      
        return (
         <>
              <p> Duration: {` ${hours} hr ${mins} min`}</p>
           </>
        )
}