# Vorlage: Transparenz- und Releaseprüfung

Vor jedem Release, in dem sich eine KI-Funktion ändert. Gedacht als Teil der Freigabevorlage, nicht als separates Dokument — ein Dokument, das man zusätzlich öffnen muss, wird beim dritten Release vergessen.

**Release:** ___  **Produktversion:** ___  **Datum:** ___  **Freigegeben durch:** ___

---

## 1 Betroffene Funktionen

| Funktion | Geändert? | Art der Änderung |
|---|---|---|
| | | |

Wenn keine KI-Funktion betroffen ist: hier abbrechen, Ergebnis vermerken.

## 2 Die fünf Freigabefragen

- [ ] **Ändert sich das Verhalten** einer KI-Funktion?
- [ ] Ist die Änderung **wesentlich** nach Art. 3 Nr. 23 — also nicht vorab in der Dokumentation bewertet?
- [ ] Ändert sich die **Zweckbestimmung**?
- [ ] Werden **Nachweise** mit Versionsbezug ungültig?
- [ ] Müssen **Kunden** informiert werden?

Begründung je Ja: ___

Bei Ja auf Frage 3 läuft die Einstufung neu, und die Rollenfrage wird neu gestellt.

## 3 Modellstand

| Feld | Eintrag |
|---|---|
| Modell und Version vor dem Release | |
| Modell und Version nach dem Release | |
| **Hat der Anbieter das Modell gewechselt, ohne dass wir etwas geändert haben?** | ja / nein |
| Testsatz nach dem Wechsel gelaufen? | Datum |
| Abweichungen im Testsatz | |

Die dritte Zeile ist der Fall, den dieser Abschnitt finden soll. Bleibt die eigene Version gleich und hat der Modellanbieter getauscht, ist das System ein anderes — und das gehört in den Änderungsverlauf, obwohl kein Release stattgefunden hat.

## 4 Art. 50 Transparenz

Anwendbar seit **2.8.2026**. Je Funktion und **je Ansicht** prüfen.

| Funktion | Desktop | Mobil | eingebettet | E-Mail, Benachrichtigung |
|---|---|---|---|---|
| | | | | |

- [ ] Hinweis ist **vor der ersten Eingabe** sichtbar, nicht erst danach
- [ ] Hinweis ist in **jeder** Ansicht vorhanden
- [ ] Erzeugte Inhalte sind **maschinenlesbar** gekennzeichnet
- [ ] Bei Emotionserkennung oder biometrischer Kategorisierung: Betroffene werden informiert
- [ ] Nachweis je Funktion: Bildschirmaufnahme mit **Datum und Produktversion**

Die Mobilansicht ist der häufigste Einzelfehler. Eine überarbeitete Oberfläche verliert den Hinweis dort zuerst.

## 5 Produktgestaltung

- [ ] Vorschläge sind nicht vorausgewählt — oder die Vorauswahl ist bewusst entschieden und dokumentiert
- [ ] **Übernahmequote** nach dem Release gemessen oder terminiert
- [ ] Nutzende können die Ausgabe weiterhin ändern oder verwerfen
- [ ] Die Protokollierung geänderter Ausgaben je Mandant funktioniert noch

Punkt 2 ist nicht Formalität: Steigt die Übernahmequote nach einem Release, hat die Änderung die Aufsichtslage verschoben — und möglicherweise die Grundlage der Einstufung nach Art. 6 Abs. 3.

## 6 Nachweise

- [ ] Nachweise mit Versionsbezug auf die **neue** Version geprüft
- [ ] Ungültig gewordene Nachweise **zurück auf offen** gesetzt
- [ ] Neue Testprotokolle abgelegt, datiert, mit Datensatz-Kennung
- [ ] Änderungsverlauf ergänzt, mit Spalte zur Wesentlichkeit

Punkt 2 wird am häufigsten übersehen. Ein Register, in dem Nachweise nur vorwärts laufen können, veraltet lautlos.

## 7 Kundeninformation

Nur wenn Frage 5 aus Abschnitt 2 mit Ja beantwortet wurde.

| Feld | Eintrag |
|---|---|
| Welche Kunden | alle / mit Compliance-Pflichten / betroffene Mandanten |
| Kanal | |
| Versandt am | |
| Inhalt enthält: was sich geändert hat, ab wann | ja / nein |
| Inhalt enthält: Modell und Version vorher und nachher | ja / nein |
| Inhalt enthält: **messbare Verhaltensänderung mit Testsatzergebnis** | ja / nein |
| Inhalt enthält: ob der Kunde etwas tun muss | ja / nein |

Die vorletzte Zeile unterscheidet eine Information von einer Mitteilung. Ein Satz über eine Modellaktualisierung sagt nichts; eine Angabe wie eine Trefferquote, die in einer Kategorie von 94 auf 91 Prozent gefallen und in einer anderen von 88 auf 93 gestiegen ist, ist eine Information, auf die ein Kunde reagieren kann.

## 8 Datenschutz

- [ ] Geprüft, ob sich **Datenarten** oder Verarbeitungsumfang ändern
- [ ] Geprüft, ob ein **neuer Unterauftragsverarbeiter** hinzukommt — dann Kunden informieren
- [ ] Geprüft, ob sich der **Verarbeitungsort** ändert
- [ ] Verarbeitungsverzeichnis des Kunden betroffen? Dann Angaben bereitstellen
- [ ] Geprüft, ob **Art. 22 DSGVO** berührt wird, weil eine Ausgabe nun ohne menschliche Zwischenstufe wirkt

Der zweite Punkt wird am häufigsten vergessen: Ein Wechsel des Modellanbieters bringt einen neuen Unterauftragsverarbeiter, und das ist eine Angabe, die Kunden zusteht.

---

## Ergebnis

- [ ] **Freigegeben.** Keine wesentliche Änderung, Kennzeichnung geprüft
- [ ] **Freigegeben mit Auflagen:** ___ (Verantwortlich ___, Termin ___)
- [ ] **Nicht freigegeben.** Begründung: ___

## Befunde

| Befund | Verantwortlich (Person) | Termin | Sperrt das Release? |
|---|---|---|---|
| | | | |

**Geprüft durch:** ___  **Umgesetzt durch (muss abweichen):** ___  **Datum:** ___

Frühere Prüfungen bleiben erhalten. Die **Reihe** der Releaseprüfungen ist der Nachweis, dass fortlaufend geprüft wurde.
