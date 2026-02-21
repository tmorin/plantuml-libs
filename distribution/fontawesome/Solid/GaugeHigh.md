# GaugeHigh


```text
fontawesome/Solid/GaugeHigh
```

```text
include('fontawesome/Solid/GaugeHigh')
```



| Illustration | GaugeHigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GaugeHigh.png) | ![illustration for GaugeHigh](../../fontawesome/Solid/GaugeHigh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GaugeHighXs>`
- `<$GaugeHighSm>`
- `<$GaugeHighMd>`
- `<$GaugeHighLg>`





## GaugeHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GaugeHigh
include('fontawesome/Solid/GaugeHigh')

' renders the element
GaugeHigh('GaugeHigh', 'Gauge High', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GaugeHigh
include('fontawesome/Solid/GaugeHigh')

' renders the element
GaugeHigh('GaugeHigh', 'Gauge High', 'an optional tech label', 'an optional description')
@enduml
```

