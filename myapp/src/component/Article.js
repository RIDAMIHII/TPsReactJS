// rfce => function


import React from 'react'

function Article(props) {
  return (
    <div>

      <h2>  
        {props.id} -                                            
        Auteur : {props.auteur}
      </h2>

      <h2>
        Titre : {props.titre}
      </h2>


        {props.children}
      

    </div>
  )
}

export default Article
