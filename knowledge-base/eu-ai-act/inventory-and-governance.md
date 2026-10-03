# Funktionsregister

Für ein Softwareprodukt ist die Einheit des Registers nicht das System, sondern die **Funktion**. Ein Produkt mit vier KI-Funktionen hat vier Einträge.

## Warum je Funktion

| Grund | Folge |
|---|---|
| die Klasse kann je Funktion verschieden sein | gemeinsame Einstufung müsste sich an der riskantesten orientieren |
| Art. 50 trifft manche Funktionen und andere nicht | Kennzeichnungspflicht ist funktionsbezogen |
| Funktionen entstehen und verschwinden mit Releases | ein Produkt-Eintrag veraltet unbemerkt |
| verschiedene Funktionen nutzen verschiedene Modelle | Modellversion ist funktionsbezogen |

Die letzte Zeile ist in der Praxis der Auslöser: Sobald eine zweite Funktion ein anderes Modell nutzt, zerfällt der gemeinsame Eintrag ohnehin.

## Woher die Einträge kommen

Anders als bei einem Anwenderunternehmen ist die Suche hier einfach — und wird trotzdem unvollständig:

| Quelle | Findet |
|---|---|
| Produktbacklog und Releasenotizen | geplante und gelieferte KI-Funktionen |
| Abhängigkeitsliste im Code | Modellbibliotheken, Schnittstellen zu Modellanbietern |
| ausgehende Netzaufrufe aus der Produktionsumgebung | Modellanbieter, die niemand eingetragen hat |
| Rechnungen der Modellanbieter | tatsächlich genutzte Dienste und Tarife |
| interne Werkzeuge | eigene Nutzung — dort sind Sie Betreiber |

Die dritte und vierte Quelle finden den typischen Fall: Ein Team hat für ein Experiment eine Schnittstelle eingebunden, das Experiment ist in Produktion gegangen, und es gibt keinen Eintrag. Die Rechnung weiß davon.

Die letzte Zeile ist der getrennte Teil: Für intern eingesetzte KI sind Sie Betreiber, nicht Anbieter — mit eigener Art.-25-Frage. Das gehört in ein eigenes Register, nicht in das Funktionsregister des Produkts.

## Zuständigkeit

| Rolle | Wer | Aufgabe |
|---|---|---|
| **Funktionseigentümer** | Produktverantwortlicher | hält den Eintrag aktuell, kennt die Zweckbestimmung |
| **technischer Zuliefernder** | Entwicklung | Modell, Version, Architektur, Testergebnisse |
| **Prüfer** | Compliance, Datenschutz oder Leitung | sieht nach, ob der Eintrag stimmt |
| **Freigebender** | je nach Klasse | entscheidet über das Release |

Der Funktionseigentümer sitzt im Produktbereich, nicht in der Compliance. Nur dort fällt auf, dass sich die Zweckbestimmung verschoben hat — etwa weil eine Funktion, die Supportanfragen zusammenfassen sollte, inzwischen auch für Angebote benutzt wird.

Eigentümer und Prüfer dürfen nicht dieselbe Person sein.

## Was den Eintrag aktuell hält

Drei Verbindungen, alle automatisierbar:

| Verbindung | Wirkung |
|---|---|
| Release-Freigabe verlangt den Eintrag | kein Release ohne Eintrag |
| Testsatzergebnis schreibt in den Eintrag | Modellwechsel wird sichtbar |
| Modellversion wird protokolliert | Änderungsverlauf entsteht von selbst |

Das ist der Vorteil der SaaS-Lage: Was bei einem Anwenderunternehmen Handarbeit ist, lässt sich hier an bestehende Abläufe hängen. Wer die drei Verbindungen einrichtet, hat ein Register, das nicht gepflegt werden muss.

Dazu: [Integrationen](https://github.com/SimpleAct-Compliance/simpleact-integrations-apis)

## Die Kennzahlen, die etwas sagen

| Kennzahl | Was sie zeigt |
|---|---|
| Anteil der Funktionen mit **eingetragener Modellversion** | ob der Änderungsverlauf führbar ist |
| **Übernahmequote** je Funktion | ob ein Vorschlag die menschliche Bewertung praktisch ersetzt |
| **geänderte Ausgaben** je Mandant und Zeitraum | ob Kunden Aufsicht ausüben — und ihr Nachweis |
| Testsatzläufe je Funktion und Monat | ob die Modellüberwachung läuft |
| Zeit von Modellwechsel bis Kundeninformation | ob der Releaseprozess greift |

Die dritte ist gleichzeitig ein Produktmerkmal: Ihr Kunde braucht diese Zahl für seinen eigenen Art.-14-Nachweis. Liefert Ihr Produkt sie, erspart er sich eine manuelle Erhebung.

## Was mit abgeschalteten Funktionen passiert

Der Eintrag bleibt, mit Status und Datum. Bei einem Produkt mit vielen Releases ist das nicht Formalität: In einer Prüfung oder in der Aufarbeitung einer Kundenbeschwerde wird gefragt, welche Funktion in welcher Version mit welchem Modell lief — und zwar zu einem Zeitpunkt in der Vergangenheit.

Dasselbe gilt für Einstufungen: Die neue ersetzt die alte nicht.

## Verbindung zu den anderen Registern

| Register | Verbindung |
|---|---|
| **Anbieterregister** | welches Modell, welcher Tarif, welche Zusagen mit Fundstelle |
| **Verarbeitungsverzeichnis** | je Funktion mit Personenbezug ein Eintrag |
| **Unterauftragsverarbeiterliste** | der Modellanbieter gehört hinein |
| **Vorfallverfahren** | Art. 73 AI Act und Art. 33 DSGVO, getrennte Fristen |
| **Nachweisregister** | je Funktion die Nachweise mit Versionsbezug |

Die dritte Zeile wird am häufigsten vergessen: Wer einen Modellanbieter einschaltet, hat einen neuen Unterauftragsverarbeiter — und der gehört in die Liste, die den Kunden mitgeteilt wird.

## Weiter

[Funktionsregister-Vorlage](../../templates/saas-feature-inventory-template.md) · [Was Enterprise-Kunden verlangen](./integrations-and-enterprise-controls.md)
