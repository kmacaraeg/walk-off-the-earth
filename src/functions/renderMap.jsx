const RenderMapList = (props) => {

    const locations = tourStops
    // const changeGame = (x) => {
    //   this.setState(()=>{
    //     return {game: x}
    //   })
    // }
  
    console.log(locations)
  
    const mapList = locations.map((x) => <MapListItem onClick={changeGame(x.game)}>{x.city}</MapListItem>)
  
    return mapList
  
  
  }

export default RenderMapList;