

const date = new Date();
const fullDate = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(props){
  const {textTitle, textDesc}=props;
  
    return <div className="card">
              <h3 className="cardTitle">{textTitle}</h3>
              <p className="cardDesc">{textDesc}</p>
              <h5 className="dateTime">{fullDate + "/" + monthName + "/"+currentYear}</h5>
            </div>
  }

  export default Card;