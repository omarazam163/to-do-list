to run the sever use 
npm run start

to use the server you will need to download postman

to get the data from the data base use the get req on http://localhost:3000/users
to add task to the data base use the post req on http://localhost:3000/users with body json like 
{
    "title": "relax",
    "discription": null,
    "completed": false
}
the discription is the only filed allowed to be given a null  value the id is given by sever and it is a random number
to update a task use put req on http://localhost:3000/users/1  where on is the id of the task change it to the id you want to change
to delete a task use delete req on http://localhost:3000/users/1 where on is the id of the task change it to the id you want to delete

