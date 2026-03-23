# TemperatureDown


```text
fontawesome/Solid/TemperatureDown
```

```text
include('fontawesome/Solid/TemperatureDown')
```



| Illustration | TemperatureDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TemperatureDown.png) | ![illustration for TemperatureDown](../../fontawesome/Solid/TemperatureDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemperatureDownXs>`
- `<$TemperatureDownSm>`
- `<$TemperatureDownMd>`
- `<$TemperatureDownLg>`





## TemperatureDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureDown
include('fontawesome/Solid/TemperatureDown')

' renders the element
TemperatureDown('TemperatureDown', 'Temperature Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TemperatureDown
include('fontawesome/Solid/TemperatureDown')

' renders the element
TemperatureDown('TemperatureDown', 'Temperature Down', 'an optional tech label', 'an optional description')
@enduml
```

