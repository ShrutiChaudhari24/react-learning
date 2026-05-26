import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App = () => {

  const cardData = [
    {
      title: "Financial App",
      date: "25 Apr 2030",
      color: "#F7D5BF",
      img: "https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lvu-u4DzvgAExdTm2cXRVc-4pqXcKafhDrZkictyVUU=",
      members: "3+",
    },

    {
      title: "Graphic Design",
      date: "18 May 2030",
      color: "#9BE8C7",
      img: "https://media.istockphoto.com/id/1150572112/photo/close-up-of-a-smiling-mid-adult-businesswoman.webp?a=1&b=1&s=612x612&w=0&k=20&c=FxoY9mta-IMtJ5OPAAoSPj1J8dbvpVjvi2KFEyCrW1c=",
      members: "2+",
    },

    {
      title: "Artifact Model",
      date: "17 Nov 2030",
      color: "#F3B3E8",
      img: "https://media.istockphoto.com/id/1352888268/photo/close-up-portrait-of-japanese-mature-businessman-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=kOUOoguCfhNuSwcUUc77oX5L0LzbjP87lGes2Txrw8k=",
      members: "3+",
    },

    {
      title: "Operating System",
      date: "20 Apr 2030",
      color: "#D7B5FF",
      img: "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJvbnQlMjBmYWNlJTIwcHJvZmVzc2lvbmFsJTIwcGljfGVufDB8fDB8fHww",
      members: "2+",
    },

    {
      title: "Business Card",
      date: "15 Oct 2030",
      color: "#AEE7FF",
      img: "https://media.istockphoto.com/id/2232556831/photo/beautiful-woman-headshot-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=eqWz0Oh_NHkUmi41FKE-sfYxZ9fack47B-MiYg8B7cA=",
      members: "3+",
    },

    {
      title: "Centered Design",
      date: "20 Apr 2030",
      color: "#FFBFC0",
      img: "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=jdNlxvWfyg_3TeA9YIc5g-bySd-gedAdnifCMFUvNII=",
      members: "2+",
    },
  ];

  return (
    <div className="container">

      <Navbar />

      <div className="cards-container">

        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              date={card.date}
              color={card.color}
              img={card.img}
              members={card.members}
            />
          );
        })}

      </div>
    </div>
  );
};

export default App;