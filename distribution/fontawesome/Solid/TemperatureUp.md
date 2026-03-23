# TemperatureUp


```text
fontawesome/Solid/TemperatureUp
```

```text
include('fontawesome/Solid/TemperatureUp')
```



| Illustration | TemperatureUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TemperatureUp.png) | ![illustration for TemperatureUp](../../fontawesome/Solid/TemperatureUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemperatureUpXs>`
- `<$TemperatureUpSm>`
- `<$TemperatureUpMd>`
- `<$TemperatureUpLg>`





## TemperatureUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureUp
include('fontawesome/Solid/TemperatureUp')

' renders the element
TemperatureUp('TemperatureUp', 'Temperature Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TemperatureUp
include('fontawesome/Solid/TemperatureUp')

' renders the element
TemperatureUp('TemperatureUp', 'Temperature Up', 'an optional tech label', 'an optional description')
@enduml
```

