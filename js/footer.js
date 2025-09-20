document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('animated-title');
    if (!titleElement) return;
    const fullText = "ALLin1Wrench"; const whiteIndices = [1, 2, 6];
    function type(charIndex) { if (charIndex < fullText.length) { const span = document.createElement('span'); span.className = whiteIndices.includes(charIndex) ? 'text-white' : 'text-red-500'; span.textContent = fullText.charAt(charIndex); titleElement.appendChild(span); setTimeout(() => type(charIndex + 1), 150); } else { setTimeout(erase, 2000); } }
    function erase() { if (titleElement.childNodes.length > 0) { titleElement.removeChild(titleElement.lastChild); setTimeout(erase, 100); } else { setTimeout(() => type(0), 500); } }
    type(0);
});
