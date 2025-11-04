import { useState, useEffect } from "react";

function ExpandedBar({ object, texts }) {
    const [isOpen, setIsOpen] = useState(false);

    
    
        
    return (
        <div
            className="card my-3"
            style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                color: "white",
            }}
        >
            <div
                className="card-header d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h5 className="mb-0">{text || "Click để mở rộng"}</h5>
                <span
                    style={{
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "0.3s",
                    }}
                >
                    ▶
                </span>
            </div>

            {isOpen && (
                <div className="card-body">
                    {object ? (
                        <p>{object.description}</p>
                    ) : (
                        <div>
                            <p>Nội dung mở rộng ở đây.</p>
                            <button className="btn btn-success btn-sm me-2">Play</button>
                            <button className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ExpandedBar;
