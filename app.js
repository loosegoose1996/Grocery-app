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

let lists = JSON.parse(localStorage.getItem('lists')) || [{ id: 1, name: 'Grocery', category: 'grocery', items: [], lastList: [] }];

// Migration: ensure all lists have a category
lists = lists.map(list => {
  if (!list.category) {
    const baseName = list.name.replace(/ \d+$/, '').toLowerCase();
    if (baseName === 'vacation') list.category = 'vacation';
    else if (baseName === 'to-do') list.category = 'todo';
    else list.category = 'grocery';
  }
  return list;
});
localStorage.setItem('lists', JSON.stringify(lists));
let activeListId = JSON.parse(localStorage.getItem('activeListId')) || 1;
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
let savedLists = JSON.parse(localStorage.getItem('savedLists')) || [];
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
let currentTheme = localStorage.getItem('theme') || 'system';
let pendingSavedList = null;
let pendingOverwriteIndex = null;
let dbViewMode = 'items'; // 'items' or 'saved'
let savedListCategoryFilter = 'all';
let expandedSavedListId = null;
let showSchedule = false;
let schedules = JSON.parse(localStorage.getItem('schedules')) || [];
let editingScheduleId = null;
let pendingDeleteScheduleId = null;
let scheduleType = 'once';
let scheduleDays = [];
let scheduleCheckInterval = null;

// Apply theme on load
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  updateThemeButtons();
}

function updateThemeButtons() {
  document.getElementById('themeLightBtn').classList.toggle('active', currentTheme === 'light');
  document.getElementById('themeDarkBtn').classList.toggle('active', currentTheme === 'dark');
  document.getElementById('themeSystemBtn').classList.toggle('active', currentTheme === 'system');
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (currentTheme === 'system') {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  }
});

// Apply theme immediately
applyTheme(currentTheme);

// Helper functions
const getActiveList = () => lists.find(l => l.id === activeListId) || lists[0];

const getListCategory = () => {
  const list = getActiveList();
  return list.category || 'grocery';
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
const saveSavedLists = () => localStorage.setItem('savedLists', JSON.stringify(savedLists));

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
    savedLists: savedLists,
    schedules: schedules,
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
      savedLists = data.savedLists || [];
      schedules = data.schedules || [];
      groceryItems = data.database || groceryItems;
      saveLists();
      saveRecipes();
      saveSavedLists();
      saveSchedules();
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
  const category = name.toLowerCase() === 'grocery' ? 'grocery' : 
                   name.toLowerCase() === 'vacation' ? 'vacation' : 
                   name.toLowerCase() === 'to-do' ? 'todo' : 'grocery';
  lists.push({ id: newId, name: uniqueName, category: category, items: [], lastList: [] });
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
  document.getElementById('renameModal').classList.add('hidden');
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
}

function openDeleteModal() {
  if (lists.length <= 1) { alert('Cannot delete the only list.'); return; }
  document.getElementById('deleteModal').classList.remove('hidden');
}

function closeDeleteModal() {
  document.getElementById('deleteModal').classList.add('hidden');
}

function confirmDelete() {
  document.getElementById('deleteModal').classList.add('hidden');
  if (lists.length > 1) {
    lists = lists.filter(l => l.id !== activeListId);
    activeListId = lists[0].id;
    saveLists();
    suggestions = getRandomItems();
    renderTabs();
    renderAll();
  }
}

// Save List Modal functions
function openSaveListModal() {
  const list = getActiveList();
  if (list.items.length === 0) {
    alert('Cannot save an empty list.');
    return;
  }
  document.getElementById('saveListNameInput').value = list.name;
  document.getElementById('saveListModal').classList.remove('hidden');
  document.getElementById('saveListNameInput').focus();
}

function closeSaveListModal() {
  document.getElementById('saveListModal').classList.add('hidden');
}

function confirmSaveList() {
  const name = document.getElementById('saveListNameInput').value.trim();
  if (!name) {
    alert('Please enter a name for the saved list.');
    return;
  }
  
  const list = getActiveList();
  const savedList = {
    id: Date.now(),
    name: name,
    category: list.category,
    items: JSON.parse(JSON.stringify(list.items)) // Deep copy
  };
  
  // Check if a saved list with this name already exists
  const existingIndex = savedLists.findIndex(sl => sl.name.toLowerCase() === name.toLowerCase());
  if (existingIndex >= 0) {
    // Store pending data and show overwrite confirmation modal
    pendingSavedList = savedList;
    pendingOverwriteIndex = existingIndex;
    document.getElementById('overwriteListName').textContent = name;
    document.getElementById('overwriteSavedListModal').classList.remove('hidden');
  } else {
    savedLists.push(savedList);
    saveSavedLists();
    closeSaveListModal();
  }
}

function closeOverwriteModal() {
  document.getElementById('overwriteSavedListModal').classList.add('hidden');
  pendingSavedList = null;
  pendingOverwriteIndex = null;
}

function confirmOverwriteSavedList() {
  if (pendingSavedList !== null && pendingOverwriteIndex !== null) {
    savedLists[pendingOverwriteIndex] = pendingSavedList;
    saveSavedLists();
  }
  closeOverwriteModal();
  closeSaveListModal();
}

