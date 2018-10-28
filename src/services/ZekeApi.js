import axios from 'axios';

class ZekeApi {
   apiPath = "http://s3-us-west-1.amazonaws.com/zekeswepson/";

   getInfo(success, error, complete) {
      axios.get(this.apiPath + 'general.json', {
         headers: {'Access-Control-Allow-Origin': '*'}
     }).then(success);
   }

   getPages(success) {
      axios.get(this.apiPath + "pages.json", {
         headers: {'Access-Control-Allow-Origin': '*'}
     }).then(success);
   }

   getPosts(success) {
      axios.get(this.apiPath + "posts.json", {
         headers: {'Access-Control-Allow-Origin': '*'}
     }).then(success);
   }

}

export default ZekeApi;