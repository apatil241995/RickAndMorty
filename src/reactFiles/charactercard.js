import './charactercard.css'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, addFevourite } from '../Redux files/actions';
import { Card, Grid, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


function Characinfo({ characterData, fetchCharacters, addFevourite }) {

  useEffect(() => {
    fetchCharacters()
  }, [])

  const star = (event) => {
    console.log("Hello")
    addFevourite(event.id)
    console.log(event.targate.id)
  }

  return (
    <div>
      <h2>character list</h2>
      <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
          {
            characterData.character.map((charac) =>
              <Grid item xs={3}>
                <Card variant="outlined" className='card'>
                  <img src={charac.image}></img>
                  <h4>Id:{charac.id}</h4>
                  <h4>Name:{charac.name}</h4>
                  <h4>Status:{charac.status}</h4>
                  <Button id={charac.id} onClick={star}>tap</Button>
                  <StarIcon id={charac.id} onClick={star} className='favorite'></StarIcon>
                </Card>
              </Grid>)
          }
        </Grid>


      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    characterData: state.character
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
    addFevourite: () => dispatch(addFevourite())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characinfo);
