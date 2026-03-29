use('LibrarySystem');


db.users.insertMany([
{ name: "Maryam", age: 25, role: "admin" },
{ name: "Sara", age: 19, role: "user" },
{ name: "Ali", age: 22, role: "admin" },
{ name: "Mona", age: 17, role: "user" },
{ name: "Ahmed", age: 28 }
]);

db.books.insertMany([
{ title: "Mongo Basics", pages: 120 },
{ title: "Egyptian History", pages: 350 }, 
{ title: "Programming 101", pages: 210 }, 
{ title: "The Blue Elephant", pages: 160 } 
]);


db.users.find({ age: { $gt: 21 } });

db.users.find({$or: [{ role: "admin" },{ age: { $lt: 20 } }]});

db.users.find({ age: { $gte: 20, $lte: 30 } });

db.users.find({ role: { $exists: false } });

db.books.find({ pages: { $gt: 200 } }); 

db.books.find({$or: [{ title: "Mongo Basics" },{ pages: { $lt: 180 } }]});

db.books.find({}, { title: 1, pages: 1, _id: 0 }).sort({ pages: -1 }).limit(2);

db.users.updateMany({ age: { $lt: 21 } },{ $inc: { age: 1 } });
db.users.find();

db.users.updateMany({ role: "admin" },{ $set: { isActive: true } }); 
db.users.find();

db.users.deleteMany({ age: { $lt: 18 } });
db.users.find();

db.books.deleteMany({ pages: { $lt: 150 } });
db.books.find();