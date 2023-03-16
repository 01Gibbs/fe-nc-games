import headerImg from '../../assets/headerQuestForDragons.png'

export default function Header() {
  return (
    <header className="header-container">
      <img
        src={headerImg}
        alt="Quest For Dragons: Board Game Review Website"
        className="header"
      ></img>
    </header>
  )
}
