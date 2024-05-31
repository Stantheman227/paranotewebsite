import React from "react";
import { CloseIcon, ExpandIcon, MinimizeIcon } from "./Icons";

interface YouTubeModalProps {
  videoId: string;
  onClose: () => void;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({
  videoId,
  onClose,
  isExpanded,
  setIsExpanded,
}) => {
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion state
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: isExpanded ? "90%" : "90%",
        height: isExpanded ? "30%" : "30%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
        transition: "all 0.3s ease",
        overflow: "hidden",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Button Bar above the Video */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "5px",
          backgroundColor: "#007BFF",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          zIndex: 1,
        }}
      >
        <button
          onClick={handleExpandClick}
          style={{
            margin: "0 10px",
            padding: "5px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            color: "white",
          }}
          aria-label={isExpanded ? "Minimize" : "Expand"}
        >
          {isExpanded ? <MinimizeIcon /> : <ExpandIcon />}
        </button>
        <button
          onClick={onClose}
          style={{
            padding: "5px",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            color: "white",
          }}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      </div>
      {/* Video iframe */}
      <div
        style={{
          flexGrow: 1,
          borderRadius: "0 0 8px 8px",
          overflow: "hidden",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeModal;
