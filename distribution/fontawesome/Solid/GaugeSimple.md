# GaugeSimple


```text
fontawesome/Solid/GaugeSimple
```

```text
include('fontawesome/Solid/GaugeSimple')
```



| Illustration | GaugeSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GaugeSimple.png) | ![illustration for GaugeSimple](../../fontawesome/Solid/GaugeSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GaugeSimpleXs>`
- `<$GaugeSimpleSm>`
- `<$GaugeSimpleMd>`
- `<$GaugeSimpleLg>`





## GaugeSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GaugeSimple
include('fontawesome/Solid/GaugeSimple')

' renders the element
GaugeSimple('GaugeSimple', 'Gauge Simple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GaugeSimple
include('fontawesome/Solid/GaugeSimple')

' renders the element
GaugeSimple('GaugeSimple', 'Gauge Simple', 'an optional tech label', 'an optional description')
@enduml
```

