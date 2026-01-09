// Default Database
const defaultDatabase = [
  { name: 'Avocados', category: 'grocery' },
  { name: 'Quinoa', category: 'grocery' },
  { name: 'Greek Yogurt', category: 'grocery' },
  { name: 'Salmon', category: 'grocery' },
  { name: 'Spinach', category: 'grocery' },
  { name: 'Blueberries', category: 'grocery' },
  { name: 'Almonds', category: 'grocery' },
  { name: 'Eggs', category: 'grocery' },
  { name: 'Chicken Breast', category: 'grocery' },
  { name: 'Brown Rice', category: 'grocery' },
  { name: 'Olive Oil', category: 'grocery' },
  { name: 'Bananas', category: 'grocery' },
  { name: 'Milk', category: 'grocery' },
  { name: 'Bread', category: 'grocery' },
  { name: 'Cheese', category: 'grocery' },
  { name: 'Tomatoes', category: 'grocery' },
  { name: 'Onions', category: 'grocery' },
  { name: 'Garlic', category: 'grocery' },
  { name: 'Potatoes', category: 'grocery' },
  { name: 'Carrots', category: 'grocery' },
  { name: 'Broccoli', category: 'grocery' },
  { name: 'Bell Peppers', category: 'grocery' },
  { name: 'Lettuce', category: 'grocery' },
  { name: 'Cucumber', category: 'grocery' },
  { name: 'Apples', category: 'grocery' },
  { name: 'Oranges', category: 'grocery' },
  { name: 'Strawberries', category: 'grocery' },
  { name: 'Grapes', category: 'grocery' },
  { name: 'Lemons', category: 'grocery' },
  { name: 'Butter', category: 'grocery' },
  { name: 'Yogurt', category: 'grocery' },
  { name: 'Cream Cheese', category: 'grocery' },
  { name: 'Ground Beef', category: 'grocery' },
  { name: 'Ground Turkey', category: 'grocery' },
  { name: 'Bacon', category: 'grocery' },
  { name: 'Pasta', category: 'grocery' },
  { name: 'Rice', category: 'grocery' },
  { name: 'Cereal', category: 'grocery' },
  { name: 'Oatmeal', category: 'grocery' },
  { name: 'Peanut Butter', category: 'grocery' },
  { name: 'Honey', category: 'grocery' },
  { name: 'Coffee', category: 'grocery' },
  { name: 'Tea', category: 'grocery' },
  { name: 'Orange Juice', category: 'grocery' },
  { name: 'Tortillas', category: 'grocery' },
  { name: 'Passport', category: 'vacation' },
  { name: 'Sunscreen', category: 'vacation' },
  { name: 'Phone Charger', category: 'vacation' },
  { name: 'Toothbrush', category: 'vacation' },
  { name: 'Swimsuit', category: 'vacation' },
  { name: 'Sunglasses', category: 'vacation' },
  { name: 'Travel Pillow', category: 'vacation' },
  { name: 'Headphones', category: 'vacation' },
  { name: 'Medications', category: 'vacation' },
  { name: 'Camera', category: 'vacation' },
  { name: 'Wallet', category: 'vacation' },
  { name: 'Snacks', category: 'vacation' },
  { name: 'Book', category: 'vacation' },
  { name: 'Flip Flops', category: 'vacation' },
  { name: 'Luggage Lock', category: 'vacation' },
  { name: 'Toothpaste', category: 'vacation' },
  { name: 'Deodorant', category: 'vacation' },
  { name: 'Shampoo', category: 'vacation' },
  { name: 'Conditioner', category: 'vacation' },
  { name: 'Razor', category: 'vacation' },
  { name: 'Underwear', category: 'vacation' },
  { name: 'Socks', category: 'vacation' },
  { name: 'T-Shirts', category: 'vacation' },
  { name: 'Shorts', category: 'vacation' },
  { name: 'Pants', category: 'vacation' },
  { name: 'Jacket', category: 'vacation' },
  { name: 'Hat', category: 'vacation' },
  { name: 'Belt', category: 'vacation' },
  { name: 'Dress Shoes', category: 'vacation' },
  { name: 'Sneakers', category: 'vacation' },
  { name: 'Laptop', category: 'vacation' },
  { name: 'Laptop Charger', category: 'vacation' },
  { name: 'Power Bank', category: 'vacation' },
  { name: 'Travel Adapter', category: 'vacation' },
  { name: 'Umbrella', category: 'vacation' },
  { name: 'First Aid Kit', category: 'vacation' },
  { name: 'Hand Sanitizer', category: 'vacation' },
  { name: 'Face Wash', category: 'vacation' },
  { name: 'Moisturizer', category: 'vacation' },
  { name: 'Lip Balm', category: 'vacation' },
  { name: 'Hairbrush', category: 'vacation' },
  { name: 'Hair Ties', category: 'vacation' },
  { name: 'Pajamas', category: 'vacation' },
  { name: 'Boarding Pass', category: 'vacation' },
  { name: 'Travel Insurance', category: 'vacation' },
  { name: 'Itinerary', category: 'vacation' },
  { name: 'Maps', category: 'vacation' },
  { name: 'Guidebook', category: 'vacation' },
  { name: 'Earplugs', category: 'vacation' },
  { name: 'Eye Mask', category: 'vacation' },
  { name: 'Pay Bills', category: 'todo' },
  { name: 'Call Mom', category: 'todo' },
  { name: 'Schedule Appointment', category: 'todo' },
  { name: 'Clean House', category: 'todo' },
  { name: 'Do Laundry', category: 'todo' },
  { name: 'Buy Gift', category: 'todo' },
  { name: 'Send Email', category: 'todo' },
  { name: 'Workout', category: 'todo' },
  { name: 'Grocery Shopping', category: 'todo' },
  { name: 'Fix Bug', category: 'todo' },
  { name: 'Read Article', category: 'todo' },
  { name: 'Update Resume', category: 'todo' },
  { name: 'Book Flight', category: 'todo' },
  { name: 'Return Package', category: 'todo' },
  { name: 'Water Plants', category: 'todo' },
  { name: 'Take Out Trash', category: 'todo' },
  { name: 'Walk Dog', category: 'todo' },
  { name: 'Feed Pets', category: 'todo' },
  { name: 'Vacuum', category: 'todo' },
  { name: 'Mop Floors', category: 'todo' },
  { name: 'Wash Dishes', category: 'todo' },
  { name: 'Make Bed', category: 'todo' },
  { name: 'Organize Closet', category: 'todo' },
  { name: 'File Taxes', category: 'todo' },
  { name: 'Renew License', category: 'todo' },
  { name: 'Change Oil', category: 'todo' },
  { name: 'Get Haircut', category: 'todo' },
  { name: 'Doctor Checkup', category: 'todo' },
  { name: 'Dentist Appointment', category: 'todo' },
  { name: 'Pick Up Prescription', category: 'todo' },
  { name: 'Meal Prep', category: 'todo' },
  { name: 'Reply to Messages', category: 'todo' },
  { name: 'Review Budget', category: 'todo' },
  { name: 'Cancel Subscription', category: 'todo' },
  { name: 'Backup Files', category: 'todo' },
  { name: 'Update Software', category: 'todo' },
  { name: 'Clean Email Inbox', category: 'todo' },
  { name: 'Write Thank You Note', category: 'todo' },
  { name: 'RSVP to Event', category: 'todo' },
  { name: 'Plan Birthday Party', category: 'todo' },
  { name: 'Research Purchase', category: 'todo' },
  { name: 'Fix Leaky Faucet', category: 'todo' },
  { name: 'Change Light Bulbs', category: 'todo' },
  { name: 'Check Smoke Detectors', category: 'todo' },
  { name: 'Submit Report', category: 'todo' },
];

