export default function CategoryPills({ items, limit }) {
  const visible = limit ? items.slice(0, limit) : items

  return (
    <div className="pill-row">
      {visible.map((item, index) => (
        <button className={index === 0 ? 'pill active' : 'pill'} type="button" key={item}>
          {item}
        </button>
      ))}
      {limit && items.length > limit ? <button className="pill more" type="button">+ More</button> : null}
    </div>
  )
}
