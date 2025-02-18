# Nordvpn


```text
simpleicons-14/N/Nordvpn
```

```text
include('simpleicons-14/N/Nordvpn')
```



| Illustration | Nordvpn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nordvpn.png) | ![illustration for Nordvpn](../../simpleicons-14/N/Nordvpn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NordvpnXs>`
- `<$NordvpnSm>`
- `<$NordvpnMd>`
- `<$NordvpnLg>`





## Nordvpn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nordvpn
include('simpleicons-14/N/Nordvpn')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nordvpn
include('simpleicons-14/N/Nordvpn')

' renders the element
Nordvpn('Nordvpn', 'Nordvpn', 'an optional tech label', 'an optional description')
@enduml
```

