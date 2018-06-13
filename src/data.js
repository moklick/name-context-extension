const data = [
  {
    'forename': 'Björn',
    'name': 'Höcke',
    'additions': [
      {
        'text': 'der gute Kontakte zur NPD hat',
        'src': 'https://de.wikipedia.org/wiki/Bj%C3%B6rn_H%C3%B6cke#Vermutete_Autorschaft_in_Zeitschriften_des_NPD-Umfelds'
      },
      {
        'text': 'der Adolf Hitler nicht für "absolut böse" hält',
        'src': 'https://www.welt.de/politik/deutschland/article162616473/Bjoern-Hoecke-hat-eine-irritierende-Ansicht-zu-Adolf-Hitler.html'
      },
      {
        'text': 'der genetische Unterschiede im Sexualverhalten von Afrikanern und Europäern sieht',
          'src': 'https://daserste.ndr.de/panorama/aktuell/AfD-Hoeckes-Lehre-von-Menschentypen,hoeckeslehre100.html'
      }
    ]
  },
  {
    'forename': 'Alexander',
    'name': 'Gauland',
    'additions': [
      {
        'text': 'der stolz auf die Leistungen deutscher Soldaten im zweiten Weltkrieg ist',
        'src': 'https://www.buzzfeed.com/marcusengert/afd-spitzenkandidat-gauland-findet-deutsche-sollten-stolz'
      },
      {
        'text': 'der Menschen entsorgen lassen will',
        'src': 'http://www.faz.net/aktuell/politik/bundestagswahl/afd-alexander-gauland-traeumt-von-entsorgung-aydan-oezoguz-15171141.html'
      },
      {

        'text': 'laut dem Hitler und die Nazis nur ein "Vogelschiss" in über 1000 Jahren erfolgreicher deutscher Geschichte  seien',
        'src': 'http://www.fr.de/politik/afd-gauland-bezeichnet-ns-zeit-als-vogelschiss-in-der-geschichte-a-1517107'
      }
    ]
  },
  {
    'forename': 'Alice',
    'name': 'Weidel',
    'additions': [
      {
        'text': 'die Deutschland als "nicht souverän" bezeichnet',
        'src': 'https://www.welt.de/politik/article168489086/Alice-Weidel-will-Veroeffentlichung-rassistischer-E-Mail-stoppen.html'
      },
      {
        'text': 'die Regierungsmitglieder als "Marionetten der Siegermächte" bezeichnet',
        'src': 'https://www.welt.de/politik/article168489086/Alice-Weidel-will-Veroeffentlichung-rassistischer-E-Mail-stoppen.html'
      },
      {
        'text': 'die den unter Nazis beliebten Begriff der "Überfremdung" nutzt',
        'src': 'https://www.welt.de/politik/article168489086/Alice-Weidel-will-Veroeffentlichung-rassistischer-E-Mail-stoppen.html'
      }
    ]
  },
  {
    'forename': 'Jörg',
    'name': 'Meuthen',
    'additions': [
      {
        'text': 'der von einem "links-rot-grün verseuchten 68er-Deutschland" spricht',
        'src': 'https://www.stuttgarter-nachrichten.de/inhalt.bundesparteitag-in-stuttgart-afd-will-den-bundespraesidenten-stellen.a4c235d3-4b5e-44fe-9bea-24f2befa986c.html'
      }
    ]
  },
  {
    'forename': 'Jens',
    'name': 'Maier',
    'additions': [
      {
        'text': 'der Verständnis für den Massenmörder Anders Breivik gezeigt hat',
        'src': 'http://www.tagesspiegel.de/politik/jens-maier-aus-sachsen-afd-politiker-aeussert-verstaendnis-fuer-rechtsterrorist-anders-breivik/19698996.html'
      },
      {
        'text': 'der Noah Becker rasstisch beleidigt hat',
        'src': 'http://www.zeit.de/politik/deutschland/2018-02/jens-maier-afd-staatsanwaltschaft-ermittlung-tweet'
      }
    ]
  },
  {
    'forename': 'Frauke',
    'name': 'Petry',
    'additions': [
      {
        'text': 'die Fan der französischen Rechtsextremistin Marine Le Pen ist',
        'src': 'https://de.wikipedia.org/wiki/Frauke_Petry#Migrationspolitik,_Asylrecht,_Kriminalit%C3%A4tsbek%C3%A4mpfung_und_EU'
      },
      {
        'text': 'die den Schießbefehl an der Grenze fordert',
        'src': 'http://www.faz.net/aktuell/politik/inland/afd-chefin-frauke-petry-fodert-schiessbefehl-an-grenze-14044672.html'
      }
    ]
  },
  {
    'forename': 'Horst',
    'name': 'Seehofer',
    'additions': [
      {
        'text': 'der im Bundestag dagegen gestimmt hat, Vergewaltigung in der Ehe unter Strafe zu stellen',
        'src': 'https://twitter.com/renatekuenast/status/685743903442624512?lang=de'
      },
      {
        'text': 'der AIDS-Erkrankte in gesonderten "Wohnprojekten" unterbringen wollte',
        'src': 'http://www.spiegel.de/spiegel/print/d-13520785.html'
      }
    ]
  },
  {
    'forename': 'Manfred',
    'name': 'Weber',
    'additions': [
      {
        'text': 'der von der "finalen Lösung der Flüchtlingsfrage" gesprochen hat',
        'src': 'http://www.spiegel.de/politik/deutschland/manfred-weber-fordert-die-finale-loesung-der-fluechtlingsfrage-a-1186493.html'
      }
    ]
  },
  {
    'forename': 'Volker',
    'name': 'Kauder',
    'additions': [
      {
        'text': 'der im Bundestag gegen die Strafbarkeit von Vergewaltigung in der Ehe gestimmt hat',
        'src': 'https://twitter.com/renatekuenast/status/685743903442624512?lang=de'
      }
    ]
  },
  {
    'forename': 'Albrecht',
    'name': 'Glaser',
    'additions': [
      {
        'text': 'der das Grundrecht auf Religionsfreiheit abschaffen will',
        'src': 'https://de.wikipedia.org/wiki/Albrecht_Glaser'
      }
    ]
  },
  {
    'forename': 'Kay',
    'name': 'Nerstheimer',
    'additions': [
      {
        'text': 'der Homosexuelle als "degenerierte Spezies" bezeichnet',
        'src': 'https://www.neues-deutschland.de/artikel/1070234.afd-im-abgeordnetenhaus-verschwoerung-und-hass.html'
      }
    ]
  },
  {
    'forename': 'Georg',
    'name': 'Pazderski',
    'additions': [
      {
        'text': 'der vom "Volkssturm der Argumente" spricht',
        'src': 'https://www.neues-deutschland.de/artikel/1070234.afd-im-abgeordnetenhaus-verschwoerung-und-hass.html'
      }
    ]
  },
  {
    'forename': 'Markus',
    'name': 'Frohnmaier',
    'additions': [
      {
        'text': 'der "volksfeindliche Parteien" aus Deutschland "heraustreiben will"',
        'src': 'http://meedia.de/2017/05/10/zitate-streit-afd-politiker-markus-frohnmaier-verliert-vor-gericht-gegen-ulmer-lokal-portal/'
      },
      {
        'text': 'der mit rechtsextremen Organisationen zusammenarbeitet',
        'src': 'http://www.badische-zeitung.de/suedwest-1/neue-vorwuerfe-gegen-afd-jungpolitiker-frohnmaier--125381174.html'
      }
    ]
  },
  {
    'forename': 'Martin',
    'name': 'Hohmann',
    'additions': [
      {
        'text': 'der Juden als Tätervolk bezeichnet',
        'src': 'http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete'
      }
    ]
  },
  {
    'forename': 'Wilhelm',
    'name': 'von Gottberg',
    'additions': [
      {
        'text': 'der den Holocaust als "Mittel zur Kriminalisierung der Deutschen" bezeichnet',
        'src': 'http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete'
      }
    ]
  },
  {
    'forename': 'Stefan',
    'name': 'Keuter',
    'additions': [
      {
        'text': 'der auf Pegida-Demos "Lügenpresse" mitskandiert',
        'src': 'http://www.tagesspiegel.de/politik/neue-abgeordnete-das-sind-die-radikalen-in-der-afd-fraktion/20361302.html'
      }
    ]
  },
  {
    'forename': 'Frank',
    'name': 'Pasemann',
    'additions': [
      {
        'text': 'der Kunde der Neonazi-Kleidermarke Thor Steinar ist',
        'src': 'http://www.tagesspiegel.de/politik/neue-abgeordnete-das-sind-die-radikalen-in-der-afd-fraktion/20361302.html'
      },
      {
        'text': 'der Verbindungen zur rassistischen Identitären Bewegung hat',
        'src': 'http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete'
      }
    ]
  },
  {
    'forename': 'Petr',
    'name': 'Bystron',
    'additions': [
      {
        'text': 'der laut einem Münchner Gericht verfassungsfeindliche Bestrebungen zeigt',
        'src': 'http://www.tagesspiegel.de/politik/neue-abgeordnete-das-sind-die-radikalen-in-der-afd-fraktion/20361302.html'
      },
      {
        'text': 'der die Entsorgung von Menschen fordert',
        'src': 'http://www.faz.net/aktuell/politik/inland/ex-afd-landeschef-petr-bystron-rede-im-gauland-jargon-15310769.html'
      }
    ]
  },
  {
    'forename': 'Beatrix',
    'name': 'von Storch',
    'additions': [
      {
        'text': 'die an der Grenze auch auf Kinder schießen lassen würde',
        'src': 'http://www.spiegel.de/politik/deutschland/afd-beatrix-von-storch-wird-im-netz-verspottet-a-1076209.html'
      }
    ]
  },
  {
    'forename': 'Andreas',
    'name': 'Kalbitz',
    'additions': [
      {
        'text': 'der Vorsitzender des rechtsextremen Vereins Kultur- und Zeitgeschichte, Archiv der Zeit war',
        'src': 'http://www.maz-online.de/Brandenburg/Der-Brandenburger-AfD-Landtagsabgeordnete-Andreas-Kalbitz-geraet-wegen-einer-Mitgliedschaft-in-einem-rechten-Verein-unter-Druck'
      },
      {
        'text': 'der 2007 beim Pfingstlager der rechtsextremen und später verbotenen Heimattreuen Deutschen Jugend war',
        'src': 'http://www.zeit.de/politik/deutschland/2018-03/andreas-kalbitz-afd-heimattreue-deutsche-jugend-rechtsextremismus'
      }
    ]
  },
  {
    'forename': 'Doris',
    'name': 'von Sayn-Wittgenstein',
    'additions': [
      {
        'text': 'die im Vorstand eines Reichsbürger-Vereins war',
        'src': 'http://haz.de/Nachrichten/Politik/Deutschland-Welt/AfD-Fuerstin-hat-Vergangenheit-in-Reichsbuerger-Szene'
      }
    ]
  },
  {
    'forename': 'André',
    'name': 'Poggenburg',
    'additions': [
      {
        'text': 'der Veranstaltungen mit Neonazis durchführt',
        'src': 'http://www.zeit.de/2016/05/afd-andre-poggenburg-sachsen-anhalt-asylpolitik-wahlkampf'
      },
      {
        'text': 'der Türken in Deutschland als "Kümmelhändler" und "Kameltreiber" bezeichnet',
        'src': 'http://www.zeit.de/politik/deutschland/2018-02/andre-poggenburg-afd-tuerken-frank-walter-steinmeier'
      },
      {
        'text': 'der "Wucherungen" am "deutschen Volkskörper" loswerden will',
        'src': 'http://www.deutschlandfunk.de/rede-ueber-linke-studenten-afd-vorstand-befasst-sich-mit.1773.de.html?dram:article_id=379183'
      }
    ]
  },
  {
    'forename': 'Uwe',
    'name': 'Junge',
    'additions': [
      {
        'text': 'der Fan von Viktor Orbán ist',
        'src': 'https://twitter.com/Uwe_Junge_MdL/status/950625041775022080'
      }
    ]
  },
  {
    'forename': 'Marc',
    'name': 'Jongen',
    'additions': [
      {
        'text': 'der Verschwörungstheorien zu "Mischbevölkerungen" zitiert',
        'src': 'http://www.sueddeutsche.de/politik/philosoph-marc-jongen-der-wutdenker-der-afd-1.2865813-2'
      }
    ]
  },
  {
    'forename': 'Guido',
    'name': 'Reil',
    'additions': [
      {
        'text': 'der eng mit Bernd Höcke zusammenarbeit',
        'src': 'https://twitter.com/GuidoReil/status/952712254868377606'
      }
    ]
  },
  {
    'forename': 'Ralf',
    'name': 'Özkara',
    'additions': [
      {
        'text': 'der die Überwachung aller Moscheen in Deutschland fordert',
        'src': 'https://www.youtube.com/watch?v=0_XCeFgZHQk'
      }
    ]
  },
  {
    'forename': 'Martin',
    'name': 'Sichert',
    'additions': [
      {
        'text': 'der den zweiten Weltkrieg verharmlost',
        'src': 'http://www.abendzeitung-muenchen.de/inhalt.sie-ziehen-in-den-bundestag-ein-die-kuenftigen-bayerischen-afd-abgeordneten.b36878c1-9162-404d-80ab-f89021b4d36c.html'
      }
    ]
  },
  {
    'forename': 'Frank',
    'name': 'Magnitz',
    'additions': [
      {
        'text': 'der eng mit Bernd Höcke zusammenarbeitet',
        'src': 'https://www.weser-kurier.de/bremen/bremen-stadt_artikel,-gegen-merkel-und-mohammed-_arid,1645275.html'
      }
    ]
  },
  {
    'forename': 'Dirk',
    'name': 'Nockemann',
    'additions': [
      {
        'text': 'der für eine Wasserwerfer-Attacke auf die Holocaust-Überlebende Esther Bejarano verantwortlich ist',
        'src': 'https://publikative.org/2015/01/17/schill-imitator-bei-der-afd-in-hamburg/'
      }
    ]
  },
  {
    'forename': 'Leif-Erik',
    'name': 'Holm',
    'additions': [
      {
        'text': 'der mit Bernd Höcke zusammenarbeitet',
        'src': 'http://www.zeit.de/2016/37/mecklenburg-vorpommern-afd-kandidat-leif-erik-holm-berlin'
      }
    ]
  },
  {
    'forename': 'Armin-Paul',
    'name': 'Hampel',
    'additions': [
      {
        'text': 'der von "Asylwahn" und "Blockparteien" im Bundestag spricht',
        'src': 'https://www.taz.de/!5241266/'
      }
    ]
  },
  {
    'forename': 'Thomas',
    'name': 'Röckemann',
    'additions': [
      {
        'text': 'der von "Systemmedien" spricht',
        'src': 'https://de-de.facebook.com/thomas.roeckemann/posts/1272919946186671'
      }
    ]
  },
  {
    'forename': 'Jürgen',
    'name': 'Pohl',
    'additions': [
      {
        'text': 'der mit zahlreichen Nazis auf Facebook befreundet ist',
        'src': 'https://www.buzzfeed.com/marcusengert/fast-50-bundestagskandidaten-der-afd-grenzen-sich-nicht-von'
      },
      {
        'text': 'der enger Weggefährte von Bernd Höcke ist',
        'src': 'https://de.wikipedia.org/wiki/J%C3%BCrgen_Pohl_(Politiker)'
      }
    ]
  },
  {
    'forename': 'Thomas',
    'name': 'Seitz',
    'additions': [
      {
        'text': 'der Rassist ist',
        'src': 'http://www.spiegel.de/wissenschaft/mensch/bundestagswahl-2017-sieben-gruende-afd-zu-waehlen-aber-treffen-sie-auf-sie-zu-a-1169258.html'
      }
    ]
  },
  {
    'forename': 'Peter',
    'name': 'Boehringer',
    'additions': [
      {
        'text': 'der an eine jüdische Weltverschwörung glaubt',
        'src': 'http://www.tagesspiegel.de/politik/gaulands-mitstreiter-diese-rechten-will-die-afd-in-den-bundestag-schicken/20344126.html'
      },
      {
        'text': 'der die Kanzlerin als "Merkelnutte" bezeichnet haben soll',
        'src': 'http://www.spiegel.de/politik/deutschland/bundestag-wann-die-afd-beim-gedenken-an-auschwitz-befreiung-nicht-klatschte-a-1190774.html'
      },
      {
        'text': 'der vom "Volkskörper" spricht',
        'src': 'http://www.spiegel.de/politik/deutschland/peter-boehringer-e-mail-bringt-afd-mann-in-erklaerungsnot-a-1192686.html'
      },
      {
        'text': 'der Einwanderung als "Genozid" bezeichnet',
        'src': 'http://www.spiegel.de/politik/deutschland/peter-boehringer-e-mail-bringt-afd-mann-in-erklaerungsnot-a-1192686.html'
      },
      {
        'text': 'der das Bundesverfassungsgericht als "Hure Justizia" bezeichnet',
        'src': 'http://www.spiegel.de/politik/deutschland/peter-boehringer-erneut-schmaeh-e-mail-mit-afd-mann-als-absender-a-1196379.html'
      }
    ]
  },
  {
    'forename': 'Enrico',
    'name': 'Komning',
    'additions': [
      {
        'text': 'der mit seiner Tochter stolz die erste Strophe der Nationalhymne singt',
        'src': 'http://www.tagesspiegel.de/themen/reportage/rechte-vor-einzug-in-den-bundestag-so-extrem-sind-die-kandidaten-der-afd/20350578.html'
      },
      {
        'text': 'der mit der rechtsextremen Identitären Bewegung und mit Pegida sympathisiert',
        'src': 'http://www.belltower.news/artikel/afd-vor-den-wahlen-das-schreiben-die-kandidatinnen-bei-facebook-und-twitter-11193'
      }
    ]
  },
  {
    'forename': 'Sebastian',
    'name': 'Münzenmaier',
    'additions': [
      {
        'text': 'der an Hooligan-Schlägereien teilgenommen haben soll',
        'src': 'http://www.tagesspiegel.de/themen/reportage/rechte-vor-einzug-in-den-bundestag-so-extrem-sind-die-kandidaten-der-afd/20350578.html'
      },
      {
        'text': 'der Mitglied bei der islamfeindlichen Partei "Die Freiheit" war',
        'src': 'https://www.swr.de/swraktuell/diewahlbeiuns/rp/portraet-sebastian-muenzenmaier-afd-junges-konsens-kandidat/-/id=13075562/did=19140180/nid=13075562/tsun8l/index.html'
      }
    ]
  },
  {
    'forename': 'Nicolaus',
    'name': 'Fest',
    'additions': [
      {
        'text': 'der Gastarbeiter als "Gesindel" bezeichnet',
        'src': 'http://www.tagesspiegel.de/berlin/afd-bundestagskandidat-anzeige-gegen-nicolaus-fest-wegen-volksverhetzung/19600292.html'
      },
      {
        'text': 'der alle Moscheen in Deutschland schließen lassen will',
        'src': 'http://www.spiegel.de/video/afd-neuzugang-nicolaus-fest-will-schliessung-von-moscheen-video-1710365.html'
      }
    ]
  },
  {
    'forename': 'Karsten',
    'name': 'Hilse',
    'additions': [
      {
        'text': 'der hinter der Ehe für alle "Strippenzieher im Hintergrund" vermutet',
        'src': 'http://www.tagesspiegel.de/themen/reportage/rechte-vor-einzug-in-den-bundestag-so-extrem-sind-die-kandidaten-der-afd/20350578.html'
      }
    ]
  },
  {
    'forename': 'Tino',
    'name': 'Chrupalla',
    'additions': [
      {
        'text': 'der die Zensur von Medien fordert',
        'src': 'http://www.bento.de/politik/afd-dutzende-rechtsradikale-auf-den-vorderen-listenplaetze-zur-bundestagswahl-2017-1681100/'
      }
    ]
  },
  {
    'forename': 'Martin',
    'name': 'Renner',
    'additions': [
      {
        'text': 'der von einer "Schuldkult-Hypermoralisierung" in Deutschland spricht',
        'src': 'http://www.rundschau-online.de/politik/rechtsruck-bei-der-afd-martin-renner-wird-spitzenkandidat-fuer-die-bundestagswahl-25918682'
      }
    ]
  },
  {
    'forename': 'Siegbert',
    'name': 'Droese',
    'additions': [
      {
        'text': 'dessen Autokennzeichen die Neonazicodes AH1818 enthält',
        'src': 'https://www.vice.com/de/article/mv4mbn/die-afd-faehrt-mit-hitler-kennzeichen-durch-leipzig'
      },
      {
        'text': 'der mit der Rechtsextremen Tatjana Festerling bei Legida zusammenarbeiten wollte',
        'src': 'https://kreuzer-leipzig.de/2016/05/24/wie-viel-pegida-partei-will-die-afd-sein/'
      },
      {
        'text': 'der die "Volksbewaffnung" gegen "Koransprengköpfe" fordert',
        'src': 'https://www.welt.de/print/die_welt/politik/article170243604/Siegbert-der-Starke-im-AfD-Wunderland.html'
      },
      {
        'text': 'der mit der Hand auf seinem Herzen vor Hitlers Wolfsschanze posierte',
        'src': 'https://www.facebook.com/photo.php?fbid=1942944496024822&set=pcb.1942945666024705&type=3&theater'
      }
    ]
  },
  {
    'forename': 'Stefan',
    'name': 'Kotré',
    'additions': [
      {
        'text': 'laut dem Herkunft und "Vergewaltigerpotenzial" direkt zusammenhängen',
        'src': 'http://www.berliner-zeitung.de/berlin/die-abgeordneten-der-afd-sammelbecken-der-unzufriedenen-221000'
      }
    ]
  },
  {
    'forename': 'Detlef',
    'name': 'Spangenberg',
    'additions': [
      {
        'text': 'der Mitglied der rechtsextremen Wählervereinigung "Arbeit, Familie, Vaterland" war',
        'src': 'http://www.spiegel.de/politik/deutschland/afd-in-sachsen-kein-amt-fuer-abgeordneten-mit-rechter-vergangenheit-a-989731.html'
      }
    ]
  },
  {
    'forename': 'Ulrich',
    'name': 'Oehme',
    'additions': [
      {
        'text': 'der mit einem SA-Spruch zur Bundestagswahl geworben hatte',
        'src': 'http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete'
      }
    ]
  },
  {
    'forename': 'Hans-Jörg',
    'name': 'Müller',
    'additions': [
      {
        'text': 'der Migration nach Deutschland als "organisierte Invasion" bezeichnet',
        'src': 'https://www.youtube.com/watch?time_continue=2&v=pI03Ar7SmkA'
      }
    ]
  },
  {
    'forename': 'Heiko',
    'name': 'Hessenkemper',
    'additions': [
      {
        'text': 'der ultrarechts ist',
        'src': 'http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete'
      }
    ]
  },
  {
    'forename': 'Stephan',
    'name': 'Brandner',
    'additions': [
      {
        'text': 'der politische Gegner als "Ergebnis von Sodomie und Inzucht" bezeichnet',
        'src': 'https://www.noz.de/deutschland-welt/politik/artikel/955751/wie-rechts-ist-die-afd'
      }
    ]
  },
  {
    'forename': 'Kay',
    'name': 'Gottschalk',
    'additions': [
      {
        'text': 'der dazu aufrief, türkische Geschäfte zu boykottieren',
        'src': 'http://www.rp-online.de/nrw/staedte/krefeld/krefeld-kay-gottschalk-afd-ruft-zu-boykott-tuerkischer-geschaefte-auf-aid-1.7345603'
      }
    ]
  },
  {
    'forename': 'Nikolaus',
    'name': 'Kramer',
    'additions': [
      {
        'text': 'der die SS-Leibstandarte Adolf Hitler "nicht grundsätzlich scheiße" findet',
        'src': 'https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Fragwuerdiges-SS-Foto-in-AfD-Chat-verschickt,afd1592.html'
      },
      {
        'text': 'der Frauen für weniger geeignet für die Politik hält als Männer',
        'src': 'https://www.ndr.de/nachrichten/mecklenburg-vorpommern/AfD-Fraktionschef-Maenner-eher-fuer-Politik-gemacht,afd1516.html'
      }
    ]
  },
  {
    'forename': 'Holger',
    'name': 'Arppe',
    'additions': [
      {
        'text': 'der dafür wirbt, im Fall des Scheiterns der AfD "einen Schrank voller Gewehre und eine Munitionskiste in der Garage" zu haben',
        'src': 'https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Rassistische-Chats-Fraktionsvize-verlaesst-AfD,afd1204.html'
      },
      {
        'text': 'der die "widerlichen grünen Bolschewisten" eine Grube ausheben, alle rein und Löschkalk oben drauf',
        'src': 'https://www.ndr.de/nachrichten/mecklenburg-vorpommern/Rassistische-Chats-Fraktionsvize-verlaesst-AfD,afd1204.html'
      }
    ]
  }
];

const exemptions = [
  'Wolfgang Petry',
  'Junge Alternative'
];
