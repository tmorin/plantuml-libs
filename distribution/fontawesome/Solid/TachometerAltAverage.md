# TachometerAltAverage


```text
fontawesome/Solid/TachometerAltAverage
```

```text
include('fontawesome/Solid/TachometerAltAverage')
```



| Illustration | TachometerAltAverage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TachometerAltAverage.png) | ![illustration for TachometerAltAverage](../../fontawesome/Solid/TachometerAltAverage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TachometerAltAverageXs>`
- `<$TachometerAltAverageSm>`
- `<$TachometerAltAverageMd>`
- `<$TachometerAltAverageLg>`





## TachometerAltAverage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TachometerAltAverage
include('fontawesome/Solid/TachometerAltAverage')

' renders the element
TachometerAltAverage('TachometerAltAverage', 'Tachometer Alt Average', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TachometerAltAverage
include('fontawesome/Solid/TachometerAltAverage')

' renders the element
TachometerAltAverage('TachometerAltAverage', 'Tachometer Alt Average', 'an optional tech label', 'an optional description')
@enduml
```

