# EU AI Act für SaaS

**Sie sind möglicherweise Anbieter, ohne es geplant zu haben.** Wer eine KI-Funktion in ein Produkt einbaut, das Kunden benutzen, verlässt die Betreiberrolle — und wer ein fremdes Modell unter eigenem Namen ausliefert, erst recht.

Dieses Repository behandelt die Lagen, die bei Softwareanbietern entstehen und in allgemeinen Leitfäden fehlen: die Rollenkette über mehrere Beteiligte, Mehrmandantenbetrieb, Releasemanagement, und die Abhängigkeit von einem Modellanbieter, der sein Modell ohne Ankündigung tauscht.

*Where the provider/deployer line actually falls for software vendors, and what breaks when the model underneath changes.*

---

## Die vier Lagen

| Lage | Rolle | Kern des Problems |
|---|---|---|
| Sie bauen ein KI-System und liefern es aus | **Anbieter** | vollständiger Pflichtenkatalog |
| Sie bauen ein fremdes Modell ein und liefern unter eigenem Namen | **Anbieter** | Sie schulden Angaben, die Sie nicht haben |
| Sie betreiben KI intern | Betreiber | bis Art. 25 greift |
| Ihr Kunde setzt Ihr Produkt für einen Hochrisikozweck ein | **er** wird Anbieter | er braucht Angaben von Ihnen |

Die zweite und die vierte Zeile sind die, die regelmäßig überraschen. Ausführlich: [Wer hier Anbieter ist](./knowledge-base/eu-ai-act/scope-and-actors.md)

## Das Problem mit der zweiten Lage

Wenn Sie ein Sprachmodell über eine Schnittstelle einbinden und die Funktion unter Ihrem Namen anbieten, sind Sie Anbieter des **Systems**. Der Modellanbieter ist Anbieter des **Modells**. Daraus folgt eine unangenehme Lücke:

| Was Sie schulden | Woher es kommt |
|---|---|
| Zweckbestimmung, Grenzen, Betriebsanleitung | von Ihnen |
| Validierung für Ihren Einsatzzweck | von Ihnen |
| Änderungsverlauf | von Ihnen |
| **Trainingsdatenherkunft** | **nur vom Modellanbieter** |
| **Entwurfsentscheidungen des Modells** | **nur vom Modellanbieter** |
| **Modellversion** | **nur vom Modellanbieter** |

Die drei hervorgehobenen Zeilen können Sie nicht aus eigener Kraft füllen. Was zu tun ist: die Fragen **vor** den Vertrag stellen und die Lücke dokumentieren, wenn der Anbieter nicht liefert — mit Datum der Anfrage. Dann ist es ein Befund gegen ihn.

Ausführlich: [Abhängigkeit vom Modellanbieter](./knowledge-base/eu-ai-act/provider-dependency-logic.md)

## Was heute gilt

| Pflicht | Seit | Für SaaS besonders relevant |
|---|---|---|
| **Art. 5** verbotene Praktiken | 2.2.2025 | Emotionserkennung in Gesprächsanalyse-Funktionen |
| **Art. 4** KI-Kompetenz | 2.2.2025 | eigene Beschäftigte, auch im Support |
| **Art. 50** Transparenz | **2.8.2026** | **jede Chatfunktion, jeder erzeugte Text im Produkt** |
| GPAI | 2.8.2025 | Ihr Modellanbieter — fragen, ob er liefert |

**Hochrisiko nach Anhang III gilt erst ab 2.12.2027.** Art. 50 gilt heute, und für ein Produkt mit Chatfunktion ist das die praktisch wichtigste Zeile der Tabelle.

## Der Releasepunkt

Für Softwareanbieter läuft alles an einer Stelle zusammen: dem **Release**. Dort entscheidet sich, ob eine Änderung wesentlich ist, ob die Kennzeichnung noch stimmt, ob Nachweise ungültig werden und ob Kunden informiert werden müssen.

Ein Freigabeschritt, der diese Fragen nicht stellt, lässt sie unbeantwortet — und zwar dauerhaft, weil es keinen zweiten Anlass gibt.

