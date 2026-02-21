# Tractor


```text
fontawesome/Solid/Tractor
```

```text
include('fontawesome/Solid/Tractor')
```



| Illustration | Tractor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tractor.png) | ![illustration for Tractor](../../fontawesome/Solid/Tractor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TractorXs>`
- `<$TractorSm>`
- `<$TractorMd>`
- `<$TractorLg>`





## Tractor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tractor
include('fontawesome/Solid/Tractor')

' renders the element
Tractor('Tractor', 'Tractor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tractor
include('fontawesome/Solid/Tractor')

' renders the element
Tractor('Tractor', 'Tractor', 'an optional tech label', 'an optional description')
@enduml
```

