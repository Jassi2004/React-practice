import './PixelCard.css'
export default function PixelCard({ title, body, tags, likes }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="card-footer">
        <div className="tags">
          {tags?.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="likes">
          ❤️ {likes} Likes
        </div>
      </div>
    </div>
  );
}
