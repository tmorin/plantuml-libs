# HandshakeAlt


```text
fontawesome/Solid/HandshakeAlt
```

```text
include('fontawesome/Solid/HandshakeAlt')
```



| Illustration | HandshakeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandshakeAlt.png) | ![illustration for HandshakeAlt](../../fontawesome/Solid/HandshakeAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandshakeAltXs>`
- `<$HandshakeAltSm>`
- `<$HandshakeAltMd>`
- `<$HandshakeAltLg>`





## HandshakeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandshakeAlt
include('fontawesome/Solid/HandshakeAlt')

' renders the element
HandshakeAlt('HandshakeAlt', 'Handshake Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandshakeAlt
include('fontawesome/Solid/HandshakeAlt')

' renders the element
HandshakeAlt('HandshakeAlt', 'Handshake Alt', 'an optional tech label', 'an optional description')
@enduml
```

