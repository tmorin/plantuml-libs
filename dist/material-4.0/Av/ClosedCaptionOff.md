# Closed Caption Off

```text
material-4.0/Av/ClosedCaptionOff
```

```text
include('material-4.0/Av/ClosedCaptionOff')
```

|icon|element|
|---|---|
|![](ClosedCaptionOff.png)|![](ClosedCaptionOff.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the ClosedCaptionOff element
include('material-4.0/Av/ClosedCaptionOff')
ClosedCaptionOff('closed_caption_off', 'Closed Caption Off', 'an optional tech field')
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
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the ClosedCaptionOff element
include('material-4.0/Av/ClosedCaptionOff')
ClosedCaptionOff('closed_caption_off', 'Closed Caption Off', 'an optional tech field')
@enduml
```

