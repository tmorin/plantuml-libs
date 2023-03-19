# MagnifyingGlassChart


```text
fontawesome-6/Solid/MagnifyingGlassChart
```

```text
include('fontawesome-6/Solid/MagnifyingGlassChart')
```



| Illustration | MagnifyingGlassChart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MagnifyingGlassChart.png) | ![illustration for MagnifyingGlassChart](../../fontawesome-6/Solid/MagnifyingGlassChart.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MagnifyingGlassChart
include('fontawesome-6/Solid/MagnifyingGlassChart')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MagnifyingGlassChart
include('fontawesome-6/Solid/MagnifyingGlassChart')

' renders the element
MagnifyingGlassChart('MagnifyingGlassChart', 'Magnifying Glass Chart', 'an optional tech label', 'an optional description')
@enduml
```

