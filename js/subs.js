var filterRow = `<tr><td><select><option><strong>All</strong></option><option>Club 1</option><option>Club 2</option><option>Club 3</option><option>Club 4</option></select></td>`
filterRow += `<td><select><option><strong>All</strong><option>Social</option><option>Outdoors</option><option>Career</option><option>Online</option></select></td>`
filterRow += `<td><select><option><strong>Anywhere</strong><option>In Campus</option><option>In Ankara</option></select></td>`
filterRow += `<td><select><option><strong>Any Day</strong><option>Weekdays</option><option>Weekends</option></select></td></tr>`

function createRow(){
  var elm = document.getElementById('btn');
  elm.insertAdjacentHTML('beforebegin', filterRow); // insert above line break
}

function save() {
  alert('your subscription has been recorded')
}

createRow();
