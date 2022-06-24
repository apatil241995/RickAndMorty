import './characterinfo.css'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, addFevourite, removeFevourite } from '../Redux files/actions';
import { Link, Grid, Button } from '@mui/material';
import CharacCard from './Charcter/characterCard';
import StarIcon from '@mui/icons-material/Star';


function Characinfo({
  characterData,
  fetchCharacters,
}) {

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div>
      <div>
        <Button>
          <Link to='/favInfo'>
            Fav
          </Link>
        </Button>
      </div>
      <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
          {
            characterData.character.map((charac) =>
              <Grid item xs={3}>
                <CharacCard key={charac.id} charac={charac} />
              </Grid>)
          }
        </Grid>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    characterData: state.character,
    favData: state.favourite.favouriteData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characinfo);
