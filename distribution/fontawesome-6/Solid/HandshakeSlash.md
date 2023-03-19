# HandshakeSlash


```text
fontawesome-6/Solid/HandshakeSlash
```

```text
include('fontawesome-6/Solid/HandshakeSlash')
```



| Illustration | HandshakeSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandshakeSlash.png) | ![illustration for HandshakeSlash](../../fontawesome-6/Solid/HandshakeSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandshakeSlashXs>`
- `<$HandshakeSlashSm>`
- `<$HandshakeSlashMd>`
- `<$HandshakeSlashLg>`





## HandshakeSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandshakeSlash
include('fontawesome-6/Solid/HandshakeSlash')

' renders the element
HandshakeSlash('HandshakeSlash', 'Handshake Slash', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandshakeSlash
include('fontawesome-6/Solid/HandshakeSlash')

' renders the element
HandshakeSlash('HandshakeSlash', 'Handshake Slash', 'an optional tech label', 'an optional description')
@enduml
```

