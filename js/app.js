const client = {
  id: 'FKQRUZSHMVTK3YTZO1P1PZSEF54T54ECDI1BFMM55NPCAYS4',
  secret: 'JEAPW3RDIAO0D3I32X225WXNSPN3DE5YJEUQYOLLKZA4LTC2',
  exploreURL: 'https://api.foursquare.com/v2/venues/explore'
}

function exploreAPICall() {
  const query = {
    client_id: client.id,
    client_secret: client.secret,
    near: 'Washington, DC',
    v: '20170919'
  }
  $.getJSON(client.exploreURL, query, function cb(results) {
    // console.log(results)
    let listOfResults = results.response.groups[0].items;
    listOfResults.forEach(item => {
      // console.log(item)
      let photoURL;
      if (item.tips[0].photo) {
        photoURL = item.tips[0].photourl;
      }
      let name = item.venue.name;
      let location = item.venue.location.address;
      let locationURL = item.venue.url;
      console.log(photoURL)
      console.log(name)
      console.log(location)
      console.log(locationURL)
    })
  })
}

$(exploreAPICall);