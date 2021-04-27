# Message Filter

```text
eip/MessageRouting/MessageFilter
```

```text
include('eip/MessageRouting/MessageFilter')
```

|icon|element|
|---|---|
|![](MessageFilter.png)|![](MessageFilter.element.png)|



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
' loads the MessageFilter element
include('eip/MessageRouting/MessageFilter')
MessageFilter('message_filter', 'Message Filter', 'an optional tech field')
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
' loads the MessageFilter element
include('eip/MessageRouting/MessageFilter')
MessageFilter('message_filter', 'Message Filter', 'an optional tech field')
@enduml
```

