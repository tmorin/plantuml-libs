# VpnLock


```text
material-4/Notification/VpnLock
```

```text
include('material-4/Notification/VpnLock')
```



| Illustration | VpnLock |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/VpnLock.png) | ![illustration for VpnLock](../../material-4/Notification/VpnLock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VpnLockXs>`
- `<$VpnLockSm>`
- `<$VpnLockMd>`
- `<$VpnLockLg>`





## VpnLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VpnLock
include('material-4/Notification/VpnLock')

' renders the element
VpnLock('VpnLock', 'Vpn Lock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VpnLock
include('material-4/Notification/VpnLock')

' renders the element
VpnLock('VpnLock', 'Vpn Lock', 'an optional tech label', 'an optional description')
@enduml
```

