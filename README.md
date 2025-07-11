# Projet Library UI

## Aperçu

Ce projet est une bibliothèque de composants UI développée par Michel, Thomas, Quentin et Pierric comme exercice de formation en Intégration Continue et publication de packages npm. L'objectif principal était de mettre en œuvre des workflows GitHub Actions efficaces pour l'automatisation des tests, de la construction et de la publication.

## Équipe

Notre équipe est composée de :
- Michel MoccandJacquet - [GitHub](https://github.com/Kan-A-Pesh)
- Thomas Candille - [GitHub](https://github.com/ThomasCandille)
- Quentin Garnier - [GitHub](https://github.com/F1N3X)
- Pierric Letard - [GitHub](https://github.com/Mrpierrouge)

## Objectif

Les objectifs principaux de ce projet étaient :
1. Mettre en place des pipelines CI/CD en utilisant GitHub Actions
2. S'entraîner à la publication de packages sur npm

## Workflows

### Workflow CI (`ci.yml`)
Ce workflow s'exécute à chaque push et pull request pour assurer la qualité du code :
- **Linting** : Vérifie le formatage et le style du code
- **Tests** : Exécute des tests unitaires pour vérifier le fonctionnement des composants
- **Construction** : S'assure que le projet se compile correctement

### Workflow de Publication (`release.yml`)
Ce workflow gère le processus de versionnement et de publication :
- Déclenché manuellement ou sur des tags spécifiques
- Crée un versionnement sémantique basé sur les messages de commit
- Construit le package pour la distribution
- Publie le package sur npm

### Workflow Chromatic (`chromatic.yml`)
Ce workflow gère les tests visuels :
- Déploie les composants sur Chromatic pour révision visuelle
- Capture des instantanés des composants UI
- Détecte les changements visuels entre les versions
- Fournit une plateforme pour la révision visuelle et l'approbation