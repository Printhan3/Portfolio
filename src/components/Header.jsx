export default function Header() {
  return <header className="flex justify-between">
    <a className="font-bold text-black" href="#">Printhan</a>
    <ul className="flex text-white">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
  </header>
}
