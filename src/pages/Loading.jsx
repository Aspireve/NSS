import "../styles/loading/suspense.css"

export default function Loading() {
  return (
    <div className='loader-container'>
        <div className='dots-container'>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    </div>
  )
}