const presetNames = ['Grocery', 'Vacation', 'To-Do'];

// State initialization
let storedDb = JSON.parse(localStorage.getItem('groceryDatabase'));
let groceryItems;
if (!storedDb || storedDb.length < 135 || !storedDb[0].category) {
  groceryItems = [...defaultDatabase];
  localStorage.setItem('groceryDatabase', JSON.stringify(groceryItems));
} else {
  groceryItems = storedDb;
}

let lists = JSON.parse(localStorage.getItem('lists')) || [{ id: 1, name: 'Grocery', items: [], lastList: [] }];
let activeListId = JSON.parse(localStorage.getItem('activeListId')) || 1;
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
let suggestions = [];
let sortAlphabetically = false;
let showDatabase = false;
let showRecipes = false;
let lastTap = { id: null, time: 0 };
let pendingItemName = '';
let pendingFromDatabase = false;
let dbCategoryFilter = 'all';
let recipeCategoryFilter = 'all';
let editingRecipeId = null;
let currentRecipeIngredients = [];
let pendingRecipeId = null;
let autocompleteIndex = -1;

// Helper functions
const getActiveList = () => lists.find(l => l.id === activeListId) || lists[0];

const getListCategory = () => {
  const list = getActiveList();
  const baseName = list.name.replace(/ \d+$/, '').toLowerCase();
  if (baseName === 'grocery') return 'grocery';
  if (baseName === 'vacation') return 'vacation';
  if (baseName === 'to-do') return 'todo';
  return 'grocery';
};

const getThemeColors = () => {
  const category = getListCategory();
  if (category === 'vacation') {
    return { chip: 'chip-selected-vacation', highlight: 'chip-highlight-vacation', badge: 'badge-vacation', listItem: 'list-item-vacation', listNumber: 'list-number-vacation' };
  }
  if (category === 'todo') {
    return { chip: 'chip-selected-todo', highlight: 'chip-highlight-todo', badge: 'badge-todo', listItem: 'list-item-todo', listNumber: 'list-number-todo' };
  }
  return { chip: 'chip-selected', highlight: 'chip-highlight', badge: 'badge', listItem: 'list-item', listNumber: 'list-number' };
};

// Save functions
const saveDatabase = () => localStorage.setItem('groceryDatabase', JSON.stringify(groceryItems));
const saveLists = () => {
  localStorage.setItem('lists', JSON.stringify(lists));
  localStorage.setItem('activeListId', JSON.stringify(activeListId));
};
const saveRecipes = () => localStorage.setItem('recipes', JSON.stringify(recipes));

const getUniqueName = (baseName) => {
  const existingNames = lists.map(l => l.name);
  if (!existingNames.includes(baseName)) return baseName;
  let counter = 1;
  while (existingNames.includes(`${baseName} ${counter}`)) counter++;
  return `${baseName} ${counter}`;
};

const getRandomItems = (count = 5) => {
  const category = getListCategory();
  let available = groceryItems.filter(i => i.category === category);
  const shuffled = available.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(i => i.name);
};

const getSearchResults = (query) => {
  if (!query.trim()) return [];
  const category = getListCategory();
  let results = groceryItems.filter(i => 
    i.category === category && i.name.toLowerCase().includes(query.toLowerCase())
  );
  return results.map(i => i.name).sort((a, b) => {
    const aStarts = a.toLowerCase().startsWith(query.toLowerCase());
    const bStarts = b.toLowerCase().startsWith(query.toLowerCase());
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    return a.localeCompare(b);
  });
};

