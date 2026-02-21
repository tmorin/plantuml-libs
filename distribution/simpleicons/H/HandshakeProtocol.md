# HandshakeProtocol


```text
simpleicons/H/HandshakeProtocol
```

```text
include('simpleicons/H/HandshakeProtocol')
```



| Illustration | HandshakeProtocol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/HandshakeProtocol.png) | ![illustration for HandshakeProtocol](../../simpleicons/H/HandshakeProtocol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandshakeProtocolXs>`
- `<$HandshakeProtocolSm>`
- `<$HandshakeProtocolMd>`
- `<$HandshakeProtocolLg>`





## HandshakeProtocol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons/H/HandshakeProtocol')

' renders the element
HandshakeProtocol('HandshakeProtocol', 'Handshake Protocol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons/H/HandshakeProtocol')

' renders the element
HandshakeProtocol('HandshakeProtocol', 'Handshake Protocol', 'an optional tech label', 'an optional description')
@enduml
```

