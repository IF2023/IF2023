Moin 

<h2>How to Code in Betrieb nehmen</h2>

    1. Mitglied in der Organisation IF2023 in GitHub sein
    2. Repository runterladen
        - bei "Code" den Link kopieren
        - bei GitHub Desktop "repository clonen"
        - bei dem Reiter "URL" den Link eingeben und runterladen
        - mit VS Code öffnen
    3. in den Ordner "IF2023_Website" gehen 
    4. ein Integriertes Terminal in "src" öffnen
    5. node-modules installieren mit "npm install / npm i"
    6. "npm run dev"
    7. Link zum localhost öffnen
    8. ta da


<h2>Wo finde ich was?</h2>

<h3>Datei-Ordner</h3>
    Unter "src" liegt der "data"-Ordner. Hier liegen die json Dateien, die uns als Datenbank dienen.
    Hier liegen die Informationen zu z.B. Projekten oder Speakern.
    Weitere Organisation innerhalb des Ordners folgt.

<h3>Bilder</h3>
    Im Ordner "public" werden alle Assets gelagert. Hier gibt es auch den Ordner speziell für Bilder.
    Weitere Organisation innerhalb des Ordners folgt.
    In "public" liegt außerdem noch ein Ordner "SVG". Hier liegt bspw. das Logo der Webseite.

<h3>Texte</h3>
    Texte werden bisher gesondert behandelt. 
    Für sie gibt es keinen speziellen Ordner, sie kommen direkt in den Code.

<h3>Pages</h3>    
    Die Seiten, in denen Navigiert werden kann, liegen unter dem Ordner "pages". 
    Zu jeder Page gibt es einen eigenen Ordner, in der die .jsx-Datei liegt und in welcher die page zusammengesetzt wird.
    Eine Page besteht hauptsächlich aus mehreren Sections und Components.

<h3>Sections</h3>
    Abschnitte bzw. Bereiche, die in mehreren Pages wiederverwendet werden können, liegen im Ordner "sections". 
    Die Sections haben jeweils einen eigenen Ordner mit einer .jsx- und einer .scss-Datei.
    Häufig bestehen sie aus Komponenten.

<h3>Components</h3>
    Komponenten sind die Bausteine von Pages. Sie werden in fast jeder Page wiederholt eingesetzt und bilden das Grundgerüst einer Page.
    Gefunden werden sie unter dem Ordner "components", welche jeweils einen eigenen Ordner haben und teilweise aus .jsx- und .scss-Dateien bestehen. 

<h3>Schriftarten</h3>
    Im Ordner "fonts" liegen die verschiedenen Schriftarten zur Implementierung bereit.

<h3>Variablen</h3>
    Da wir mit scss arbeiten, liegen hier "Hauptdateien" mit Informationen u.A. zur Farbpalette oder Schriftarten.
    Diese sind mit Variablen verknüpft, die im css wieder nutzbar gemacht werden. 
    So muss sich bspw. kein Farbcode gemerkt werden.