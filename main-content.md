# EU AI Act für SaaS — Volltext

Dieses Dokument fasst das Repository in einem Stück zusammen.

## Die Lage

Wer eine KI-Funktion in ein Produkt einbaut, das Kunden benutzen, ist **Anbieter** — auch dann, wenn das Modell darunter von jemand anderem kommt. Die praktische Probe: Wen ruft ein Kunde an, wenn die Funktion falsche Ergebnisse liefert? Lautet die Antwort „uns", ist man Anbieter.

Gleichzeitig bleibt man Betreiber des fremden Modells. Beide Pflichtenkataloge gelten, für verschiedene Gegenstände — und daraus entsteht die Lücke, die diesem Repository zugrunde liegt.

## Die Rollenkette

Modellanbieter, dann Sie, dann Ihr Kunde, dann dessen Kunden. Der Modellanbieter ist Anbieter des Modells, Sie sind Anbieter des Systems, Ihr Kunde ist Betreiber — bis Art. 25 greift.

Nach Art. 25 wird Ihr Kunde zum Anbieter, wenn er Ihren Namen ersetzt, das System wesentlich ändert, die Zweckbestimmung ändert oder es für einen Hochrisikozweck einsetzt. Der letzte Fall trifft Ihr Produkt häufiger, als Ihnen lieb ist: ein Textassistent, der Kündigungsentwürfe schreibt; eine Zusammenfassungsfunktion, die Bewerbungen zusammenfasst. Rechtlich wird der Kunde zum Anbieter; praktisch kommt er mit Fragen zu Ihnen, weil er Angaben braucht, die nur Sie haben. Und wenn Sie seine Nutzung kennen und dulden, ist das eine vernünftigerweise vorhersehbare Fehlanwendung, die in Ihre eigene Dokumentation gehört.

## Die drei Angaben, die Sie nicht haben

Trainingsdatenherkunft, Entwurfsentscheidungen des Modells, Modellversion samt Änderungsverlauf. Alle drei liegen beim Modellanbieter, und alle drei schulden Sie — die dritte ist die folgenreichste, weil ohne sie jeder andere Nachweis zeitlich unzuordenbar wird.

Was zu tun ist: die Fragen **vor** den Vertrag stellen und die Lücke mit Datum der Anfrage dokumentieren. Eine dokumentierte Anbieterlücke ist ein Befund gegen ihn; dieselbe Lücke ohne Dokumentation ist ein Befund gegen Sie.

Die wichtigste und seltenst gestellte Beschaffungsfrage: **Gibt es einen Zugang zu früheren Modellversionen für eine Übergangszeit?** Ein Anbieter, der ältere Versionen sechs Monate weiterbetreibt, gibt Ihnen Zeit, Nachweise nachzuziehen. Einer, der sofort umschaltet, erzeugt bei jedem Wechsel einen Zustand, in dem Ihre Dokumentation nicht stimmt.

## Der stille Modellwechsel

Der Anbieter tauscht das Modell, die Schnittstelle bleibt identisch, das Verhalten nicht. Für SaaS ist das schlimmer als für Endnutzer: Ihre Kunden verlassen sich auf eine Qualität, und manche haben eigene Hochrisiko-Pflichten. Ändert sich das Verhalten, sind nicht nur Ihre Nachweise überholt, sondern auch die Ihrer Kunden.

Von den drei Wegen, es zu bemerken, funktioniert nur einer ohne Mitwirkung des Anbieters: ein **fester Testsatz**. Zwanzig bis fünfzig Eingaben mit erwarteten Ausgaben, die **Grenzfälle** abdeckend, automatisch laufend, Abweichungen protokolliert, Meldung an eine benannte Person. Für Entwicklungsteams ist das ein normaler Regressionstest — der Unterschied ist, dass er gegen ein Modell läuft, das sich ohne eigenen Codewechsel ändern kann, und dass seine Ergebnisse aufbewahrt werden. Die Reihe über zwölf Monate ist der Nachweis; ein einzelner Lauf belegt nichts.

## Der Releasepunkt

Für Softwareanbieter läuft alles an einer Stelle zusammen. Fünf Fragen gehören in die bestehende Freigabevorlage — nicht in ein eigenes Dokument, das beim dritten Release vergessen wird:

Ändert sich das Verhalten einer KI-Funktion? Ist die Änderung wesentlich nach Art. 3 Nr. 23? Ändert sich die Zweckbestimmung? Werden Nachweise mit Versionsbezug ungültig? Müssen Kunden informiert werden?

**Der Hebel liegt bei Frage 2.** Wesentlich ist eine Änderung, die der Anbieter **nicht vorab in der technischen Dokumentation bewertet** hat. Wer absehbare Änderungen im Vorhinein beschreibt — regelmäßiges Nachtrainieren in einem bestimmten Datenrahmen mit Qualitätsschwellen, ein Modellwechsel innerhalb einer Familie mit anschließendem Testsatzlauf und Abnahmekriterien —, hat sie später nicht als wesentlich zu behandeln. Für ein Produkt mit regelmäßigen Releases ist das der Unterschied zwischen einer Bewertung pro Jahr und einer pro Sprint.

Der Änderungsverlauf muss zwei Dinge mitführen, die allgemeine Vorlagen nicht kennen: **Modellwechsel beim Zulieferer**, auch ohne eigenes Release, und **mandantenspezifische Konfigurationsänderungen**, sonst erklärt er nicht, warum zwei Mandanten unterschiedliche Ergebnisse sehen.

