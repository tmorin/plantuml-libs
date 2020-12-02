# Smile Beam

```text
fontawesome-5.15/Regular/SmileBeam
```

```text
include('fontawesome-5.15/Regular/SmileBeam')
```

|icon|element|
|---|---|
|![](SmileBeam.png)|![](SmileBeam.element.png)|



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
' loads the SmileBeam element
include('fontawesome-5.15/Regular/SmileBeam')
SmileBeam('smile_beam', 'Smile Beam', 'an optional tech field')
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
' loads the SmileBeam element
include('fontawesome-5.15/Regular/SmileBeam')
SmileBeam('smile_beam', 'Smile Beam', 'an optional tech field')
@enduml
```

