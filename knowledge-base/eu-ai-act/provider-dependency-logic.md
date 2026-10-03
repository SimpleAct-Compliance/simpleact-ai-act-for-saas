# Abhängigkeit vom Modellanbieter

Der strukturelle Nachteil der SaaS-Lage: Ihr Produkt steht auf einem Modell, das jemand anders betreibt, ändert und abkündigt — und Sie schulden Ihren Kunden Angaben darüber.

## Die drei Angaben, die Sie nicht aus eigener Kraft haben

| Angabe | Wofür Sie sie brauchen |
|---|---|
| **Trainingsdatenherkunft** | Anhang IV Abschnitt 2; Kundenfragen zur Rechtsgrundlage |
| **Entwurfsentscheidungen des Modells** | Anhang IV Abschnitt 2 |
| **Modellversion und Änderungsverlauf** | Anhang IV Abschnitt 5; alle Nachweise mit Versionsbezug |

Die dritte ist die praktisch folgenreichste, weil ohne sie **jeder andere Nachweis zeitlich unzuordenbar** wird.

## Der stille Modellwechsel

Der Anbieter tauscht das zugrunde liegende Modell. Die Schnittstelle bleibt identisch, die Rechnung auch, das Verhalten nicht. Niemand erfährt davon.

**Warum das für SaaS schlimmer ist als für Endnutzer:** Ihr Produkt hat Kunden, die sich auf eine Qualität verlassen, und möglicherweise Kunden mit eigenen Hochrisiko-Pflichten. Wenn sich das Verhalten ändert, sind nicht nur Ihre Nachweise überholt — die Ihrer Kunden sind es auch.

### Drei Wege, es zu bemerken

| Weg | Braucht Mitwirkung des Anbieters |
|---|---|
| Versionsangabe in der Antwort auswerten | ja |
| Änderungsverlauf abonnieren | ja |
| **fester Testsatz** | **nein** |

Der Testsatz ist der einzige, der auch bei einem schweigenden Anbieter funktioniert. Für ein SaaS-Produkt ist er außerdem billig, weil die Infrastruktur dafür schon da ist.

### Was ein brauchbarer Testsatz leistet

| Eigenschaft | Warum |
|---|---|
| 20 bis 50 Eingaben mit erwarteten Ausgaben | genug für ein Signal, wenig genug für täglichen Betrieb |
| deckt die **Grenzfälle** ab, nicht die einfachen | ein Modellwechsel zeigt sich zuerst an den Rändern |
| läuft automatisch, mindestens monatlich, besser täglich | ein Testsatz, den jemand starten muss, läuft nicht |
| Abweichungen werden **protokolliert**, auch kleine | die Reihe ist der Nachweis |
| eine Person bekommt eine Meldung bei Abweichung | sonst steht das Ergebnis in einem Protokoll, das niemand liest |

Die vorletzte Zeile ist gleichzeitig Ihr Nachweis gegenüber Kunden und Behörden: Eine Reihe von Testläufen über zwölf Monate belegt, dass Sie das Verhalten überwacht haben. Ein einzelner Lauf belegt nichts.

Für Entwicklungsteams ist das ein normaler Regressionstest — der Unterschied ist, dass er gegen ein Modell läuft, das sich ohne eigenen Codewechsel ändern kann, und dass seine Ergebnisse aufbewahrt werden.

## Was vor den Vertrag gehört

Sieben Fragen. Jede mit der Nachfrage: **wo steht das?**

1. Welches Modell liegt zugrunde, in welcher Version, und ist die Version in der Antwort ablesbar?
2. Wie werden Modellwechsel angekündigt, mit welcher Vorlaufzeit, über welchen Kanal?
3. Gibt es einen Zugang zu früheren Modellversionen für eine Übergangszeit?
4. Werden unsere Eingaben oder die unserer Kunden zum Training verwendet?
5. Wo werden Daten verarbeitet, und wer sind die Unterauftragsverarbeiter?
6. Welche Angaben zu Trainingsdaten und Entwurfsentscheidungen stellen Sie bereit — und in welcher Form?
7. Welche GPAI-Dokumentation stellen Sie bereit?

**Frage 3 ist die wichtigste und wird am seltensten gestellt.** Ein Anbieter, der ältere Versionen für sechs Monate weiterbetreibt, gibt Ihnen Zeit, Ihre Nachweise nachzuziehen. Einer, der sofort umschaltet, erzeugt bei jedem Wechsel einen Zustand, in dem Ihre Dokumentation nicht stimmt.

Ausführlich: [Anbieterregister](https://github.com/SimpleAct-Compliance/simpleact-model-vendor-register)

## Was zu tun ist, wenn der Anbieter nicht liefert

Das ist der Normalfall, nicht die Ausnahme. Drei ehrliche Wege:

**1 Lücke dokumentieren.** Mit Datum der Anfrage, der Antwort und dem Fundort — etwa der Stelle in den Bedingungen, an der sich der Anbieter nicht äußert. Eine dokumentierte Anbieterlücke ist ein Befund gegen ihn. Dieselbe Lücke ohne Dokumentation ist ein Befund gegen Sie.

**2 Durch eigene Maßnahmen ersetzen, soweit möglich.** Fehlende Genauigkeitsangaben des Modells lassen sich durch eigene Validierung für Ihren Einsatzzweck teilweise ersetzen. Fehlende Trainingsdatenherkunft nicht.

**3 Anbieter wechseln oder Risiko tragen — als Entscheidung.** Wenn ein Anbieter zentrale Angaben nicht liefert und Ihre Kunden sie brauchen, ist das eine Geschäftsentscheidung. Sie gehört getroffen und festgehalten, nicht als Versäumnis entstehen gelassen.

## Mehrere Modellanbieter

Wer mehr als einen einsetzt, hat mehr Arbeit und weniger Risiko:

| | Ein Anbieter | Mehrere |
|---|---|---|
| Vertragsarbeit | einfach | mehrfach |
| Dokumentation | einmal | je Anbieter |
| Testsätze | einer | je Anbieter |
| Ausfall des Anbieters | Produktausfall | umschaltbar |
| Modellwechsel erzwungen | müssen mit | Alternative vorhanden |

Für ein Produkt, dessen Kunden eigene Compliance-Pflichten haben, ist die vierte und fünfte Zeile ein Verkaufsargument — und die Mehrarbeit ist der Preis dafür.

## Was ins Register gehört

| Feld | Inhalt |
|---|---|
| Modellanbieter, Tarif | |
| Modell und Version, und wie sie ablesbar ist | |
| Zusagen, je mit **Fundstelle** | |
| Ankündigungsweg für Modellwechsel | |
| Zugang zu früheren Versionen | ja / nein, Dauer |
| Testsatz: Anzahl Eingaben, Turnus, letzter Lauf | |
| **nicht gelieferte Angaben**, mit Datum der Anfrage | |

Zusagen ohne Fundstelle sind in einer Prüfung keine Zusagen. Und sie unterscheiden sich häufig je Tarif desselben Anbieters — tarifgenaue Angaben: [actcomp.de](https://actcomp.de)

## Weiter

[Release und Änderungen](./release-and-change-management.md) · [Was Enterprise-Kunden verlangen](./integrations-and-enterprise-controls.md)
