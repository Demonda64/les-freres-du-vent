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
- `12_READER_SITE`: site local de lecture du Tome I
- `99_ARCHIVE`: anciennes versions

## Lecture locale

Le lecteur du Tome I est disponible dans `12_READER_SITE`.

```powershell
cd C:\Users\HP\Documents\business\AI_BOOK_STUDIO\PROJECTS\LES_FRERES_DU_VENT
powershell -ExecutionPolicy Bypass -File 12_READER_SITE\start_reader.ps1
```

Puis ouvrir:

```text
http://localhost:8765/12_READER_SITE/
```

## Publication GitHub Pages

Le workflow `.github/workflows/pages.yml` publie le projet statique sur GitHub Pages.

Une fois le depot pousse sur GitHub, le lecteur sera accessible a:

```text
https://<OWNER>.github.io/<REPO>/12_READER_SITE/
```