// Saved Lists Modal functions
function openSavedListsModal() {
  closeNewListModal();
  renderSavedLists();
  document.getElementById('savedListsModal').classList.remove('hidden');
}

function closeSavedListsModal() {
  document.getElementById('savedListsModal').classList.add('hidden');
}

function renderSavedLists() {
  const container = document.getElementById('savedListsContainer');
  
  if (savedLists.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 14px; text-align: center; padding: 20px;">No saved lists yet</p>';
    return;
  }
  
  container.innerHTML = savedLists.map(sl => {
    const categoryLabel = sl.category === 'grocery' ? 'Grocery' : 
                          sl.category === 'vacation' ? 'Vacation' : 'To-Do';
    const tagClass = sl.category === 'grocery' ? 'db-tag-grocery' : 
                     sl.category === 'vacation' ? 'db-tag-vacation' : 'db-tag-todo';
    return `
      <div class="db-item">
        <span class="db-item-name" style="cursor: pointer;" onclick="loadSavedList(${sl.id})">${sl.name}</span>
        <span class="db-tag ${tagClass}">${categoryLabel}</span>
        <button class="list-item-remove" onclick="event.stopPropagation(); openDeleteSavedListModal(${sl.id})">&#x2715;</button>
      </div>
    `;
  }).join('');
}

function loadSavedList(id) {
  const savedList = savedLists.find(sl => sl.id === id);
  if (!savedList) return;
  
  if (lists.length >= 10) {
    alert('Maximum of 10 lists reached. Please delete a list first.');
    return;
  }
  
  const uniqueName = getUniqueName(savedList.name);
  const newId = Math.max(...lists.map(l => l.id), 0) + 1;
  const newList = {
    id: newId,
    name: uniqueName,
    category: savedList.category,
    items: JSON.parse(JSON.stringify(savedList.items)), // Deep copy
    lastList: []
  };
  
  lists.push(newList);
  activeListId = newId;
  saveLists();
  
  // Close modal if open
  closeSavedListsModal();
  
  // Switch to main list view
  navigateTo('list');
  
  suggestions = getRandomItems();
  renderTabs();
  renderAll();
}

let pendingDeleteSavedListId = null;

function openDeleteSavedListModal(id) {
  pendingDeleteSavedListId = id;
  document.getElementById('deleteSavedListModal').classList.remove('hidden');
}

function closeDeleteSavedListModal() {
  document.getElementById('deleteSavedListModal').classList.add('hidden');
  pendingDeleteSavedListId = null;
}

function confirmDeleteSavedList() {
  if (pendingDeleteSavedListId !== null) {
    savedLists = savedLists.filter(sl => sl.id !== pendingDeleteSavedListId);
    saveSavedLists();
    renderSavedLists();
    if (dbViewMode === 'saved') {
      renderSavedListsDb();
    }
  }
  closeDeleteSavedListModal();
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
      <button class="list-item-remove" onclick="removeRecipeIngredient(${index})">&#x2715;</button>
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
  saveLists();
  navigateTo('list');
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
    category: 'grocery',
    items: recipe.ingredients.map(ing => ({ name: ing.name, qty: ing.qty || '' })),
    lastList: [] 
  };
  lists.push(newList);
  activeListId = newId;
  
  saveLists();
  closeAddToListModal();
  
  navigateTo('list');
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
  const activeList = getActiveList();
  const activeCategory = activeList ? activeList.category : 'grocery';
  
  const tabs = lists.map(list => {
    const closeBtn = lists.length > 1 ? `<button class="tab-close" onclick="event.stopPropagation(); deleteList(${list.id})">&#x2715;</button>` : '';
    let tabClass = 'tab';
    if (list.id === activeListId) {
      if (list.category === 'vacation') {
        tabClass = 'tab tab-active-vacation';
      } else if (list.category === 'todo') {
        tabClass = 'tab tab-active-todo';
      } else {
        tabClass = 'tab tab-active';
      }
    }
    return `<div class="${tabClass}" onclick="handleTabTap(${list.id})" data-id="${list.id}"><span class="tab-name">${list.name}</span>${closeBtn}</div>`;
  }).join('');
  
  let addTabClass = 'tab tab-add';
  if (activeCategory === 'vacation') {
    addTabClass = 'tab tab-add-vacation';
  } else if (activeCategory === 'todo') {
    addTabClass = 'tab tab-add-todo';
  }
  
  const addTab = lists.length < 10 ? `<button class="${addTabClass}" onclick="openNewListModal()">+</button>` : '';
  container.innerHTML = tabs + addTab;
  
  // Update Save and Clear buttons
  updateActionButtons();
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
    const badge = isFirst ? `<span class="${theme.badge}">&#x21A9;</span>` : '';
    return `<div class="chip-badge">${badge}<button class="${chipClass}" onclick="toggleItem('${item.replace(/'/g, "\\'")}')">${item}</button></div>`;
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
      <button class="list-item-remove" onclick="removeItem(${originalIndex})">&#x2715;</button>
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

