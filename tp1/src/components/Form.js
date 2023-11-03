import React , {useState} from 'react'

function Form() {

    const [nom,setNom]=useState('')

    const [password,setPassword] = useState('')
    
    const [DateNais,setDatenai]=useState('')

    const [ville,setVille]=useState('')

    const [genre,setGenre]=useState('')

    const [Loisir,setLoisir]=useState([])

    function handleSubmit(e){
        e.preventDefault();
        alert("nom : "+nom+" password : "+password+" date de naissance : "+DateNais+
              " ville : "+ville+" Genre : "+genre+" Loisirs : "+Loisir.join(','))
    }

    function handleLoisirs(e){
        if(!Loisir.includes(e.target.value)){
            setLoisir([...Loisir,e.target.value])
        }
        else{
            setLoisir([...Loisir.filter(item => item !== e.target.value)])
        }
   
    }

  return (
    <div>
      <h2>Formaulaire</h2>
      <form onSubmit={handleSubmit}>
        <p>
            <label>Nom : </label>
            <input type="text" placeholder='Entrer nom' value={nom} onChange={(e)=>setNom(e.target.value)}/>
        </p>
        <p>
            <label>Password : </label>
            <input type="text" placeholder='Entrer password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </p>
        <p>
            <label>Date de naissance : </label>
            <input type="Date" placeholder='Entrer date de naissance' value={DateNais} onChange={(e)=>setDatenai(e.target.value)}/>
        </p>

        <p>
            <label>Vile :</label>
            <select name="ville" id="" value={ville} onChange={(e) => setVille(e.target.value)}>
                <option value="Agadir">Agadir</option>
                <option value="Marrakech">Marrakech</option>
                <option value="Casablanca">Casablanca</option>
                <option value="Essaouira">Essaouira</option>
            </select>
        </p>
        <p>
            <label>Genre : </label>
            <input type="radio" name='genre' value='Masculin' onChange={(e)=>setGenre(e.target.value)} checked/>Masculin
            <input type="radio" name='genre' value='Feminin' onChange={(e)=>setGenre(e.target.value)}/>Feminin
        </p>
        <p>
            <label>Loisirs : </label>
            <input type="checkbox" name="Loisir" value={"Sport"} onChange={(e)=>handleLoisirs(e)}/>Sport
            <input type="checkbox" name="Loisir" value={"Musique"} onChange={(e)=>handleLoisirs(e)}/>Musique
            <input type="checkbox" name="Loisir" value={"Lecture"} onChange={(e)=>handleLoisirs(e)}/>Lecture
        </p>
        
        <button type='submit'>S'inscrire</button>
      </form>
    </div>
  )
}

export default Form
