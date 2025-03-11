import React, { useEffect } from "react";
import { gsap } from "gsap";
import Hammer from "hammerjs";
import { cursorStyles } from "../styles";

const CustomCursor = () => {
  useEffect(() => {
    const pointer = document.createElement("div");
    Object.assign(pointer.style, cursorStyles.pointer);
    document.body.appendChild(pointer);

    const panner = document.getElementById("panner");
    const hammertime = new Hammer(panner);

    const pointerSize = 22;

    window.limit_x = () => window.innerWidth - panner.offsetWidth;

    window.addEventListener("mousemove", (e) => {
      gsap.to(pointer, { duration: 0.5, left: e.clientX, top: e.clientY });

      const target = e.target;
      if (target.localName === "a" || target.dataset.cursor === "false") {
        gsap.to(pointer, { scale: 0 });
      } else {
        gsap.to(pointer, { scale: 1 });
      }
    });

    window.addEventListener("mousedown", (e) => {
      if (e.target.dataset.cursor === "stretch") {
        gsap.to(pointer, { width: pointerSize + 15, height: pointerSize - 10 });
      }
    });

    window.addEventListener("mouseup", () => {
      gsap.to(pointer, { width: pointerSize, height: pointerSize });
    });

    hammertime.on("pan", (ev) => {
      const x = ev.center.x;

      gsap.to(panner, { duration: 1, left: x });

      if (ev.isFinal) {
        setTimeout(() => {
          if (x < 0) gsap.to(panner, { duration: 1, left: 0 });
          if (x > window.limit_x()) gsap.to(panner, { duration: 1, left: window.limit_x() });
        }, 1000);
      }
    });

    return () => {
      pointer.remove();
    };
  }, []);

  return (
    <div>
      <div id="panner" data-cursor="stretch" style={cursorStyles.panner}>
        <div className="front" style={cursorStyles.disableAll}>
          &larr; Pan Me &rarr;
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
