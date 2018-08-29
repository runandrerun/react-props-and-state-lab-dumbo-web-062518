import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  genPets = (pets) => {
    return pets.map(p => {
      return <Pet key={p.id} pet={p} onAdoptPet={this.props.onAdoptPet}/>
    })
  };

  render() {
    return <div className="ui cards">{this.genPets(this.props.pets)}</div>
  }
}

export default PetBrowser
