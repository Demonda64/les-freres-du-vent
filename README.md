# Les Freres du Vent

## Genre
Drame criminel / Saga biker contemporaine / Tragedie fraternelle

## Public
Adultes

## Phase
Concept

## Dossiers
- `00_HOME`: tableau de bord, journal, prochaine action
- `01_CONCEPT`: premise, promesse, public
- `02_STORY_BIBLE`: continuite, canon, chronologie
- `03_CHARACTERS`: personnages
- `04_WORLD`: lieux, contexte, regles
- `05_OUTLINE`: structure et carte des chapitres
- `06_CHAPTERS`: chapitres prepares ou assembles
- `07_SCENES`: scenes individuelles
- `08_DRAFTS`: manuscrit par version
- `09_REVISION`: notes et passes de revision
- `10_EXPORTS`: livrables
- `11_COVER`: brief, prompts et fichiers de couverture
- `12_READER_SITE`: site local de lecture de la saga
- `99_ARCHIVE`: anciennes versions

## Lecture locale

Le lecteur de la saga est disponible dans `12_READER_SITE`.

```powershell
cd C:\Users\HP\Documents\business\AI_BOOK_STUDIO\PROJECTS\LES_FRERES_DU_VENT
powershell -ExecutionPolicy Bypass -File 12_READER_SITE\start_reader.ps1
```

Puis ouvrir:

```text
http://localhost:8765/12_READER_SITE/
```

## Publication GitHub Pages

Le depot est publie via la branche `gh-pages`.

Le lecteur est accessible a:

```text
https://demonda64.github.io/les-freres-du-vent/12_READER_SITE/
```

## Acces public immediat via CDN

Si GitHub Pages n'est pas encore active dans les settings du depot, le lecteur est accessible via jsDelivr:

```text
https://cdn.jsdelivr.net/gh/Demonda64/les-freres-du-vent@main/12_READER_SITE/index.html
```
