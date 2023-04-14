function calculateIMC(button) {
    // Get the row that contains the clicked button
    var row = button.parentNode.parentNode;
  
    // Get the input values from the row
    var name = row.cells[0].querySelector('input').value;
    var weight = row.cells[1].querySelector('input').value;
    var height = row.cells[2].querySelector('input').value;
   
     if (isNaN(parseFloat(weight)) || weight <= 0 || isNaN(parseFloat(height)) || height <= 0 || (typeof name !== 'string')) {
        alert("Please enter valid input values.");
        return; // Exit the function if input is not valid
    }
    // Calculate the IMC
    var imc = weight / (height * height);
  
    // Store the input values and IMC in an array
    var result = [name, weight, height, imc];
  
    // Get the frame2 element
    var frame2 = parent.frames["buttom"];
  
    // Write the results to the frame2 document
    frame2.document.write("<div style='background-color: #00FFFF; text-align: center;'>");
    frame2.document.write("<strong><h2>Résultat</h2></strong>");
    frame2.document.write("<strong><p>Nom: " + result[0] + "</p></strong>");
    frame2.document.write("<strong><p>Poids: " + result[1] + " kg</p></strong>");
    frame2.document.write("<strong><p>Taille: " + result[2] + " m</p></strong>");
    frame2.document.write("<strong><p>IMC: " + result[3] + "</p></strong>");
    frame2.document.write("</div>");
    
}
  
