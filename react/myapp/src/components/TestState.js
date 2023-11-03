import React, { useState , useEffect } from 'react'


function TestState() {

    let[count, setCount] = useState(0)
    let[titre, setTitre] = useState("Par Defaut")

    const [villes,setville] = useState(
        [
            {
                id : 1,
                nom : "Agadir"
            },
            {
                id : 2,
                nom : "Essaouira"
            },
            {
                id : 3,
                nom : "Marrakech"
            },
            {
                id : 4,
                nom : "Rabat"
            }
        ]
    )


    const changeTitle = ()=>{
        setTitre("New One")

        if (titre === "New One"){
            setTitre("Par defaut")
        }

        if (titre === "Par defaut"){
            setTitre("New One")
        }
        
    }

    const incriment = ()=>{
        setCount(count+1)
    }

    function decriment(){
        setCount(count-1)
    }


    const deleteVille = (id) => {
        const villefilter = [...villes];
        const newVilles = villefilter.filter((ville) => ville.id !== id);
        setville(newVilles);
    }
    
    const Edite = (id)=>{
        

    }


      function SuppVille(){
        setville([])
      }


      const [nouvelleVille,setNouvelleVille] = useState()


      function handleSubmit(e){
        //console.log(e);
        // pour prevenir le rafrichement de la page 
        e.preventDefault();
        //copie etat
        const villeCopie = [...villes];
        //faire traitement 
        //const id = new Date().getTime();
        const id = villeCopie.length + 1;
        const nom = nouvelleVille;
        villeCopie.push({id:id , nom:nom})
        //modifier etat
        setville(villeCopie)
      }
    
      function handleChange(e){
        //console.log(e);
        const newValue = e.target.value;
        setNouvelleVille(newValue)
      }


  return ( 
    <div>
      <h1> Titre : {titre}</h1>
      <ul>
        {villes.map((ville)=>(
            <li>Num : {ville.id}   Nom : {ville.nom} &nbsp;&nbsp;
                <button onClick={()=>deleteVille(ville.id)}>Delete</button>&nbsp;&nbsp;
                <button onClick={()=>Edite(ville.id)}>Edite</button>
            </li>
        ))}
      </ul>
       
      <br /><br />
      <button onClick={SuppVille}>Supp touts villes</button><br /><br />

        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" placeholder='Saisi une ville ...' value={nouvelleVille} onChange={handleChange}/>
            <button>Ajouter</button>
        </form>




      {/* <button onClick={incriment}>Click</button><br /><br />
      <button onClick={changeTitle}>Decrement</button> */}

    </div>
  )
}

export default TestState
