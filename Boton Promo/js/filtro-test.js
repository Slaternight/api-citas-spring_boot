
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const subcategories = document.querySelectorAll('.filter-subcategory');

    // Oculta todas las subcategorías al cargar la página
    subcategories.forEach(subcategory => {
      subcategory.style.display = 'none';
    });

    categoryFilter.addEventListener('change', function() {
      const selectedCategory = this.value;

      // Oculta todas las subcategorías
      subcategories.forEach(subcategory => {
        subcategory.style.display = 'none';
      });

      if (selectedCategory) {
        // Muestra la subcategoría correspondiente a la categoría seleccionada
        document.querySelector(`.filter-subcategory.${selectedCategory}`).style.display = 'block';
      }
    });
  });


