# HandshakeSlash


```text
fontawesome-5/Solid/HandshakeSlash
```

```text
include('fontawesome-5/Solid/HandshakeSlash')
```



| Illustration | HandshakeSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandshakeSlash.png) | ![illustration for HandshakeSlash](../../fontawesome-5/Solid/HandshakeSlash.Local.png) |




## HandshakeSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandshakeSlash
include('fontawesome-5/Solid/HandshakeSlash')

' renders the element
HandshakeSlash('HandshakeSlash', 'Handshake Slash', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandshakeSlash
include('fontawesome-5/Solid/HandshakeSlash')

' renders the element
HandshakeSlash('HandshakeSlash', 'Handshake Slash', 'an optional tech label')
@enduml
```

