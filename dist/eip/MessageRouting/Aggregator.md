# Aggregator

```text
eip/MessageRouting/Aggregator
```

```text
include('eip/MessageRouting/Aggregator')
```

|icon|element|
|---|---|
|![](Aggregator.png)|![](Aggregator.element.png)|



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
' loads the Aggregator element
include('eip/MessageRouting/Aggregator')
Aggregator('aggregator', 'Aggregator', 'an optional tech field')
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
' loads the Aggregator element
include('eip/MessageRouting/Aggregator')
Aggregator('aggregator', 'Aggregator', 'an optional tech field')
@enduml
```

