# Envelope Open

```text
fontawesome-5.15/Regular/EnvelopeOpen
```

```text
include('fontawesome-5.15/Regular/EnvelopeOpen')
```

|icon|element|
|---|---|
|![](EnvelopeOpen.png)|![](EnvelopeOpen.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the EnvelopeOpen element
include('fontawesome-5.15/Regular/EnvelopeOpen')
EnvelopeOpen('envelope_open', 'Envelope Open', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the EnvelopeOpen element
include('fontawesome-5.15/Regular/EnvelopeOpen')
EnvelopeOpen('envelope_open', 'Envelope Open', 'an optional tech field')
@enduml
```

