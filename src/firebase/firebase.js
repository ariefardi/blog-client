 // Initialize Firebase
 let firebase = require('firebase')

 var config = {
    apiKey: "AIzaSyDZcjRbNoVX8gPK23GHSbwLLuEnIu4n1BA",
    authDomain: "burogu-desu.firebaseapp.com",
    databaseURL: "https://burogu-desu.firebaseio.com",
    projectId: "burogu-desu",
    storageBucket: "burogu-desu.appspot.com",
    messagingSenderId: "706496084952"
  };
  firebase.initializeApp(config);

  export const storageRef = firebase.storage()

//   //get element
//   var uploader = document.getElementById("uploader")
//   var fileButton = document.getElementById("fileButton")


  
  //lister for file selection
// fileButton.addEventListener("change", (data)=>{
//     ///get file
//     var file = data.target.files[0]
//     //create a storage ref
//     var storageRef = firebase.storage().ref("item_photos/"+ file.name)

//     //photos
//       //  - img.jpg
//       //  - img2.jpg 
    
//     //upload
//     storageRef.put(file)

//     //update progess bar
//     task.on("state_changed", 
    
//     function progess(snapshot){
//         var percentage = snapshot.bytesTransferred / snapshot.totalBytes* 100
//         uploader.value = percentage
//     },
    
//     function error(err){

//     },
//     function complete(){

//     } 
//     )
// })
// data () {
//     return {
//         itemName: '',
//         price: '',
//         imgSrc: '',
//         file: ''
//     }
// },
// methods: {
//     postImageHandler () {
//         this.file = event.target.files[0]
//     },
//     uploadFile () {
//         // console.log('uploadooo',this.itemName, this.price, this.imgSrc) 
//         // console.log(storageRef,'ini siapa')
         
//          storageRef.ref('item_photos/'+ this.file.name).put(this.file)
//          .then(snapshot=> {
//             //  console.log(snapshot)
//             storageRef.ref('item_photos/'+ this.file.name).getDownloadURL()
//             .then(urlResponse=> {
//                 swal('Item Has Been Uploaded')
//                 // console.log(urlResponse,'ini urlnya coy')
//                 this.imgSrc = urlResponse
//                 console.log(this.imgSrc)
//                     axios.post('http://localhost:3000/items',{
//                     itemName: this.itemName,
//                     price: this.price,
//                     imgSrc: urlResponse
//                     })
//                     .then(data=>{
//                         console.log(data)
//                     })
//             })
//          })
//     }
// }
// }