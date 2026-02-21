# Devices


```text
material/Device/Devices
```

```text
include('material/Device/Devices')
```



| Illustration | Devices |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/Devices.png) | ![illustration for Devices](../../material/Device/Devices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DevicesXs>`
- `<$DevicesSm>`
- `<$DevicesMd>`
- `<$DevicesLg>`





## Devices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Devices
include('material/Device/Devices')

' renders the element
Devices('Devices', 'Devices', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Devices
include('material/Device/Devices')

' renders the element
Devices('Devices', 'Devices', 'an optional tech label', 'an optional description')
@enduml
```

