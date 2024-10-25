import { useEffect, useRef } from 'react';

// Function to draw a single curve
const drawCurve = (
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  cpX: number,
  cpY: number,
  endX: number,
  endY: number,
) => {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.quadraticCurveTo(cpX, cpY, endX, endY);
  ctx.strokeStyle = '#3498db'; // Line color
  ctx.lineWidth = 2; // Line width
  ctx.stroke();
};

const CurvedLinesCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    if (!canvas) return; // Check if canvas is null and exit if true
    const context = canvas.getContext('2d');

    // Set the canvas dimensions (you can adjust as needed)
    if (context) {
      canvas.width = 800; // Canvas width
      canvas.height = 400; // Canvas height
    }

    // Example array of curved lines to draw
    const curves = [
      { startX: 50, startY: 300, cpX: 200, cpY: 50, endX: 400, endY: 300 },
      { startX: 100, startY: 350, cpX: 300, cpY: 100, endX: 600, endY: 350 },
      { startX: 150, startY: 200, cpX: 400, cpY: 20, endX: 650, endY: 200 },
    ];
    // Draw multiple curves using quadraticCurveTo
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      curves.forEach((curve) => {
        drawCurve(context, curve.startX, curve.startY, curve.cpX, curve.cpY, curve.endX, curve.endY);
      });
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '800px', height: '400px', border: '1px solid #ccc' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CurvedLinesCanvas;
