import styles from "./Project.module.css"
import {useParams} from 'react-router-dom'
import {useState, useEffect} from "react"
import Loading from "../layout/Loading"

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        // Para ver o loading
      setTimeout(()=>{

        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)                
          })

      },300)   
                 
      }, [id])

    function toggleProjectForm(){
      setShowProjectForm(!showProjectForm)

    }

    return(
        <>
          {project.name ? (
            <div className={styles.project_details}>
              <h1>Projeto: {project.name}</h1>
              <button className={styles.btn}onClick={toggleProjectForm}>                
                {!showProjectForm ? 'Editar projeto':'fechar'}
              </button>
              {!showProjectForm ? (
                <div className={styles.project_info}>
                  <p>
                    <span>Categoria:</span>{project.category.name}
                  </p>
                  <p>
                    <span>Total de Orçamento:</span>R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado:</span>{project.cost}
                  </p>
                </div>
            
              ) : (
                <div className={styles.project_info}>
                  <p>detalhes do projeto</p>
                </div>
              )}            
            </div>

          ):(
            <Loading/>
          )}
        </>
    )
}
export default Project