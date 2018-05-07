# COMP407_Dataviewer-App

### You can view the live version at http://159.203.78.94:3000/.
<br>

### To copy and build the project for your own testing:

<br>

- Clone this repository by opening [Git Bash](https://git-scm.com/downloads), [cd aka change directory](https://ss64.com/bash/cd.html) to where you want to put the project, and type the following command: 

```
git clone https://github.com/perrywarner/COMP407_Dataviewer-App.git
```

- Next, [cd](https://ss64.com/bash/cd.html) into the new directory:

```bash
cd COMP407_Dataviewer-App
```

- Now, we want to build and run the project on your local machine. When you do, you can open in your web browser at localhost:3000. To cancel the local server, you can exit it by the command ctrl-c. To execute the build manager and server, run the following command: 

```
npm start
```

- To make your own changes to COMP407_Dataviewer-App, you have the following options:

  - Adding images: place them in COMP407_Dataviewer-App/public/images/

  - Editing styles/CSS: COMP407_Dataviewer-App/public/stylesheets/style.css

  - Editing [HBS aka HTML](https://handlebarsjs.com/) files: anything inside COMP407_Dataviewer-App/views/ is an HBS file, compatible with HTML. If you want to add your own page for your project, you can create your_proj.hbs in this /views/ directory. 
  
  - Note: If you make any changes, it might be necessary to work with the [Express Router](https://expressjs.com/en/guide/routing.html) to make it work, and if so, seek me out directly.