// Saved Lists in Database View
function setDbViewMode(mode) {
  dbViewMode = mode;
  document.getElementById('dbViewItemsBtn').classList.toggle('active', mode === 'items');
  document.getElementById('dbViewSavedBtn').classList.toggle('active', mode === 'saved');
  document.getElementById('dbItemsView').classList.toggle('hidden', mode !== 'items');
  document.getElementById('dbSavedView').classList.toggle('hidden', mode !== 'saved');
  
  if (mode === 'items') {
    renderDatabase();
  } else {
    renderSavedListsDb();
  }
}

function setSavedListFilter(filter) {
  savedListCategoryFilter = filter;
  updateSavedListFilterButtons();
  renderSavedListsDb();
}

function updateSavedListFilterButtons() {
  document.getElementById('savedFilterAll').className = `btn btn-small ${savedListCategoryFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('savedFilterGrocery').className = `btn btn-small ${savedListCategoryFilter === 'grocery' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('savedFilterVacation').className = `btn btn-small ${savedListCategoryFilter === 'vacation' ? 'btn-primary' : 'btn-secondary'}`;
  document.getElementById('savedFilterTodo').className = `btn btn-small ${savedListCategoryFilter === 'todo' ? 'btn-primary' : 'btn-secondary'}`;
}

function renderSavedListsDb() {
  const container = document.getElementById('savedListsDbContainer');
  const searchInput = document.getElementById('savedListSearch');
  const query = searchInput.value.toLowerCase();
  
  let filtered = savedLists;
  if (savedListCategoryFilter !== 'all') filtered = filtered.filter(sl => sl.category === savedListCategoryFilter);
  if (query) filtered = filtered.filter(sl => sl.name.toLowerCase().includes(query));
  filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  
  document.getElementById('dbTitle').innerHTML = `Saved Lists (<span id="savedCount">${filtered.length}</span>)`;
  
  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 14px; text-align: center; padding: 20px;">No saved lists found</p>';
    return;
  }
  
  container.innerHTML = filtered.map(sl => {
    const isExpanded = expandedSavedListId === sl.id;
    const tagClass = sl.category === 'grocery' ? 'db-tag-grocery' : 
                     sl.category === 'vacation' ? 'db-tag-vacation' : 'db-tag-todo';
    const tagText = sl.category === 'grocery' ? 'Grocery' : 
                    sl.category === 'vacation' ? 'Vacation' : 'To-Do';
    
    const itemsHtml = sl.items.map((item, idx) => {
      const itemName = typeof item === 'string' ? item : item.name;
      const itemQty = typeof item === 'string' ? '' : (item.qty || '');
      return `
        <div class="saved-list-item">
          <span class="saved-list-item-qty">${itemQty || '-'}</span>
          <span class="saved-list-item-name">${itemName}</span>
          <button class="saved-list-item-remove" onclick="event.stopPropagation(); removeItemFromSavedList(${sl.id}, ${idx})">&#x2715;</button>
        </div>
      `;
    }).join('');
    
    return `
      <div class="saved-list-card">
        <div class="saved-list-header" onclick="toggleSavedListExpand(${sl.id})">
          <span class="saved-list-expand ${isExpanded ? 'expanded' : ''}">&#9654</span>
          <span class="saved-list-name">${sl.name}</span>
          <span class="db-tag ${tagClass}">${tagText}</span>
          <span class="saved-list-count">${sl.items.length} items</span>
          <div class="saved-list-actions">
            <button class="saved-list-action-btn load-btn" onclick="event.stopPropagation(); loadSavedList(${sl.id})" title="Load list">&#8599”</button>
            <button class="saved-list-action-btn delete-btn" onclick="event.stopPropagation(); openDeleteSavedListModal(${sl.id})" title="Delete">&#x2715;</button>
          </div>
        </div>
        <div class="saved-list-items ${isExpanded ? 'expanded' : ''}">
          ${itemsHtml || '<p style="color: #9ca3af; font-size: 13px; padding: 8px;">No items in this list</p>'}
          <div class="saved-list-add-item">
            <div class="autocomplete-container" style="flex: 1;">
              <input type="text" class="input" id="addItemToSaved_${sl.id}" placeholder="Add item..." 
                oninput="showSavedListAutocomplete(${sl.id})"
                onkeydown="handleSavedListAddItem(event, ${sl.id})"
                onblur="hideSavedListAutocomplete(${sl.id})"
                autocomplete="off">
              <div class="autocomplete-list hidden" id="savedListAutocomplete_${sl.id}"></div>
            </div>
            <button class="btn btn-primary" onclick="addItemToSavedList(${sl.id})">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleSavedListExpand(id) {
  if (expandedSavedListId === id) {
    expandedSavedListId = null;
  } else {
    expandedSavedListId = id;
  }
  renderSavedListsDb();
}

function removeItemFromSavedList(listId, itemIndex) {
  const savedList = savedLists.find(sl => sl.id === listId);
  if (savedList && savedList.items[itemIndex] !== undefined) {
    savedList.items.splice(itemIndex, 1);
    saveSavedLists();
    renderSavedListsDb();
  }
}

function addItemToSavedList(listId) {
  const input = document.getElementById(`addItemToSaved_${listId}`);
  const itemName = input.value.trim();
  if (!itemName) return;
  
  const savedList = savedLists.find(sl => sl.id === listId);
  if (savedList) {
    savedList.items.push({ name: itemName, qty: '' });
    saveSavedLists();
    input.value = '';
    renderSavedListsDb();
  }
}

function handleSavedListAddItem(event, listId) {
  const list = document.getElementById(`savedListAutocomplete_${listId}`);
  const items = list.querySelectorAll('.autocomplete-item');
  
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (!list.classList.contains('hidden') && items.length > 0) {
      savedListAutocompleteIndex = Math.min(savedListAutocompleteIndex + 1, items.length - 1);
      updateSavedListAutocompleteSelection(listId);
    }
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (!list.classList.contains('hidden') && items.length > 0) {
      savedListAutocompleteIndex = Math.max(savedListAutocompleteIndex - 1, 0);
      updateSavedListAutocompleteSelection(listId);
    }
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (!list.classList.contains('hidden') && savedListAutocompleteIndex >= 0 && items[savedListAutocompleteIndex]) {
      selectSavedListAutocomplete(listId, items[savedListAutocompleteIndex].textContent);
    }
    addItemToSavedList(listId);
  } else if (event.key === 'Escape') {
    list.classList.add('hidden');
    savedListAutocompleteIndex = -1;
  }
}

let savedListAutocompleteIndex = -1;

function showSavedListAutocomplete(listId) {
  const input = document.getElementById(`addItemToSaved_${listId}`);
  const list = document.getElementById(`savedListAutocomplete_${listId}`);
  const query = input.value.trim().toLowerCase();
  
  // Get the saved list to filter by its category
  const savedList = savedLists.find(sl => sl.id === listId);
  const category = savedList ? savedList.category : 'grocery';
  
  if (!query) {
    list.classList.add('hidden');
    return;
  }
  
  const matches = groceryItems
    .filter(i => i.category === category && i.name.toLowerCase().includes(query))
    .slice(0, 8);
  
  if (matches.length === 0) {
    list.classList.add('hidden');
    return;
  }
  
  savedListAutocompleteIndex = -1;
  list.innerHTML = matches.map((item, i) => 
    `<div class="autocomplete-item" data-index="${i}" onmousedown="selectSavedListAutocomplete(${listId}, '${item.name.replace(/'/g, "\\'")}')">${item.name}</div>`
  ).join('');
  list.classList.remove('hidden');
}

