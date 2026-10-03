# Das Verfahren in Kurzform

Drei Fragen, die für Softwareanbieter alles bestimmen:

1. **Sind wir Anbieter?** Steht unser Name auf der Funktion, und rufen Kunden uns bei Fehlern an — dann ja.
2. **Welche Angaben haben wir nicht?** Alles, was nur der Modellanbieter weiß.
3. **Wo greifen wir ein?** Am Release. Dort und nur dort.

## Die Rollenkette

```
  Modellanbieter  ->  Sie  ->  Ihr Kunde  ->  dessen Kunden
     Anbieter      Anbieter    Betreiber
     des Modells   des Systems  (bis Art. 25 greift)
```

Sie sind gleichzeitig **Betreiber** eines fremden Modells und **Anbieter** Ihres Systems. Beide Kataloge gelten, für verschiedene Gegenstände.

## Die drei Angaben, die Sie nicht haben

| Angabe | Folge, wenn sie fehlt |
|---|---|
| Trainingsdatenherkunft | Anhang IV Abschnitt 2 unvollständig |
| Entwurfsentscheidungen des Modells | Anhang IV Abschnitt 2 unvollständig |
| **Modellversion und ihre Änderungen** | **alle Nachweise zeitlich unzuordenbar** |

Was zu tun ist: die Fragen vor den Vertrag stellen, und die Lücke mit Datum der Anfrage dokumentieren. Eine dokumentierte Anbieterlücke ist ein Befund gegen ihn — dieselbe Lücke ohne Dokumentation ist ein Befund gegen Sie.

## Der Releasepunkt: fünf Fragen

- Ändert sich das Verhalten einer KI-Funktion?
- Ist die Änderung **wesentlich** nach Art. 3 Nr. 23?
- Ändert sich die **Zweckbestimmung**?
- Werden **Nachweise** mit Versionsbezug ungültig?
- Müssen **Kunden** informiert werden?

Diese fünf in die Freigabevorlage einzubauen ist die wirksamste Einzelmaßnahme — wirksamer als jede Richtlinie, weil sie dort greift, wo entschieden wird.

**Der Hebel bei Frage 2:** Wesentlich ist eine Änderung, die der Anbieter **nicht vorab bewertet** hat. Wer absehbare Änderungen im Vorhinein beschreibt, hat sie später nicht als wesentlich zu behandeln.

## Was heute gilt

| Pflicht | Seit | Für SaaS |
|---|---|---|
| Art. 5 verbotene Praktiken | 2.2.2025 | Emotionserkennung in Gesprächsanalysen |
| Art. 4 KI-Kompetenz | 2.2.2025 | eigene Beschäftigte |
| **Art. 50 Transparenz** | **2.8.2026** | **jede Chatfunktion, jeder erzeugte Text** |
| Anhang III Hochrisiko | 2.12.2027 | Vorarbeit |

Art. 50 ist für ein Produkt mit KI-Funktionen die dringende Zeile — und die, die bei Releases am häufigsten unbemerkt gebrochen wird. Der Prüfpunkt lautet: **in jeder Ansicht, vor der ersten Eingabe, mit Nachweis samt Produktversion.**

## Die zwei Zahlen, die Ihr Produkt liefern sollte

| Kennzahl | Wofür |
|---|---|
| geänderte oder verworfene Ausgaben je Mandant | Ihr Kunde braucht sie für seinen Art.-14-Nachweis |
| Modellversion je Zeitraum und Mandant | zeitliche Zuordnung aller Nachweise, auch Ihrer |

Beides ist technisch klein und als Produktmerkmal wertvoll.

## Was Kunden fragen werden

Vier Fragen, in jeder Beschaffungsprüfung: Welche Funktionen nutzen KI? Welches Modell, von wem, in welcher Version? Werden unsere Daten zum Training verwendet, und wo steht das? Wie erfahren wir von Modelländerungen?

Eine Seite mit belegbaren Antworten erspart die zwanzigfache Einzelbeantwortung. Das ist der wirtschaftlichste Teil der ganzen Compliance-Arbeit.

## Weiter

[Wer hier Anbieter ist](./knowledge-base/eu-ai-act/scope-and-actors.md) · [Prüfliste](./checklist.md) · [Vorlagen](./templates/template-overview.md)
