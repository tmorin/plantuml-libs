# TachometerAverage


```text
fontawesome/Solid/TachometerAverage
```

```text
include('fontawesome/Solid/TachometerAverage')
```



| Illustration | TachometerAverage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TachometerAverage.png) | ![illustration for TachometerAverage](../../fontawesome/Solid/TachometerAverage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachometerAverageXs>`
- `<$TachometerAverageSm>`
- `<$TachometerAverageMd>`
- `<$TachometerAverageLg>`





## TachometerAverage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachometerAverage
include('fontawesome/Solid/TachometerAverage')

' renders the element
TachometerAverage('TachometerAverage', 'Tachometer Average', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TachometerAverage
include('fontawesome/Solid/TachometerAverage')

' renders the element
TachometerAverage('TachometerAverage', 'Tachometer Average', 'an optional tech label', 'an optional description')
@enduml
```