const getSortedList = () => {
  const list = getActiveList();
  if (sortAlphabetically) {
    return [...list.items].sort((a, b) => {
      const nameA = typeof a === 'string' ? a : a.name;
      const nameB = typeof b === 'string' ? b : b.name;
      return nameA.localeCompare(nameB);
    });
  }
  return list.items;
};

// Import/Export functions
function openImportExportModal() {
  document.getElementById('importExportModal').classList.remove('hidden');
}

function closeImportExportModal() {
  document.getElementById('importExportModal').classList.add('hidden');
}

function exportData() {
  const data = {
    version: 1,
    exportDate: new Date().toISOString(),
    lists: lists,
    activeListId: activeListId,
    recipes: recipes,
    database: groceryItems
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `grocery-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  closeImportExportModal();
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.lists || !data.database) {
        alert('Invalid backup file format');
        return;
      }
      lists = data.lists || lists;
      activeListId = data.activeListId || lists[0].id;
      recipes = data.recipes || [];
      groceryItems = data.database || groceryItems;
      saveLists();
      saveRecipes();
      saveDatabase();
      renderTabs();
      renderAll();
      if (showRecipes) renderRecipeList();
      if (showDatabase) renderDatabase();
      closeImportExportModal();
      alert('Data imported successfully!');
    } catch (err) {
      alert('Error reading file: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// Modal functions
function openNewListModal() {
  if (lists.length >= 10) { alert('Maximum of 10 lists reached.'); return; }
  document.getElementById('newListModal').classList.remove('hidden');
  renderPresetList();
}

function closeNewListModal() {
  document.getElementById('newListModal').classList.add('hidden');
}

function selectPreset(name) {
  const uniqueName = getUniqueName(name);
  const newId = Math.max(...lists.map(l => l.id), 0) + 1;
  lists.push({ id: newId, name: uniqueName, items: [], lastList: [] });
  activeListId = newId;
  saveLists();
  closeNewListModal();
  suggestions = getRandomItems();
  renderTabs();
  renderAll();
}

function openRenameModal() {
  document.getElementById('renameModal').classList.remove('hidden');
  document.getElementById('renameInput').value = getActiveList().name;
  document.getElementById('renameInput').focus();
}

function closeRenameModal() {
  document.getElementById('renameModal').classList.add('hidden');
}

function confirmRename() {
  const input = document.getElementById('renameInput').value.trim();
  if (input) {
    const list = getActiveList();
    const otherNames = lists.filter(l => l.id !== list.id).map(l => l.name);
    let newName = input;
    if (otherNames.includes(input)) {
      let counter = 1;
      while (otherNames.includes(`${input} ${counter}`)) counter++;
      newName = `${input} ${counter}`;
    }
    list.name = newName;
    saveLists();
    suggestions = getRandomItems();
    renderTabs();
    renderAll();
  }
  closeRenameModal();
}

function openDeleteModal() {
  if (lists.length <= 1) { alert('Cannot delete the only list.'); return; }
  document.getElementById('deleteModal').classList.remove('hidden');
}

function closeDeleteModal() {
  document.getElementById('deleteModal').classList.add('hidden');
}

function confirmDelete() {
  if (lists.length > 1) {
    lists = lists.filter(l => l.id !== activeListId);
    activeListId = lists[0].id;
    saveLists();
    suggestions = getRandomItems();
    renderTabs();
    renderAll();
  }
  closeDeleteModal();
}

function openCategoryModal(itemName, fromDatabase = false) {
  pendingItemName = itemName;
  pendingFromDatabase = fromDatabase;
  document.getElementById('newItemName').textContent = itemName;
  document.getElementById('categorySelect').value = getListCategory();
  document.getElementById('categoryModal').classList.remove('hidden');
}

function closeCategoryModal() {
  document.getElementById('categoryModal').classList.add('hidden');
  pendingItemName = '';
  pendingFromDatabase = false;
}

function confirmAddItem() {
  const category = document.getElementById('categorySelect').value;
  if (pendingItemName) {
    const exists = groceryItems.some(i => i.name.toLowerCase() === pendingItemName.toLowerCase());
    if (!exists) {
      groceryItems.push({ name: pendingItemName, category: category });
      saveDatabase();
    }
    if (!pendingFromDatabase) {
      const list = getActiveList();
      list.items.push({ name: pendingItemName, qty: '' });
      saveLists();
      document.getElementById('searchInput').value = '';
      renderItemChips();
      renderShoppingList();
    } else {
      renderDatabase();
    }
  }
  closeCategoryModal();
}

// Recipe Modal functions
function openNewRecipeModal() {
  editingRecipeId = null;
  currentRecipeIngredients = [];
  document.getElementById('recipeModalTitle').textContent = 'New Recipe';
  document.getElementById('recipeNameInput').value = '';
  document.getElementById('recipeCategorySelect').value = 'dinner';
  document.getElementById('recipeInstructions').value = '';
  document.getElementById('newIngredientQty').value = '';
  document.getElementById('newIngredientName').value = '';
  renderRecipeIngredients();
  document.getElementById('recipeModal').classList.remove('hidden');
}

function openEditRecipeModal(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;
  editingRecipeId = id;
  currentRecipeIngredients = [...recipe.ingredients];
  document.getElementById('recipeModalTitle').textContent = 'Edit Recipe';
  document.getElementById('recipeNameInput').value = recipe.name;
  document.getElementById('recipeCategorySelect').value = recipe.category;
  document.getElementById('recipeInstructions').value = recipe.instructions;
  document.getElementById('newIngredientQty').value = '';
  document.getElementById('newIngredientName').value = '';
  renderRecipeIngredients();
  document.getElementById('recipeModal').classList.remove('hidden');
}

function closeRecipeModal() {
  document.getElementById('recipeModal').classList.add('hidden');
  editingRecipeId = null;
  currentRecipeIngredients = [];
}

function renderRecipeIngredients() {
  const container = document.getElementById('recipeIngredients');
  if (currentRecipeIngredients.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 13px; padding: 8px;">No ingredients added yet</p>';
    return;
  }
  container.innerHTML = currentRecipeIngredients.map((ing, index) => `
    <div class="recipe-ingredient-item">
      <span class="recipe-ingredient-qty">${ing.qty || '-'}</span>
      <span class="recipe-ingredient-name">${ing.name}</span>
      <button class="list-item-remove" onclick="removeRecipeIngredient(${index})">✕</button>
    </div>
  `).join('');
}

function addRecipeIngredient() {
  const qtyInput = document.getElementById('newIngredientQty');
  const nameInput = document.getElementById('newIngredientName');
  const qty = qtyInput.value.trim();
  const name = nameInput.value.trim();
  if (!name) return;
  
  const exists = groceryItems.some(i => i.name.toLowerCase() === name.toLowerCase());
  if (!exists) {
    groceryItems.push({ name: name, category: 'grocery' });
    saveDatabase();
  }
  
  currentRecipeIngredients.push({ name, qty });
  qtyInput.value = '';
  nameInput.value = '';
  document.getElementById('ingredientAutocomplete').classList.add('hidden');
  renderRecipeIngredients();
}

function removeRecipeIngredient(index) {
  currentRecipeIngredients.splice(index, 1);
  renderRecipeIngredients();
}

function saveRecipe() {
  const name = document.getElementById('recipeNameInput').value.trim();
  const category = document.getElementById('recipeCategorySelect').value;
  const instructions = document.getElementById('recipeInstructions').value.trim();
  
  if (!name) { alert('Please enter a recipe name'); return; }
  if (currentRecipeIngredients.length === 0) { alert('Please add at least one ingredient'); return; }
  
  if (editingRecipeId) {
    const recipe = recipes.find(r => r.id === editingRecipeId);
    if (recipe) {
      recipe.name = name;
      recipe.category = category;
      recipe.ingredients = [...currentRecipeIngredients];
      recipe.instructions = instructions;
    }
  } else {
    const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
    recipes.push({
      id: newId,
      name,
      category,
      ingredients: [...currentRecipeIngredients],
      instructions
    });
  }
  
  saveRecipes();
  closeRecipeModal();
  renderRecipeList();
}

function deleteRecipe(id) {
  recipes = recipes.filter(r => r.id !== id);
  saveRecipes();
  renderRecipeList();
}

// Recipe Detail Modal functions
function openRecipeDetailModal(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;
  pendingRecipeId = id;
  
  document.getElementById('recipeDetailTitle').textContent = recipe.name;
  
  const catLabel = recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1);
  const categoryEl = document.getElementById('recipeDetailCategory');
  categoryEl.textContent = catLabel;
  categoryEl.className = `recipe-card-category recipe-cat-${recipe.category}`;
  
  const ingredientsEl = document.getElementById('recipeDetailIngredients');
  ingredientsEl.innerHTML = recipe.ingredients.map(ing => `
    <div class="recipe-ingredient-item">
      <span class="recipe-ingredient-qty">${ing.qty || '-'}</span>
      <span class="recipe-ingredient-name">${ing.name}</span>
    </div>
  `).join('');
  
  document.getElementById('recipeDetailInstructions').textContent = recipe.instructions || 'No instructions provided.';
  document.getElementById('recipeDetailModal').classList.remove('hidden');
}

function closeRecipeDetailModal() {
  document.getElementById('recipeDetailModal').classList.add('hidden');
}

function editFromDetail() {
  const id = pendingRecipeId;
  closeRecipeDetailModal();
  pendingRecipeId = null;
  openEditRecipeModal(id);
}

function deleteFromDetail() {
  document.getElementById('recipeDetailModal').classList.add('hidden');
  document.getElementById('deleteRecipeModal').classList.remove('hidden');
}

function closeDeleteRecipeModal() {
  document.getElementById('deleteRecipeModal').classList.add('hidden');
  pendingRecipeId = null;
}

function confirmDeleteRecipe() {
  const id = pendingRecipeId;
  recipes = recipes.filter(r => r.id !== id);
  saveRecipes();
  closeDeleteRecipeModal();
  renderRecipeList();
}

function addToListFromDetail() {
  const id = pendingRecipeId;
  closeRecipeDetailModal();
  openAddToListModal(id);
}

// Add to List Modal functions
function openAddToListModal(recipeId) {
  pendingRecipeId = recipeId;
  renderExistingLists();
  document.getElementById('addToListModal').classList.remove('hidden');
}

function closeAddToListModal() {
  document.getElementById('addToListModal').classList.add('hidden');
  pendingRecipeId = null;
}

function renderExistingLists() {
  const container = document.getElementById('existingListsContainer');
  const groceryLists = lists.filter(l => {
    const baseName = l.name.replace(/ \d+$/, '').toLowerCase();
    return baseName === 'grocery' || (!['vacation', 'to-do'].includes(baseName));
  });
  if (groceryLists.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 13px;">No grocery lists available</p>';
    return;
  }
  container.innerHTML = groceryLists.map(list => 
    `<button class="preset-btn" onclick="addRecipeToList(${list.id})">${list.name} (${list.items.length} items)</button>`
  ).join('');
}

function addRecipeToList(listId) {
  const recipe = recipes.find(r => r.id === pendingRecipeId);
  if (!recipe) return;
  
  const list = lists.find(l => l.id === listId);
  if (!list) return;
  
  recipe.ingredients.forEach(ing => {
    list.items.push({ name: ing.name, qty: ing.qty || '' });
  });
  
  saveLists();
  closeAddToListModal();
  
  activeListId = listId;
  showRecipes = false;
  document.getElementById('recipesView').classList.add('hidden');
  document.getElementById('mainView').classList.remove('hidden');
  document.getElementById('tabsContainer').classList.remove('hidden');
  document.getElementById('toggleRecipesBtn').textContent = '📖 Recipes';
  saveLists();
  renderTabs();
  renderAll();
}

function addRecipeToNewList() {
  const recipe = recipes.find(r => r.id === pendingRecipeId);
  if (!recipe) return;
  
  const uniqueName = getUniqueName(recipe.name);
  const newId = Math.max(...lists.map(l => l.id), 0) + 1;
  const newList = { 
    id: newId, 
    name: uniqueName, 
    items: recipe.ingredients.map(ing => ({ name: ing.name, qty: ing.qty || '' })),
    lastList: [] 
  };
  lists.push(newList);
  activeListId = newId;
  
  saveLists();
  closeAddToListModal();
  
  showRecipes = false;
  document.getElementById('recipesView').classList.add('hidden');
  document.getElementById('mainView').classList.remove('hidden');
  document.getElementById('tabsContainer').classList.remove('hidden');
  document.getElementById('toggleRecipesBtn').textContent = '📖 Recipes';
  renderTabs();
  renderAll();
}

function setRecipeFilter(filter) {
  recipeCategoryFilter = filter;
  updateRecipeFilterButtons();
  renderRecipeList();
}

function updateRecipeFilterButtons() {
  document.getElementById('recipeFilterAll').className = `btn btn-small ${recipeCategoryFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('recipeFilterBreakfast').className = `btn btn-small ${recipeCategoryFilter === 'breakfast' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('recipeFilterLunch').className = `btn btn-small ${recipeCategoryFilter === 'lunch' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('recipeFilterDinner').className = `btn btn-small ${recipeCategoryFilter === 'dinner' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('recipeFilterDessert').className = `btn btn-small ${recipeCategoryFilter === 'dessert' ? 'btn-primary' : 'btn-secondary'}`;
}

function renderRecipeList() {
  const container = document.getElementById('recipeList');
  const countSpan = document.getElementById('recipeCount');
  const searchInput = document.getElementById('recipeSearch');
  const query = searchInput.value.toLowerCase();
  
  let filtered = recipes;
  if (recipeCategoryFilter !== 'all') filtered = filtered.filter(r => r.category === recipeCategoryFilter);
  if (query) filtered = filtered.filter(r => r.name.toLowerCase().includes(query));
  filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  
  countSpan.textContent = filtered.length;
  
  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 14px; text-align: center; padding: 20px;">No recipes found</p>';
    return;
  }
  
  container.innerHTML = filtered.map(recipe => {
    const catClass = `recipe-cat-${recipe.category}`;
    const catLabel = recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1);
    const ingredientCount = recipe.ingredients.length;
    return `
      <div class="recipe-card" onclick="openRecipeDetailModal(${recipe.id})">
        <div class="recipe-card-header">
          <span class="recipe-card-title">${recipe.name}</span>
          <span class="recipe-card-category ${catClass}">${catLabel}</span>
        </div>
        <div class="recipe-card-ingredients">${ingredientCount} ingredient${ingredientCount !== 1 ? 's' : ''}</div>
      </div>
    `;
  }).join('');
}

// Autocomplete functions
function showIngredientAutocomplete() {
  const input = document.getElementById('newIngredientName');
  const list = document.getElementById('ingredientAutocomplete');
  const query = input.value.trim().toLowerCase();
  
  if (!query) {
    list.classList.add('hidden');
    return;
  }
  
  const matches = groceryItems
    .filter(i => i.category === 'grocery' && i.name.toLowerCase().includes(query))
    .slice(0, 8);
  
  if (matches.length === 0) {
    list.classList.add('hidden');
    return;
  }
  
  autocompleteIndex = -1;
  list.innerHTML = matches.map((item, i) => 
    `<div class="autocomplete-item" data-index="${i}" onclick="selectIngredient('${item.name.replace(/'/g, "\\'")}')">${item.name}</div>`
  ).join('');
  list.classList.remove('hidden');
}

function selectIngredient(name) {
  document.getElementById('newIngredientName').value = name;
  document.getElementById('ingredientAutocomplete').classList.add('hidden');
  autocompleteIndex = -1;
}

function handleIngredientKeydown(e) {
  const list = document.getElementById('ingredientAutocomplete');
  const items = list.querySelectorAll('.autocomplete-item');
  
  if (list.classList.contains('hidden') || items.length === 0) {
    if (e.key === 'Enter') addRecipeIngredient();
    return;
  }
  
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    autocompleteIndex = Math.min(autocompleteIndex + 1, items.length - 1);
    updateAutocompleteSelection(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    autocompleteIndex = Math.max(autocompleteIndex - 1, 0);
    updateAutocompleteSelection(items);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (autocompleteIndex >= 0 && items[autocompleteIndex]) {
      selectIngredient(items[autocompleteIndex].textContent);
      addRecipeIngredient();
    } else {
      addRecipeIngredient();
    }
  } else if (e.key === 'Escape') {
    list.classList.add('hidden');
    autocompleteIndex = -1;
  }
}

function updateAutocompleteSelection(items) {
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === autocompleteIndex);
    if (i === autocompleteIndex) item.scrollIntoView({ block: 'nearest' });
  });
}

