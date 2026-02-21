# SolarPanel


```text
fontawesome/Solid/SolarPanel
```

```text
include('fontawesome/Solid/SolarPanel')
```



| Illustration | SolarPanel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SolarPanel.png) | ![illustration for SolarPanel](../../fontawesome/Solid/SolarPanel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SolarPanelXs>`
- `<$SolarPanelSm>`
- `<$SolarPanelMd>`
- `<$SolarPanelLg>`





## SolarPanel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SolarPanel
include('fontawesome/Solid/SolarPanel')

' renders the element
SolarPanel('SolarPanel', 'Solar Panel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SolarPanel
include('fontawesome/Solid/SolarPanel')

' renders the element
SolarPanel('SolarPanel', 'Solar Panel', 'an optional tech label', 'an optional description')
@enduml
```

