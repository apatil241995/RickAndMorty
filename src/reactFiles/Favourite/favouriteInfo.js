import { connect } from 'react-redux';
import { Card, Grid, Button } from '@mui/material';
import { addFevourite } from '../../Redux files/actions';
import FavouriteCard from './favouriteCard';

function FavouriteInfo({ favData }) {
  console.log(favData)

  return (
    <div>
      <div>
        <Button>Favourite</Button>
      </div>
      <div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
          {
            favData.map((charac) =>
              <Grid item xs={3}>
                <FavouriteCard key={charac.id} charac={charac} />
              </Grid>)
          }
        </Grid>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    favData: state.favourite.favouriteData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFevourite: (payload) => dispatch(addFevourite(payload))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteInfo)