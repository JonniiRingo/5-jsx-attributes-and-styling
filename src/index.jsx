// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const img = "https://picsum.photos/200";

root.render(<React.StrictMode>
  <div>
    <h1 className = "heading">My dream jobs!</h1>
    <img className = "images" src="https://media.architecturaldigest.com/photos/63864739de5582d44f482a8f/16:9/w_2560%2Cc_limit/221012_Google_AD_MTV_MariposaCourtyard_0578.jpg"></img>
    <img className = "images" src = "https://static01.nyt.com/images/2019/05/31/us/31applehq-01alt/31applehq-01alt-videoSixteenByNine3000.jpg?year=2019&h=1689&w=3000&s=5b2a5a2d761280186f1d14b181a121bbd47f7720c4c9ce273e52a6385cf91e67&k=ZQJBKqZ0VN&tw=1" ></img>
    <img className = "images" src = "https://officesnapshots.com/wp-content/uploads/2018/10/NVIDIA-hq-santa-clara-1.jpg"></img>
    <p>And here is a random photo</p>
    <img className = "images" src = {img + "?grayscale"}/>
  </div>
</React.StrictMode>
);