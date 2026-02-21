# PermDeviceInformation


```text
material/Action/PermDeviceInformation
```

```text
include('material/Action/PermDeviceInformation')
```



| Illustration | PermDeviceInformation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PermDeviceInformation.png) | ![illustration for PermDeviceInformation](../../material/Action/PermDeviceInformation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PermDeviceInformationXs>`
- `<$PermDeviceInformationSm>`
- `<$PermDeviceInformationMd>`
- `<$PermDeviceInformationLg>`





## PermDeviceInformation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PermDeviceInformation
include('material/Action/PermDeviceInformation')

' renders the element
PermDeviceInformation('PermDeviceInformation', 'Perm Device Information', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermDeviceInformation
include('material/Action/PermDeviceInformation')

' renders the element
PermDeviceInformation('PermDeviceInformation', 'Perm Device Information', 'an optional tech label', 'an optional description')
@enduml
```

