# Suitcase


```text
fontawesome/Solid/Suitcase
```

```text
include('fontawesome/Solid/Suitcase')
```



| Illustration | Suitcase |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Suitcase.png) | ![illustration for Suitcase](../../fontawesome/Solid/Suitcase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuitcaseXs>`
- `<$SuitcaseSm>`
- `<$SuitcaseMd>`
- `<$SuitcaseLg>`





## Suitcase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Suitcase
include('fontawesome/Solid/Suitcase')

' renders the element
Suitcase('Suitcase', 'Suitcase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suitcase
include('fontawesome/Solid/Suitcase')

' renders the element
Suitcase('Suitcase', 'Suitcase', 'an optional tech label', 'an optional description')
@enduml
```

