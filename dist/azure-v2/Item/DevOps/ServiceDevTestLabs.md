# Service Dev Test Labs

```text
azure-v2/Item/DevOps/ServiceDevTestLabs
```

```text
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDevTestLabs.png)|![](ServiceDevTestLabs.card.png)|![](ServiceDevTestLabs.element.png)|![](ServiceDevTestLabs.group.png)|



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
' loads the ServiceDevTestLabs element
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
ServiceDevTestLabsCard('service_dev_test_labs', 'Service Dev Test Labs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDevTestLabs element
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
ServiceDevTestLabsCard('service_dev_test_labs', 'Service Dev Test Labs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDevTestLabs element
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
ServiceDevTestLabs('service_dev_test_labs', 'Service Dev Test Labs', 'an optional tech field')
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
' loads the ServiceDevTestLabs element
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
ServiceDevTestLabs('service_dev_test_labs', 'Service Dev Test Labs', 'an optional tech field')
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
' loads the ServiceDevTestLabs element
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
ServiceDevTestLabsGroup('service_dev_test_labs', 'Service Dev Test Labs', 'an optional tech field'){
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
' loads the ServiceDevTestLabs element
include('azure-v2/Item/DevOps/ServiceDevTestLabs')
ServiceDevTestLabsGroup('service_dev_test_labs', 'Service Dev Test Labs', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