function selectSavedListAutocomplete(listId, name) {
  const input = document.getElementById(`addItemToSaved_${listId}`);
  const list = document.getElementById(`savedListAutocomplete_${listId}`);
  input.value = name;
  list.classList.add('hidden');
  savedListAutocompleteIndex = -1;
}

function hideSavedListAutocomplete(listId) {
  setTimeout(() => {
    const list = document.getElementById(`savedListAutocomplete_${listId}`);
    if (list) {
      list.classList.add('hidden');
    }
    savedListAutocompleteIndex = -1;
  }, 150);
}

function updateSavedListAutocompleteSelection(listId) {
  const list = document.getElementById(`savedListAutocomplete_${listId}`);
  const items = list.querySelectorAll('.autocomplete-item');
  items.forEach((item, i) => {
    item.classList.toggle('selected', i === savedListAutocompleteIndex);
    if (i === savedListAutocompleteIndex) item.scrollIntoView({ block: 'nearest' });
  });
}

function renderDatabase() {
  const container = document.getElementById('dbList');
  const searchInput = document.getElementById('dbSearch');
  const query = searchInput.value.toLowerCase();
  
  let items = groceryItems;
  if (dbCategoryFilter !== 'all') items = items.filter(i => i.category === dbCategoryFilter);
  if (query) items = items.filter(i => i.name.toLowerCase().includes(query));
  items = items.sort((a, b) => a.name.localeCompare(b.name));
  
  // Update the title with count
  document.getElementById('dbTitle').innerHTML = `Database Items (<span id="dbCount">${items.length}</span>)`;
  
  container.innerHTML = items.map(item => {
    const tagClass = item.category === 'grocery' ? 'db-tag-grocery' : (item.category === 'vacation' ? 'db-tag-vacation' : 'db-tag-todo');
    const tagText = item.category === 'grocery' ? 'Grocery' : (item.category === 'vacation' ? 'Vacation' : 'To-Do');
    return `
    <div class="db-item">
      <span class="db-item-name">${item.name}</span>
      <span class="db-tag ${tagClass}">${tagText}</span>
      <button class="list-item-remove" onclick="removeFromDatabase('${item.name.replace(/'/g, "\\'")}')">&#x2715;</button>
    </div>
  `}).join('');
}

function renderLastList() {
  // Last list rendering - placeholder for last list UI if implemented
}

function renderAll() {
  renderItemChips();
  renderShoppingList();
  renderLastList();
}

function updateSortButton() {
  const sortBtn = document.getElementById('sortBtn');
  sortBtn.className = `btn btn-small ${sortAlphabetically ? 'btn-purple' : 'btn-secondary'}`;
  sortBtn.textContent = sortAlphabetically ? 'A-Z' : 'A-Z';
}

