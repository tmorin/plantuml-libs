# Competing Consumers

```text
eip/MessagingEndpoints/CompetingConsumers
```

```text
include('eip/MessagingEndpoints/CompetingConsumers')
```

|icon|element|
|---|---|
|![](CompetingConsumers.png)|![](CompetingConsumers.element.png)|



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
' loads the CompetingConsumers element
include('eip/MessagingEndpoints/CompetingConsumers')
CompetingConsumers('competing_consumers', 'Competing Consumers', 'an optional tech field')
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
' loads the CompetingConsumers element
include('eip/MessagingEndpoints/CompetingConsumers')
CompetingConsumers('competing_consumers', 'Competing Consumers', 'an optional tech field')
@enduml
```