Ausführlich: [Release und Änderungen](./knowledge-base/eu-ai-act/release-and-change-management.md)

## Was Kunden fragen werden

Unabhängig von der Verordnung, und meist früher als jede Behörde: Ihre Geschäftskunden haben eigene Pflichten und holen die Angaben bei Ihnen. Vier Fragen, die in jeder Beschaffungsprüfung kommen:

1. Welche Funktionen des Produkts verwenden KI?
2. Welches Modell liegt zugrunde, von wem, in welcher Version?
3. Werden Kundendaten zum Training verwendet — und wo steht das?
4. Wie erfahren wir von Änderungen am Modell?

Wer darauf keine belegbare Antwort hat, verliert Abschlüsse, bevor ein Prüfer auftaucht. Ausführlich: [Was Enterprise-Kunden verlangen](./knowledge-base/eu-ai-act/integrations-and-enterprise-controls.md)

## Inhalt

| Dokument | Inhalt |
|---|---|
| [Was wann gilt](./knowledge-base/eu-ai-act/overview.md) | Fristen aus Anbietersicht |
| [Begriffe](./knowledge-base/eu-ai-act/definitions.md) | Inverkehrbringen, Zweckbestimmung, wesentliche Änderung, Version |
| [Wer hier Anbieter ist](./knowledge-base/eu-ai-act/scope-and-actors.md) | die Rollenkette, Art. 25, Mehrmandantenbetrieb |
| [Welche Klasse Ihr Produkt hat](./knowledge-base/eu-ai-act/risk-logic.md) | je Funktion, nicht je Produkt |
| [Das Betriebsmodell](./knowledge-base/eu-ai-act/saas-operating-model.md) | Mehrmandanz, Mandantenkonfiguration, geteilte Modelle |
| [Release und Änderungen](./knowledge-base/eu-ai-act/release-and-change-management.md) | der Freigabepunkt, wesentliche Änderung, Kundeninformation |
| [Abhängigkeit vom Modellanbieter](./knowledge-base/eu-ai-act/provider-dependency-logic.md) | der stille Modellwechsel, Testsätze, Vertragsvorsorge |
| [Was Enterprise-Kunden verlangen](./knowledge-base/eu-ai-act/integrations-and-enterprise-controls.md) | Beschaffungsprüfungen, AVV, Protokollzugang |
| [Funktionsregister](./knowledge-base/eu-ai-act/inventory-and-governance.md) | Inventar je Produktfunktion |

### Vorlagen

| Vorlage | Zweck |
|---|---|
| [Funktionsregister](./templates/saas-feature-inventory-template.md) | ein Eintrag je KI-Funktion im Produkt |
| [Transparenz- und Releaseprüfung](./templates/transparency-and-release-checklist.md) | vor jedem Release |

Maschinenlesbar: [framework/simpleact-framework.json](./framework/simpleact-framework.json) · [llms.txt](./llms.txt)

## Verwandtes

- [Anbieterregister](https://github.com/SimpleAct-Compliance/simpleact-model-vendor-register) — die Fragen vor dem Vertrag
- [Dokumentationsvorlage](https://github.com/SimpleAct-Compliance/simpleact-ai-act-documentation-template) — Anhang IV, wenn Sie Anbieter sind
- [Risikoeinstufung](https://github.com/SimpleAct-Compliance/simpleact-ai-risk-classification-eu) — je Funktion
- [Vorfallmanagement](https://github.com/SimpleAct-Compliance/simpleact-incident-management) — Art. 72 und 73

## In Software umsetzen

[SimpleAct](https://simpleact.de) führt Funktions-, Modell- und Anbieterregister verknüpft mit Einstufung, Dokumentation und Freigabeläufen: **[AI Act Software](https://simpleact.de/ai-act-software)**

## Stand und Lizenz

Zuletzt aktualisiert: 2026-10-03 · MIT — frei nutzbar, auch kommerziell. Keine Rechtsberatung.
