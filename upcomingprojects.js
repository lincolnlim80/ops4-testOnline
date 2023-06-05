
// Function to fetch the CSV data
let dataArray = [];
async function fetchCSVData() {
  const response = await fetch('./rsc/upcomingprojectsdata.csv');
  const csvData = await response.text();
  dataArray = csvData
    .split('\n')
    .map((row) => row.split(','))
    .slice(1) // Skip the header row
    .map(([name, zone, category, tenderdate, type, use, tenure, landsize, gfa, top, glslink, dev, landprice, psfgfa, numunits, notes, devlink, projlink]) => ({
      name,
      zone,
      category,
      tenderdate,
      type,
      use,
      tenure,
      landsize,
      gfa,
      top,
      glslink,
      dev,
      landprice,
      psfgfa,
      numunits,
      notes,
      devlink,
      projlink
    }));
  dataArray.pop(); // Remove the last element
  return dataArray;
}

// Function to display the data
function displayData(items) {
  const dataList = document.getElementById("dataList");
  dataList.innerHTML = "";

  items.forEach((item, index) => {
  
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const zoneCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const tenderdateCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const useCell = document.createElement("td");
    const tenureCell = document.createElement("td");
    const landsizeCell = document.createElement("td");
    const gfaCell = document.createElement("td");
    const topCell = document.createElement("td");
    const glslinkCell = document.createElement("td");
    const devCell = document.createElement("td");
    const landpriceCell = document.createElement("td");
    const psfgfaCell = document.createElement("td");
    const numunitsCell = document.createElement("td");
    const notesCell = document.createElement("td");
    const devlinkCell = document.createElement("td");
    const projlinkCell = document.createElement("td");

    nameCell.textContent = item.name;
    zoneCell.textContent = item.zone;
    categoryCell.textContent = item.category;

    tenderdateCell.textContent = item.tenderdate;


    typeCell.textContent = item.type;
    useCell.textContent = item.use;
    tenureCell.textContent = item.tenure;
    landsizeCell.textContent = item.landsize;
    gfaCell.textContent = item.gfa;
    topCell.textContent = item.top;

    const glslink = document.createElement("a");
    glslink.href = item.glslink;
    glslink.textContent = "More...";
    glslinkCell.appendChild(glslink);

    devCell.textContent = item.dev;
    landpriceCell.textContent = item.landprice;
    psfgfaCell.textContent = item.psfgfa;
    numunitsCell.textContent = item.numunits;
    notesCell.textContent = item.notes;
    
    const devlink = document.createElement("a");
    devlink.href = item.devlink;
    devlink.textContent = "More...";
    devlinkCell.appendChild(devlink);
    
    const projlink = document.createElement("a");
    projlink.href = item.projlink;
    projlink.textContent = "More...";
    projlinkCell.appendChild(projlink);

    row.appendChild(nameCell);
    row.appendChild(zoneCell);
    row.appendChild(categoryCell);
    row.appendChild(tenderdateCell);
    row.appendChild(typeCell);
    row.appendChild(useCell);
    row.appendChild(tenureCell);
    row.appendChild(landsizeCell);
    row.appendChild(gfaCell);
    row.appendChild(topCell);
    row.appendChild(glslinkCell);
    row.appendChild(devCell);
    row.appendChild(landpriceCell);
    row.appendChild(psfgfaCell);
    row.appendChild(numunitsCell);
    row.appendChild(notesCell);
    row.appendChild(devlinkCell);
    row.appendChild(projlinkCell);

    dataList.appendChild(row);
  });
}

// Function to initialize the page
async function initializePage() {
  const data = await fetchCSVData();
  filteredData = data; // Assign the fetched data to filteredData initially
  displayData(filteredData);
}

// Call the initializePage() function when the page loads
window.addEventListener('load', initializePage);

