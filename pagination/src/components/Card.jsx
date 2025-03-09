export default function Card({ title, img }) {
    return (
      <>
        <div className="main-container">
          <span>{title}</span>
          <img src={img} alt={title}/>
        </div>
      </>
    );
  }
  