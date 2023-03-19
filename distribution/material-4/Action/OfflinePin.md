# OfflinePin


```text
material-4/Action/OfflinePin
```

```text
include('material-4/Action/OfflinePin')
```



| Illustration | OfflinePin |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OfflinePin.png) | ![illustration for OfflinePin](../../material-4/Action/OfflinePin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OfflinePinXs>`
- `<$OfflinePinSm>`
- `<$OfflinePinMd>`
- `<$OfflinePinLg>`





## OfflinePin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OfflinePin
include('material-4/Action/OfflinePin')

' renders the element
OfflinePin('OfflinePin', 'Offline Pin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element OfflinePin
include('material-4/Action/OfflinePin')

' renders the element
OfflinePin('OfflinePin', 'Offline Pin', 'an optional tech label', 'an optional description')
@enduml
```

