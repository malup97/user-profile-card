import "./profile.css";

export default function Profile(props) {
  return (
    <div className="prof-container">
      <div className="box">
        <img className="img-box" src={props.imgUrl} alt="profile-img" />
        <h2 className="name">{props.name}</h2>
        <h3 className="designation">{props.designation}</h3>
        <h4 className="company">{props.companyName}</h4>
      </div>
    </div>
  );
}
