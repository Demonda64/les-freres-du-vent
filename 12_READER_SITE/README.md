# Lecteur local - Les Freres du Vent

Site statique pour lire les tomes directement depuis les fichiers Markdown du projet.

## Lancer

Depuis la racine du projet `LES_FRERES_DU_VENT`:

```powershell
node 12_READER_SITE/server.js
```

Ou directement:

```powershell
powershell -ExecutionPolicy Bypass -File 12_READER_SITE/start_reader.ps1
```

Puis ouvrir:

```text
http://localhost:8765/12_READER_SITE/
```

## Fonctions

- Navigation par chapitre.
- Recherche globale dans les chapitres.
- Vue `Prose`, `Fiche complete` ou `Notes`.
- Taille de police reglable.
- Mode clair / sombre.

Le site charge maintenant le Tome I depuis `../06_CHAPTERS/TOME_01_GOTHIC_ROAD_NOIR`, puis les Tomes II et III depuis leurs dossiers habituels.

Les changements dans les chapitres sont visibles apres rechargement de la page.
