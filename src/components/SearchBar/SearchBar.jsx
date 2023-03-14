export default function SearchBar() {
  return (
    <section className="searchbar-container">
      <input
        type="text"
        placeholder="Search Bar"
        className="searchbar"
        htmlFor="search"
      />
      <button className="submit-button button" type="submit">
        Submit
      </button>
    </section>
  )
}