// Render functions
function renderPresetList() {
  document.getElementById('presetList').innerHTML = presetNames.map(name => 
    `<button class="preset-btn" onclick="selectPreset('${name}')">${name}</button>`
  ).join('');
}

function renderTabs() {
  const container = document.getElementById('tabsContainer');
  const tabs = lists.map(list => {
    const closeBtn = lists.length > 1 ? `<button class="tab-close" onclick="event.stopPropagation(); deleteList(${list.id})">✕</button>` : '';
    return `<div class="tab ${list.id === activeListId ? 'tab-active' : ''}" onclick="handleTabTap(${list.id})" data-id="${list.id}"><span class="tab-name">${list.name}</span>${closeBtn}</div>`;
  }).join('');
  const addTab = lists.length < 10 ? `<button class="tab tab-add" onclick="openNewListModal()">+</button>` : '';
  container.innerHTML = tabs + addTab;
}

function handleTabTap(id) {
  const now = Date.now();
  if (lastTap.id === id && now - lastTap.time < 400) {
    activeListId = id;
    saveLists();
    openRenameModal();
    lastTap = { id: null, time: 0 };
  } else {
    lastTap = { id, time: now };
    switchList(id);
  }
}

function switchList(id) {
  activeListId = id;
  saveLists();
  sortAlphabetically = false;
  suggestions = getRandomItems();
  renderTabs();
  renderAll();
  updateSortButton();
}