function updateActionButtons() {
  const category = getListCategory();
  const saveBtn = document.getElementById('saveListBtn');
  const clearBtn = document.getElementById('newListBtn');
  
  if (category === 'vacation') {
    saveBtn.className = 'btn btn-small btn-save-vacation';
    clearBtn.className = 'btn btn-small btn-clear-vacation';
  } else if (category === 'todo') {
    saveBtn.className = 'btn btn-small btn-save-todo';
    clearBtn.className = 'btn btn-small btn-clear-todo';
  } else {
    saveBtn.className = 'btn btn-small btn-save-grocery';
    clearBtn.className = 'btn btn-small btn-clear-grocery';
  }
}

// Action functions
function toggleItem(item) {
  const list = getActiveList();
  const existingIndex = list.items.findIndex(i => (typeof i === 'string' ? i : i.name) === item);
  
  if (existingIndex >= 0) {
    list.items.splice(existingIndex, 1);
  } else {
    list.items.push({ name: item, qty: '' });
    // Clear search field when adding an item
    document.getElementById('searchInput').value = '';
    suggestions = getRandomItems();
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

// ==================== SCHEDULE FEATURE ====================
const saveSchedules = () => localStorage.setItem('schedules', JSON.stringify(schedules));

function setScheduleType(type) {
  scheduleType = type;
  document.getElementById('schedTypeOnce').className = `btn btn-small ${type === 'once' ? 'btn-schedule' : 'btn-secondary'}`;
  document.getElementById('schedTypeInterval').className = `btn btn-small ${type === 'interval' ? 'btn-schedule' : 'btn-secondary'}`;
  document.getElementById('schedTypeDayOfWeek').className = `btn btn-small ${type === 'dayofweek' ? 'btn-schedule' : 'btn-secondary'}`;
  document.getElementById('schedOnceOptions').classList.toggle('hidden', type !== 'once');
  document.getElementById('schedIntervalOptions').classList.toggle('hidden', type !== 'interval');
  document.getElementById('schedDayOfWeekOptions').classList.toggle('hidden', type !== 'dayofweek');
}

function toggleScheduleDay(day) {
  const index = scheduleDays.indexOf(day);
  if (index >= 0) {
    scheduleDays.splice(index, 1);
  } else {
    scheduleDays.push(day);
    scheduleDays.sort();
  }
  updateDayButtons();
}

function updateDayButtons() {
  document.querySelectorAll('.day-btn').forEach(btn => {
    const day = parseInt(btn.getAttribute('data-day'));
    btn.classList.toggle('selected', scheduleDays.includes(day));
  });
}

function populateSavedListSelect() {
  const select = document.getElementById('scheduleSavedListSelect');
  select.innerHTML = '<option value="">-- Select a saved list --</option>' + 
    savedLists.map(sl => `<option value="${sl.id}">${sl.name}</option>`).join('');
}

function openNewScheduleModal() {
  if (savedLists.length === 0) {
    alert('You need at least one saved list to create a schedule. Save a list first!');
    return;
  }
  editingScheduleId = null;
  scheduleType = 'once';
  scheduleDays = [];
  document.getElementById('scheduleModalTitle').textContent = 'New Schedule';
  populateSavedListSelect();
  document.getElementById('scheduleSavedListSelect').value = '';
  setScheduleType('once');
  
  // Set default datetime to now + 1 hour
  const now = new Date();
  now.setHours(now.getHours() + 1);
  now.setMinutes(0, 0, 0);
  const localIso = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  document.getElementById('schedDateTime').value = localIso;
  document.getElementById('schedIntervalStart').value = localIso;
  document.getElementById('schedIntervalValue').value = '1';
  document.getElementById('schedIntervalUnit').value = 'weeks';
  document.getElementById('schedDayTime').value = '09:00';
  updateDayButtons();
  
  document.getElementById('scheduleModal').classList.remove('hidden');
}

function openEditScheduleModal(id) {
  const sched = schedules.find(s => s.id === id);
  if (!sched) return;
  editingScheduleId = id;
  document.getElementById('scheduleModalTitle').textContent = 'Edit Schedule';
  populateSavedListSelect();
  document.getElementById('scheduleSavedListSelect').value = sched.savedListId;
  
  scheduleType = sched.type;
  setScheduleType(sched.type);
  
  if (sched.type === 'once') {
    document.getElementById('schedDateTime').value = sched.dateTime || '';
  } else if (sched.type === 'interval') {
    document.getElementById('schedIntervalValue').value = String(sched.intervalValue || 1);
    document.getElementById('schedIntervalUnit').value = sched.intervalUnit || 'weeks';
    const startDate = sched.nextRun ? new Date(sched.nextRun) : new Date();
    const localIso = new Date(startDate.getTime() - startDate.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    document.getElementById('schedIntervalStart').value = localIso;
  } else if (sched.type === 'dayofweek') {
    scheduleDays = [...(sched.days || [])];
    document.getElementById('schedDayTime').value = sched.timeOfDay || '09:00';
    updateDayButtons();
  }
  
  document.getElementById('scheduleModal').classList.remove('hidden');
}

function closeScheduleModal() {
  document.getElementById('scheduleModal').classList.add('hidden');
  editingScheduleId = null;
}

function saveSchedule() {
  const savedListId = parseInt(document.getElementById('scheduleSavedListSelect').value);
  if (!savedListId) {
    alert('Please select a saved list.');
    return;
  }
  
  const savedList = savedLists.find(sl => sl.id === savedListId);
  if (!savedList) {
    alert('Selected saved list not found.');
    return;
  }
  
  let scheduleData = {
    id: editingScheduleId || Date.now(),
    savedListId: savedListId,
    savedListName: savedList.name,
    type: scheduleType,
    completed: false,
    lastRun: null,
    createdAt: new Date().toISOString()
  };
  
  if (scheduleType === 'once') {
    const dateTime = document.getElementById('schedDateTime').value;
    if (!dateTime) { alert('Please select a date and time.'); return; }
    scheduleData.dateTime = dateTime;
    scheduleData.nextRun = new Date(dateTime).toISOString();
  } else if (scheduleType === 'interval') {
    const intervalValue = parseInt(document.getElementById('schedIntervalValue').value);
    const intervalUnit = document.getElementById('schedIntervalUnit').value;
    const startFrom = document.getElementById('schedIntervalStart').value;
    if (!intervalValue || intervalValue < 1) { alert('Please enter a valid interval.'); return; }
    if (!startFrom) { alert('Please select a start date.'); return; }
    scheduleData.intervalValue = intervalValue;
    scheduleData.intervalUnit = intervalUnit;
    scheduleData.nextRun = new Date(startFrom).toISOString();
  } else if (scheduleType === 'dayofweek') {
    if (scheduleDays.length === 0) { alert('Please select at least one day.'); return; }
    const timeOfDay = document.getElementById('schedDayTime').value;
    if (!timeOfDay) { alert('Please select a time.'); return; }
    scheduleData.days = [...scheduleDays];
    scheduleData.timeOfDay = timeOfDay;
    scheduleData.nextRun = calculateNextDayOfWeekRun(scheduleDays, timeOfDay);
  }
  
  if (editingScheduleId) {
    const index = schedules.findIndex(s => s.id === editingScheduleId);
    if (index >= 0) {
      scheduleData.createdAt = schedules[index].createdAt;
      schedules[index] = scheduleData;
    }
  } else {
    schedules.push(scheduleData);
  }
  
  saveSchedules();
  closeScheduleModal();
  renderScheduleList();
}

function calculateNextDayOfWeekRun(days, timeOfDay) {
  const now = new Date();
  const [hours, minutes] = timeOfDay.split(':').map(Number);
  
  // Check each of the next 7 days
  for (let i = 0; i <= 7; i++) {
    const candidate = new Date(now);
    candidate.setDate(candidate.getDate() + i);
    candidate.setHours(hours, minutes, 0, 0);
    
    if (days.includes(candidate.getDay()) && candidate > now) {
      return candidate.toISOString();
    }
  }
  
  // Fallback: next week's first matching day
  const candidate = new Date(now);
  candidate.setDate(candidate.getDate() + 7);
  candidate.setHours(hours, minutes, 0, 0);
  return candidate.toISOString();
}

function calculateNextIntervalRun(schedule) {
  const lastRun = new Date(schedule.nextRun);
  const next = new Date(lastRun);
  
  if (schedule.intervalUnit === 'days') {
    next.setDate(next.getDate() + schedule.intervalValue);
  } else if (schedule.intervalUnit === 'weeks') {
    next.setDate(next.getDate() + (schedule.intervalValue * 7));
  } else if (schedule.intervalUnit === 'months') {
    next.setMonth(next.getMonth() + schedule.intervalValue);
  }
  
  return next.toISOString();
}

function openDeleteScheduleModal(id) {
  pendingDeleteScheduleId = id;
  document.getElementById('deleteScheduleModal').classList.remove('hidden');
}

function closeDeleteScheduleModal() {
  document.getElementById('deleteScheduleModal').classList.add('hidden');
  pendingDeleteScheduleId = null;
}

function confirmDeleteSchedule() {
  if (pendingDeleteScheduleId !== null) {
    schedules = schedules.filter(s => s.id !== pendingDeleteScheduleId);
    saveSchedules();
    renderScheduleList();
  }
  closeDeleteScheduleModal();
}

function triggerSchedule(id) {
  const schedule = schedules.find(s => s.id === id);
  if (!schedule) return;
  
  const savedList = savedLists.find(sl => sl.id === schedule.savedListId);
  if (!savedList) {
    alert('The saved list for this schedule no longer exists.');
    return;
  }
  
  executeSchedule(schedule);
  renderScheduleList();
}

function executeSchedule(schedule) {
  const savedList = savedLists.find(sl => sl.id === schedule.savedListId);
  if (!savedList) return;
  
  if (lists.length >= 10) {
    console.warn('Cannot auto-create list: maximum of 10 lists reached.');
    return;
  }
  
  const uniqueName = getUniqueName(savedList.name);
  const newId = Math.max(...lists.map(l => l.id), 0) + 1;
  const newList = {
    id: newId,
    name: uniqueName,
    category: savedList.category,
    items: JSON.parse(JSON.stringify(savedList.items)),
    lastList: []
  };
  
  lists.push(newList);
  activeListId = newId;
  schedule.lastRun = new Date().toISOString();
  
  if (schedule.type === 'once') {
    schedule.completed = true;
  } else if (schedule.type === 'interval') {
    schedule.nextRun = calculateNextIntervalRun(schedule);
  } else if (schedule.type === 'dayofweek') {
    schedule.nextRun = calculateNextDayOfWeekRun(schedule.days, schedule.timeOfDay);
  }
  
  saveSchedules();
  saveLists();
  
  // Always refresh the main view tabs and list
  renderTabs();
  renderAll();
}

function checkSchedules() {
  const now = new Date();
  let anyFired = false;
  
  schedules.forEach(schedule => {
    if (schedule.completed) return;
    if (!schedule.nextRun) return;
    
    const nextRun = new Date(schedule.nextRun);
    if (now >= nextRun) {
      const savedList = savedLists.find(sl => sl.id === schedule.savedListId);
      if (savedList) {
        executeSchedule(schedule);
        anyFired = true;
      }
    }
  });
  
  if (anyFired && showSchedule) {
    renderScheduleList();
  }
}

function formatScheduleDescription(schedule) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  if (schedule.type === 'once') {
    const d = new Date(schedule.dateTime);
    return `One-time: ${d.toLocaleDateString()} at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } else if (schedule.type === 'interval') {
    const unit = schedule.intervalUnit === 'days' ? 'day' : 
                 schedule.intervalUnit === 'weeks' ? 'week' : 'month';
    const plural = schedule.intervalValue > 1 ? 's' : '';
    return `Every ${schedule.intervalValue} ${unit}${plural}`;
  } else if (schedule.type === 'dayofweek') {
    const daysStr = schedule.days.map(d => dayNames[d]).join(', ');
    return `${daysStr} at ${schedule.timeOfDay}`;
  }
  return 'Unknown';
}

function formatNextRun(schedule) {
  if (schedule.completed) return 'Completed';
  if (!schedule.nextRun) return 'N/A';
  const d = new Date(schedule.nextRun);
  const now = new Date();
  const diffMs = d - now;
  
  if (diffMs < 0) return 'Pending...';
  if (diffMs < 60000) return 'In less than a minute';
  if (diffMs < 3600000) return `In ${Math.round(diffMs / 60000)} min`;
  if (diffMs < 86400000) return `In ${Math.round(diffMs / 3600000)} hours`;
  return d.toLocaleDateString() + ' at ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function renderScheduleList() {
  const container = document.getElementById('scheduleList');
  const countSpan = document.getElementById('scheduleCount');
  
  countSpan.textContent = schedules.length;
  
  if (schedules.length === 0) {
    container.innerHTML = '<p style="color: #9ca3af; font-size: 14px; text-align: center; padding: 20px;">No scheduled lists yet. Create one to auto-generate lists on a schedule!</p>';
    return;
  }
  
  // Sort: active first, then completed; by nextRun date
  const sorted = [...schedules].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return new Date(a.nextRun || 0) - new Date(b.nextRun || 0);
  });
  
  container.innerHTML = sorted.map(sched => {
    const savedList = savedLists.find(sl => sl.id === sched.savedListId);
    const listName = savedList ? savedList.name : `(Deleted: ${sched.savedListName})`;
    const desc = formatScheduleDescription(sched);
    const nextRun = formatNextRun(sched);
    const statusClass = sched.completed ? 'schedule-status-completed' : 'schedule-status-active';
    const statusText = sched.completed ? 'Completed' : 'Active';
    const cardClass = sched.completed ? 'schedule-card completed' : 'schedule-card';
    const lastRunText = sched.lastRun ? `Last run: ${new Date(sched.lastRun).toLocaleDateString()} ${new Date(sched.lastRun).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : '';
    
    return `
      <div class="${cardClass}">
        <div class="schedule-card-header">
          <span class="schedule-card-name">${listName}</span>
          <div class="schedule-card-actions">
            <button class="schedule-action-btn trigger-btn" onclick="triggerSchedule(${sched.id})" title="Run now">&#9654; Run</button>
            <button class="schedule-action-btn" onclick="openEditScheduleModal(${sched.id})" title="Edit">&#9998;</button>
            <button class="schedule-action-btn" onclick="openDeleteScheduleModal(${sched.id})" title="Delete">&#x2715;</button>
          </div>
        </div>
        <div class="schedule-card-details">
          <span><span class="${statusClass}">${statusText}</span> <span class="schedule-tag">${sched.type === 'once' ? 'One-time' : sched.type === 'interval' ? 'Recurring' : 'Weekly'}</span></span>
          <span>${desc}</span>
          <span>Next: ${nextRun}</span>
          ${lastRunText ? `<span>${lastRunText}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// Initialize
suggestions = getRandomItems();

// Event listeners
// Unified navigation function
function navigateTo(view) {
  // Update state
  showSchedule = (view === 'schedule');
  showDatabase = (view === 'database');
  showRecipes = (view === 'recipes');
  
  // Toggle views
  document.getElementById('scheduleView').classList.toggle('hidden', view !== 'schedule');
  document.getElementById('databaseView').classList.toggle('hidden', view !== 'database');
  document.getElementById('recipesView').classList.toggle('hidden', view !== 'recipes');
  document.getElementById('mainView').classList.toggle('hidden', view !== 'list');
  document.getElementById('tabsContainer').classList.toggle('hidden', view !== 'list');
  
  // Update bottom nav active state
  document.querySelectorAll('.bottom-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  
  // Render the appropriate view
  if (view === 'schedule') renderScheduleList();
  if (view === 'database') {
    if (dbViewMode === 'saved') {
      renderSavedListsDb();
    } else {
      renderDatabase();
    }
  }
  if (view === 'recipes') renderRecipeList();
  if (view === 'list') {
    renderTabs();
    renderAll();
  }
}

// Bottom nav event listeners
document.getElementById('navListBtn').addEventListener('click', () => navigateTo('list'));

document.getElementById('toggleScheduleBtn').addEventListener('click', () => {
  navigateTo(showSchedule ? 'list' : 'schedule');
});

// Schedule modals
document.getElementById('newScheduleBtn').addEventListener('click', openNewScheduleModal);
document.getElementById('scheduleModal').addEventListener('click', closeScheduleModal);
document.getElementById('closeScheduleModalBtn').addEventListener('click', closeScheduleModal);
document.getElementById('saveScheduleBtn').addEventListener('click', saveSchedule);

document.getElementById('deleteScheduleModal').addEventListener('click', closeDeleteScheduleModal);
document.getElementById('closeDeleteScheduleModalBtn').addEventListener('click', closeDeleteScheduleModal);
document.getElementById('confirmDeleteScheduleBtn').addEventListener('click', confirmDeleteSchedule);

// Database toggle
document.getElementById('toggleDbBtn').addEventListener('click', () => {
  navigateTo(showDatabase ? 'list' : 'database');
});

document.getElementById('toggleRecipesBtn').addEventListener('click', () => {
  navigateTo(showRecipes ? 'list' : 'recipes');
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

// Import/Export (Settings opens modal, doesn't navigate)
document.getElementById('importExportBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  openImportExportModal();
});
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

// Theme buttons
document.getElementById('themeLightBtn').addEventListener('click', () => applyTheme('light'));
document.getElementById('themeDarkBtn').addEventListener('click', () => applyTheme('dark'));
document.getElementById('themeSystemBtn').addEventListener('click', () => applyTheme('system'));

// Database filters
document.getElementById('dbFilterAll').addEventListener('click', () => setDbFilter('all'));
document.getElementById('dbFilterGrocery').addEventListener('click', () => setDbFilter('grocery'));
document.getElementById('dbFilterVacation').addEventListener('click', () => setDbFilter('vacation'));
document.getElementById('dbFilterTodo').addEventListener('click', () => setDbFilter('todo'));

// Save List
document.getElementById('saveListBtn').addEventListener('click', openSaveListModal);
document.getElementById('saveListModal').addEventListener('click', closeSaveListModal);
document.getElementById('closeSaveListModalBtn').addEventListener('click', closeSaveListModal);
document.getElementById('confirmSaveListBtn').addEventListener('click', confirmSaveList);
document.getElementById('saveListNameInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') confirmSaveList();
});

// Overwrite Saved List
document.getElementById('overwriteSavedListModal').addEventListener('click', closeOverwriteModal);
document.getElementById('cancelOverwriteBtn').addEventListener('click', closeOverwriteModal);
document.getElementById('confirmOverwriteBtn').addEventListener('click', confirmOverwriteSavedList);

// Saved Lists
document.getElementById('openSavedListsBtn').addEventListener('click', openSavedListsModal);
document.getElementById('savedListsModal').addEventListener('click', closeSavedListsModal);
document.getElementById('closeSavedListsModalBtn').addEventListener('click', closeSavedListsModal);

// Delete Saved List
document.getElementById('deleteSavedListModal').addEventListener('click', closeDeleteSavedListModal);
document.getElementById('closeDeleteSavedListModalBtn').addEventListener('click', closeDeleteSavedListModal);
document.getElementById('confirmDeleteSavedListBtn').addEventListener('click', confirmDeleteSavedList);

// Database View Toggle
document.getElementById('dbViewItemsBtn').addEventListener('click', () => setDbViewMode('items'));
document.getElementById('dbViewSavedBtn').addEventListener('click', () => setDbViewMode('saved'));

// Saved List Filters
document.getElementById('savedFilterAll').addEventListener('click', () => setSavedListFilter('all'));
document.getElementById('savedFilterGrocery').addEventListener('click', () => setSavedListFilter('grocery'));
document.getElementById('savedFilterVacation').addEventListener('click', () => setSavedListFilter('vacation'));
document.getElementById('savedFilterTodo').addEventListener('click', () => setSavedListFilter('todo'));

// Saved List Search
document.getElementById('savedListSearch').addEventListener('input', renderSavedListsDb);

// Initial render
renderTabs();
renderAll();
updateSortButton();

// Schedule: check on load and every 30 seconds
checkSchedules();
scheduleCheckInterval = setInterval(checkSchedules, 30000);
