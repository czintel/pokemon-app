import './Card.css'

export default function Card({ name, images, types }) {
  return (
    <section className="Card">
      <h2 className="Card__Name">{name}</h2>
      <img className="Card__Image" src={images.front} alt="" />
      <img className="Card__Image" src={images.back} alt="" />
      <ul className="Card__Types-List">
        {types.map(type => (
          <li key={type} className="Card__Types-List--Item">
            {type}
          </li>
        ))}
      </ul>
    </section>
  )
}
