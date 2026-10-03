# Begriffe, an denen es für Anbieter hängt

Fünf Begriffe. Vier davon entscheiden darüber, ob und wann Sie Anbieterpflichten haben.

## Inverkehrbringen und Inbetriebnahme (Art. 3 Nr. 9 bis 11)

**Inverkehrbringen** ist die erstmalige Bereitstellung auf dem Unionsmarkt. **Bereitstellung** ist die Abgabe zum Vertrieb oder zur Verwendung, entgeltlich oder unentgeltlich. **Inbetriebnahme** ist die Bereitstellung zum Erstgebrauch.

**Für SaaS heißt das:** Es gibt keine Auslieferung im klassischen Sinn. Der Zeitpunkt, auf den es ankommt, ist der **Release**, mit dem die Funktion für Kunden erreichbar wird. Auch ein geschlossener Testbetrieb mit zahlenden Kunden ist Bereitstellung.

**Was nicht hilft:** die Funktion als Beta zu bezeichnen. Wenn Kunden sie im Arbeitsalltag benutzen, ist sie bereitgestellt — unabhängig vom Etikett und davon, ob sie kostenlos ist.

## Zweckbestimmung (Art. 3 Nr. 12)

Die Verwendung, für die **Sie als Anbieter** das System vorsehen, einschließlich des Nutzungskontexts.

**Für SaaS der wichtigste Begriff**, weil Sie ihn selbst festlegen — und damit Ihren eigenen Pflichtenkreis bestimmen.

| Zweckbestimmung | Folge |
|---|---|
| eng: „fasst Supportanfragen zusammen und schlägt eine Kategorie vor" | enger Pflichtenkreis, klare Grenzen |
| breit: „unterstützt Mitarbeiter bei Textarbeit" | breiter Pflichtenkreis, mehr zu bewerten und zu testen |

Eine breite Zweckbestimmung klingt nach Flexibilität im Verkauf und erweitert die Pflichten: Was Sie als vorgesehene Verwendung beschreiben, müssen Sie auch bewerten, testen und dokumentieren.

**Praktisch bewährt:** eng fassen, und in der Betriebsanleitung ausdrücklich benennen, wofür das Produkt **nicht** eingesetzt werden darf.

## Vernünftigerweise vorhersehbare Fehlanwendung (Art. 3 Nr. 13)

Eine Verwendung, die nicht vorgesehen ist, sich aus menschlichem Verhalten aber absehbar ergibt.

**Für SaaS die unangenehmste Vorschrift**, weil Sie Ihre Kunden beobachten können und damit wissen, was sie tun.

| Lage | Bewertung |
|---|---|
| Sie wissen nicht, wie Kunden das Produkt verwenden | die absehbaren Fälle gehören trotzdem hinein |
| Sie wissen es und haben es ausgeschlossen | schwerer zuzurechnen |
| Sie wissen es, haben es ausgeschlossen und dulden es trotzdem | **der schlechteste Zustand** |

Die dritte Zeile ist die, in die Produkte hineinwachsen: Eine Nutzung widerspricht den Bedingungen, bringt aber Umsatz, und niemand spricht es an. In der Aufarbeitung eines Vorfalls ist das die Konstellation, die am schwersten zu erklären ist.

**Was praktisch hilft:** Die Nutzung erheben — Kundenbefragung, Auswertung der Nutzungsmuster — und die gefundenen Fälle entweder in die Zweckbestimmung aufnehmen oder technisch unterbinden. Vertraglich verbieten und weiterlaufen lassen ist die Variante, die nichts löst.

## Wesentliche Änderung (Art. 3 Nr. 23)

Eine Änderung nach dem Inverkehrbringen, die die Konformität oder die Zweckbestimmung berührt und die der Anbieter **nicht vorab in der technischen Dokumentation bewertet** hat.

**Der Nebensatz ist der Hebel.** Wer absehbare Änderungen im Vorhinein beschreibt und bewertet, hat sie später nicht als wesentlich zu behandeln. Für ein Produkt mit regelmäßigen Releases ist das der Unterschied zwischen einer Bewertung pro Jahr und einer pro Sprint.

Ausführlich mit Beispielen: [Release und Änderungen](./release-and-change-management.md)

## Version

Kein Begriff der Verordnung, und für SaaS der praktisch wichtigste.

Für ein Produkt mit laufenden Releases und einem fremden Modell darunter gibt es **zwei** Versionen, die auseinanderlaufen können:

| Version | Wer ändert sie |
|---|---|
| Ihre Produktversion | Sie, mit jedem Release |
| Modellversion des Zulieferers | der Modellanbieter, möglicherweise ohne Ankündigung |

Beide gehören in den Änderungsverlauf. Wenn Ihre Produktversion gleich bleibt und der Modellanbieter getauscht hat, ist das System ein anderes — und alle Nachweise zu Genauigkeit und Verhalten beziehen sich auf etwas, das es nicht mehr gibt.

**Was daraus folgt:** Die Modellversion aus der Antwort zu protokollieren ist eine kleine technische Maßnahme mit großer Wirkung. Sie macht die zweite Spalte überhaupt führbar — vorausgesetzt, der Anbieter liefert sie.

## Weiter

[Wer hier Anbieter ist](./scope-and-actors.md) · [Abhängigkeit vom Modellanbieter](./provider-dependency-logic.md)
