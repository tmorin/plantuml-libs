# Sink

```text
eip/MessagingSystems/MessageEndpoint/Sink
```

```text
include('eip/MessagingSystems/MessageEndpoint/Sink')
```

|icon|element|
|---|---|
|![](Sink.png)|![](Sink.element.png)|



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
' loads the Sink element
include('eip/MessagingSystems/MessageEndpoint/Sink')
Sink('sink', 'Sink', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Sink element
include('eip/MessagingSystems/MessageEndpoint/Sink')
Sink('sink', 'Sink', 'an optional tech field')
@enduml
```

