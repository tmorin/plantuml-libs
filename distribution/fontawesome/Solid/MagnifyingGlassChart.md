# MagnifyingGlassChart


```text
fontawesome/Solid/MagnifyingGlassChart
```

```text
include('fontawesome/Solid/MagnifyingGlassChart')
```



| Illustration | MagnifyingGlassChart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MagnifyingGlassChart.png) | ![illustration for MagnifyingGlassChart](../../fontawesome/Solid/MagnifyingGlassChart.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagnifyingGlassChartXs>`
- `<$MagnifyingGlassChartSm>`
- `<$MagnifyingGlassChartMd>`
- `<$MagnifyingGlassChartLg>`





## MagnifyingGlassChart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MagnifyingGlassChart
include('fontawesome/Solid/MagnifyingGlassChart')

' renders the element
MagnifyingGlassChart('MagnifyingGlassChart', 'Magnifying Glass Chart', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MagnifyingGlassChart
include('fontawesome/Solid/MagnifyingGlassChart')

' renders the element
MagnifyingGlassChart('MagnifyingGlassChart', 'Magnifying Glass Chart', 'an optional tech label', 'an optional description')
@enduml
```

