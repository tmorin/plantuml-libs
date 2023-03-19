# ImportantDevices


```text
material-4/Action/ImportantDevices
```

```text
include('material-4/Action/ImportantDevices')
```



| Illustration | ImportantDevices |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ImportantDevices.png) | ![illustration for ImportantDevices](../../material-4/Action/ImportantDevices.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImportantDevicesXs>`
- `<$ImportantDevicesSm>`
- `<$ImportantDevicesMd>`
- `<$ImportantDevicesLg>`





## ImportantDevices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ImportantDevices
include('material-4/Action/ImportantDevices')

' renders the element
ImportantDevices('ImportantDevices', 'Important Devices', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ImportantDevices
include('material-4/Action/ImportantDevices')

' renders the element
ImportantDevices('ImportantDevices', 'Important Devices', 'an optional tech label', 'an optional description')
@enduml
```

