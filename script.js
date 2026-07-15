const birthdayVideo = document.getElementById('birthdayVideo');
const popup = document.getElementById('popup');
const messageCard = document.querySelector('.message-card');
const messageSection = document.getElementById('messageSection');
const wheel = document.querySelector('.wheel');
const spinBtn = document.getElementById('spinBtn');
const resultText = document.getElementById('resultText');
const ambientLayer = document.querySelector('.ambient-layer');
const scratchCanvas = document.getElementById('scratchCanvas');
const scratchRevealImage = document.getElementById('scratchRevealImage');
const scratchStatus = document.getElementById('scratchStatus');

if (birthdayVideo && popup) {
  birthdayVideo.addEventListener('ended', () => {
    popup.classList.add('show');
    const claimBtn = document.getElementById('claimBtn');
    if (claimBtn) {
      claimBtn.style.display = 'inline-flex';
    }
  });

  birthdayVideo.addEventListener('canplay', async () => {
    try {
      await birthdayVideo.play();
    } catch (error) {
      console.warn('Autoplay was blocked; the video is ready to play manually.', error);
    }
  });
}

if (messageCard && messageSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          messageCard.classList.add('reveal');
          if (ambientLayer) {
            ambientLayer.classList.add('active');
          }
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(messageSection);
}

if (wheel && spinBtn && resultText) {
  let spun = false;
  spinBtn.addEventListener('click', () => {
    if (spun) return;
    spun = true;

    const prizeAngle = 360 * 7 + 315;
    wheel.style.transform = `rotate(${prizeAngle}deg)`;
    wheel.style.filter = 'drop-shadow(0 0 20px rgba(255,115,183,0.65))';

    const confettiLayer = document.createElement('div');
    confettiLayer.className = 'confetti-layer';
    document.body.appendChild(confettiLayer);

    const sparkleOverlay = document.createElement('div');
    sparkleOverlay.className = 'sparkle-overlay';
    document.body.appendChild(sparkleOverlay);

    const audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10IBAAAAABAAEAESsAACJWAAI2AAABAAwRkZGAABXQ1ZFZm10I')
    audio.volume = 0.4;
    audio.play().catch(() => {});

    setTimeout(() => {
      resultText.textContent = 'Congratulations! You won maitreechoudhary.in 🎉';
      setTimeout(() => {
        window.location.href = 'reward.html';
      }, 1200);
    }, 5000);
  });
}

if (scratchCanvas && scratchStatus) {
  const ctx = scratchCanvas.getContext('2d');
  const overlayColor = '#d9d9d9';
  const brushSize = 40;
  let isDrawing = false;
  let cleared = false;

  const resizeCanvas = () => {
    const rect = scratchCanvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    scratchCanvas.width = rect.width * ratio;
    scratchCanvas.height = rect.height * ratio;
    scratchCanvas.style.width = `${rect.width}px`;
    scratchCanvas.style.height = `${rect.height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = overlayColor;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;
  };

  const getPointerPos = (event) => {
    const rect = scratchCanvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const updateScratchProgress = () => {
    const imageData = ctx.getImageData(0, 0, scratchCanvas.width, scratchCanvas.height).data;
    let transparentPixels = 0;
    for (let i = 3; i < imageData.length; i += 4) {
      if (imageData[i] === 0) transparentPixels += 1;
    }
    const clearedRatio = transparentPixels / (imageData.length / 4);
    if (clearedRatio > 0.6) {
      if (!cleared) {
        cleared = true;
        scratchStatus.textContent = '✨ Surprise revealed! Tap the heart to continue.';
        ctx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        scratchCanvas.style.display = 'none';
        if (scratchRevealImage) {
          scratchRevealImage.style.display = 'block';
        }
      }
    } else {
      scratchStatus.textContent = `Scratch ${Math.max(0, Math.round(clearedRatio * 100))}%`;
    }
  };

  const scratch = (event) => {
    if (!isDrawing || cleared) return;
    const pos = getPointerPos(event);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, brushSize / 1.5, 0, Math.PI * 2, true);
    ctx.fill();
    updateScratchProgress();
  };

  scratchCanvas.addEventListener('pointerdown', (event) => {
    isDrawing = true;
    scratchCanvas.setPointerCapture(event.pointerId);
    scratch(event);
  });

  scratchCanvas.addEventListener('pointermove', (event) => {
    if (!isDrawing) return;
    scratch(event);
  });

  scratchCanvas.addEventListener('pointerup', () => {
    isDrawing = false;
  });

  scratchCanvas.addEventListener('pointerleave', () => {
    isDrawing = false;
  });

  if (scratchRevealImage) {
    scratchRevealImage.addEventListener('click', () => {
      window.location.href = 'message.html';
    });
  }

  window.addEventListener('resize', resizeCanvas);
  setTimeout(resizeCanvas, 100);
}
