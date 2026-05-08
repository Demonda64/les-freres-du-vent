# Lecteur local - Les Freres du Vent

Site statique pour lire le Tome I directement depuis les fichiers Markdown du projet.

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

Le site charge les fichiers depuis `../06_CHAPTERS/TOME_01`, donc les changements dans les chapitres sont visibles apres rechargement de la page.