## Art. 50 ist für SaaS der Hauptfall

Jede Chatfunktion, jeder erzeugte Text, jedes generierte Bild — unabhängig von der Risikoklasse, anwendbar seit **2.8.2026**, während Anhang III erst ab 2.12.2027 greift.

Bei Releases wird diese Pflicht am häufigsten unbemerkt gebrochen: Eine überarbeitete Oberfläche verliert den Hinweis, eine neue Funktion bekommt ihn nicht, oder er erscheint in der Desktopansicht und nicht in der Mobilansicht. Der letzte Fall ist der häufigste. Deshalb lautet der Prüfpunkt nicht, ob eine Kennzeichnung vorhanden ist, sondern: **in jeder Ansicht, vor der ersten Eingabe, mit Nachweis samt Produktversion.**

## Mehrmandanz

Allgemeine Leitfäden gehen von einem System und einem Betreiber aus. Bei SaaS gibt es ein System und viele Betreiber, mit derselben Zweckbestimmung und unterschiedlicher tatsächlicher Verwendung.

Die kritische Frage ist die Konfiguration. Wenn Mandanten eigene Eingabeaufforderungen, Regeln oder Schwellen hinterlegen können, bestimmen sie mit, was das System tut. Das ist zulässig und muss dokumentiert sein — mit den Grenzen, die **technisch erzwungen** werden. Was technisch nicht möglich ist, muss nicht vertraglich verboten werden.

Wer je Mandant **feinabstimmt**, hat nicht ein System mit Varianten, sondern viele Systeme mit gemeinsamer Oberfläche: eigene Validierung und eigener Änderungsverlauf je Mandant.

Die menschliche Aufsicht wird bei SaaS fast immer vom Kunden ausgeübt und von Ihnen nur ermöglicht. Ihr Teil muss überprüfbar sein: Ausgaben als KI-Ausgaben erkennbar, änderbar oder verwerfbar, mit Hinweisen darauf, wo genauer hinzusehen ist — und ein **Protokoll über geänderte Ausgaben je Mandant**. Das ist ein unterschätztes Produktmerkmal: Ihr Kunde braucht diese Zahl für seinen eigenen Art.-14-Nachweis und muss sie sonst schätzen.

## Was Kunden fragen werden

Vier Fragen, in jeder Beschaffungsprüfung: Welche Funktionen des Produkts verwenden KI? Welches Modell liegt zugrunde, von wem, in welcher Version? Werden unsere Daten zum Training verwendet, und wo steht das? Wie erfahren wir von Änderungen am Modell?

Wer darauf keine belegbare Antwort hat, verliert Abschlüsse, bevor ein Prüfer auftaucht — und wer sie zwanzigmal einzeln beantwortet, hat zwanzigmal die Arbeit. Eine Seite mit Fundstellen, Stand und Prüfdatum ist die wirtschaftlichste Einzelmaßnahme der ganzen Compliance-Arbeit.

Dazu kommt eine Vertragsfrage, die aufmerksame Einkäufer prüfen: Die Meldeklausel muss **unverzüglich** sagen. Ihr Kunde kann seine 72 Stunden nach Art. 33 DSGVO nicht halten, wenn Sie sich fünf Werktage zusichern lassen.

## Drei Zusagen, die nicht haltbar sind

Dass das Produkt AI-Act-konform sei — Konformität bezieht sich auf ein System in einer Verwendung, nicht auf ein Produkt. Dass keine Halluzinationen auftreten — technisch nicht zusicherbar. Dass der Kunde keine eigenen Pflichten habe — Betreiberpflichten entstehen bei ihm.

Die erste ist die verbreitetste und die gefährlichste, weil sie beim Kunden eine Erwartung erzeugt, die seine eigene Bewertung ersetzen soll.

## Kostenseite

| | Skaliert mit Kundenzahl | Skaliert mit Funktionszahl |
|---|---|---|
| technische Dokumentation | nein | ja |
| Testsätze | nein | ja |
| Einstufung | nein | ja |
| **Kundenanfragen zur Compliance** | **ja** | nein |
| Vorfallbearbeitung | ja | ja |

Die vierte Zeile ist der Posten, der überrascht — und der durch eine einmal erstellte Antwortseite am billigsten zu beherrschen ist.

## Weg durch das Repository

1. [Wer hier Anbieter ist](./knowledge-base/eu-ai-act/scope-and-actors.md) — erst die Rollenkette
2. [Welche Klasse Ihr Produkt hat](./knowledge-base/eu-ai-act/risk-logic.md) — je Funktion
3. [Abhängigkeit vom Modellanbieter](./knowledge-base/eu-ai-act/provider-dependency-logic.md) — Testsatz einrichten
4. [Release und Änderungen](./knowledge-base/eu-ai-act/release-and-change-management.md) — die fünf Fragen in die Freigabe
5. [Das Betriebsmodell](./knowledge-base/eu-ai-act/saas-operating-model.md) — Mehrmandanz
6. [Was Enterprise-Kunden verlangen](./knowledge-base/eu-ai-act/integrations-and-enterprise-controls.md) — die Antwortseite
7. [Funktionsregister](./templates/saas-feature-inventory-template.md) füllen

---

Keine Rechtsberatung. Stand: Oktober 2026.
