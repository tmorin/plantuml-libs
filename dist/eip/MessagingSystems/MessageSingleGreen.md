# Message Single Green

```text
eip/MessagingSystems/MessageSingleGreen
```

```text
include('eip/MessagingSystems/MessageSingleGreen')
```

|icon|element|
|---|---|
|![](MessageSingleGreen.png)|![](MessageSingleGreen.element.png)|



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
' loads the MessageSingleGreen element
include('eip/MessagingSystems/MessageSingleGreen')
MessageSingleGreen('message_single_green', 'Message Single Green', 'an optional tech field')
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
' loads the MessageSingleGreen element
include('eip/MessagingSystems/MessageSingleGreen')
MessageSingleGreen('message_single_green', 'Message Single Green', 'an optional tech field')
@enduml
```

