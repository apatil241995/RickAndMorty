import './favoritecard.css'
import { useState } from 'react';
import { connect } from 'react-redux';
import { addFevourite, removeFevourite } from '../../Redux files/actions';
import { Card } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


function FavouriteCard({
  charac, favData
}) {

  const [isFavourite, setIsFavourite] = useState((charac in favData) ? true : false)
  const handleAdd = () => {
    setIsFavourite(true)
    addFevourite(charac)
    console.log(favData)
  }
  const handleRemove = () => {
    setIsFavourite(false)
    removeFevourite(charac)
  }
  return (
    <div>
      <div>
        <Card variant="outlined" class='card'>
          <img src={charac.image}></img>
          <h4>Id:{charac.id}</h4>
          <h4>Name:{charac.name}</h4>
          <h4>Status:{charac.status}</h4>
          {(isFavourite) ?
            <StarIcon className='favorite' onClick={handleRemove}></StarIcon> :
            <StarIcon onClick={handleAdd} ></StarIcon>
          }

        </Card>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    favData: state.favourite
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFevourite: (payload) => dispatch(addFevourite(payload)),
    removeFevourite: (payload) => dispatch(removeFevourite(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCard);