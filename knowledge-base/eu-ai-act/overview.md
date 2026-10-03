# Was wann gilt — aus Anbietersicht

## Die Fristen

Nach dem **Digital Omnibus** (Verordnung (EU) 2026/1744, in Kraft seit 27.7.2026):

| Datum | Was | Für ein SaaS-Produkt |
|---|---|---|
| 2.2.2025 | Art. 5 verbotene Praktiken | **heute**: Gesprächsanalyse-Funktionen prüfen |
| 2.2.2025 | Art. 4 KI-Kompetenz | **heute**: eigene Beschäftigte, auch Support |
| 2.8.2025 | GPAI-Pflichten | Ihr Modellanbieter — fragen, ob er liefert |
| **2.8.2026** | **Art. 50 Transparenz** | **heute**: jede Chatfunktion, jeder erzeugte Text |
| 2.12.2027 | Hochrisiko nach Anhang III | Vorarbeit |
| 2.8.2028 | Hochrisiko nach Anhang I | relevant bei eingebetteter Software in CE-Produkten |

Die drei mit **heute** markierten Zeilen sind für ein Produkt mit KI-Funktionen die praktisch dringenden. Art. 50 ist davon die, die am häufigsten übersehen wird, weil die Aufmerksamkeit bei Hochrisiko liegt.

## Art. 50 ist für SaaS der Hauptfall

Jede Chatfunktion, jeder erzeugte Text, jedes generierte Bild im Produkt fällt darunter — unabhängig von der Risikoklasse.

| Fall im Produkt | Pflicht |
|---|---|
| Chat- oder Assistenzfunktion | Hinweis, dass es KI ist, **vor** der ersten Eingabe |
| erzeugte Texte, Bilder, Ton, Video | maschinenlesbare Kennzeichnung |
| Emotionserkennung, biometrische Kategorisierung | Betroffene informieren |
| Deepfake-Funktionen | offenlegen |

Die erste Zeile wird am häufigsten gebrochen, und zwar bei Releases: Eine überarbeitete Oberfläche verliert den Hinweis, oder er erscheint in der Desktopansicht und nicht in der Mobilansicht.

**Der Prüfpunkt lautet deshalb nicht „Kennzeichnung vorhanden", sondern:** in jeder Ansicht, vor der ersten Eingabe, mit Nachweis samt **Produktversion**.

## Was die Anhang-III-Verschiebung für Sie bedeutet

Sie verschafft Zeit für den Pflichtenkatalog — nicht für zwei andere Dinge:

**Die Rollenfrage.** Ob Sie Anbieter sind, entscheidet sich nicht 2027, sondern mit dem Release, in dem die Funktion erschien. Und der Pflichtenkatalog eines Anbieters von Hochrisikosystemen ist ein Projekt über Monate, nicht über Wochen.

**Die nicht nachholbaren Dokumentationsteile.** Entwurfsentscheidungen, Datenherkunft, Testergebnisse und Änderungsverlauf entstehen während der Entwicklung oder gar nicht. Wer bis 2027 wartet, hat für diese vier nichts in der Hand.

Dazu: [Dokumentationsvorlage](https://github.com/SimpleAct-Compliance/simpleact-ai-act-documentation-template)

## Was Sie vom Modellanbieter brauchen — seit August 2025

Die GPAI-Pflichten gelten seit 2.8.2025 und treffen Ihren **Modellanbieter**. Für Sie folgt daraus eine Beschaffungsfrage, keine eigene Pflicht:

| Was er bereitstellen sollte | Wofür Sie es brauchen |
|---|---|
| technische Dokumentation des Modells | Ihre eigene Dokumentation |
| Angaben zu Trainingsdaten | Anhang IV Abschnitt 2 |
| Nutzungshinweise und Grenzen | Ihre Betriebsanleitung |
| Angaben zu Urheberrechtspolitik | Kundenanfragen |

Stellt er nichts bereit, ist das ein Befund gegen ihn — dokumentiert, mit Datum der Anfrage.

## Und die DSGVO

Für SaaS ist sie der Teil, der zuerst geprüft wird — meist von Kunden im Beschaffungsgespräch, nicht von Behörden.

| Pflicht | Ihre Rolle |
|---|---|
| Art. 28 Auftragsverarbeitung | Sie sind meist Auftragsverarbeiter für Ihre Kunden |
| Art. 28 Abs. 2 Unterauftragsverarbeiter | Ihr Modellanbieter ist einer — Zustimmung nötig |
| Art. 32 Sicherheit | TOMs, auch für Modelleingaben |
| Art. 33 Meldung | **unverzüglich** an den Kunden, sonst hält er seine 72 Stunden nicht |
| Art. 44 ff. Drittland | wo das Modell läuft |

Die zweite Zeile ist die, die am häufigsten vergessen wird: Wer einen Modellanbieter einschaltet, hat einen neuen Unterauftragsverarbeiter — und der gehört in die Liste, die dem Kunden mitgeteilt wird.

## Weiter

[Wer hier Anbieter ist](./scope-and-actors.md) · [Welche Klasse Ihr Produkt hat](./risk-logic.md) · [Was Enterprise-Kunden verlangen](./integrations-and-enterprise-controls.md)
