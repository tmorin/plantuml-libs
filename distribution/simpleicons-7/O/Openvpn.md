# Openvpn


```text
simpleicons-7/O/Openvpn
```

```text
include('simpleicons-7/O/Openvpn')
```



| Illustration | Openvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/O/Openvpn.png) | ![illustration for Openvpn](../../simpleicons-7/O/Openvpn.Local.png) |




## Openvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openvpn
include('simpleicons-7/O/Openvpn')

' renders the element
Openvpn('Openvpn', 'Openvpn', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Openvpn
include('simpleicons-7/O/Openvpn')

' renders the element
Openvpn('Openvpn', 'Openvpn', 'an optional tech label')
@enduml
```

