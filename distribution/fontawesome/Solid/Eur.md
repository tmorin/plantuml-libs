# Eur


```text
fontawesome/Solid/Eur
```

```text
include('fontawesome/Solid/Eur')
```



| Illustration | Eur |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Eur.png) | ![illustration for Eur](../../fontawesome/Solid/Eur.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EurXs>`
- `<$EurSm>`
- `<$EurMd>`
- `<$EurLg>`





## Eur

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Eur
include('fontawesome/Solid/Eur')

' renders the element
Eur('Eur', 'Eur', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Eur
include('fontawesome/Solid/Eur')

' renders the element
Eur('Eur', 'Eur', 'an optional tech label', 'an optional description')
@enduml
```

