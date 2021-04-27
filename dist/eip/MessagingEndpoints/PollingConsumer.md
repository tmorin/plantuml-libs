# Polling Consumer

```text
eip/MessagingEndpoints/PollingConsumer
```

```text
include('eip/MessagingEndpoints/PollingConsumer')
```

|icon|element|
|---|---|
|![](PollingConsumer.png)|![](PollingConsumer.element.png)|



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
' loads the PollingConsumer element
include('eip/MessagingEndpoints/PollingConsumer')
PollingConsumer('polling_consumer', 'Polling Consumer', 'an optional tech field')
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
' loads the PollingConsumer element
include('eip/MessagingEndpoints/PollingConsumer')
PollingConsumer('polling_consumer', 'Polling Consumer', 'an optional tech field')
@enduml
```

