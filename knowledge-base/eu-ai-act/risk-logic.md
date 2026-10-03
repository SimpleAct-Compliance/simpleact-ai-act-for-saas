# Welche Klasse Ihr Produkt hat

**Eingestuft wird eine Funktion, nicht ein Produkt.** Ein Produkt mit vier KI-Funktionen braucht vier Einstufungen — sie können verschieden ausfallen, und eine gemeinsame müsste sich an der riskantesten orientieren.

Die vollständige Einstufungslehre: [Risikoeinstufung](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu)

## Die Reihenfolge, je Funktion

```
  1 Ist es ein KI-System?           Art. 3 Nr. 1
  2 Verbotene Praktik?               Art. 5    <- Treffer beendet alles
  3 Hochrisiko?                      Anhang I / III
  4 Transparenzpflicht?              Art. 50   <- unabhängig von 3
```

## Art. 5: der Fall, der SaaS tatsächlich trifft

Von den acht verbotenen Praktiken ist für Produktanbieter vor allem eine relevant: **Emotionserkennung am Arbeitsplatz und in Bildungseinrichtungen**.

Betroffene Produktfunktionen:

| Funktion | Lage |
|---|---|
| Stimmungsanalyse von Kundengesprächen, wenn Beschäftigte beteiligt sind | heikel — kommt auf den Gegenstand der Analyse an |
| Auswertung von Bewerbungsgesprächen nach Auftreten oder Stimmung | **verboten** |
| Analyse der Stimmung von Beschäftigten in internen Werkzeugen | **verboten** |
| Analyse von Lernverhalten mit Emotionsmerkmalen in Bildungssoftware | **verboten** |
| Stimmungsanalyse von Kundenbeschwerden (Kunde, nicht Beschäftigter) | nicht von diesem Verbot erfasst |

Die Unterscheidung in der letzten Zeile ist wesentlich und wird oft übersehen: Das Verbot knüpft an Arbeitsplatz und Bildungseinrichtung an, nicht an Emotionserkennung überhaupt. Wer Kundentexte analysiert, fällt nicht darunter — wer dabei auch die Beschäftigten bewertet, schon.

Zweiter Fall für Produktanbieter: **ungezieltes Auslesen von Gesichtsbildern** aus dem Netz oder aus Überwachungsaufnahmen. Betrifft Werkzeuge zur Personensuche, Identitätsprüfung und Anreicherung von Kontaktdaten.

**Ein Treffer beendet die Prüfung.** Die Funktion gehört abgeschaltet, und die Entscheidung dokumentiert.

## Anhang III: wann Ihr Produkt selbst hochriskant ist

Ihr Produkt ist ein Hochrisikosystem, wenn **seine Zweckbestimmung** einen der acht Bereiche berührt. Nicht, wenn ein Kunde es dafür zweckentfremdet — dann wird der Kunde nach Art. 25 zum Anbieter.

| Produktart | Lage |
|---|---|
| Bewerbermanagement mit Vorauswahl oder Ranking | Anhang III Nr. 4, Beschäftigung |
| Personalsoftware mit Leistungsbewertung | Anhang III Nr. 4 |
| Kreditentscheidungs- oder Scoringsoftware für Privatkunden | Anhang III Nr. 5, plus Profiling |
| Prüfungs- oder Zulassungssoftware für Bildung | Anhang III Nr. 3 |
| Zugangskontrolle mit Biometrie | Anhang III Nr. 1 |
| allgemeiner Textassistent | nein — aber Art. 50, und Kundennutzung beachten |

Die letzte Zeile ist die häufigste Lage: Das Produkt selbst ist nicht hochriskant, und die Kundennutzung kann es sein. Was daraus folgt, steht in [Wer hier Anbieter ist](./scope-and-actors.md).

## Die Ausnahme nach Art. 6 Abs. 3

Wenn Ihre Funktion in einem Anhang-III-Bereich liegt, lohnt die Prüfung der Ausnahme. Sie greift, wenn die Funktion nur eine eng begrenzte Verfahrensaufgabe erfüllt, ein menschliches Ergebnis verbessert, Muster erkennt ohne die Bewertung zu ersetzen, oder vorbereitend tätig ist.

Zwei Punkte für Produktanbieter:

**Die Bewertung ist ein Dokument.** Wer sich auf die Ausnahme beruft, hat nicht weniger zu dokumentieren, sondern anderes: eine nachvollziehbare Begründung statt Anhang IV.

**Die Produktgestaltung entscheidet mit.** Ob eine Funktion die menschliche Bewertung „ersetzt", hängt davon ab, wie das Produkt gebaut ist:

| Gestaltung | Wirkung |
|---|---|
| Vorschlag muss ausdrücklich bestätigt werden | stützt die Ausnahme |
| Vorschlag ist vorausgewählt und wird mit „weiter" übernommen | untergräbt sie |
| Vorschlag wird automatisch übernommen, Widerspruch ist möglich | untergräbt sie |
| Nutzende sehen, worauf der Vorschlag beruht | stützt sie |

Das ist eine der wenigen Stellen, an denen eine Entwurfsentscheidung die Rechtslage unmittelbar beeinflusst. Und sie ist messbar: Die **Übernahmequote** zeigt, was tatsächlich passiert. Liegt sie bei 98 %, ersetzt der Vorschlag die Bewertung praktisch — unabhängig davon, was im Ablaufdiagramm steht.

**Die Rückausnahme:** Wird **Profiling** natürlicher Personen vorgenommen, greift die Ausnahme nicht, unabhängig von allem anderen.

## Art. 50 ist für SaaS der Regelfall

Jede Chatfunktion, jeder erzeugte Text, jedes generierte Bild. Unabhängig von der Klasse aus Schritt 3, anwendbar seit **2.8.2026**.

Der Prüfpunkt je Funktion: **in jeder Ansicht sichtbar, vor der ersten Eingabe, mit Nachweis samt Produktversion.**

Vorlage: [Transparenz- und Releaseprüfung](../../templates/transparency-and-release-checklist.md)

## Was ins Register gehört, je Funktion

| Feld | Inhalt |
|---|---|
| Funktion und ihre Zweckbestimmung | ein Satz mit Verb |
| rechtliche Klasse, mit Anhangbezug | |
| Art. 5 je Praktik geprüft | Datum |
| Art. 6 Abs. 3: Bewertung und Profiling-Frage | |
| **Übernahmequote** des Vorschlags | gemessen, nicht geschätzt |
| Art. 50: Fall und Umsetzung, mit Produktversion | |
| bekannte Kundennutzungen in Anhang-III-Bereichen | |

Vorlage: [Funktionsregister](../../templates/saas-feature-inventory-template.md)

## Weiter

[Wer hier Anbieter ist](./scope-and-actors.md) · [Das Betriebsmodell](./saas-operating-model.md)
