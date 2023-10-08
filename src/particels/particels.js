export const Part1 ={
    fps_limit: 60,
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "push" },
        onhover: {
          enable: true,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 4 }
      }
    },
    particles: {
      color: { value: "#1976D2" },
      line_linked: {
        color: "#ffffff",
        distance: 10,
        enable: true,
        opacity: 0,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 0.5,
        straight: false
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: {
          height: 100,
          replace_color: true,
          src: "images/github.svg",
          width: 100
        },
        polygon: { nb_sides: 5 },
        stroke: { color: "#000000", width: 0 },
        type: "circle"
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  }


export const Part2 = {
    smooth: true,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10
                }
            }
        },
        modes: {
            bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 15
            }
        }
    },
    particles: {
        move: {
            direction: "none",
            distance: 5,
            enable: true,
            outModes: "none",
            speed: 1
        },
        number: {
            value: 600
        },
        shape: {
            type: ["circle", "square", "triangle"]
        },
        size: {
            value: {
                min: 3,
                max: 5
            }
        }
    },
    canvasMask: {
        enable: true,
        scale: 5,
        pixels: {
            filter: "pixelFilter"
        },
        image: {
            src: "https://particles.js.org/images/amongus_cyan.png"
        }
    },
    background: {
        color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    }
}