<script>
    var config = {
        messagingSenderId: "595783721675",
        apiKey: "AIzaSyCO5BHC2O9mhBZtLXl-4AafmHdB22yWbjM",
        projectId: "web-push-7a445",
        appId: "1:595783721675:web:4904b8c61dbe05952b714e"
    };
    firebase.initializeApp(config);
</script>

 const messaging = firebase.messaging();
 messaging
   .requestPermission()
   .then(function () {
     MsgElem.innerHTML = "Notification permission granted." 
     console.log("Notification permission granted.");
   })
   .catch(function (err) {
   ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
   console.log("Unable to get permission to notify.", err);
 });
