# Service Input Output

```text
azure-v2/Item/General/ServiceInputOutput
```

```text
include('azure-v2/Item/General/ServiceInputOutput')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceInputOutput.png)|![](ServiceInputOutput.card.png)|![](ServiceInputOutput.element.png)|![](ServiceInputOutput.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceInputOutput element
include('azure-v2/Item/General/ServiceInputOutput')
ServiceInputOutputCard('service_input_output', 'Service Input Output', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceInputOutput element
include('azure-v2/Item/General/ServiceInputOutput')
ServiceInputOutputCard('service_input_output', 'Service Input Output', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceInputOutput element
include('azure-v2/Item/General/ServiceInputOutput')
ServiceInputOutput('service_input_output', 'Service Input Output', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceInputOutput element
include('azure-v2/Item/General/ServiceInputOutput')
ServiceInputOutput('service_input_output', 'Service Input Output', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceInputOutput element
include('azure-v2/Item/General/ServiceInputOutput')
ServiceInputOutputGroup('service_input_output', 'Service Input Output', 'an optional tech field'){
note as note
the content of the group
end note
}
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceInputOutput element
include('azure-v2/Item/General/ServiceInputOutput')
ServiceInputOutputGroup('service_input_output', 'Service Input Output', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