function deleteList(id) {
  if (lists.length <= 1) { alert('Cannot delete the only list.'); return; }
  activeListId = id;
  openDeleteModal();
}

function renderItemChips() {
  const container = document.getElementById('itemChips');
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value;
  const refreshBtn = document.getElementById('refreshBtn');
  const list = getActiveList();
  const theme = getThemeColors();
  
  let items = query.trim() ? getSearchResults(query) : suggestions;
  refreshBtn.classList.toggle('hidden', query.trim().length > 0);
  
  if (query.trim() && items.length === 0) {
    container.innerHTML = `
      <div>
        <p style="color: #9ca3af; font-size: 14px; margin-bottom: 8px;">No items found</p>
        <button class="btn btn-primary" onclick="openCategoryModal('${query.trim().replace(/'/g, "\\'")}')">+ Add "${query.trim()}"</button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = items.map((item, index) => {
    const isSelected = list.items.some(i => i.name === item || i === item);
    const isFirst = query.trim() && index === 0;
    const chipClass = isSelected ? `chip ${theme.chip}` : (isFirst ? `chip ${theme.highlight}` : 'chip chip-default');
    const badge = isFirst ? `<span class="${theme.badge}">↵</span>` : '';
    return `<div class="chip-badge">${badge}<button class="${chipClass}" onclick="toggleItem('${item.replace(/'/g, "\\'")}')">${item}</button></div>`;
  }).join('');
}

