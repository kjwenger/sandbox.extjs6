Ext.define('sandbox.extjs6.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    data: {
        items: [
            {
                "name": 'Jean Luc',
                "email": "jeanluc.picard@enterprise.com",
                "phone": "555-111-1111"
            },
            {
                "name": 'Worf',
                "email": "worf.moghsson@enterprise.com",
                "phone": "555-222-2222"
            },
            {
                "name": 'Deanna',
                "email": "deanna.troi@enterprise.com",
                "phone": "555-333-3333"
            },
            {
                "name": 'Data',
                "email": "mr.data@enterprise.com",
                "phone": "555-444-4444"
            },
            // http://beta.json-generator.com/
            /*
             [
                 {
                     'repeat:100': {
                         "name": '{{firstName()}} {{surname()}}',
                         "email": function (tags) {
                             // Email tag is deprecated, because now you can produce an email as simple as this:
                             return (tags.firstName() + '.' +
                                 tags.surname() + '@mail' +
                                 tags.domainZone()).toLowerCase();
                         },
                         "phone": '+1 {{phone()}}'
                     }
                 }
             ]
             */
            {
                "phone": "+1 (868) 435-3777",
                "email": "casandra.swanson@mail.ca",
                "name": "Della Collier"
            },
            {
                "phone": "+1 (861) 546-2881",
                "email": "ann.spence@mail.co.uk",
                "name": "Janis Olson"
            },
            {
                "phone": "+1 (936) 403-2827",
                "email": "kara.melton@mail.io",
                "name": "Phillips Floyd"
            },
            {
                "phone": "+1 (908) 555-3531",
                "email": "jeanie.nguyen@mail.name",
                "name": "Rhea Mcintyre"
            },
            {
                "phone": "+1 (963) 477-2404",
                "email": "montgomery.rodriquez@mail.com",
                "name": "Mccullough Daniel"
            },
            {
                "phone": "+1 (862) 415-3373",
                "email": "miranda.sampson@mail.net",
                "name": "Guzman Doyle"
            },
            {
                "phone": "+1 (928) 418-2192",
                "email": "obrien.peterson@mail.org",
                "name": "Briggs Gomez"
            },
            {
                "phone": "+1 (944) 400-2125",
                "email": "cain.cox@mail.info",
                "name": "Erna Keith"
            },
            {
                "phone": "+1 (902) 510-3439",
                "email": "mamie.fowler@mail.biz",
                "name": "Valdez Stafford"
            },
            {
                "phone": "+1 (813) 499-2230",
                "email": "milagros.tillman@mail.me",
                "name": "Campbell Sharpe"
            },
            {
                "phone": "+1 (822) 553-3854",
                "email": "hess.briggs@mail.us",
                "name": "Corine Weiss"
            },
            {
                "phone": "+1 (960) 432-2189",
                "email": "natalia.alford@mail.biz",
                "name": "Petty Higgins"
            },
            {
                "phone": "+1 (887) 594-2653",
                "email": "oneal.freeman@mail.ca",
                "name": "Jillian Landry"
            },
            {
                "phone": "+1 (980) 462-3710",
                "email": "megan.alvarez@mail.co.uk",
                "name": "Janelle Christian"
            },
            {
                "phone": "+1 (864) 510-2476",
                "email": "abigail.villarreal@mail.io",
                "name": "Dominique Robertson"
            },
            {
                "phone": "+1 (936) 444-2654",
                "email": "marie.hopper@mail.name",
                "name": "Caroline James"
            },
            {
                "phone": "+1 (993) 414-2996",
                "email": "joyner.mcleod@mail.com",
                "name": "Ashlee Owen"
            },
            {
                "phone": "+1 (959) 516-2305",
                "email": "freida.hunter@mail.net",
                "name": "Branch Contreras"
            },
            {
                "phone": "+1 (854) 460-3405",
                "email": "ladonna.dale@mail.org",
                "name": "Ramona Bowers"
            },
            {
                "phone": "+1 (949) 512-3228",
                "email": "erin.valentine@mail.info",
                "name": "Nikki Schmidt"
            },
            {
                "phone": "+1 (982) 462-3948",
                "email": "lilia.young@mail.biz",
                "name": "Nita Webb"
            },
            {
                "phone": "+1 (977) 593-2247",
                "email": "glass.arnold@mail.me",
                "name": "Thomas Beard"
            },
            {
                "phone": "+1 (908) 582-2099",
                "email": "ferrell.morrow@mail.us",
                "name": "Angelia Leonard"
            },
            {
                "phone": "+1 (900) 506-2676",
                "email": "nora.mathews@mail.biz",
                "name": "Simmons Dean"
            },
            {
                "phone": "+1 (949) 413-2462",
                "email": "barber.noel@mail.ca",
                "name": "Vicky Delaney"
            },
            {
                "phone": "+1 (956) 483-3264",
                "email": "pitts.mcneil@mail.co.uk",
                "name": "Melinda Potts"
            },
            {
                "phone": "+1 (852) 542-2852",
                "email": "lea.shepard@mail.io",
                "name": "Merritt Petty"
            },
            {
                "phone": "+1 (986) 488-3379",
                "email": "key.skinner@mail.name",
                "name": "Watkins Evans"
            },
            {
                "phone": "+1 (968) 412-3100",
                "email": "francis.reilly@mail.com",
                "name": "Kristine Mcfarland"
            },
            {
                "phone": "+1 (938) 485-2755",
                "email": "betty.holmes@mail.net",
                "name": "Roth Marsh"
            },
            {
                "phone": "+1 (871) 496-2359",
                "email": "schultz.abbott@mail.org",
                "name": "Durham Hurst"
            },
            {
                "phone": "+1 (825) 453-3344",
                "email": "hood.fields@mail.info",
                "name": "Myrtle Britt"
            },
            {
                "phone": "+1 (841) 537-2254",
                "email": "bianca.solomon@mail.biz",
                "name": "Maryanne Sparks"
            },
            {
                "phone": "+1 (814) 419-2620",
                "email": "aida.langley@mail.me",
                "name": "Genevieve Ruiz"
            },
            {
                "phone": "+1 (808) 452-2892",
                "email": "estrada.velez@mail.us",
                "name": "Christi Brady"
            },
            {
                "phone": "+1 (930) 408-3354",
                "email": "kristina.frye@mail.biz",
                "name": "Jefferson Thomas"
            },
            {
                "phone": "+1 (868) 403-3738",
                "email": "katherine.newton@mail.ca",
                "name": "Minnie Hawkins"
            },
            {
                "phone": "+1 (860) 522-3298",
                "email": "eaton.byrd@mail.co.uk",
                "name": "Macias Delacruz"
            },
            {
                "phone": "+1 (886) 589-3123",
                "email": "maude.sawyer@mail.io",
                "name": "Clarke Porter"
            },
            {
                "phone": "+1 (904) 585-3427",
                "email": "elsa.burton@mail.name",
                "name": "Joanne Lee"
            },
            {
                "phone": "+1 (975) 595-3415",
                "email": "bailey.jensen@mail.com",
                "name": "Terry Gaines"
            },
            {
                "phone": "+1 (963) 599-3753",
                "email": "richard.ball@mail.net",
                "name": "Cameron Giles"
            },
            {
                "phone": "+1 (932) 513-2361",
                "email": "swanson.johns@mail.org",
                "name": "Beach Nielsen"
            },
            {
                "phone": "+1 (840) 548-3868",
                "email": "alyce.savage@mail.info",
                "name": "Maria Sykes"
            },
            {
                "phone": "+1 (939) 559-3164",
                "email": "ortiz.wilkerson@mail.biz",
                "name": "Sweeney Lambert"
            },
            {
                "phone": "+1 (947) 519-2412",
                "email": "greta.mclean@mail.me",
                "name": "George Burch"
            },
            {
                "phone": "+1 (875) 443-3017",
                "email": "daniels.bishop@mail.us",
                "name": "Penelope Blake"
            },
            {
                "phone": "+1 (877) 564-2386",
                "email": "gonzalez.johnson@mail.biz",
                "name": "Castaneda Norris"
            },
            {
                "phone": "+1 (962) 494-3031",
                "email": "frost.mendoza@mail.ca",
                "name": "Delia Bradford"
            },
            {
                "phone": "+1 (991) 508-2847",
                "email": "parsons.soto@mail.co.uk",
                "name": "Glenda White"
            },
            {
                "phone": "+1 (812) 436-3367",
                "email": "holder.sandoval@mail.io",
                "name": "Day Lindsey"
            },
            {
                "phone": "+1 (806) 466-2849",
                "email": "fitzgerald.noble@mail.name",
                "name": "Martina Santana"
            },
            {
                "phone": "+1 (893) 594-3053",
                "email": "fuller.hodges@mail.com",
                "name": "Mckinney Vasquez"
            },
            {
                "phone": "+1 (954) 442-3175",
                "email": "shirley.hobbs@mail.net",
                "name": "Patel Reyes"
            },
            {
                "phone": "+1 (872) 406-3209",
                "email": "rowena.farley@mail.org",
                "name": "Stephanie Goodwin"
            },
            {
                "phone": "+1 (938) 474-2429",
                "email": "nielsen.castillo@mail.info",
                "name": "Amanda Browning"
            },
            {
                "phone": "+1 (934) 536-3324",
                "email": "sabrina.mercer@mail.biz",
                "name": "Margarita Roach"
            },
            {
                "phone": "+1 (820) 537-3949",
                "email": "rosanne.robles@mail.me",
                "name": "Holly Dickerson"
            },
            {
                "phone": "+1 (961) 536-2349",
                "email": "mcmahon.watson@mail.us",
                "name": "Marion Cardenas"
            },
            {
                "phone": "+1 (847) 489-2317",
                "email": "fry.day@mail.biz",
                "name": "Whitfield Mcconnell"
            },
            {
                "phone": "+1 (826) 578-3875",
                "email": "ellen.chambers@mail.ca",
                "name": "Mullins Watkins"
            },
            {
                "phone": "+1 (854) 505-2918",
                "email": "sandy.cote@mail.co.uk",
                "name": "Marcy Houston"
            },
            {
                "phone": "+1 (938) 433-2795",
                "email": "leta.nunez@mail.io",
                "name": "Carpenter Simpson"
            },
            {
                "phone": "+1 (974) 529-3201",
                "email": "stevenson.barnes@mail.name",
                "name": "Farrell Witt"
            },
            {
                "phone": "+1 (820) 508-2466",
                "email": "griffith.stout@mail.com",
                "name": "Cheryl Ryan"
            },
            {
                "phone": "+1 (879) 402-3339",
                "email": "callahan.branch@mail.net",
                "name": "Rita Elliott"
            },
            {
                "phone": "+1 (989) 433-2141",
                "email": "torres.munoz@mail.org",
                "name": "Lee Graham"
            },
            {
                "phone": "+1 (870) 458-2771",
                "email": "charmaine.bradshaw@mail.info",
                "name": "Virgie Bradley"
            },
            {
                "phone": "+1 (813) 549-2341",
                "email": "frankie.rosales@mail.biz",
                "name": "Angelica Waller"
            },
            {
                "phone": "+1 (954) 575-2692",
                "email": "jennie.mckay@mail.me",
                "name": "Shelia Hubbard"
            },
            {
                "phone": "+1 (971) 403-2116",
                "email": "verna.aguilar@mail.us",
                "name": "Brianna Quinn"
            },
            {
                "phone": "+1 (827) 548-2388",
                "email": "mueller.carson@mail.biz",
                "name": "Gay Burnett"
            },
            {
                "phone": "+1 (967) 484-3604",
                "email": "frye.mooney@mail.ca",
                "name": "Rivers Booker"
            },
            {
                "phone": "+1 (822) 562-3527",
                "email": "buck.wilkinson@mail.co.uk",
                "name": "Margery Mcknight"
            },
            {
                "phone": "+1 (828) 510-2537",
                "email": "esther.finch@mail.io",
                "name": "April Eaton"
            },
            {
                "phone": "+1 (984) 521-3837",
                "email": "danielle.merritt@mail.name",
                "name": "Briana Herring"
            },
            {
                "phone": "+1 (830) 418-2620",
                "email": "henry.shelton@mail.com",
                "name": "Gomez Nichols"
            },
            {
                "phone": "+1 (992) 590-3800",
                "email": "lowe.mccray@mail.net",
                "name": "Angeline Harrell"
            },
            {
                "phone": "+1 (965) 572-3872",
                "email": "colette.bender@mail.org",
                "name": "Jewell Dickson"
            },
            {
                "phone": "+1 (814) 480-3031",
                "email": "munoz.welch@mail.info",
                "name": "Catherine Jennings"
            },
            {
                "phone": "+1 (973) 420-2076",
                "email": "soto.clemons@mail.biz",
                "name": "Goldie Mcfadden"
            },
            {
                "phone": "+1 (836) 565-2220",
                "email": "collins.hart@mail.me",
                "name": "Mendoza Marks"
            },
            {
                "phone": "+1 (951) 549-2602",
                "email": "sallie.leblanc@mail.us",
                "name": "Walter Ochoa"
            },
            {
                "phone": "+1 (936) 537-2859",
                "email": "molly.mejia@mail.biz",
                "name": "Tessa Sherman"
            },
            {
                "phone": "+1 (826) 597-3281",
                "email": "allison.clay@mail.ca",
                "name": "Hopkins Ortega"
            },
            {
                "phone": "+1 (810) 598-2374",
                "email": "chrystal.lucas@mail.co.uk",
                "name": "Chase Flores"
            },
            {
                "phone": "+1 (910) 405-2654",
                "email": "hayden.romero@mail.io",
                "name": "Veronica Hatfield"
            },
            {
                "phone": "+1 (917) 486-2301",
                "email": "kaufman.pace@mail.name",
                "name": "Taylor Hernandez"
            },
            {
                "phone": "+1 (877) 513-3581",
                "email": "marci.patterson@mail.com",
                "name": "Jewel Wallace"
            },
            {
                "phone": "+1 (893) 436-3669",
                "email": "mara.reeves@mail.net",
                "name": "Mcneil Blackwell"
            },
            {
                "phone": "+1 (872) 401-2945",
                "email": "rachael.robinson@mail.org",
                "name": "Roberts Hendricks"
            },
            {
                "phone": "+1 (864) 434-2500",
                "email": "gregory.harrison@mail.info",
                "name": "Lane Forbes"
            },
            {
                "phone": "+1 (838) 454-3907",
                "email": "doris.alston@mail.biz",
                "name": "Becker Grant"
            },
            {
                "phone": "+1 (806) 404-3820",
                "email": "brittney.dillon@mail.me",
                "name": "Hillary Mueller"
            },
            {
                "phone": "+1 (905) 424-2708",
                "email": "wright.moody@mail.us",
                "name": "Richmond Becker"
            },
            {
                "phone": "+1 (823) 532-2207",
                "email": "powers.cole@mail.biz",
                "name": "Loretta Jarvis"
            },
            {
                "phone": "+1 (825) 581-2554",
                "email": "carroll.mathis@mail.ca",
                "name": "Rios Woods"
            },
            {
                "phone": "+1 (898) 479-3356",
                "email": "preston.berger@mail.co.uk",
                "name": "Jeannette Rivas"
            },
            {
                "phone": "+1 (977) 466-3454",
                "email": "marisol.tyler@mail.io",
                "name": "Stefanie Hardy"
            },
            {
                "phone": "+1 (809) 465-2817",
                "email": "lindsay.joseph@mail.name",
                "name": "Odonnell Alexander"
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
