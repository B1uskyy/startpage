interface ListProps {
  link: string,
  text: string,
  icon?: string
}


export default function List({ link, text, icon }: ListProps) {
  return (
    <div className="flex">
      {icon && <img src={icon} />}
      <li className="list-none"><a href={link}>{text}</a></li>
    </div>
  )
}
