# Durable Subscriber Lock

```text
eip/MessagingEndpoints/DurableSubscriberLock
```

```text
include('eip/MessagingEndpoints/DurableSubscriberLock')
```

|icon|element|
|---|---|
|![](DurableSubscriberLock.png)|![](DurableSubscriberLock.element.png)|



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
' loads the DurableSubscriberLock element
include('eip/MessagingEndpoints/DurableSubscriberLock')
DurableSubscriberLock('durable_subscriber_lock', 'Durable Subscriber Lock', 'an optional tech field')
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
' loads the DurableSubscriberLock element
include('eip/MessagingEndpoints/DurableSubscriberLock')
DurableSubscriberLock('durable_subscriber_lock', 'Durable Subscriber Lock', 'an optional tech field')
@enduml
```

