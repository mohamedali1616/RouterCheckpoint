
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';

const FilterMovie = ({setSearch, setEtoile, search, etoile}) =>{
    const handleReset =()=>{
        setEtoile(0)
        setSearch('')
    }
    return(
        <div style={{}}>
            <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Rating value={etoile} onChange={(e)=>setEtoile(e.target.value)}/>
            <Button onClick={handleReset} variant="light">Reset</Button>
        </div>
    )
}
export default FilterMovie