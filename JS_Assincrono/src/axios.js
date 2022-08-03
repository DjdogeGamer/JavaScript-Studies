import axios from "axios";

axios.get('https://api.github.com/users/DjdogeGamer')
  .then(res => {
    console.log(res.data);
  });