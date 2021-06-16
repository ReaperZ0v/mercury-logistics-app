# Mercury Logistics Tracking App
A full stack web application developed using the Django REST Framework and React, allows the user to enter a tracking number and fetch details relating to that tracking number (parcel/consignment data) from the database.

# Points
> * REST API uses ```APIView``` class within the logic for a more customized flow 
> * Front End has 2 components which are ```<ErrorAlert />``` and ```<SearchBar />``` linking back to ```App.js```
> * Conditional rendering was used quite a lot on the front end :)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u1gyw70fxfnpex1f9q5c.png)

# Setup
Go ahead and clone the project on to your local machine 

1. open a terminal in the project root and run the command ```python3 manage.py runserver```
2. open another terminal tab but this time inside of the front end folder and run the command ```npm start```
3. navigate to localhost:3000 and start playing around with the project!

## Managing the Back end data
1. navigate to ```localhost:8000``` (that is where the REST API is being served)
2. stop the server and run the command ```python3 manage.py createsuperuser``` to create an admin account
3. visit ```/admin``` and login with the credentials you created 
4. start punching in some dummy data and then take the pre-generated tracking number and put it through the front end to get data about it!

# Built with
> [Django REST Framework] - https://www.django-rest-framework.org/
> [React] - https://reactjs.org/
