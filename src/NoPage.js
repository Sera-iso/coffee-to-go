import { Link } from 'react-router-dom'
export default function NoPage() {
    
    return (
        <div className='text-center text-grey-dark m-20'>
            <h1 className="text-3xl p-20">Ops... This page doesn't exist</h1>
            <Link to="/" className="no-underline border-b border-grey-dark">Back to Home</Link>
        </div>
    )
}