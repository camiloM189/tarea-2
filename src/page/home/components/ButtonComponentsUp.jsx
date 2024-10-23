export const ButtonComponentsUp = ({ scrollToSection,inicioRef }) => {
    return (	
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            marginRight: "3%",
            marginBottom: "3%",
            flexDirection: "column",
            display:"flex"
        }}>
              <button className="btn btn-primary" style={{marginBottom:"35%"}} onClick={() => scrollToSection(inicioRef)}><i className="bi bi-arrow-up"></i></button>
    
            </div>
             
    )	
}