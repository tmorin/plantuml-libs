# Service Activator

```text
eip/MessagingEndpoints/ServiceActivator
```

```text
include('eip/MessagingEndpoints/ServiceActivator')
```

|icon|element|
|---|---|
|![](ServiceActivator.png)|![](ServiceActivator.element.png)|



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
' loads the ServiceActivator element
include('eip/MessagingEndpoints/ServiceActivator')
ServiceActivator('service_activator', 'Service Activator', 'an optional tech field')
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
' loads the ServiceActivator element
include('eip/MessagingEndpoints/ServiceActivator')
ServiceActivator('service_activator', 'Service Activator', 'an optional tech field')
@enduml
```

