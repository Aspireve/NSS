import Search from "../assets/static_images/magnifying-glass-solid.svg"

export default function SearchBar({query, setQuery}) {
  return (
    <form>
      <div className="projects-search-bar">
        <input
          className="search-bar-text"
          type="text"
          spellCheck="false"
          placeholder="Search Projects "
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" style={{}}><img src={Search} alt="Search Button"/></button>
      </div>
    </form>
  );
}
