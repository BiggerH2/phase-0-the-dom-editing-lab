document.addEventListener('DOMContentLoaded', function () {
  // Code to interact with the DOM goes here
  // Start by selecting the necessary elements from the DOM
  
  // Select the <h1> element and change its text content
  const pageTitle = document.querySelector('h1');
  pageTitle.textContent = 'My HTML Adventure';
  
  // Select the <p> element and add a CSS class to it
  const paragraph = document.querySelector('p');
  paragraph.classList.add('highlight');
  
  // Select the <a> element and change its href attribute
  const htmlLink = document.querySelector('a');
  htmlLink.href = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
  
  // Create a new <table> element
  const newTable = document.createElement('table');
  
  // Create the table structure (thead, tbody, rows, cells)
  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerCell1 = document.createElement('th');
  const headerCell2 = document.createElement('th');
  headerCell1.textContent = 'Element name';
  headerCell2.textContent = 'Display value';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  tableHeader.appendChild(headerRow);
  
  const tableBody = document.createElement('tbody');
  const rowsData = [
    { element: 'h1', display: 'block' },
    { element: 'p', display: 'block' },
    { element: 'strong', display: 'inline' },
    { element: 'em', display: 'inline' }
  ];
  rowsData.forEach(data => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.textContent = data.element;
    cell2.textContent = data.display;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });
  
  // Append the header and body to the table
  newTable.appendChild(tableHeader);
  newTable.appendChild(tableBody);
  
  // Append the table to the document body
  document.body.appendChild(newTable);
});
