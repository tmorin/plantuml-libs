# HandshakeAngle


```text
fontawesome/Solid/HandshakeAngle
```

```text
include('fontawesome/Solid/HandshakeAngle')
```



| Illustration | HandshakeAngle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandshakeAngle.png) | ![illustration for HandshakeAngle](../../fontawesome/Solid/HandshakeAngle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandshakeAngleXs>`
- `<$HandshakeAngleSm>`
- `<$HandshakeAngleMd>`
- `<$HandshakeAngleLg>`





## HandshakeAngle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandshakeAngle
include('fontawesome/Solid/HandshakeAngle')

' renders the element
HandshakeAngle('HandshakeAngle', 'Handshake Angle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandshakeAngle
include('fontawesome/Solid/HandshakeAngle')

' renders the element
HandshakeAngle('HandshakeAngle', 'Handshake Angle', 'an optional tech label', 'an optional description')
@enduml
```

