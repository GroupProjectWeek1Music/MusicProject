const axios = require('axios')

class MusicController {

    static searchArtist(req, res){

        let artistName = req.headers.artist;

        axios.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=5`,
            {headers : {
              Authorization : "Bearer BQChMYCfBlg0w6SMdS3B-gIQsZiBQ1ZiGvRtB1GIsrx6bv_NiWVNTi43fpejvP0HK61Qhh-Kum1jH0au9_Ra4QdFg8n4djyBiShypT3uPZLuYJ87a3xkH35My8ckEiauKI3kw7IfwgnJIrjsNOzY7j_Q1_8VrTx_8d-3qr_c7osNjnvBlA"
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

    static searchSong(req, res){

        let songName = req.headers.song;

        axios.get(`https://api.spotify.com/v1/search?q=${songName}&type=artist&limit=5`,
            {headers : {
              Authorization : "Bearer BQChMYCfBlg0w6SMdS3B-gIQsZiBQ1ZiGvRtB1GIsrx6bv_NiWVNTi43fpejvP0HK61Qhh-Kum1jH0au9_Ra4QdFg8n4djyBiShypT3uPZLuYJ87a3xkH35My8ckEiauKI3kw7IfwgnJIrjsNOzY7j_Q1_8VrTx_8d-3qr_c7osNjnvBlA"
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