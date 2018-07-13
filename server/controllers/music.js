const axios = require('axios')

class MusicController {

    static searchArtist(req, res){

        let artistName = req.headers.artist;

        axios.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=5`,
            {headers : {
              Authorization : "Bearer BQCKyxMwtDbjbDpb8RXBF4FdNvqK_sa4EZnAMmHY6KsPh6EwXTSTFhncxDisO6iJE5JMg6jI3ZaIhRYHkVw0c9ec6AmEFhEeQUH4y8nOtKlTj4epkomZ09bFofYiCoBvbS8DU4ti415toql6WPaarfke6Y5Dy8FRKcRt_C-uE1Tsf4S_GsDpJB91Iwz2"
            }})
            .then(function (response) {
              
              res.json(response.data)
               
            })
            .catch(function (error) {
              // handle error

              res.status(400).json(error)
              
            })

    }

    static searchTrack(req, res){

        let trackName = req.headers.track;

        axios.get(`https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=5`,
            {headers : {
              Authorization : "Bearer BQCKyxMwtDbjbDpb8RXBF4FdNvqK_sa4EZnAMmHY6KsPh6EwXTSTFhncxDisO6iJE5JMg6jI3ZaIhRYHkVw0c9ec6AmEFhEeQUH4y8nOtKlTj4epkomZ09bFofYiCoBvbS8DU4ti415toql6WPaarfke6Y5Dy8FRKcRt_C-uE1Tsf4S_GsDpJB91Iwz2"
            }})
            .then(function (response) {
              // handle success
              
              res.json(response.data)
            })
            .catch(function (error) {
              // handle error

              res.status(400).json(error)
              console.log(error);
            })

    }

    static getTracks (req, res) {

      let addTrack = req.body.addTrack

      axios.post('https://api.spotify.com/v1/users/2609ecdafcee47c8a6176bb83e88a507/playlists/2QnKfdJOG41McQS5RJGVAz/tracks?uris=6JzzI3YxHCcjZ7MCQS2YS1',
      {headers : {
        Authorization : "Bearer BQCKyxMwtDbjbDpb8RXBF4FdNvqK_sa4EZnAMmHY6KsPh6EwXTSTFhncxDisO6iJE5JMg6jI3ZaIhRYHkVw0c9ec6AmEFhEeQUH4y8nOtKlTj4epkomZ09bFofYiCoBvbS8DU4ti415toql6WPaarfke6Y5Dy8FRKcRt_C-uE1Tsf4S_GsDpJB91Iwz2"
      }})
      .then(function (response) {
        // handle success
        console.log(response);
        res.send(response.data)
      })
      .catch(function (error) {
        // handle error

        res.status(400).json(error)
        console.log(error);
      })

    }
    
    
}

module.exports = MusicController