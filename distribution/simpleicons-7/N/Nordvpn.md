# Nordvpn


```text
simpleicons-7/N/Nordvpn
```

```text
include('simpleicons-7/N/Nordvpn')
```



| Illustration | Nordvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nordvpn.png) | ![illustration for Nordvpn](../../simpleicons-7/N/Nordvpn.Local.png) |




## Nordvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nordvpn
include('simpleicons-7/N/Nordvpn')

' renders the element
Nordvpn('Nordvpn', 'Nordvpn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nordvpn
include('simpleicons-7/N/Nordvpn')

' renders the element
Nordvpn('Nordvpn', 'Nordvpn', 'an optional tech label', 'an optional description')
@enduml
```

