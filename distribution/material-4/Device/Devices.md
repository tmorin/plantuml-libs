# Devices


```text
material-4/Device/Devices
```

```text
include('material-4/Device/Devices')
```



| Illustration | Devices |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/Devices.png) | ![illustration for Devices](../../material-4/Device/Devices.Local.png) |




## Devices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Devices
include('material-4/Device/Devices')

' renders the element
Devices('Devices', 'Devices', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Devices
include('material-4/Device/Devices')

' renders the element
Devices('Devices', 'Devices', 'an optional tech label')
@enduml
```

