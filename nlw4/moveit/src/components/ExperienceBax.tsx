export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>8 xp</span>
            <div>
              <div style={{width: '50%'}} />  
              <span className="current-experience" style={{ left: '50%' }}>380 xp</span>
            </div>
            <span>680 xp</span>
        </header>
    );
}