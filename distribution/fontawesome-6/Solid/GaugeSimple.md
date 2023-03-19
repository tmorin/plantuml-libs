# GaugeSimple


```text
fontawesome-6/Solid/GaugeSimple
```

```text
include('fontawesome-6/Solid/GaugeSimple')
```



| Illustration | GaugeSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GaugeSimple.png) | ![illustration for GaugeSimple](../../fontawesome-6/Solid/GaugeSimple.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GaugeSimple
include('fontawesome-6/Solid/GaugeSimple')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GaugeSimple
include('fontawesome-6/Solid/GaugeSimple')

' renders the element
GaugeSimple('GaugeSimple', 'Gauge Simple', 'an optional tech label', 'an optional description')
@enduml
```

