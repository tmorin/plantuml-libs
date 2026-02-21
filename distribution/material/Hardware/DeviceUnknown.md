# DeviceUnknown


```text
material/Hardware/DeviceUnknown
```

```text
include('material/Hardware/DeviceUnknown')
```



| Illustration | DeviceUnknown |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/DeviceUnknown.png) | ![illustration for DeviceUnknown](../../material/Hardware/DeviceUnknown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeviceUnknownXs>`
- `<$DeviceUnknownSm>`
- `<$DeviceUnknownMd>`
- `<$DeviceUnknownLg>`





## DeviceUnknown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DeviceUnknown
include('material/Hardware/DeviceUnknown')

' renders the element
DeviceUnknown('DeviceUnknown', 'Device Unknown', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DeviceUnknown
include('material/Hardware/DeviceUnknown')

' renders the element
DeviceUnknown('DeviceUnknown', 'Device Unknown', 'an optional tech label', 'an optional description')
@enduml
```

