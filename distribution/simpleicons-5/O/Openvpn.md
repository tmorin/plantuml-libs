# Openvpn


```text
simpleicons-5/O/Openvpn
```

```text
include('simpleicons-5/O/Openvpn')
```



| Illustration | Openvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Openvpn.png) | ![illustration for Openvpn](../../simpleicons-5/O/Openvpn.Local.png) |




## Openvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openvpn
include('simpleicons-5/O/Openvpn')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Openvpn
include('simpleicons-5/O/Openvpn')

' renders the element
Openvpn('Openvpn', 'Openvpn', 'an optional tech label')
@enduml
```

