//real-time listner
db.collection('todos').onSnapshot((snapshot) => {
	//console.log(snapshot.docChanges());
	snapshot.docChanges().forEach((change) => {
		//console.log(change, change.doc.data(), change.doc.id);
		if (change.type === 'added') {
			//add the document data to the web page
			renderTodo(change.doc.data(), change.doc.id);
		}
		if (change.type === 'remove') {
			//remove the document data from the web page
		}
	});
});