function renderLastList() {
  const card = document.getElementById('lastListCard');
  const container = document.getElementById('lastListChips');
  const list = getActiveList();
  const theme = getThemeColors();
  
  if (list.lastList.length === 0) { card.classList.add('hidden'); return; }
  
  card.classList.remove('hidden');
  container.innerHTML = list.lastList.map(item => {
    const itemName = typeof item === 'string' ? item : item.name;
    const isSelected = list.items.some(i => (typeof i === 'string' ? i : i.name) === itemName);
    const chipClass = isSelected ? `chip ${theme.chip}` : 'chip chip-default';
    return `<button class="${chipClass}" onclick="addFromLastList('${itemName.replace(/'/g, "\\'")}')">${itemName}</button>`;
  }).join('');
}

function getListDisplayName() {
  const list = getActiveList();
  const baseName = list.name.replace(/ \d+$/, '').toLowerCase();
  if (baseName === 'grocery') return 'Grocery List';
  if (baseName === 'vacation') return 'Vacation List';
  if (baseName === 'to-do') return 'To-Do List';
  return 'Shopping List';
}

function renderShoppingList() {
  const listContainer = document.getElementById('shoppingList');
  const emptyContainer = document.getElementById('shoppingListEmpty');
  const countSpan = document.getElementById('listCount');
  const titleSpan = document.getElementById('listTitle');
  const list = getActiveList();
  const theme = getThemeColors();
  const category = getListCategory();
  
  titleSpan.textContent = getListDisplayName();
  countSpan.textContent = list.items.length;
  
  if (list.items.length === 0) {
    listContainer.classList.add('hidden');
    emptyContainer.classList.remove('hidden');
    return;
  }
  
  listContainer.classList.remove('hidden');
  emptyContainer.classList.add('hidden');
  
  const sorted = getSortedList();
  listContainer.innerHTML = sorted.map((item, index) => {
    const itemName = typeof item === 'string' ? item : item.name;
    const itemQty = typeof item === 'string' ? '' : (item.qty || '');
    const originalIndex = list.items.findIndex(i => (typeof i === 'string' ? i : i.name) === itemName);
    const qtyField = category === 'grocery' ? `<input type="text" class="list-item-qty" value="${itemQty}" placeholder="Qty" onchange="updateItemQty(${originalIndex}, this.value)">` : '';
    return `
    <div class="${theme.listItem}">
      <span class="${theme.listNumber}">${index + 1}</span>
      <span class="list-item-text">${itemName}</span>
      ${qtyField}
      <button class="list-item-remove" onclick="removeItem(${originalIndex})">✕</button>
    </div>
  `}).join('');
}

function setDbFilter(filter) {
  dbCategoryFilter = filter;
  updateDbFilterButtons();
  renderDatabase();
}

