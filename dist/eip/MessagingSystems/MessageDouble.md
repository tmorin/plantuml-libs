# Message Double

```text
eip/MessagingSystems/MessageDouble
```

```text
include('eip/MessagingSystems/MessageDouble')
```

|icon|element|
|---|---|
|![](MessageDouble.png)|![](MessageDouble.element.png)|



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
' loads the MessageDouble element
include('eip/MessagingSystems/MessageDouble')
MessageDouble('message_double', 'Message Double', 'an optional tech field')
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
' loads the MessageDouble element
include('eip/MessagingSystems/MessageDouble')
MessageDouble('message_double', 'Message Double', 'an optional tech field')
@enduml
```

