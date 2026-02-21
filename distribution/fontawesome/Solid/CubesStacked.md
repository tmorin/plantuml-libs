# CubesStacked


```text
fontawesome/Solid/CubesStacked
```

```text
include('fontawesome/Solid/CubesStacked')
```



| Illustration | CubesStacked |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CubesStacked.png) | ![illustration for CubesStacked](../../fontawesome/Solid/CubesStacked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CubesStackedXs>`
- `<$CubesStackedSm>`
- `<$CubesStackedMd>`
- `<$CubesStackedLg>`





## CubesStacked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CubesStacked
include('fontawesome/Solid/CubesStacked')

' renders the element
CubesStacked('CubesStacked', 'Cubes Stacked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CubesStacked
include('fontawesome/Solid/CubesStacked')

' renders the element
CubesStacked('CubesStacked', 'Cubes Stacked', 'an optional tech label', 'an optional description')
@enduml
```

