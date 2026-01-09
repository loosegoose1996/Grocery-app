// Default Database
const defaultDatabase = [
  // Grocery items
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
  // Vacation items
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
  // To-Do items
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
let suggestions = [];
let sortAlphabetically = false;
let showDatabase = false;
let lastTap = { id: null, time: 0 };
let pendingItemName = '';
let pendingFromDatabase = false;
let dbCategoryFilter = 'all';

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
  if (sortAlphabetically) return [...list.items].sort((a, b) => a.localeCompare(b));
  return list.items;
};

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
      if (!list.items.includes(pendingItemName)) {
        list.items.push(pendingItemName);
        saveLists();
      }
      document.getElementById('searchInput').value = '';
      renderItemChips();
      renderShoppingList();
    } else {
      renderDatabase();
    }
  }
  closeCategoryModal();
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
    const isSelected = list.items.includes(item);
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
    const isSelected = list.items.includes(item);
    const chipClass = isSelected ? `chip ${theme.chip}` : 'chip chip-default';
    return `<button class="${chipClass}" onclick="addFromLastList('${item.replace(/'/g, "\\'")}')">${item}</button>`;
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
  listContainer.innerHTML = sorted.map((item, index) => `
    <div class="${theme.listItem}">
      <span class="${theme.listNumber}">${index + 1}</span>
      <span class="list-item-text">${item}</span>
      <button class="list-item-remove" onclick="toggleItem('${item.replace(/'/g, "\\'")}')">✕</button>
    </div>
  `).join('');
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
  if (list.items.includes(item)) {
    list.items = list.items.filter(i => i !== item);
  } else {
    list.items.push(item);
  }
  saveLists();
  renderItemChips();
  renderShoppingList();
  renderLastList();
}

function addFromLastList(item) {
  const list = getActiveList();
  if (!list.items.includes(item)) {
    list.items.push(item);
    saveLists();
    renderItemChips();
    renderShoppingList();
    renderLastList();
  }
}

function addCustomItem(item) {
  const list = getActiveList();
  if (item && !list.items.includes(item)) {
    list.items.push(item);
    const exists = groceryItems.some(i => i.name.toLowerCase() === item.toLowerCase());
    if (!exists) {
      openCategoryModal(item);
      return;
    }
    document.getElementById('searchInput').value = '';
    saveLists();
    renderItemChips();
    renderShoppingList();
  }
}

function removeFromDatabase(name) {
  groceryItems = groceryItems.filter(i => i.name !== name);
  lists.forEach(list => {
    list.items = list.items.filter(i => i !== name);
    list.lastList = list.lastList.filter(i => i !== name);
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
  document.getElementById('databaseView').classList.toggle('hidden', !showDatabase);
  document.getElementById('mainView').classList.toggle('hidden', showDatabase);
  document.getElementById('tabsContainer').classList.toggle('hidden', showDatabase);
  document.getElementById('toggleDbBtn').textContent = showDatabase ? '← Back to List' : '📦 Database';
  if (showDatabase) renderDatabase();
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
    if (results.length > 0 && !list.items.includes(results[0])) {
      list.items.push(results[0]);
      saveLists();
      e.target.value = '';
      renderItemChips();
      renderShoppingList();
    } else if (results.length === 0 && query) {
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

// Initial render
renderTabs();
renderAll();
updateSortButton();
