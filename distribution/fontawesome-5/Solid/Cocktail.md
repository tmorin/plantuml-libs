# Cocktail


```text
fontawesome-5/Solid/Cocktail
```

```text
include('fontawesome-5/Solid/Cocktail')
```



| Illustration | Cocktail |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cocktail.png) | ![illustration for Cocktail](../../fontawesome-5/Solid/Cocktail.Local.png) |




## Cocktail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cocktail
include('fontawesome-5/Solid/Cocktail')

' renders the element
Cocktail('Cocktail', 'Cocktail', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cocktail
include('fontawesome-5/Solid/Cocktail')

' renders the element
Cocktail('Cocktail', 'Cocktail', 'an optional tech label')
@enduml
```

