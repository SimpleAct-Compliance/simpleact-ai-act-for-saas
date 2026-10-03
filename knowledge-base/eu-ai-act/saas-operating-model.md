# Das Betriebsmodell

Mehrmandanz ist der Punkt, an dem allgemeine Leitfäden nicht mehr helfen. Sie gehen von einem System und einem Betreiber aus. Bei SaaS gibt es **ein System und viele Betreiber** — mit derselben Zweckbestimmung und unterschiedlicher tatsächlicher Verwendung.

## Die vier Fragen, die das Modell bestimmen

### 1 Teilen Mandanten eine Modellinstanz?

| Lage | Folge für die Einstufung |
|---|---|
| gemeinsame Instanz, keine mandantenspezifische Anpassung | eine Einstufung je Funktion, für alle Mandanten |
| gemeinsame Instanz, mandantenspezifische Konfiguration | eine Einstufung mit Konfigurationsrahmen, siehe Frage 3 |
| eigene Instanz je Mandant | je Mandant eine eigene Lage möglich |
| eigene **Feinabstimmung** je Mandant | je Mandant ein anderes System |

Die letzte Zeile ist die aufwendigste und wird am leichtesten unterschätzt. Wer je Mandant feinabstimmt, hat nicht ein System mit Varianten, sondern viele Systeme mit gemeinsamer Oberfläche — mit eigener Validierung und eigenem Änderungsverlauf je Mandant.

### 2 Fließen Daten eines Mandanten in Ausgaben für andere?

Eine Ja-Antwort erzeugt zwei Fragen gleichzeitig: eine datenschutzrechtliche (Zweckbindung, Rechtsgrundlage) und eine vertragliche (Vertraulichkeit). Für die Einstufung ist sie meist nicht entscheidend; für Enterprise-Kunden ist sie die erste Frage im Beschaffungsgespräch.

**Was dokumentiert gehört**, auch bei Nein: wie die Trennung technisch erzwungen wird, nicht nur dass sie vorgesehen ist.

### 3 Können Mandanten das Verhalten konfigurieren?

Die kritischste Frage. Wenn Mandanten eigene Eingabeaufforderungen, Regeln oder Schwellen hinterlegen können, **bestimmen sie mit, was das System tut**.

| Konfigurationsart | Risiko |
|---|---|
| Auswahl aus vorgegebenen Vorlagen | gering, Rahmen bleibt gesetzt |
| eigene Textbausteine in einer vorgegebenen Struktur | mittel |
| freie Eingabeaufforderung | **hoch — Zweckbestimmung nur noch gerahmt** |
| eigene Schwellenwerte für automatische Entscheidungen | hoch, berührt Aufsicht und Art. 22 DSGVO |

Freie Konfiguration ist zulässig und muss dokumentiert sein. Was dafür gebraucht wird:

1. die **Grenzen**, die technisch erzwungen werden — nicht nur die, die in den Bedingungen stehen
2. eine Beschreibung in der Betriebsanleitung, was der Mandant mit der Konfiguration in Kauf nimmt
3. ein Hinweis darauf, dass eine Konfiguration außerhalb der Zweckbestimmung den Mandanten nach Art. 25 zum Anbieter machen kann

Punkt 1 ist der eigentliche Schutz: Was technisch nicht möglich ist, muss nicht vertraglich verboten werden.

### 4 Wie wird die menschliche Aufsicht verteilt?

Bei SaaS wird Aufsicht fast immer **vom Kunden ausgeübt** und von Ihnen nur **ermöglicht**. Das ist die Arbeitsteilung, die Art. 14 vorsieht — und sie bedeutet, dass Ihr Teil überprüfbar sein muss:

| Ihr Beitrag | Woran der Kunde ihn braucht |
|---|---|
| Ausgaben sind als KI-Ausgabe erkennbar | er weiß, was er prüft |
| Ausgaben sind änderbar oder verwerfbar | er kann widersprechen |
| Vertrauensangaben oder Unsicherheitshinweise | er weiß, wo er genauer hinsehen muss |
| **Protokoll über geänderte Ausgaben**, je Mandant | er kann belegen, dass er Aufsicht ausübt |

Die letzte Zeile ist ein unterschätztes Produktmerkmal. Ihr Kunde braucht diese Zahl für seinen eigenen Nachweis; wenn Ihr Produkt sie liefert, erspart er sich eine manuelle Erhebung. Wenn nicht, muss er schätzen — und schätzt in einer Prüfung schlecht.

## Was in die Betriebsanleitung gehört

Für ein SaaS-Produkt ist die Betriebsanleitung nach Art. 13 kein Nebenprodukt, sondern das Dokument, mit dem Ihre Kunden ihre eigenen Pflichten erfüllen. Was darin oft fehlt:

- **die Grenzen**: was die Funktion nicht leistet
- **die Fehlerarten**, mit Beispielen aus dem Produkt
- **woran eine falsche Ausgabe erkennbar ist** — der Punkt, von dem die Aufsicht des Kunden abhängt
- **wofür das Produkt nicht eingesetzt werden darf**, mit Hinweis auf Art. 25
- wie der Kunde erfährt, dass sich das Modell geändert hat

Der vierte Punkt ist gleichzeitig Ihre eigene Absicherung: Eine Verwendung, die Sie ausdrücklich ausgeschlossen haben, ist schwerer als vorhersehbare Fehlanwendung zuzurechnen — allerdings nur, wenn Sie sie nicht trotzdem kennen und dulden.

## Kostenseite, offen gesagt

Die Pflichten aus der Anbieterrolle sind erheblich. Ein kleines Softwareunternehmen mit einer KI-Funktion steht vor Risikomanagement, technischer Dokumentation, Qualitätsmanagement und — bei Hochrisiko — Konformitätsbewertung.

Was davon skaliert, und was nicht:

| | Skaliert mit Kundenzahl | Skaliert mit Funktionszahl |
|---|---|---|
| technische Dokumentation | nein | ja |
| Testsätze | nein | ja |
| Einstufung | nein | ja |
| Kundenanfragen zur Compliance | **ja** | nein |
| Vorfallbearbeitung | ja | ja |

Die vierte Zeile ist der Posten, der überrascht: Mit jedem Enterprise-Kunden kommt eine Beschaffungsprüfung mit denselben vier Fragen. Eine einmal erstellte, belegbare Antwortseite erspart diese Arbeit — das ist der wirtschaftlichste Teil der ganzen Compliance-Arbeit.

Ausführlich: [Was Enterprise-Kunden verlangen](./integrations-and-enterprise-controls.md)

## Weiter

[Release und Änderungen](./release-and-change-management.md) · [Funktionsregister](../../templates/saas-feature-inventory-template.md)
