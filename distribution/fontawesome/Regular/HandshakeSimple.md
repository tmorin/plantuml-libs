# HandshakeSimple


```text
fontawesome/Regular/HandshakeSimple
```

```text
include('fontawesome/Regular/HandshakeSimple')
```



| Illustration | HandshakeSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandshakeSimple.png) | ![illustration for HandshakeSimple](../../fontawesome/Regular/HandshakeSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandshakeSimpleXs>`
- `<$HandshakeSimpleSm>`
- `<$HandshakeSimpleMd>`
- `<$HandshakeSimpleLg>`





## HandshakeSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandshakeSimple
include('fontawesome/Regular/HandshakeSimple')

' renders the element
HandshakeSimple('HandshakeSimple', 'Handshake Simple', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandshakeSimple
include('fontawesome/Regular/HandshakeSimple')

' renders the element
HandshakeSimple('HandshakeSimple', 'Handshake Simple', 'an optional tech label', 'an optional description')
@enduml
```

