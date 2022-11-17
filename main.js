
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    image_quality : 90
    }),
     camera = document.getElementById("camera") 
     Webcam.attach('#camera');
     
    function take_snapshot() {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'">'  
        })
     }
     console.log("ml5 version : " , ml5.version);
     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/P0nWBmZEE/model.json' ,modelloaded)
     function modelloaded() {
        console.log("model is loaded")
    }

    function check() {
        img = document.getElementById('captured_image');
        classifier.classify(img , got_Result);
    }


    function got_Result(error , results)
    {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label
            document.getElementById("result_emotion_name2").innerHTML = results[1].label
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
        
          speak();
    
         if (results[0].label=="amazing")
          {
            document.getElementById("update_emoji").innnerHTML = "&#128076;";
         }
         if (results[0].label=="victory")
         {
           document.getElementById("update_emoji").innnerHTML = "&#9996;;";
        }
         if (results[0].label=="Best")
        {
          document.getElementById("update_emoji").innnerHTML = "&#128077;";
       }
    
       if (results[1].label=="amazing")
       {
         document.getElementById("update_emoji2").innnerHTML = "&#128076;";
      }
      if (results[1].label=="victory")
      {
        document.getElementById("update_emoji2").innnerHTML = "&#9996;";
     }
      if (results[1].label=="Best")
     {
       document.getElementById("update_emoji2").innnerHTML = "&#128077;";
    }
    
        }}