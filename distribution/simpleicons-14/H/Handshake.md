# Handshake


```text
simpleicons-14/H/Handshake
```

```text
include('simpleicons-14/H/Handshake')
```



| Illustration | Handshake |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Handshake.png) | ![illustration for Handshake](../../simpleicons-14/H/Handshake.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Handshake
include('simpleicons-14/H/Handshake')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Handshake
include('simpleicons-14/H/Handshake')

' renders the element
Handshake('Handshake', 'Handshake', 'an optional tech label', 'an optional description')
@enduml
```

