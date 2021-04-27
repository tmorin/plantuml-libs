# Message Single Orange

```text
eip/MessagingSystems/MessageSingleOrange
```

```text
include('eip/MessagingSystems/MessageSingleOrange')
```

|icon|element|
|---|---|
|![](MessageSingleOrange.png)|![](MessageSingleOrange.element.png)|



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
' loads the MessageSingleOrange element
include('eip/MessagingSystems/MessageSingleOrange')
MessageSingleOrange('message_single_orange', 'Message Single Orange', 'an optional tech field')
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
' loads the MessageSingleOrange element
include('eip/MessagingSystems/MessageSingleOrange')
MessageSingleOrange('message_single_orange', 'Message Single Orange', 'an optional tech field')
@enduml
```

