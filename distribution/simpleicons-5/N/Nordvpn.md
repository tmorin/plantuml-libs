# Nordvpn


```text
simpleicons-5/N/Nordvpn
```

```text
include('simpleicons-5/N/Nordvpn')
```



| Illustration | Nordvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nordvpn.png) | ![illustration for Nordvpn](../../simpleicons-5/N/Nordvpn.Local.png) |




## Nordvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nordvpn
include('simpleicons-5/N/Nordvpn')

' renders the element
Nordvpn('Nordvpn', 'Nordvpn', 'an optional tech label')
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

' loads the Item which embeds the element Nordvpn
include('simpleicons-5/N/Nordvpn')

' renders the element
Nordvpn('Nordvpn', 'Nordvpn', 'an optional tech label')
@enduml
```

