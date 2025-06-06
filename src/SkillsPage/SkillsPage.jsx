import { Ribbon } from "../Ribbon/ribbon";
import './SkillsPage.css'

function Card({ imgPath, descriptionText }) {
    return (
        <div className="skill-card">
            <div className="card-inner">
                <div className="card-front">
                    <img className="skill-svg" src={imgPath} />
                </div>
                <div className="card-back">
                    {descriptionText}
                </div>
            </div>
        </div>
    )
}

export function SkillsPage() {
    return (
        <div id="skill-content">
            <Ribbon />
            <div className="skill-grid">
                <Card imgPath={"src/assets/python-svgrepo-com.svg"} />
                <Card imgPath={"src/assets/artificial-intelligence-ai-icon.svg"} />
                <Card imgPath={"src/assets/git-svgrepo-com.svg"} />
            </div>
        </div>
    )
}