import "../../styles/loading/suspense.css";

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="loading-text">
        <h1>Your Webpage is loading</h1>
        <p>This would take a few seconds</p>
      </div>
    </div>
  );
}
