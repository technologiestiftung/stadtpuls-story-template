# Stadtpuls Story Wenn Dies Dann Das


Mit unsere Plattform Stadtpuls wollen wir einen Gemeinschaft aufbauen in der alle Beiträge willkommen sind und große und kleine Projekte ihre Daten offen für andere bereitstellen können. Nun ist nicht jede:r des Programmierens Mächtig oder will sich auch nicht sofort in Code stürzen um eine kleine Idee zu skizzieren. Daher steht oft die Frage im Raum: "Wie bekomme ich schnell und einfach Daten da rein?"

Mit diesem Experiment möchten wir Wege aufzeigen, die ohne, oder zumindest mit so wenig Programmcode wie möglich auskommen. Ganz kommen wir daran vorbei, aber wir versuchen es so gering wie möglich zu halten.

Was ist das alltäglichste und omnipräsenteste Gerät welches mir erlaubt Werte zu messen?
Unser Smartphone. Wir tragen in unseren Taschen tag täglich einen Computer mit uns herum, der mehr Leistung hat als die besseren Taschenrechner mit denen wir Menschen zum Mond geschossen haben. Hinzu kommt, dass in diesem Gerät auch noch ein Haufen Sensoren verbaut sind. Von Barometer und Accelerometer zu Mikrofonen und Kameras. Der Zugriff ist nicht immer ganz einfach. Hier jedoch widmen wir uns dem am einfachsten auslesbarem. Dem GPS Sensor. 


## Voraussetzungen 

Damit wir zügig loslegen können müssen wir ein paar digitale Tools zusammentragen.

1. Einen Stadtpuls.com Account
2. Einen ifttt.com Account
3. Einen https://observablehq.com Account
4. Unser Smartphone (ob iOS oder Android ist in diesem Fall egal) mit der ifttt.com Mobile Applikation

Alle drei Plattformen sind entweder komplett kostenlos (Yeah! Stadtpuls) oder haben eine großzügigen kostenfreien Account. Was Stadtpuls ist muss ich hier nicht nochmals erklären, aber was machen die anderen beiden für uns? 

## Was ist ifttt.com

ifttt steht für "if this then that" und ist eine kommerzielle (Freemium) Plattform die es uns erlaubt verschiedenste Services zusammen zu knüpfen. **Wenn** ich eine Email erhalte, **dann** speichere den Absender in einer Goggle Tabelle. **Wenn** es morgens 8 Uhr ist, **dann** schick mir eine SMS mit dem Wetter für Berlin. **Wenn** ich auf der Arbeit ankomme **dann** füge in Kalender einen Eintrag hinzu. Und so weiter und so weiter. Die Plattform erlaubt es auch IoT Geräte wie Phillips Hue Glühbirnen, Nuki Smart Locks oder zum Beispiel Nest Produkte mit anderen Services zu verbinden. Vergleichbare Plattformen wären zapier.com, Microsoft Flow oder Huginn et. al.

## Was ist observablehq.com

ObservableHQ ist ebenfalls eine kommerzielle Plattform die ihre Wurzeln in der Open Source Community hat. Sie erlaubt es interaktive Notebooks zu veröffentlichen um Daten zu explorieren. Wir können mit Javascript Code in einzelnen Zellen Daten aus APIs wie stadtpuls.com ziehen und diese mit Bibliotheken wie D3.js, Plot.js oder in unserem Falle Mapbox.gl.js visualisieren. Vergleichbare Plattformen wären hier Google Colab, deepnote.com, Juypter Notebook oder RStudio et. al.

 
## Sensor und Token

Nachdem wir all unsere Accounts erstellt haben, legen wir zuallererst in unserem Stadtpuls.com Account einen neuen Sensor an. Als Kategorie wählen wir "Sonstige" und als Integration "HTTP". Alle anderen Werte und Namen seien dem Leser überlassen.

Bild 


Um Daten an stadtpuls.com über HTTP schicken zu können müssen wir uns programmatisch authentifizieren können. Dafür erstellen wir uns ebenfalls in unserem Account einen neuen Token. Auch diesem geben wir einen sinnvollen Namen. Achtung der Token der uns nur einmalig gezeigt wird hat schreibrechte auf all unsere Sensoren. Deshalb sollte dieser niemals in Blog Posts, Screenshots oder sonst wo gezeigt werden. Wir speichern uns den Token in unserem Passwortmanager für später.  

Bild

## ifttt.com Applet erstellen

In unserem ifttt.com Account benutzen wir den großen "Create" Knopf um eine neues Applet zu erstellen. Als erstes definieren wir unseren Trigger/Auslöser "If This" und drücken den "Add" Knopf. Dies führt uns zu einer Suche in der wir alle Services filtern können. Hier suchen wir nach "button" bis wir den "Button Widget" Service gefunden haben und wählen ihn an. Gegebenenfalls müssen wir den Service noch aktivieren. Zu konfigurieren gibt es hier nichts.
Zurück in unserer "Create" Ansicht definieren wir nun das "Then That", die Aktion die ausgeführt werden soll wenn der Knopf gedrückt wird. Wieder in der Service Suche geben wir "webhooks" in das Suchfeld ein bis wir den Webhooks Service gefunden haben und aktivieren ihn.  Der Webhooks Service braucht ein paar Angaben von uns um zu funktionieren.

Bild

- Als URL geben wir von der Seite des Sensors auf stadtpuls.com die URL  unter "API Schnittstelle" an.
- Als Methode geben wir `POST` an.
- Also Content Type wählen wir `application/json`.
- Als Additional Headers geben wir `authorization: Bearer TOKEN` an. Wobei ihr natürlich das `TOKEN` mit dem Token den wir vorher erzeugt haben ersetzen müsst.
- Als Body geben wir folgenden Text ein `{"measurements":[<<< {{Longitude}}>>>,<<< {{Latitude}}>>>]}`. 

Jetzt können wir unsere Aktion speichern.  


