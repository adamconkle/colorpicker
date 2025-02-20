document.getElementById('color-preview').addEventListener('click', function() {
  // Directly focus on the color input to trigger the color picker
  document.getElementById('color-picker').click();
});

document.getElementById('color-picker').addEventListener('input', function(event) {
  const hexColor = event.target.value;
  const rgb = hexToRgb(hexColor);
  const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;

  document.getElementById('color-preview').style.backgroundColor = hexColor;
  document.getElementById('color-code').textContent = `${hexColor}`;
  document.getElementById('rgba-code').textContent = `${rgba}`;
});

function hexToRgb(hex) {
  // Remove the '#' if it exists
  hex = hex.replace('#', '');

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}
