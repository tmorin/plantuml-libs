# HandshakeProtocol


```text
simpleicons-5/H/HandshakeProtocol
```

```text
include('simpleicons-5/H/HandshakeProtocol')
```



| Illustration | HandshakeProtocol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/HandshakeProtocol.png) | ![illustration for HandshakeProtocol](../../simpleicons-5/H/HandshakeProtocol.Local.png) |




## HandshakeProtocol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons-5/H/HandshakeProtocol')

' renders the element
HandshakeProtocol('HandshakeProtocol', 'Handshake Protocol', 'an optional tech label')
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

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons-5/H/HandshakeProtocol')

' renders the element
HandshakeProtocol('HandshakeProtocol', 'Handshake Protocol', 'an optional tech label')
@enduml
```

