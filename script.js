const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];


const numberOfBooksRead = () => {
  // write your code here
	let count =0;
	for(book in library){
		if(library[book].readingStatus===true){
			count++;
		}
        // console.log()
	}
	return count;
};

// Do not change the code below

alert(numberOfBooksRead());
