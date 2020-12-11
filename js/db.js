//offline data
db.enablePersistence().catch((err) => {
	if (err.code == 'failed-precondition') {
		//probable multiple tabs open at once
		console.log('persistence failed');
	} else if (err.code == 'unimplemented') {
		//lack of browser support
		console.log('persistence is not available');
	}
});

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
