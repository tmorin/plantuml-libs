# Cocktail


```text
fontawesome/Solid/Cocktail
```

```text
include('fontawesome/Solid/Cocktail')
```



| Illustration | Cocktail |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cocktail.png) | ![illustration for Cocktail](../../fontawesome/Solid/Cocktail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CocktailXs>`
- `<$CocktailSm>`
- `<$CocktailMd>`
- `<$CocktailLg>`





## Cocktail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cocktail
include('fontawesome/Solid/Cocktail')

' renders the element
Cocktail('Cocktail', 'Cocktail', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cocktail
include('fontawesome/Solid/Cocktail')

' renders the element
Cocktail('Cocktail', 'Cocktail', 'an optional tech label', 'an optional description')
@enduml
```

