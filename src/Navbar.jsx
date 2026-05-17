export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b">
      <h1 className="font-semibold text-lg">Digital Systems Studio</h1>
      <a
        href="#contact"
        className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
      >
        Contact
      </a>
    </nav>
  )
}
