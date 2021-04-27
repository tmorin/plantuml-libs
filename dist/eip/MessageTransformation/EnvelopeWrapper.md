# Envelope Wrapper

```text
eip/MessageTransformation/EnvelopeWrapper
```

```text
include('eip/MessageTransformation/EnvelopeWrapper')
```

|icon|element|
|---|---|
|![](EnvelopeWrapper.png)|![](EnvelopeWrapper.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the EnvelopeWrapper element
include('eip/MessageTransformation/EnvelopeWrapper')
EnvelopeWrapper('envelope_wrapper', 'Envelope Wrapper', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the EnvelopeWrapper element
include('eip/MessageTransformation/EnvelopeWrapper')
EnvelopeWrapper('envelope_wrapper', 'Envelope Wrapper', 'an optional tech field')
@enduml
```

