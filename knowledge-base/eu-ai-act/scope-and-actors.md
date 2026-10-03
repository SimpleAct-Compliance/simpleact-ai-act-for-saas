# Wer hier Anbieter ist

Bei Software über mehrere Beteiligte zerfällt die Rollenfrage. Dasselbe System kann für drei Parteien drei verschiedene Rollen begründen.

## Die Kette

```
  Modellanbieter  ->  Sie (SaaS)  ->  Ihr Kunde  ->  dessen Kunden
```

| Beteiligter | Rolle für das Modell | Rolle für Ihr Produkt |
|---|---|---|
| Modellanbieter | **Anbieter** (auch GPAI) | — |
| Sie | Betreiber des Modells | **Anbieter** des Systems |
| Ihr Kunde | — | Betreiber — **bis Art. 25 greift** |

Die mittlere Zeile ist der Kern: Sie sind gleichzeitig Betreiber (eines fremden Modells) und Anbieter (Ihres Systems). Beide Pflichtenkataloge gelten, für verschiedene Gegenstände.

## Wann Sie Anbieter werden

Nach Art. 3 Nr. 3, wenn Sie ein KI-System entwickeln oder es **unter eigenem Namen oder eigener Marke** in Verkehr bringen.

Das zweite ist der häufige Fall und wird unterschätzt: Wenn in Ihrem Produkt eine Zusammenfassungsfunktion steht, die ein fremdes Modell nutzt, und dort Ihr Name darauf steht — nicht der des Modellanbieters —, dann bringen Sie ein KI-System unter eigenem Namen in Verkehr.

**Woran man es praktisch erkennt:** Wen ruft ein Kunde an, wenn die Funktion falsche Ergebnisse liefert? Wenn die Antwort „uns" lautet, sind Sie Anbieter.

### Was Sie dann schulden — und was Sie nicht haben

| Pflicht | Aus eigener Kraft erfüllbar |
|---|---|
| Zweckbestimmung, Grenzen, Betriebsanleitung | ja |
| Risikomanagement für Ihren Einsatzzweck | ja |
| Validierung und Test für Ihren Einsatzzweck | ja |
| Änderungsverlauf | ja |
| menschliche Aufsicht ermöglichen | ja |
| **Trainingsdatenherkunft** | **nein** |
| **Entwurfsentscheidungen des Modells** | **nein** |
| **Modellversion und deren Änderungen** | **nein** |

Die drei Nein-Zeilen sind der strukturelle Nachteil dieser Lage. Siehe [Abhängigkeit vom Modellanbieter](./provider-dependency-logic.md).

## Wann Ihr Kunde Anbieter wird

Nach **Art. 25** wird ein Betreiber zum Anbieter, wenn er Ihren Namen durch seinen ersetzt, das System wesentlich ändert, die Zweckbestimmung ändert — oder ein nicht als Hochrisiko bestimmtes System für einen **Hochrisikozweck** einsetzt.

Der letzte Fall trifft Ihr Produkt häufiger, als Ihnen lieb ist. Drei Beispiele:

| Ihr Produkt | Kundennutzung | Folge |
|---|---|---|
| Textassistent für Dokumente | schreibt Kündigungsentwürfe | Bereich Beschäftigung |
| Zusammenfassungsfunktion | fasst Bewerbungen zusammen | Bereich Beschäftigung |
| Scoring für Zahlungsausfälle | bewertet Privatkunden | Bereich wesentliche Dienstleistungen, plus Profiling |

**Was das für Sie bedeutet:** Rechtlich wird Ihr Kunde zum Anbieter, nicht Sie. Praktisch kommt er mit Fragen zu Ihnen, weil er die Angaben braucht, die er nur von Ihnen bekommt. Und wenn Sie seine Nutzung kennen und dulden, ist das eine **vernünftigerweise vorhersehbare Fehlanwendung**, die in Ihre eigene Dokumentation gehört.

**Was praktisch hilft:**

1. In der Betriebsanleitung ausdrücklich benennen, **wofür das Produkt nicht eingesetzt werden darf**
2. In den Vertragsbedingungen dasselbe, mit Hinweis auf die Folge für den Kunden
3. Eine Seite, die Kunden die Angaben gibt, die sie für ihre eigene Bewertung brauchen

Punkt 3 ist Vertriebsarbeit, nicht Compliance-Arbeit: Ein Kunde, der die Angaben bekommt, kauft; einer, der sie nicht bekommt, prüft weiter.

## Mehrmandantenbetrieb

Eine Besonderheit, die in allgemeinen Leitfäden fehlt. Bei Mehrmandanz gibt es **ein System** und **viele Betreiber** — und die Zweckbestimmung ist für alle dieselbe, die tatsächliche Verwendung nicht.

| Frage | Folge |
|---|---|
| Nutzen Mandanten dieselbe Modellinstanz? | gemeinsame Einstufung möglich |
| Kann ein Mandant die Funktion konfigurieren? | seine Konfiguration kann die Zweckbestimmung verlassen |
| Können Mandanten eigene Eingabeaufforderungen hinterlegen? | **dann bestimmt der Mandant mit, was das System tut** |
| Fließen Daten eines Mandanten in Antworten für andere? | eigene Risikofrage, und eine datenschutzrechtliche |

Die dritte Zeile ist die kritische. Wer Mandanten erlaubt, das Verhalten einer KI-Funktion frei zu konfigurieren, hat ein System, dessen Zweckbestimmung er nur noch rahmen, aber nicht festlegen kann. Das ist zulässig und muss dokumentiert sein — mit den Grenzen, die technisch erzwungen werden.

Ausführlich: [Das Betriebsmodell](./saas-operating-model.md)

## Räumliche Geltung (Art. 2)

Für SaaS besonders relevant: Die Verordnung greift, wenn in der Union in Verkehr gebracht wird — **unabhängig vom Sitz des Anbieters** — und auch dann, wenn die **Ausgabe** in der Union verwendet wird.

Ein Produkt, das von außerhalb der EU betrieben wird und EU-Kunden hat, fällt darunter. Ein Produkt mit EU-Kunden braucht außerdem einen Bevollmächtigten in der Union, wenn der Anbieter außerhalb sitzt und ein Hochrisikosystem anbietet.

## Was in das Register gehört

| Feld | Inhalt |
|---|---|
| eigene Rolle je Funktion | Anbieter / Betreiber, mit Begründung |
| Modellanbieter und dessen Rolle | GPAI-Anbieter, Auftragsverarbeiter, Empfänger |
| Art. 25 für eigene interne Nutzung geprüft | Datum |
| bekannte Kundennutzungen, die einen Anhang-III-Bereich berühren | welche |
| in der Betriebsanleitung ausgeschlossene Verwendungen | welche |

Die vierte Zeile ist unangenehm und wichtig: Was Sie wissen, gehört in die vorhersehbare Fehlanwendung. Was Sie nicht wissen, sollten Sie fragen — Kundenbefragungen zur Nutzung sind dafür der einfachste Weg.

## Weiter

[Das Betriebsmodell](./saas-operating-model.md) · [Abhängigkeit vom Modellanbieter](./provider-dependency-logic.md) · [Release und Änderungen](./release-and-change-management.md)
