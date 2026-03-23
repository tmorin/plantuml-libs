# GaugeSimpleMed


```text
fontawesome/Solid/GaugeSimpleMed
```

```text
include('fontawesome/Solid/GaugeSimpleMed')
```



| Illustration | GaugeSimpleMed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GaugeSimpleMed.png) | ![illustration for GaugeSimpleMed](../../fontawesome/Solid/GaugeSimpleMed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GaugeSimpleMedXs>`
- `<$GaugeSimpleMedSm>`
- `<$GaugeSimpleMedMd>`
- `<$GaugeSimpleMedLg>`





## GaugeSimpleMed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GaugeSimpleMed
include('fontawesome/Solid/GaugeSimpleMed')

' renders the element
GaugeSimpleMed('GaugeSimpleMed', 'Gauge Simple Med', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GaugeSimpleMed
include('fontawesome/Solid/GaugeSimpleMed')

' renders the element
GaugeSimpleMed('GaugeSimpleMed', 'Gauge Simple Med', 'an optional tech label', 'an optional description')
@enduml
```

