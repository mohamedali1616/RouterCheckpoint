import Carousel from 'react-bootstrap/Carousel';

const Home=({movies})=>{
    return(
    <div className='carC'>
        <Carousel data-bs-theme="dark" style={{width:'800px', height:'650px'}}>

            {
                movies.map((el,i,t)=>
                <Carousel.Item style={{width:'800px', height:'650px'}}>
                    <img
                    style={{width:'800px', height:'650px'}}
                    className="d-block w-100"
                    src={el.posterURL}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    {/* <h5 style={{color:'white'}}>{el.title}</h5>
                    <p style={{color:'white'}}>{el.description}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                )
            }

        </Carousel>
    </div>
    )
}
export default Home