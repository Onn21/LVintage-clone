import { useRef, useEffect } from "react";
import type { HTMLAttributes } from "react";

interface ThermodynamicGridProps extends HTMLAttributes<HTMLDivElement> {
  resolution?: number;
  coolingFactor?: number;
}

const CustomCursor = ({
  className,
  resolution = 8,
  coolingFactor = 0.94,
  style,
  ...props
}: ThermodynamicGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Use alpha: true so the background can be transparent and overlay the site
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let grid: Float32Array;
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    
    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, active: false };

    // Paleta Neón del proyecto: Cyan -> Verde -> Amarillo
    const getThermalColor = (t: number) => {
      let r, g, b;
      if (t < 0.33) {
        // Cyan (#00FFFF)
        const pct = t / 0.33;
        r = 0 * pct;
        g = 255 * pct;
        b = 255 * pct;
      } else if (t < 0.66) {
        // Cyan to Green (#39FF14)
        const pct = (t - 0.33) / 0.33;
        r = 0 * (1 - pct) + 57 * pct;
        g = 255 * (1 - pct) + 255 * pct;
        b = 255 * (1 - pct) + 20 * pct;
      } else {
        // Green to Yellow (#FFFF00)
        const pct = (t - 0.66) / 0.34;
        r = 57 * (1 - pct) + 255 * pct;
        g = 255 * (1 - pct) + 255 * pct;
        b = 20 * (1 - pct) + 0 * pct;
      }
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      cols = Math.ceil(width / resolution);
      rows = Math.ceil(height / resolution);
      grid = new Float32Array(cols * rows).fill(0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const update = () => {
      if (mouse.active) {
        const dx = mouse.x - mouse.prevX;
        const dy = mouse.y - mouse.prevY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // Solo inyectamos calor si el ratón realmente se movió
        if (dist > 0) {
          const steps = Math.ceil(dist / (resolution / 2));
          
          for (let s = 0; s <= steps; s++) {
              const t = steps > 0 ? s / steps : 0;
              const x = mouse.prevX + dx * t;
              const y = mouse.prevY + dy * t;
              
              const col = Math.floor(x / resolution);
              const row = Math.floor(y / resolution);
              
              const radius = 2;
              for (let i = -radius; i <= radius; i++) {
                  for (let j = -radius; j <= radius; j++) {
                      const c = col + i;
                      const r = row + j;
                      if (c >= 0 && c < cols && r >= 0 && r < rows) {
                          const idx = c + r * cols;
                          const d = Math.sqrt(i*i + j*j);
                          if (d <= radius) {
                              grid[idx] = Math.min(1.0, grid[idx] + 0.5 * (1 - d/radius));
                          }
                      }
                  }
              }
          }
        }
      }
      
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;

      // Clear the canvas to transparent so we see the site underneath
      ctx.clearRect(0, 0, width, height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = c + r * cols;
          let temp = grid[idx];

          grid[idx] *= coolingFactor;
          
          if (temp > 0.05) {
             const x = c * resolution;
             const y = r * resolution;
             
             ctx.fillStyle = getThermalColor(temp);
             
             const size = resolution * (0.8 + temp * 0.5);
             const offset = (resolution - size) / 2;
             
             ctx.beginPath();
             ctx.rect(x + offset, y + offset, size, size);
             ctx.fill();
          }
        }
      }

      requestAnimationFrame(update);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    resize();
    update();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [resolution, coolingFactor]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 pointer-events-none mix-blend-screen opacity-70 ${className || ""}`}
      style={style}
      {...props}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default CustomCursor;
