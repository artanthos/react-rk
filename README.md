# Light Aqua

1. Requests are made with a ```fakeAsync``` helper, inside the ```src/Helpers/fakeAsync.helper.js``` file. This helper is used to simulate the asynchronous behavior of the application for login, register, fetch tasks, add task, sort tasks, search task by title.

2. JWT and refresh token are both returned from the .env files (see .env.dev, .env.prd and .env.stg).

3. To understand how webpack craco works, read this article I wrote: https://raviolicode.hashnode.dev/how-to-load-custom-env-variables-in-webpack-with-craco

4. State management uses RTK, but without the Query async capabilities (hence the ```fakeAsync``` helper). See ```Redux``` folder for the store file and feature slices.

5. Authentication is managed with ```AuthContext``` located in the ```Contexts``` folder. Based on the token, the user is either authenticated or not. The ```AuthContext``` is used to wrap the ```App``` component, and to provide the ```useAuth``` hook to the application. Also, based on the fake but valid token and the role, routes are managed in ```Routes/AppRputes```, with a custom ```RouteGuard``` in place.

6. Theme and styles are managed with styled-components and reactstrap.

7. Messages and errors are handled through IntlProvider by the ```react-intl``` library. Not much goes on, given that there are no statuses nor errors to handle.
