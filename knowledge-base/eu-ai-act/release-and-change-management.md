# Release und Änderungen

Für Softwareanbieter läuft alles an einer Stelle zusammen: dem Release. Dort entscheidet sich, ob eine Änderung wesentlich ist, ob die Kennzeichnung noch stimmt, ob Nachweise ungültig werden und ob Kunden informiert werden müssen.

Ein Freigabeschritt, der diese Fragen nicht stellt, lässt sie unbeantwortet — dauerhaft, weil es keinen zweiten Anlass gibt.

## Die fünf Fragen im Freigabeschritt

| # | Frage | Bei Ja |
|---|---|---|
| 1 | Ändert sich das Verhalten einer KI-Funktion? | weiter mit 2 bis 5 |
| 2 | Ist die Änderung **wesentlich** nach Art. 3 Nr. 23? | Konformität neu bewerten |
| 3 | Ändert sich die **Zweckbestimmung**? | Einstufung neu, möglicher Rollenwechsel |
| 4 | Werden **Nachweise** mit Versionsbezug ungültig? | auf offen zurücksetzen |
| 5 | Müssen **Kunden** informiert werden? | wie, wann, mit welchem Inhalt |

Diese fünf Fragen in die Freigabevorlage einzubauen ist die wirksamste Einzelmaßnahme für ein SaaS-Produkt — mehr als jede Richtlinie, weil sie an der Stelle greift, an der tatsächlich entschieden wird.

## Wesentliche Änderung: der Nebensatz, der entscheidet

Wesentlich ist eine Änderung, die die Konformität oder die Zweckbestimmung berührt **und die der Anbieter nicht vorab in der technischen Dokumentation bewertet hat**.

Der letzte Teilsatz ist der Hebel. Eine Änderung, die Sie **vorab beschrieben und bewertet** haben, ist nicht wesentlich.

**Praktische Folge für SaaS:** Wer absehbare Änderungen im Vorhinein in die Dokumentation schreibt, erspart sich die Frage bei jedem Release.

| Vorab beschreibbar | Formulierung im Sinne von |
|---|---|
| regelmäßiges Nachtrainieren | in diesem Datenrahmen, mit dieser Überwachung, mit diesen Qualitätsschwellen |
| Modellwechsel beim Zulieferer innerhalb einer Familie | mit anschließendem Testsatzlauf und diesen Abnahmekriterien |
| Erweiterung der Eingabesprachen | mit dieser Validierung je Sprache |

| Nicht vorab beschreibbar | Warum |
|---|---|
| neue Funktion mit anderer Zweckbestimmung | ändert, was das System ist |
| Wechsel auf eine andere Modellfamilie | andere Fehlerarten |
| Ausgabe wirkt ohne menschliche Zwischenstufe | ändert die Aufsichtslage |

Das ist einer der wenigen Fälle, in denen Dokumentationsarbeit unmittelbar Arbeit spart.

## Was der Änderungsverlauf mitführen muss

| Datum | Version | Änderung | Wesentlich? | Begründung | Kunden informiert | Durch |
|---|---|---|---|---|---|---|

Zwei Besonderheiten für SaaS:

**Modellwechsel beim Zulieferer gehört hinein**, auch wenn Ihre eigene Version unverändert bleibt. Bleibt Ihre Versionsnummer gleich, hat der Modellanbieter aber getauscht, ist das System ein anderes — und alle Nachweise zu Genauigkeit und Verhalten beziehen sich auf etwas, das es nicht mehr gibt.

**Mandantenspezifische Konfigurationsänderungen** gehören hinein, wenn Mandanten das Verhalten konfigurieren können. Sonst erklärt der Änderungsverlauf nicht, warum zwei Mandanten unterschiedliche Ergebnisse sehen.

## Kunden informieren: wann und wie

Es gibt keine allgemeine Pflicht, jeden Modellwechsel anzukündigen. Praktisch gibt es drei Gründe, es zu tun:

| Grund | Welche Kunden |
|---|---|
| sie haben eigene Nachweise mit Versionsbezug | alle mit Compliance-Pflichten |
| sie haben eigene Hochrisiko-Einstufungen | die nach Art. 25 Anbieter wurden |
| ihre Qualitätserwartung ist vertraglich zugesagt | alle mit Leistungszusagen |

**Was eine brauchbare Mitteilung enthält:**

- was sich geändert hat, in einem Satz
- ab wann
- welches Modell und welche Version vorher und nachher
- was sich im Verhalten messbar geändert hat, mit Testsatzergebnis
- ob der Kunde etwas tun muss

Der vierte Punkt ist der, der einen Kunden von einem verlorenen Kunden unterscheidet. „Wir haben das Modell aktualisiert" ist keine Information; „die Trefferquote in Kategorie X ist von 94 auf 91 % gefallen, in Y von 88 auf 93 % gestiegen" ist eine.

## Art. 50 am Releasepunkt

Transparenz nach Art. 50 ist seit **2.8.2026** anwendbar und wird bei Releases am häufigsten unbemerkt gebrochen:

| Änderung | Risiko |
|---|---|
| Oberfläche überarbeitet | Kennzeichnung ist weggefallen oder nicht mehr vor der ersten Eingabe sichtbar |
| neue Funktion mit erzeugtem Text | Kennzeichnung fehlt ganz |
| Chatfunktion in einem neuen Bereich | Hinweis nicht übernommen |
| Mobilansicht ergänzt | Hinweis nur in der Desktopansicht |

Die letzte Zeile ist der häufigste Einzelfall. Deshalb gehört in die Freigabeprüfung nicht „Kennzeichnung vorhanden", sondern: **in jeder Ansicht, vor der ersten Eingabe, mit Nachweis samt Produktversion**.

Vorlage: [Transparenz- und Releaseprüfung](../../templates/transparency-and-release-checklist.md)

## Wie viel davon automatisierbar ist

| Schritt | Automatisierbar |
|---|---|
| Testsatz laufen lassen, Abweichungen melden | ja |
| Modellversion aus der Antwort protokollieren | ja, sofern der Anbieter sie liefert |
| Kennzeichnung prüfen | teilweise, über Oberflächentests |
| Änderungsverlauf aus Releases erzeugen | teilweise |
| **Wesentlichkeit bewerten** | **nein** |
| Kundenmitteilung entscheiden | nein |

Die beiden Nein-Zeilen sind die, für die der Freigabeschritt existiert. Alles darüber sollte laufen, ohne dass jemand daran denkt — sonst wird es beim dritten Release vergessen.

## Weiter

[Abhängigkeit vom Modellanbieter](./provider-dependency-logic.md) · [Transparenz- und Releaseprüfung](../../templates/transparency-and-release-checklist.md)
