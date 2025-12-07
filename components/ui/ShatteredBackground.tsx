import React, { useEffect, useRef } from 'react';

const ShatteredBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    const particles: any[] = [];
    const streams: any[] = [];
    const glitchBars: any[] = [];
    
    const particleCount = 70; 
    const connectionDistance = 160;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      baseColor: {r: number, g: number, b: number};
      opacity: number;
      opacitySpeed: number;
      glitchTimer: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 10 + 3;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1;
        
        // Blue / Green / White Palette
        const colors = [
          { r: 14, g: 165, b: 233 },  // Primary Blue
          { r: 16, g: 185, b: 129 },  // Secondary Green
          { r: 34, g: 211, b: 238 },  // Cyan Accent
          { r: 240, g: 253, b: 250 }  // Off White
        ];
        this.baseColor = colors[Math.floor(Math.random() * colors.length)];
        
        this.opacity = Math.random() * 0.5 + 0.1;
        this.opacitySpeed = (Math.random() - 0.5) * 0.02;
        this.glitchTimer = Math.random() * 200;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Opacity Animation
        this.opacity += this.opacitySpeed;
        if (this.opacity >= 0.7 || this.opacity <= 0.1) {
            this.opacitySpeed = -this.opacitySpeed;
        }

        // Glitch Effect: Randomly snap position
        this.glitchTimer--;
        if (this.glitchTimer <= 0) {
            if (Math.random() > 0.85) {
                this.x += (Math.random() - 0.5) * 50;
                this.y += (Math.random() - 0.5) * 50;
                // Occasionally change color
                if (Math.random() > 0.5) {
                    this.baseColor.g = 255; // Flash green
                }
            }
            this.glitchTimer = Math.random() * 150 + 50;
        }

        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (200 - distance) / 200;
            this.x -= forceDirectionX * force * 3;
            this.y -= forceDirectionY * force * 3;
        }

        // Wrap around screen
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        
        const alpha = Math.max(0, Math.min(1, this.opacity));
        ctx.fillStyle = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${alpha})`;
        
        // Draw irregular shard (randomized triangle)
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(this.size, this.size);
        ctx.lineTo(-this.size * 0.5, this.size * 0.8);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
    }

    class DataStream {
        x: number;
        y: number;
        length: number;
        speed: number;
        angle: number;
        opacity: number;
        color: string;

        constructor() {
            this.x = 0; this.y = 0;
            this.length = 0; this.speed = 0;
            this.angle = 0; this.opacity = 0;
            this.color = '';
            this.reset();
            this.x = Math.random() * width;
            this.y = Math.random() * height;
        }

        reset() {
            const side = Math.floor(Math.random() * 4);
            if (side === 0) { this.x = Math.random() * width; this.y = -50; this.angle = Math.PI / 2; }
            else if (side === 1) { this.x = width + 50; this.y = Math.random() * height; this.angle = Math.PI; }
            else if (side === 2) { this.x = Math.random() * width; this.y = height + 50; this.angle = -Math.PI / 2; }
            else { this.x = -50; this.y = Math.random() * height; this.angle = 0; }
            
            this.length = Math.random() * 150 + 50;
            this.speed = Math.random() * 8 + 4;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.color = Math.random() > 0.5 ? '16, 185, 129' : '14, 165, 233'; // Green or Blue
        }

        update() {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
            if (this.x < -200 || this.x > width + 200 || this.y < -200 || this.y > height + 200) this.reset();
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.save();
            ctx.beginPath();
            const endX = this.x - Math.cos(this.angle) * this.length;
            const endY = this.y - Math.sin(this.angle) * this.length;
            const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
            gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
            gradient.addColorStop(1, `rgba(${this.color}, 0)`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(endX, endY);
            ctx.stroke();
            ctx.restore();
        }
    }

    class GlitchBar {
        y: number;
        height: number;
        width: number;
        x: number;
        life: number;
        color: string;

        constructor() {
            this.y = Math.random() * height;
            this.height = Math.random() * 5 + 1;
            this.width = Math.random() * width * 0.5 + 100;
            this.x = Math.random() * width;
            this.life = Math.random() * 10 + 2;
            this.color = Math.random() > 0.5 ? '#10b981' : '#0ea5e9';
        }

        update() {
            this.life--;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = Math.random() * 0.3;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.globalAlpha = 1;
        }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles.length = 0;
      streams.length = 0;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      for (let i = 0; i < 8; i++) {
          streams.push(new DataStream());
      }
    };

    const drawConnections = () => {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    const opacity = 1 - (distance / connectionDistance);
                    ctx.beginPath();
                    // Cyan/Blue connections
                    ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
      // Clear background with deep dark blue
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, width, height);
      
      // Add random glitch bars
      if (Math.random() > 0.92) {
          glitchBars.push(new GlitchBar());
      }
      
      // Update and draw glitch bars
      for (let i = glitchBars.length - 1; i >= 0; i--) {
          glitchBars[i].update();
          glitchBars[i].draw(ctx);
          if (glitchBars[i].life <= 0) glitchBars.splice(i, 1);
      }

      streams.forEach(s => {
          s.update();
          s.draw(ctx);
      });

      drawConnections();

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      
      // Screen Tearing Glitch Effect
      if (Math.random() > 0.96) {
          const sliceHeight = Math.random() * 100 + 20;
          const sliceY = Math.random() * (height - sliceHeight);
          const offset = (Math.random() - 0.5) * 30; // Shift amount
          try {
            // Copy a slice of the canvas
            const imageData = ctx.getImageData(0, sliceY, width, sliceHeight);
            // Put it back shifted
            ctx.putImageData(imageData, offset, sliceY);
            
            // Add chromatic aberration for the slice
            ctx.globalCompositeOperation = 'screen';
            ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
            ctx.fillRect(offset, sliceY, width, sliceHeight);
            ctx.globalCompositeOperation = 'source-over';
          } catch(e) {
             // Ignore potential cross-origin issues (unlikely here)
          }
      }

      // Full screen glitch flash
      if (Math.random() > 0.99) {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.05)'; // faint green flash
          ctx.fillRect(0, 0, width, height);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ShatteredBackground;