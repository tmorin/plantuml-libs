# Handshake


```text
simpleicons/H/Handshake
```

```text
include('simpleicons/H/Handshake')
```



| Illustration | Handshake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Handshake.png) | ![illustration for Handshake](../../simpleicons/H/Handshake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandshakeXs>`
- `<$HandshakeSm>`
- `<$HandshakeMd>`
- `<$HandshakeLg>`





## Handshake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Handshake
include('simpleicons/H/Handshake')

' renders the element
Handshake('Handshake', 'Handshake', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Handshake
include('simpleicons/H/Handshake')

' renders the element
Handshake('Handshake', 'Handshake', 'an optional tech label', 'an optional description')
@enduml
```

