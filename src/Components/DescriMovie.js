import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DescriMovie= ({movies})=>{
    const {id} = useParams()
    const found = movies.find((el,i,t)=>el.id == id)
    const navigate= useNavigate()

    return(
        <div>
            
            <Card className="text-center">
                <Card.Header>{found.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{found.title}</Card.Title>
                    <Card.Text>
                        <img src={found.posterURL} style={{width: '300px'}} alt="Not Found"/><br/>
                        {found.description}<br/>
                        <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br/>
                        <Button variant="primary" onClick={()=>navigate('/')}>Go Home</Button>
                    </Card.Text>
                    
                </Card.Body>
                
                <Card.Footer className="text-muted">{found.title}</Card.Footer>
            </Card>
        </div>
    )
}
export default DescriMovie