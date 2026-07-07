# CLAUDE.md — Landing page PRIM'O

## Contexte

Landing page pour PRIM'O, plateforme B2B SaaS de reconnaissance méritocratique des employés. Le design existe déjà sous forme d'assets fournis — le but est de les assembler avec une animation de pluie de tokens et un tas de pièces d'or en bas de page.

## Assets fournis (à placer dans `/assets` ou `/public`)

- `landingPage-primo.png` — fond de la landing page (vert, avec logo PRIM'O au centre et slogan déjà intégrés dans l'image)
- `token-logo-SF.png` — logo/token PRIM'O, à utiliser pour l'effet de pluie
- avatar 4 — à positionner à **droite**
- avatar 3 — à positionner à **gauche**

## Structure de la page

1. **Fond** : `landingPage-primo.png` en pleine largeur/hauteur (`background-size: cover` ou `<img>` en position absolue en arrière-plan), z-index le plus bas.
2. **Pluie de tokens** : au-dessus du fond, en dessous du contenu.
   - Utiliser `token-logo-SF.png` réduit (taille cible : ~24-40px de large, à ajuster selon rendu — le logo doit rester lisible mais discret, ne pas dominer visuellement)
   - Remplacer les cercles placeholder de la démo précédente par des `<img>` du vrai token
   - Chute en boucle, vitesse et taille variables par token pour un effet naturel (pas synchronisé)
   - Rotation légère pendant la chute pour casser l'effet mécanique
   - Densité modérée : assez pour l'effet "pluie" sans noyer le logo central du fond
   - Opacité variable (0.5–1) pour donner de la profondeur/profondeur de champ
3. **Avatars** :
   - Avatar 4 : positionné à droite de l'écran (vertical center ou aligné avec le logo central, à ajuster selon rendu visuel)
   - Avatar 3 : positionné à gauche de l'écran, symétrique à l'avatar 4
   - Les deux doivent rester visibles au-dessus de la pluie de tokens (z-index supérieur à l'animation de pluie)
4. **Tas de pièces d'or (trésor)** : en bas de la page.
   - Pièces d'or **génériques, sans motif/logo** (juste des cercles dorés avec un léger effet de volume/relief pour suggérer des pièces empilées — pas de texture réaliste ni d'image externe nécessaire, peut être fait en CSS/SVG)
   - Empilées de façon irrégulière pour simuler un tas/trésor (tailles et positions variables, léger chevauchement)
   - Ancrées en bas de viewport, largeur généreuse pour occuper le bas de la page
   - Distinctes visuellement des tokens de la pluie (les tokens qui tombent ont le logo PRIM'O, le tas en bas est un trésor "neutre" en pièces d'or simples)

## Points d'attention techniques

- Animation en CSS pur (`transform`, `@keyframes`) pour rester fluide sur mobile, éviter canvas/JS lourd sauf si nécessaire
- Le fond `landingPage-primo.png` contient déjà logo + slogan → ne pas dupliquer ces éléments en HTML par-dessus
- Vérifier le contraste et la lisibilité des avatars et du tas de pièces sur le fond vert
- Responsive : la scène (fond + pluie + avatars + trésor) doit bien se comporter en mobile (recentrer, réduire densité de pluie si besoin)

## Not in scope

- Pas de logique backend/interaction sur cette page (landing statique)
- Pas de CMS ou contenu dynamique — tout le texte est dans l'image de fond
