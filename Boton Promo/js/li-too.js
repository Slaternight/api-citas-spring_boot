function redirectSmooth(link) {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  