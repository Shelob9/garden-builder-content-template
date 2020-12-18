import React, {useEffect,useState} from "react";

const DarkModeToggle = () => {
    const [isDark, setIsDarkMode] = useState(false);
    useEffect(() => {
        if (isDark) {
          document.body.className = 'dark-mode';
    
        } else {
          document.body.className = 'light-mode';
    
        }
      }, [isDark]);

  return (
    <>
      <label
        className="dark-mode-toggle"
        aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
        title={isDark ? "Activate light mode" : "Activate dark mode"}
      >
        <input type="checkbox" checked={!isDark} onChange={() => setIsDarkMode(!isDark)} />
        <div />
      </label>
      <style jsx>{`
        .dark-mode-toggle {
          cursor: pointer;
          transform: scale(0.6);
        }
        .dark-mode-toggle input {
          display: none;
        }
        .dark-mode-toggle input + div {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          position: relative;
          box-shadow: inset 16px -16px 0 0 #fff;
          transform: scale(1) rotate(-2deg);
          transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
        }
        .dark-mode-toggle input + div:before {
          content: "";
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          left: 0;
          top: 0;
          transition: background 0.3s ease;
        }
        .dark-mode-toggle input + div:after {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: -4px 0 0 -4px;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow: 0 -23px 0 var(--link), 0 23px 0 var(--link), 23px 0 0 var(--link),
            -23px 0 0 var(--link), 15px 15px 0 var(--link), -15px 15px 0 var(--link),
            15px -15px 0 var(--link), -15px -15px 0 var(--link);
          transform: scale(0);
          transition: all 0.3s ease;
        }

        .dark-mode-toggle input:checked + div {
          box-shadow: inset 32px -32px 0 0 #fff;
          transform: scale(0.5) rotate(0deg);
          transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
        }
        .dark-mode-toggle input:checked + :before {
          background: var(--link);
          transition: background 0.3s ease 0.1s;
        }
        .dark-mode-toggle input:checked + :after {
          transform: scale(1.5);
          transition: transform 0.5s ease 0.15s;
        }`}
      </style>
    </>
  );
};

export default DarkModeToggle;
