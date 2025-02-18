# Wireguard


```text
simpleicons-14/W/Wireguard
```

```text
include('simpleicons-14/W/Wireguard')
```



| Illustration | Wireguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wireguard.png) | ![illustration for Wireguard](../../simpleicons-14/W/Wireguard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WireguardXs>`
- `<$WireguardSm>`
- `<$WireguardMd>`
- `<$WireguardLg>`





## Wireguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wireguard
include('simpleicons-14/W/Wireguard')

' renders the element
Wireguard('Wireguard', 'Wireguard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wireguard
include('simpleicons-14/W/Wireguard')

' renders the element
Wireguard('Wireguard', 'Wireguard', 'an optional tech label', 'an optional description')
@enduml
```

