# HandshakeProtocol


```text
simpleicons-6/H/HandshakeProtocol
```

```text
include('simpleicons-6/H/HandshakeProtocol')
```



| Illustration | HandshakeProtocol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/HandshakeProtocol.png) | ![illustration for HandshakeProtocol](../../simpleicons-6/H/HandshakeProtocol.Local.png) |




## HandshakeProtocol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons-6/H/HandshakeProtocol')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons-6/H/HandshakeProtocol')

' renders the element
HandshakeProtocol('HandshakeProtocol', 'Handshake Protocol', 'an optional tech label')
@enduml
```

