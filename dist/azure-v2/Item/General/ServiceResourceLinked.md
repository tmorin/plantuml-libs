# Service Resource Linked

```text
azure-v2/Item/General/ServiceResourceLinked
```

```text
include('azure-v2/Item/General/ServiceResourceLinked')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceResourceLinked.png)|![](ServiceResourceLinked.card.png)|![](ServiceResourceLinked.element.png)|![](ServiceResourceLinked.group.png)|



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
' loads the ServiceResourceLinked element
include('azure-v2/Item/General/ServiceResourceLinked')
ServiceResourceLinkedCard('service_resource_linked', 'Service Resource Linked', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceLinked element
include('azure-v2/Item/General/ServiceResourceLinked')
ServiceResourceLinkedCard('service_resource_linked', 'Service Resource Linked', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceLinked element
include('azure-v2/Item/General/ServiceResourceLinked')
ServiceResourceLinked('service_resource_linked', 'Service Resource Linked', 'an optional tech field')
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
' loads the ServiceResourceLinked element
include('azure-v2/Item/General/ServiceResourceLinked')
ServiceResourceLinked('service_resource_linked', 'Service Resource Linked', 'an optional tech field')
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
' loads the ServiceResourceLinked element
include('azure-v2/Item/General/ServiceResourceLinked')
ServiceResourceLinkedGroup('service_resource_linked', 'Service Resource Linked', 'an optional tech field'){
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
' loads the ServiceResourceLinked element
include('azure-v2/Item/General/ServiceResourceLinked')
ServiceResourceLinkedGroup('service_resource_linked', 'Service Resource Linked', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

