let bookClub = [ 
    { name: "Rachel", books: ["Charlie and the Chocolate Factory", "Things Fall Apart", "1984", "Rebecca",]}, 
    { name: "Monica", books:  ["Frankenstein", "Midnight’s Children", "The Great Gatsby", "A Clockwork Orange",]}, 
    { name: "Phoebe", books:  ["Do Androids Dream of Electric Sheep", "Dracula, Bram Stoker", "1984", "The Catcher in the Rye",]}, 
    { name: "Joey", books:  ["Charlie and the Chocolate Factory", "Things Fall Apart", "Midnight’s Children", "Rebecca,"]}, 
    { name: "Chandler", books:  ["The Trial", "Things Fall Apart", "1984", "Rebecca",]},
    { name: "Ross", books:  ["Charlie and the Chocolate Factory", "The Catcher in the Rye", "The Trial", "Franz Kafka", "Rebecca"]}, 
    ]
    console.log(bookClub);
    function everyboduLovesBooks(arr, param){
    let booksInClub = arr.reduce(function(last, arr) {
     return (arr[param].concat(last));
    }, "Charlie and the Chocolate Factory");
    let newarray= booksInClub.filter((item, index)=>  booksInClub.indexOf(item)===index);    
      return (newarray);
    } 
  
    console.log( everyboduLovesBooks(bookClub, "books")); 
  
    
