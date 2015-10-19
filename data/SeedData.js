var JassSubject = require("../model/JassSubject");
var seedSubjects = [{ "_id": 2, "activity": "Jassplan Tasks, GDocs, Calendar, Email, Others\nBig Order, Backup all my tasks, Papers... Google Docs\nRead some insightful stuff?.", "condition": "yellow", "description": "Daily plan: Jassplan, Calendar, \nBig Order: Tasks, Google Doc, Bookmarks, Papers", "name": "A1 Mind", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 3, "activity": "Paleo Diet, Gym, Diet, Dr, Look", "condition": "yellow", "description": "Diet (xlc) / Bike", "name": "A2 Body", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 4, "activity": "Lelia, Rodri, Santi", "condition": "red", "description": "Lelia empathy / Rodri Help / santi / bahia", "name": "A3 Flia", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 5, "activity": "Rogers, Rodrigo's Case, Paper work, Taxes and other horrors", "condition": "red", "description": "Bug Review Docs Gluckstein Enclosure \nReview docs and yellow folder.start with box.\nSanti gas. Rodri zapatillas.\nGarage.\nChange all pins!. Big order\nHome Depot\nWind - Azurion - Ticket - send phone!\nDesk / Real Paper. Cajones.", "name": "B1 Things", "parentid": "NULL", "points": 2, "status": "stared" }, { "_id": 6, "activity": "Clean, Food, Repairs, Renovations\nHumidifier, Balcony, Kitchen.\nGenerator. Project Lumon/Balcony!", "condition": "green", "description": "Mesa,comida..preparations. \nClean repair /alarms. Nesspresso.", "name": "B2 Home", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 7, "activity": "Stock, Charts, Costos, Cuentas", "condition": "white", "description": "look at cards,a counts, jorrit", "name": "B3 Money", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 8, "activity": "Pictures, Recuerdos, Gadgets, Some IT..\n\"Non necessary things\"", "condition": "white", "description": "Printer ink for songs.\nGuitar Scarborough.", "name": "B5 Nice", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 9, "activity": "Work", "condition": "green", "description": "Admin / replan / buglist", "name": "C1 Work", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 10, "activity": ".NET + Angular. Mobile. UML. TDD. Agile. News. Certifications. customers' core needs: cloud, mobile, social and big data solutions - delivered via secure pipelines\nC#, JS, MVC, WebApi, Nunit, Moq, castle Windsor, Autofac, Angular, CSS3, HTML5, ReSharper, Visual Paradigme, Azure, Visual Studio. WebStorm, Node.js, Resources to learn / Tools.", "condition": "green", "description": "Node/Mongo\nBootstrap\nAngular\nbootstrap, ngular, visual studio 2015", "name": "C2 BePro", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 11, "activity": "Review latest communications / polish resume / profile / poke recruiters.\n- more specific technology \n- more specific skills in analysis / architecture\n- people leadership / management\n- software architecture\n- agile project management.", "condition": "green", "description": "Improve linkedin", "name": "C3 ProNetCareer", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 75, "activity": "build, deploy., monitor, logs..etc", "condition": "blue", "description": "Get new version , compile, fix.", "name": "AdminV3 Prod", "parentid": 9, "points": 1, "status": "stared" }, { "_id": 76, "activity": "Re-factor to improve architecture,", "condition": "blue", "description": "Get configuration provider mock fro mirko", "name": "Code Refactor", "parentid": 9, "points": 1, "status": "asleep" }, { "_id": 93, "activity": ".NET, c#, web api, ef, js, Angular,Visual studio..", "condition": "blue", "description": "NULL", "name": "C20 Langs \u0026 Tools", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 94, "activity": "UML. Agile Modeling.use cases. Business level. No code allowed.", "condition": "blue", "description": "NULL", "name": "C21 A\u0026D UML", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 95, "activity": "Jassplan2", "condition": "green", "description": "Project Structure: Grunt, Unit Test, SeedData, Modules, Chutspah", "name": "C4 Jass", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 96, "activity": "Get better, read about.", "condition": "blue", "description": "NULL", "name": "C24 Agile PM", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 97, "activity": "security, concurrency, reliability, performance, etc.", "condition": "blue", "description": "NULL", "name": "C23 Architect Talk", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 98, "activity": "Read book?", "condition": "blue", "description": "NULL", "name": "C25 People Lead", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 99, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "C26 News \u0026 Sites", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 101, "activity": "Safari Pluralsight codeproject c#corner", "condition": "blue", "description": "NULL", "name": "C27 Learning", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 102, "activity": "NULL", "condition": "blue", "description": "bike/run/maquinas when no sport", "name": "A2A Gym", "parentid": 3, "points": 1, "status": "asleep" }, { "_id": 103, "activity": "Here is where I write something about today", "condition": "green", "description": "Trying just to recover sanity. Sitting in a bar. Bad with L but probably not difficult to recover. Felling shit with the shirt business. Day I awesome. Long time I do not play my guitar. Want to start my app. My thing. Love my job if I can it right. Using jassplan at work with be awesome. squash is starting to be interesting. So. go or not go on May 2?", "name": "A1A Diary", "parentid": 2, "points": 1, "status": "asleep" }, { "_id": 104, "activity": "Read good books / sites on living well.", "condition": "white", "description": "NULL", "name": "A1B wisdom", "parentid": 2, "points": 1, "status": "asleep" }, { "_id": 105, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "A2B Diet", "parentid": 3, "points": 1, "status": "asleep" }, { "_id": 107, "activity": "NULL", "condition": "blue", "description": "Appointment Sabado 11 , 11hs", "name": "A2C Dr Health", "parentid": 3, "points": 1, "status": "asleep" }, { "_id": 108, "activity": "NULL", "condition": "red", "description": "Preparar 25", "name": "Lelia", "parentid": 4, "points": 1, "status": "asleep" }, { "_id": 109, "activity": "NULL", "condition": "yellow", "description": "Maths,", "name": "Rodrigo", "parentid": 4, "points": 1, "status": "asleep" }, { "_id": 110, "activity": "NULL", "condition": "yellow", "description": "Vender auto, pagar patente", "name": "Santiago", "parentid": 4, "points": 1, "status": "asleep" }, { "_id": 111, "activity": "NULL", "condition": "yellow", "description": "NULL", "name": "Bahia", "parentid": 4, "points": 1, "status": "asleep" }, { "_id": 112, "activity": "Viajes NY, reuniones", "condition": "blue", "description": "NULL", "name": "Flia Activity", "parentid": 4, "points": 1, "status": "asleep" }, { "_id": 113, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B1A Banking", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 114, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B2C Jassbrain", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 115, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B2B Pers Taxes", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 116, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B2D Documents", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 117, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B2E Cars", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 118, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B2F Services", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 119, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "B2G Insurance", "parentid": 5, "points": 1, "status": "asleep" }, { "_id": 120, "activity": "Think and do things for friends.", "condition": "green", "description": "Glen Party -Shirts - Bahia\nGet into squash. Email. Steve. BBC.", "name": "D1 Friends", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 121, "activity": "See things in order using \"ordenator\" .", "condition": "blue", "description": "Spec, Tests, Code, QA", "name": "Browse tasks do View", "parentid": 95, "points": 4, "status": "asleep" }, { "_id": 135, "activity": "NULL", "condition": "blue", "description": "Test login and login is not.complete all tests for existing functionality relating test cases with uses cade models", "name": "finish jasmine test setup", "parentid": 95, "points": 2, "status": "asleep" }, { "_id": 136, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "fix null id creat task", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 137, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "refactor controller", "parentid": 95, "points": 2, "status": "asleep" }, { "_id": 138, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "task default 1 point", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 139, "activity": "Green subtasks button, problem with reviews, log button\nto much space wasted on the left side", "condition": "blue", "description": "NULL", "name": "improve view", "parentid": 95, "points": 2, "status": "asleep" }, { "_id": 141, "activity": "Spec,Test,Code,QA", "condition": "blue", "description": "NULL", "name": "subpoints add up", "parentid": 95, "points": 2, "status": "asleep" }, { "_id": 143, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "show number of subtasks", "parentid": 95, "points": 4, "status": "asleep" }, { "_id": 144, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "serious backup", "parentid": 95, "points": 4, "status": "asleep" }, { "_id": 145, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "fix problen with task count", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 146, "activity": "Put him in sport / music. Help with math / physics. Play music with him and Santi.", "condition": "blue", "description": "NULL", "name": "Rodrigo", "parentid": 111, "points": 1, "status": "asleep" }, { "_id": 147, "activity": "University path.understand mcmaster.\nauto\nlimpiar cocina \nponer árbolito", "condition": "blue", "description": "NULL", "name": "Santi", "parentid": 111, "points": 2, "status": "asleep" }, { "_id": 148, "activity": "Ask about NY", "condition": "blue", "description": "NULL", "name": "Lelia", "parentid": 111, "points": 1, "status": "asleep" }, { "_id": 149, "activity": "- computer Rodrigo\n- teléfono Santi\n- regalo lelia?", "condition": "blue", "description": "NULL", "name": "navidad / regalos", "parentid": 111, "points": 2, "status": "asleep" }, { "_id": 150, "activity": "Each task will have another people task as target", "condition": "blue", "description": "NULL", "name": "Add people target", "parentid": 95, "points": 4, "status": "asleep" }, { "_id": 155, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Argies", "parentid": 120, "points": 1, "status": "asleep" }, { "_id": 156, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "UpperBeach1", "parentid": 120, "points": 1, "status": "asleep" }, { "_id": 157, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Perues", "parentid": 120, "points": 1, "status": "asleep" }, { "_id": 158, "activity": "Invite often,sleep over,call in emergency", "condition": "blue", "description": "NULL", "name": "Core", "parentid": 120, "points": 1, "status": "asleep" }, { "_id": 159, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Esteban / Vale", "parentid": 158, "points": 1, "status": "asleep" }, { "_id": 160, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Pablo Irassar", "parentid": 158, "points": 1, "status": "asleep" }, { "_id": 161, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Gabriel Joce", "parentid": 158, "points": 1, "status": "asleep" }, { "_id": 162, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Ingrid", "parentid": 158, "points": 1, "status": "asleep" }, { "_id": 163, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Jorge del Teglia", "parentid": 158, "points": 1, "status": "asleep" }, { "_id": 164, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "UpperBeach2", "parentid": 120, "points": 1, "status": "asleep" }, { "_id": 166, "activity": "Callun Cameron 41 whistle post", "condition": "blue", "description": "NULL", "name": "Mark Rhonda Stevenson", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 168, "activity": "55 whistle post", "condition": "blue", "description": "NULL", "name": "Glen Janis Cooper", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 169, "activity": "Wilham 43 whistle post", "condition": "blue", "description": "NULL", "name": "Roger Maggie Ahibramd", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 170, "activity": "50 whistle post", "condition": "blue", "description": "NULL", "name": "Michael Robin Jensen", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 171, "activity": "Harry 35 whistle post", "condition": "blue", "description": "NULL", "name": "Matt Miriam Taylor", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 172, "activity": "Addison Jack 32 whistle post", "condition": "blue", "description": "NULL", "name": "Steve Lisa Lemon", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 173, "activity": "38 whistle post", "condition": "blue", "description": "NULL", "name": "Curt Beth Rushing", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 174, "activity": "36 whistle post", "condition": "blue", "description": "NULL", "name": "John Christina Stevancec", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 175, "activity": "6 whistle post", "condition": "blue", "description": "NULL", "name": "Rick Heather Allison", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 176, "activity": "35 kimberley", "condition": "blue", "description": "NULL", "name": "Tim Wendy Leeder", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 177, "activity": "8 enroutes st", "condition": "blue", "description": "NULL", "name": "David Bernice Banigan", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 178, "activity": "49 whistle post", "condition": "blue", "description": "NULL", "name": "Dean Nancy Willoby", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 179, "activity": "Lucas Garret 56 whistle post", "condition": "blue", "description": "NULL", "name": "Eric Ada Hoeft", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 180, "activity": "51 whistle post", "condition": "blue", "description": "NULL", "name": "Dave Lisa Dyamond", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 181, "activity": "53 whistle post", "condition": "blue", "description": "NULL", "name": "Steve Brenda Gaylor", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 182, "activity": "33 whistle post", "condition": "blue", "description": "NULL", "name": "Johno Michelle Holliwell", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 183, "activity": "18 enroutes st", "condition": "blue", "description": "NULL", "name": "Chris Rhea Bowen", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 184, "activity": "170 Kingsmount", "condition": "blue", "description": "NULL", "name": "Mike Karen Wise", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 185, "activity": "34 whistle post", "condition": "blue", "description": "NULL", "name": "Eren Rolando", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 186, "activity": "39 whistle post", "condition": "blue", "description": "NULL", "name": "Bob Ann Alder", "parentid": 156, "points": 1, "status": "asleep" }, { "_id": 187, "activity": "23 flagman", "condition": "blue", "description": "NULL", "name": "Denise", "parentid": 156, "points": "NULL", "status": "asleep" }, { "_id": 188, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "NULL", "parentid": 156, "points": "NULL", "status": "asleep" }, { "_id": 189, "activity": "Sql server, Mongo dB, other storage", "condition": "blue", "description": "NULL", "name": "C2A1-Databases", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 190, "activity": "Entity framework or other dB access method", "condition": "blue", "description": "NULL", "name": "C2A2-ORM-EF", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 191, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "C2A3-C#", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 192, "activity": "Bootstrap", "condition": "blue", "description": "NULL", "name": "C2A4-HTML-CSS", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 193, "activity": "Js, jquery, knockout,", "condition": "blue", "description": "NULL", "name": "C2A5-JS", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 194, "activity": "Angular, jquery mobile, ionic", "condition": "blue", "description": "NULL", "name": "C2A6-Mobile-JS", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 195, "activity": "Add two order number to order icares by the two concepts", "condition": "blue", "description": "NULL", "name": "Plan and do order", "parentid": 95, "points": 4, "status": "asleep" }, { "_id": 196, "activity": "Mvc5", "condition": "blue", "description": "NULL", "name": "C2A7-MVC", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 197, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Security", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 198, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Ďependecy IoC", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 199, "activity": "Testing atunated testing BDD", "condition": "blue", "description": "NULL", "name": "C28 QA", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 200, "activity": "C#, MVC, HTML, Azure", "condition": "blue", "description": "NULL", "name": "C29 Certifications", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 201, "activity": "Azure", "condition": "blue", "description": "NULL", "name": "C2A8 Cloud", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 202, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Design patterns", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 203, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Transaction", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 204, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Concurrency", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 205, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Separ Concerns", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 206, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Standards", "parentid": 97, "points": "NULL", "status": "asleep" }, { "_id": 207, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "Services", "parentid": 97, "points": 1, "status": "asleep" }, { "_id": 208, "activity": "Open API, REST, WCF.", "condition": "blue", "description": "NULL", "name": "C2A9 Web Services", "parentid": 93, "points": 1, "status": "asleep" }, { "_id": 209, "activity": "Meet ups, orgs", "condition": "white", "description": "Meet-up for jassplan", "name": "C6 ProGroups", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 210, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "close balcony", "parentid": 6, "points": 1, "status": "asleep" }, { "_id": 219, "activity": "Material Design", "condition": "blue", "description": "NULL", "name": "C22 Visual Design", "parentid": 10, "points": 1, "status": "asleep" }, { "_id": 220, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "NULL", "parentid": 101, "points": "NULL", "status": "asleep" }, { "_id": 221, "activity": "Hardware, Software, Passwords", "condition": "white", "description": "NULL", "name": "B4 Info", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 223, "activity": "pablo.elustondo@Gmail / 50isnewstart!", "condition": "blue", "description": "NULL", "name": "gmail personal", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 224, "activity": "Pablo.elustondo@rogers.com / 50isnotyouisthem!", "condition": "blue", "description": "NULL", "name": "Linkedin", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 226, "activity": "Elustondo\nihateyou", "condition": "blue", "description": "NULL", "name": "Rogers", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 240, "activity": "NULL", "condition": "green", "description": "Print SongS. Start New. RodrIgo / Songlist \nGuitars / Sasham / practice", "name": "E1 Music", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 241, "activity": "NULL", "condition": "green", "description": "NULL", "name": "bug counter", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 242, "activity": "NULL", "condition": "green", "description": "NULL", "name": "bug saving new", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 243, "activity": "NULL", "condition": "green", "description": "NULL", "name": "order", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 244, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "drag/drop", "parentid": 95, "points": "NULL", "status": "asleep" }, { "_id": 1228, "activity": "pabloelustondo / san10ro4", "condition": "blue", "description": "NULL", "name": "Pluralsight", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 1234, "activity": "Envirolytic or whatever I agree with somebody to do", "condition": "white", "description": "Feedback sred", "name": "C5 ProWork", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 1235, "activity": "NULL", "condition": "yellow", "description": "Shower,Clothes, Dry Cleaner,hair", "name": "A4 Look", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 1236, "activity": "Just called u give me a call when u get a sec 647 836 6110 cell", "condition": "blue", "description": "NULL", "name": "Rick", "parentid": 120, "points": 1, "status": "asleep" }, { "_id": 1239, "activity": "pablo.elustondo@gmail.com 50isnewstart!", "condition": "blue", "description": "NULL", "name": "Facebook", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 1240, "activity": "pabloelustondo / san10ro4", "condition": "blue", "description": "NULL", "name": "JSfiddle.net", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 1242, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 1246, "activity": "NULL", "condition": "blue", "description": "crap", "name": "asdfsfgadfg", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 1258, "activity": "NULL", "condition": "blue", "description": "done", "name": "test really final", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 1261, "activity": "admin1@Jassbrain.com / 50isnewstart!", "condition": "blue", "description": "NULL", "name": "Azure", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 1264, "activity": "pablo.elustondo@gmail.com / 50isnotyouisthem!", "condition": "blue", "description": "NULL", "name": "paypal", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 2264, "activity": "pablo.elustondo@gmail.com / 50isnotyouisthem!", "condition": "blue", "description": "NULL", "name": "paypal", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 2266, "activity": "Code read/ understand, document..", "condition": "blue", "description": "Felix changes", "name": "Code Review", "parentid": 9, "points": 1, "status": "stared" }, { "_id": 2267, "activity": "pablo.elustondo@gmail.com / san10ro4", "condition": "blue", "description": "NULL", "name": "git gmail", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 2268, "activity": "pablo@Jassbrain.com / san10ro4", "condition": "blue", "description": "NULL", "name": "git jassbrain", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 3274, "activity": "NULL", "condition": "green", "description": "NULL", "name": "asana", "parentid": 9, "points": 2, "status": "stared" }, { "_id": 3275, "activity": "spreadsheet, talks, coordination, task manager", "condition": "green", "description": "NULL", "name": "AgilePM", "parentid": 9, "points": 1, "status": "stared" }, { "_id": 3276, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "test", "parentid": 9, "points": 1, "status": "stared" }, { "_id": 3278, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "testdddd", "parentid": 95, "points": 1, "status": "asleep" }, { "_id": 3279, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "testb", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3280, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "testb", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3282, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "aaaaaabbbbb", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3302, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "kkkkkkcccc", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3304, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "jjjjjjjjj", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3305, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "final test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3306, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "final test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3307, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "ddddddddddd", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3311, "activity": "NULL", "condition": "white", "description": "NULL", "name": "F1 PartyOut", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 3318, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3319, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3329, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3330, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3336, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3340, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3344, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3346, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3360, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdffdasd", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3371, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3373, "activity": "A1-MindTest Narrative", "condition": "NULL", "description": "A1-MindTest Description", "name": "A1-MindTest2", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3378, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asgafgafgag", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3379, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asgafgafgag", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3380, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "ggggggggggg", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3381, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3382, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "sdfasdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3383, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3384, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3385, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdfffffffffffff", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3386, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdfasd", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3387, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3388, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3389, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3390, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3392, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3393, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3394, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "afg", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3395, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asd", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3396, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3397, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3398, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3399, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3400, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3401, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "sadf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3402, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdfa", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3403, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3404, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3405, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3406, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3407, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "adsf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3408, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "adsf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3409, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3410, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3411, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdfad", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3412, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3413, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3414, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "asdf", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3415, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3416, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "test", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3417, "activity": "Squash, Volley", "condition": "green", "description": "Squash", "name": "F1 Sports", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3418, "activity": "pelustondo@Envirolytic.com / iswhatyou2!", "condition": "blue", "description": "NULL", "name": "gmail envirolytic", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 3419, "activity": "pablo@oliverslabels.com / 50isnotyouisthem! /(tfs) 68carnforth", "condition": "blue", "description": "NULL", "name": "gmail olivers", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 3420, "activity": "pablo@oliverslabels.com / 68carnforth", "condition": "blue", "description": "NULL", "name": "TFS olivers", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 3421, "activity": "Read good books, listen good programs / podcasts / theatre", "condition": "green", "description": "NULL", "name": "E2 Intelect", "parentid": "NULL", "points": 1, "status": "stared" }, { "_id": 3422, "activity": "Read / listen good stuff.. theatre..", "condition": "blue", "description": "NULL", "name": "E2 Intelect", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3423, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "F2 Party", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3424, "activity": "NULL", "condition": "white", "description": "NULL", "name": "F2 Party", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3425, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "lbov Marley redemption song", "parentid": 240, "points": 1, "status": "asleep" }, { "_id": 3426, "activity": "NULL", "condition": "green", "description": "NULL", "name": "NULL", "parentid": "NULL", "points": 1, "status": "asleep" }, { "_id": 3427, "activity": "NULL", "condition": "blue", "description": "NULL", "name": "lbov Marley redemption song", "parentid": 240, "points": 1, "status": "asleep" }, { "_id": 3428, "activity": "Credeence", "condition": "blue", "description": "NULL", "name": "as long as see light", "parentid": 240, "points": 1, "status": "asleep" }, { "_id": 3429, "activity": "Credeence", "condition": "blue", "description": "NULL", "name": "as long as see light", "parentid": 240, "points": 1, "status": "asleep" }, { "_id": 3430, "activity": "Pablo elustondo@gmail.com pabloelustondo iswhatyou2!", "condition": "blue", "description": "NULL", "name": "skype", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 3431, "activity": "Diegui9988to", "condition": "white", "description": "NULL", "name": "td web", "parentid": 221, "points": 1, "status": "asleep" }, { "_id": 3432, "activity": "Make sure output is right", "condition": "blue", "description": "NULL", "name": "QA Production", "parentid": 9, "points": 4, "status": "stared" }, { "_id": 3433, "activity": "High Value Work - New Futures", "condition": "blue", "description": "Complete GiftCards", "name": "Code Features", "parentid": 9, "points": 2, "status": "asleep" }, { "_id": 3434, "activity": "NULL", "condition": "blue", "description": "Complete GiftCards / Reprints", "name": "Code Feature", "parentid": 9, "points": 2, "status": "stared" }, { "_id": 3435, "activity": "NULL", "condition": "blue", "description": "Complete Gift Cards Reprint", "name": "Code Feature", "parentid": 9, "points": 2, "status": "asleep" }, { "_id": 3436, "activity": "NULL", "condition": "blue", "description": "Complete GiftCards Reprints", "name": "Code Feature", "parentid": 9, "points": 2, "status": "stared" }, { "_id": 3437, "activity": "NULL", "condition": "blue", "description": "missing growth charts, scan product id", "name": "Fix Issues", "parentid": 9, "points": 2, "status": "stared" }, { "_id": "NULL", "activity": "NULL", "condition": "NULL", "description": "NULL", "name": "NULL", "parentid": "NULL", "points": "NULL", "status": "NULL" }];
var SeedData = (function () {
    function SeedData() {
    }
    SeedData.prototype.initialSubjects = function () {
        var jassSubjects = [];
        for (var i = 0; i < seedSubjects.length; i++) {
            var seedSubject = seedSubjects[i];
            var subject = new JassSubject(i.toString(), seedSubject);
            jassSubjects.push(subject);
        }
        return jassSubjects;
    };
    return SeedData;
})();
module.exports = SeedData;
