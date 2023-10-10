1. Initialize project and structure
2. Install nodemon -D (dev dependencies)
3. Install and setup express
    * add static middlewear(app.use(express.static('public'));)
    * add body parser(app.use(express.urlencoded{ extended: false }))
    * add routes (routes.js)
4. Add static resourses (css and html)
5. Add views folder with htmls
6. Add express-handlebars view engine
    * install
    * add to express
    * config extensions (add handlebars and app.engine in index file)
    * config views folder (only if have src folder, other is configurated by default, app.set('views', 'src/views');)
    * add main layout
    * add partials folder
    * render home page
    fix navigation to home
    * fix static paths(added path to index - fix styles and images)
7. Add folder controllers with home controller
8. Add database:
    * install mongoose
    * connect database
9. Authentication
    * add user auth controller
    * add controller to routes
    * fix header navigation for login, register and logout
    * render login page
    * render register page
10. Add user model
    * add unique index for username
    * validate repeat password
    * validate if user exist
11. Add user manager
    * add login and register methods (empty)
    * require in user constroller
12. Modify login and register forms.
13. Add login and register post actions.
14. Implement User logic for login and register
15. Hash password in model (po pravilno e dori v managera, moje i v kontrolera)
    * install bcrypt
    * hash password
    * validate hash password on login /register
16. Login
    * find user by username
    * validate password with hash
17. Generate jwt token
    * install jsonwebtoken
    * promisify jsonwebtoken (optional)
    * create SECRET
    * generate token in manager.login
18. Return token to cookie
    * install cookie parser
    * config cookie parser
    * set cookie with token
19. Logout(in user controller)
20. Authentication middlewear /rabotata mu e da identificira dali ima registriran potrebitel ili ne,
                                da proveri dali tezi, koito tvardqt che sa lognati, dali naistina sa lognati. Ako mu delegirame drugi zadaljeniq moje da blokirime caloto prilojenie./
    * create base middlewear
    * use middlewear adding to index.js (vajno e da go dobawim sled kokitata, zashtot shte 
                                        izpolzva pri rabotata si)
    * attach decoded token to request
    * handle invalid token
21. Authorization middleware (proverqvame dali ima registriran user)
22. Dynamic navigation
    * add conditional in main layout
    * add to res locals (for is logged ir no in main layout)
23. Error handling
    * add 404 page
    * redirect missing routes (page) to 404
    * add global error handler (optional)
    * use global error handler after routes!!! (optional) in index.js
    * add error message extractor
24. Show error notifications
    * add error container to layouts
    * show error container conditionally
    * pass error to render
    * add LOCALE error handler /po vajni ot globalnite greshki/
25. Authomatically login after register