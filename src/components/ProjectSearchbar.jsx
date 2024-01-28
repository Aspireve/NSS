import Search from "../assets/static_images/magnifying-glass-solid.svg"

export default function SearchBar({}) {
  return (
    <form>
      <div className="projects-search-bar">
        <input
          className="search-bar-text"
          type="text"
          spellCheck="false"
          placeholder="Search Projects "
          autoFocus
        />
        <button type="submit" style={{}}><img src={Search} alt="Search Button"/></button>
      </div>
    </form>
  );
}