let filteredData = []; // Add this line at the beginning, outside any function
// Function to filter the data
function filterData() {
  const searchInput = document.getElementById("searchInput");
  const filterValue = searchInput.value.toLowerCase();
  
  filteredData = dataArray.filter((item) => {
    const nameMatch = item.name && item.name.toLowerCase().includes(filterValue.toLowerCase());
    const zoneMatch = item.zone && item.zone.toLowerCase().includes(filterValue.toLowerCase());
    const categoryMatch = item.category && item.category.toLowerCase().includes(filterValue.toLowerCase());
    const tenderdateMatch = item.tenderdate && item.tenderdate.toLowerCase().includes(filterValue.toLowerCase());
    const typeMatch = item.type && item.type.toLowerCase().includes(filterValue.toLowerCase());
    const useMatch = item.use && item.use.toLowerCase().includes(filterValue.toLowerCase());
    const tenureMatch = item.tenure && item.tenure.toLowerCase().includes(filterValue.toLowerCase());
    const landsizeMatch = item.landsize && item.landsize.toLowerCase().includes(filterValue.toLowerCase());
    const gfaMatch = item.gfa && item.gfa.toLowerCase().includes(filterValue.toLowerCase());
    const topMatch = item.top && item.top.toLowerCase().includes(filterValue.toLowerCase());
    const glslinkMatch = item.glslink && item.glslink.toLowerCase().includes(filterValue.toLowerCase());
    const devMatch = item.dev && item.dev.toLowerCase().includes(filterValue.toLowerCase());
    const landpriceMatch = item.landprice && item.landprice.toLowerCase().includes(filterValue.toLowerCase());
    const psfgfaMatch = item.psfgfa && item.psfgfa.toLowerCase().includes(filterValue.toLowerCase());
    const numunitsMatch = item.numunits && item.numunits.toLowerCase().includes(filterValue.toLowerCase());
    const notesMatch = item.notes && item.notes.toLowerCase().includes(filterValue.toLowerCase());
    const devlinkMatch = item.devlink && item.devlink.toLowerCase().includes(filterValue.toLowerCase());
    const projlinkMatch = item.projlink && item.projlink.toLowerCase().includes(filterValue.toLowerCase());
    

      return nameMatch || zoneMatch || categoryMatch || tenderdateMatch  || typeMatch || useMatch || tenureMatch || landsizeMatch || gfaMatch || topMatch || glslinkMatch || devMatch || landpriceMatch || psfgfaMatch || numunitsMatch || notesMatch || devlinkMatch || projlinkMatch;
  });

  displayData(filteredData);
}



// Event listener for the search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterData);



// Select the column headers
const headers = document.querySelectorAll('th[data-sort]');

// Create an object to keep track of the sort order
const sortOrders = {};

// Loop through each header and attach the event listener
headers.forEach(header => {
header.addEventListener('click', () => {
  const sortProperty = header.dataset.sort;
  let sortOrder = sortOrders[sortProperty] || 'asc'; // Get the current sort order or default to 'asc'

  // Toggle the sort order
  if (sortOrder === 'asc') {
    sortOrder = 'desc';
  } else {
    sortOrder = 'asc';
  }

  sortOrders[sortProperty] = sortOrder; // Update the sort order

  // Call the sorting function or perform any desired action
  sortData(sortProperty, sortOrder);
});
});


// Function to sort the data
function sortData(sortProperty, sortOrder) {


const arrowIcon = document.getElementById(`${sortProperty}ArrowIcon`);
// Toggle arrow direction between asc and desc
if (arrowIcon.classList.contains('asc')) {
    arrowIcon.classList.remove('asc');
    arrowIcon.classList.add('desc');
} else if (arrowIcon.classList.contains('desc')) {
    arrowIcon.classList.remove('desc');
    arrowIcon.classList.add('asc');
} else {
    // this is only for the first click.
    arrowIcon.classList.add('asc');
}

const sortedData = [...filteredData].sort((a, b) => {
  let result;
  if (sortProperty === 'name') {
    result = a.name.localeCompare(b.name);
  } else if (sortProperty === 'zone') {
    result = a.zone.localeCompare(b.zone);
  } else if (sortProperty === 'category') {
    result = a.category.localeCompare(b.category);
  } else if (sortProperty === 'tenderdate') {
    const tenderdateA = new Date(a.tenderdate);
    const tenderdateB = new Date(b.tenderdate);
    result = tenderdateA - tenderdateB;
  } else if (sortProperty === 'type') {
    result = a.type.localeCompare(b.type);
  } else if (sortProperty === 'use') {
    result = a.use.localeCompare(b.use);
  } else if (sortProperty === 'tenure') {
    result = a.tenure.localeCompare(b.tenure);
  } else if (sortProperty === 'landsize') {
    result = a.landsize.localeCompare(b.landsize);
  } else if (sortProperty === 'gfa') {
    result = a.gfa.localeCompare(b.gfa);
  } else if (sortProperty === 'top') {
    result = parseInt(a.top) - parseInt(b.top);
  } else if (sortProperty === 'dev') {
    result = a.dev.localeCompare(b.dev);
  } else if (sortProperty === 'landprice') {
    result = a.landprice.localeCompare(b.landprice);
  } else if (sortProperty === 'psfgfa') {
    result = a.psfgfa.localeCompare(b.psfgfa);
  } else if (sortProperty === 'numunits') {
    result = parseInt(a.numunits) - parseInt(b.numunits);
  } else if (sortProperty === 'notes') {
    result = a.notes.localeCompare(b.notes);
  } else {
    result = 0; // Default sorting order if sortProperty is not recognized
  }

      // Apply sort order based on sortOrder value
      if (sortOrder === 'desc') {
        result *= -1; // Reverse the sorting order
      }

      return result;
});

  displayData(sortedData);
}

// Function to clear the search input
function clearSearchInput() {
  searchInput.value = ""; // Clear the search input value
  filterData(); // Call the filterData function to update the displayed data
}

// Event listener for the clear icon
const clearIcon = document.getElementById("clearIcon");
clearIcon.addEventListener("click", clearSearchInput);
