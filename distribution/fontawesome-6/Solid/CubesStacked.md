# CubesStacked


```text
fontawesome-6/Solid/CubesStacked
```

```text
include('fontawesome-6/Solid/CubesStacked')
```



| Illustration | CubesStacked |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CubesStacked.png) | ![illustration for CubesStacked](../../fontawesome-6/Solid/CubesStacked.Local.png) |




## CubesStacked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CubesStacked
include('fontawesome-6/Solid/CubesStacked')

' renders the element
CubesStacked('CubesStacked', 'Cubes Stacked', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CubesStacked
include('fontawesome-6/Solid/CubesStacked')

' renders the element
CubesStacked('CubesStacked', 'Cubes Stacked', 'an optional tech label')
@enduml
```

