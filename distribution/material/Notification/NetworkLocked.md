# NetworkLocked


```text
material/Notification/NetworkLocked
```

```text
include('material/Notification/NetworkLocked')
```



| Illustration | NetworkLocked |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/NetworkLocked.png) | ![illustration for NetworkLocked](../../material/Notification/NetworkLocked.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NetworkLockedXs>`
- `<$NetworkLockedSm>`
- `<$NetworkLockedMd>`
- `<$NetworkLockedLg>`





## NetworkLocked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NetworkLocked
include('material/Notification/NetworkLocked')

' renders the element
NetworkLocked('NetworkLocked', 'Network Locked', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NetworkLocked
include('material/Notification/NetworkLocked')

' renders the element
NetworkLocked('NetworkLocked', 'Network Locked', 'an optional tech label', 'an optional description')
@enduml
```

