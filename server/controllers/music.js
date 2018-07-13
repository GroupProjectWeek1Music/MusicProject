const axios = require('axios')

class MusicController {

    static searchArtist(req, res){

        let artistName = req.headers.artist;
        axios.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=5`,
            {headers : {
              Authorization : "Bearer BQBYoR1sh0dWdzTfmlJXWCjK6ouEr53tY_C0sZ2pj5DLHnjV_IO2XWN1ZtvNeOqKzCzUzyvN4tIDXgb0vCqBcBxT3L7TrN96TE_aAcX3oJrFr6JA2Y4NUqM4878mgMIClp5Xa7fzGd1WAK5pc6STXXxdtPEy-10kj7zjtwPjVWyqssH7lhIlNipM2n377ZcgLobpOCqwKLjoFg4YExP82V37ZkxQ-FU"
            }})
            .then(function (response) {
              console.log("ERROR SINI")

              res.status(200).json(response.data)
               
            })
            .catch(function (error) {
              // handle error
              console.log(error)
              res.status(400).json(error)
              
            })

    }

    static searchTrack(req, res){

        let trackName = req.headers.track;

        axios.get(`https://api.spotify.com/v1/search?q=${trackName}&type=track&limit=5`,
            {headers : {
              Authorization : "Bearer BQBYoR1sh0dWdzTfmlJXWCjK6ouEr53tY_C0sZ2pj5DLHnjV_IO2XWN1ZtvNeOqKzCzUzyvN4tIDXgb0vCqBcBxT3L7TrN96TE_aAcX3oJrFr6JA2Y4NUqM4878mgMIClp5Xa7fzGd1WAK5pc6STXXxdtPEy-10kj7zjtwPjVWyqssH7lhIlNipM2n377ZcgLobpOCqwKLjoFg4YExP82V37ZkxQ-FU"
            }})
            .then(function (response) {
              // handle success
              
              res.status(200).json(response.data)
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
        Authorization : "Bearer BQBYoR1sh0dWdzTfmlJXWCjK6ouEr53tY_C0sZ2pj5DLHnjV_IO2XWN1ZtvNeOqKzCzUzyvN4tIDXgb0vCqBcBxT3L7TrN96TE_aAcX3oJrFr6JA2Y4NUqM4878mgMIClp5Xa7fzGd1WAK5pc6STXXxdtPEy-10kj7zjtwPjVWyqssH7lhIlNipM2n377ZcgLobpOCqwKLjoFg4YExP82V37ZkxQ-FU"
      }})
      .then(function (response) {
        // handle success
        console.log(response);
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        // handle error

        res.status(400).json(error)
        console.log(error);
      })

    }
    
    
}

module.exports = MusicController