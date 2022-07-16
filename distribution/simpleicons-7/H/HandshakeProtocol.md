# HandshakeProtocol


```text
simpleicons-7/H/HandshakeProtocol
```

```text
include('simpleicons-7/H/HandshakeProtocol')
```



| Illustration | HandshakeProtocol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/HandshakeProtocol.png) | ![illustration for HandshakeProtocol](../../simpleicons-7/H/HandshakeProtocol.Local.png) |




## HandshakeProtocol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons-7/H/HandshakeProtocol')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element HandshakeProtocol
include('simpleicons-7/H/HandshakeProtocol')

' renders the element
HandshakeProtocol('HandshakeProtocol', 'Handshake Protocol', 'an optional tech label')
@enduml
```

