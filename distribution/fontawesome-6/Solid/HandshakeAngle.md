# HandshakeAngle


```text
fontawesome-6/Solid/HandshakeAngle
```

```text
include('fontawesome-6/Solid/HandshakeAngle')
```



| Illustration | HandshakeAngle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandshakeAngle.png) | ![illustration for HandshakeAngle](../../fontawesome-6/Solid/HandshakeAngle.Local.png) |




## HandshakeAngle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandshakeAngle
include('fontawesome-6/Solid/HandshakeAngle')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandshakeAngle
include('fontawesome-6/Solid/HandshakeAngle')

' renders the element
HandshakeAngle('HandshakeAngle', 'Handshake Angle', 'an optional tech label', 'an optional description')
@enduml
```

