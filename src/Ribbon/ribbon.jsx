import { Link } from 'react-router-dom'
import './ribbon.css'

export function Ribbon() {
    return (
        <div id="ribbon">
            <div id='ribbon-all-options'>
                <Link to={'/'}><div className="ribbon-option">Home</div></ Link>
                <Link to={'skills'}><div className="ribbon-option">Skills</div></ Link>
                <div className="ribbon-option">Education</div>
                <div className="ribbon-option">Projects and Internships</div>
                <div className="ribbon-option">Contact Me</div>
            </div>
        </div>
    )
}