function updateDbFilterButtons() {
  document.getElementById('dbFilterAll').className = `btn btn-small ${dbCategoryFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('dbFilterGrocery').className = `btn btn-small ${dbCategoryFilter === 'grocery' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('dbFilterVacation').className = `btn btn-small ${dbCategoryFilter === 'vacation' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('dbFilterTodo').className = `btn btn-small ${dbCategoryFilter === 'todo' ? 'btn-primary' : 'btn-secondary'}`;
}

function renderDatabase() {
  const container = document.getElementById('dbList');
  const countSpan = document.getElementById('dbCount');
  const searchInput = document.getElementById('dbSearch');
  const query = searchInput.value.toLowerCase();
  
  let items = groceryItems;
  if (dbCategoryFilter !== 'all') items = items.filter(i => i.category === dbCategoryFilter);
  if (query) items = items.filter(i => i.name.toLowerCase().includes(query));
  items = items.sort((a, b) => a.name.localeCompare(b.name));
  
  countSpan.textContent = items.length;
  
  container.innerHTML = items.map(item => {
    const tagClass = item.category === 'grocery' ? 'db-tag-grocery' : (item.category === 'vacation' ? 'db-tag-vacation' : 'db-tag-todo');
    const tagText = item.category === 'grocery' ? 'Grocery' : (item.category === 'vacation' ? 'Vacation' : 'To-Do');
    return `
    <div class="db-item">
      <span class="db-item-name">${item.name}</span>
      <span class="db-tag ${tagClass}">${tagText}</span>
      <button class="list-item-remove" onclick="removeFromDatabase('${item.name.replace(/'/g, "\\'")}')">✕</button>
    </div>
  `}).join('');
}

function renderAll() {
  renderItemChips();
  renderShoppingList();
  renderLastList();
}

function updateSortButton() {
  const sortBtn = document.getElementById('sortBtn');
  sortBtn.className = `btn btn-small ${sortAlphabetically ? 'btn-purple' : 'btn-secondary'}`;
  sortBtn.textContent = sortAlphabetically ? '✓ A-Z' : 'A-Z';
}

// Action functions
function toggleItem(item) {
  const list = getActiveList();
  const existingIndex = list.items.findIndex(i => (typeof i === 'string' ? i : i.name) === item);
  
  if (existingIndex >= 0) {
    list.items.splice(existingIndex, 1);
  } else {
    list.items.push({ name: item, qty: '' });
  }
  saveLists();
  renderItemChips();
  renderShoppingList();
  renderLastList();
}

function removeItem(index) {
  const list = getActiveList();
  list.items.splice(index, 1);
  saveLists();
  renderItemChips();
  renderShoppingList();
  renderLastList();
}

function updateItemQty(index, qty) {
  const list = getActiveList();
  if (list.items[index]) {
    if (typeof list.items[index] === 'string') {
      list.items[index] = { name: list.items[index], qty: qty };
    } else {
      list.items[index].qty = qty;
    }
    saveLists();
  }
}

function addFromLastList(item) {
  const list = getActiveList();
  const itemName = typeof item === 'string' ? item : item.name;
  const alreadyExists = list.items.some(i => (typeof i === 'string' ? i : i.name) === itemName);
  if (!alreadyExists) {
    const lastItem = list.lastList.find(i => (typeof i === 'string' ? i : i.name) === itemName);
    if (lastItem && typeof lastItem === 'object') {
      list.items.push({ name: lastItem.name, qty: lastItem.qty || '' });
    } else {
      list.items.push({ name: itemName, qty: '' });
    }
    saveLists();
    renderItemChips();
    renderShoppingList();
    renderLastList();
  }
}

function removeFromDatabase(name) {
  groceryItems = groceryItems.filter(i => i.name !== name);
  lists.forEach(list => {
    list.items = list.items.filter(i => (typeof i === 'string' ? i : i.name) !== name);
    list.lastList = list.lastList.filter(i => (typeof i === 'string' ? i : i.name) !== name);
  });
  saveDatabase();
  saveLists();
  renderDatabase();
  renderItemChips();
  renderShoppingList();
  renderLastList();
}

// Initialize
suggestions = getRandomItems();

// Event listeners
document.getElementById('toggleDbBtn').addEventListener('click', () => {
  showDatabase = !showDatabase;
  showRecipes = false;
  document.getElementById('databaseView').classList.toggle('hidden', !showDatabase);
  document.getElementById('recipesView').classList.add('hidden');
  document.getElementById('mainView').classList.toggle('hidden', showDatabase);
  document.getElementById('tabsContainer').classList.toggle('hidden', showDatabase);
  document.getElementById('toggleDbBtn').textContent = showDatabase ? '← Back to List' : '📦 Database';
  document.getElementById('toggleRecipesBtn').textContent = '📖 Recipes';
  if (showDatabase) renderDatabase();
});

document.getElementById('toggleRecipesBtn').addEventListener('click', () => {
  showRecipes = !showRecipes;
  showDatabase = false;
  document.getElementById('recipesView').classList.toggle('hidden', !showRecipes);
  document.getElementById('databaseView').classList.add('hidden');
  document.getElementById('mainView').classList.toggle('hidden', showRecipes);
  document.getElementById('tabsContainer').classList.toggle('hidden', showRecipes);
  document.getElementById('toggleRecipesBtn').textContent = showRecipes ? '← Back to List' : '📖 Recipes';
  document.getElementById('toggleDbBtn').textContent = '📦 Database';
  if (showRecipes) renderRecipeList();
});

document.getElementById('refreshBtn').addEventListener('click', () => {
  suggestions = getRandomItems();
  renderItemChips();
});

document.getElementById('searchInput').addEventListener('input', renderItemChips);

document.getElementById('searchInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    const results = getSearchResults(query);
    const list = getActiveList();
    if (results.length > 0) {
      const alreadyExists = list.items.some(i => (typeof i === 'string' ? i : i.name) === results[0]);
      if (!alreadyExists) {
        list.items.push({ name: results[0], qty: '' });
        saveLists();
        e.target.value = '';
        renderItemChips();
        renderShoppingList();
      }
    } else if (query) {
      openCategoryModal(query);
    }
  }
});

document.getElementById('sortBtn').addEventListener('click', () => {
  sortAlphabetically = !sortAlphabetically;
  updateSortButton();
  renderShoppingList();
});

document.getElementById('newListBtn').addEventListener('click', () => {
  const list = getActiveList();
  if (list.items.length > 0) {
    list.lastList = [...list.items];
  }
  list.items = [];
  sortAlphabetically = false;
  suggestions = getRandomItems();
  saveLists();
  updateSortButton();
  renderItemChips();
  renderShoppingList();
  renderLastList();
});

document.getElementById('renameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') confirmRename();
});

document.getElementById('dbSearch').addEventListener('input', renderDatabase);

document.getElementById('newDbItem').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('addDbItemBtn').click();
});

document.getElementById('addDbItemBtn').addEventListener('click', () => {
  const input = document.getElementById('newDbItem');
  const name = input.value.trim();
  if (name && !groceryItems.some(i => i.name.toLowerCase() === name.toLowerCase())) {
    openCategoryModal(name, true);
    input.value = '';
  }
});

document.getElementById('addIngredientBtn').addEventListener('click', addRecipeIngredient);

document.getElementById('newIngredientName').addEventListener('input', showIngredientAutocomplete);

document.getElementById('newIngredientName').addEventListener('keydown', handleIngredientKeydown);

document.getElementById('newIngredientName').addEventListener('blur', () => {
  setTimeout(() => document.getElementById('ingredientAutocomplete').classList.add('hidden'), 150);
});

document.getElementById('recipeSearch').addEventListener('input', renderRecipeList);

// Modal close buttons
document.getElementById('newListModal').addEventListener('click', closeNewListModal);
document.getElementById('closeNewListModalBtn').addEventListener('click', closeNewListModal);
document.getElementById('renameModal').addEventListener('click', closeRenameModal);
document.getElementById('closeRenameModalBtn').addEventListener('click', closeRenameModal);
document.getElementById('confirmRenameBtn').addEventListener('click', confirmRename);
document.getElementById('deleteModal').addEventListener('click', closeDeleteModal);
document.getElementById('closeDeleteModalBtn').addEventListener('click', closeDeleteModal);
document.getElementById('confirmDeleteBtn').addEventListener('click', confirmDelete);
document.getElementById('categoryModal').addEventListener('click', closeCategoryModal);
document.getElementById('closeCategoryModalBtn').addEventListener('click', closeCategoryModal);
document.getElementById('confirmAddItemBtn').addEventListener('click', confirmAddItem);

// Import/Export
document.getElementById('importExportBtn').addEventListener('click', openImportExportModal);
document.getElementById('importExportModal').addEventListener('click', closeImportExportModal);
document.getElementById('closeImportExportModalBtn').addEventListener('click', closeImportExportModal);
document.getElementById('exportDataBtn').addEventListener('click', exportData);
document.getElementById('importFileInput').addEventListener('change', importData);

// Recipe modals
document.getElementById('newRecipeBtn').addEventListener('click', openNewRecipeModal);
document.getElementById('recipeModal').addEventListener('click', closeRecipeModal);
document.getElementById('closeRecipeModalBtn').addEventListener('click', closeRecipeModal);
document.getElementById('saveRecipeBtn').addEventListener('click', saveRecipe);

document.getElementById('recipeDetailModal').addEventListener('click', closeRecipeDetailModal);
document.getElementById('closeRecipeDetailModalBtn').addEventListener('click', closeRecipeDetailModal);
document.getElementById('editFromDetailBtn').addEventListener('click', editFromDetail);
document.getElementById('deleteFromDetailBtn').addEventListener('click', deleteFromDetail);
document.getElementById('addToListFromDetailBtn').addEventListener('click', addToListFromDetail);

document.getElementById('deleteRecipeModal').addEventListener('click', closeDeleteRecipeModal);
document.getElementById('closeDeleteRecipeModalBtn').addEventListener('click', closeDeleteRecipeModal);
document.getElementById('confirmDeleteRecipeBtn').addEventListener('click', confirmDeleteRecipe);

document.getElementById('addToListModal').addEventListener('click', closeAddToListModal);
document.getElementById('closeAddToListModalBtn').addEventListener('click', closeAddToListModal);
document.getElementById('addRecipeToNewListBtn').addEventListener('click', addRecipeToNewList);

// Recipe filters
document.getElementById('recipeFilterAll').addEventListener('click', () => setRecipeFilter('all'));
document.getElementById('recipeFilterBreakfast').addEventListener('click', () => setRecipeFilter('breakfast'));
document.getElementById('recipeFilterLunch').addEventListener('click', () => setRecipeFilter('lunch'));
document.getElementById('recipeFilterDinner').addEventListener('click', () => setRecipeFilter('dinner'));
document.getElementById('recipeFilterDessert').addEventListener('click', () => setRecipeFilter('dessert'));

// Database filters
document.getElementById('dbFilterAll').addEventListener('click', () => setDbFilter('all'));
document.getElementById('dbFilterGrocery').addEventListener('click', () => setDbFilter('grocery'));
document.getElementById('dbFilterVacation').addEventListener('click', () => setDbFilter('vacation'));
document.getElementById('dbFilterTodo').addEventListener('click', () => setDbFilter('todo'));

// Initial render
renderTabs();
renderAll();
updateSortButton();
