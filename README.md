to run the sever use<br>
npm run start<br>
to use the server you will need to download postman<br>
to get the data from the data base use the get req on http://localhost:3000/users<br>
to add task to the data base use the post req on http://localhost:3000/users with body json like<br>
{<br>
    "title": "relax",<br>
    "discription": null,<br>
    "completed": false<br>
}<br>
the discription is the only filed allowed to be given a null  value the id is given by sever and it is a random number<br>
to update a task use put req on http://localhost:3000/users/1  where on is the id of the task change it to the id you want to change<br>
to delete a task use delete req on http://localhost:3000/users/1 where on is the id of the task change it to the id you want to delete<br>

