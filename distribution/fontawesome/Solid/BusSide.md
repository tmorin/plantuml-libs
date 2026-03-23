# BusSide


```text
fontawesome/Solid/BusSide
```

```text
include('fontawesome/Solid/BusSide')
```



| Illustration | BusSide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BusSide.png) | ![illustration for BusSide](../../fontawesome/Solid/BusSide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusSideXs>`
- `<$BusSideSm>`
- `<$BusSideMd>`
- `<$BusSideLg>`





## BusSide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BusSide
include('fontawesome/Solid/BusSide')

' renders the element
BusSide('BusSide', 'Bus Side', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BusSide
include('fontawesome/Solid/BusSide')

' renders the element
BusSide('BusSide', 'Bus Side', 'an optional tech label', 'an optional description')
@enduml
```

