# TemperatureFull


```text
fontawesome/Solid/TemperatureFull
```

```text
include('fontawesome/Solid/TemperatureFull')
```



| Illustration | TemperatureFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TemperatureFull.png) | ![illustration for TemperatureFull](../../fontawesome/Solid/TemperatureFull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemperatureFullXs>`
- `<$TemperatureFullSm>`
- `<$TemperatureFullMd>`
- `<$TemperatureFullLg>`





## TemperatureFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureFull
include('fontawesome/Solid/TemperatureFull')

' renders the element
TemperatureFull('TemperatureFull', 'Temperature Full', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TemperatureFull
include('fontawesome/Solid/TemperatureFull')

' renders the element
TemperatureFull('TemperatureFull', 'Temperature Full', 'an optional tech label', 'an optional description')
@enduml
```

