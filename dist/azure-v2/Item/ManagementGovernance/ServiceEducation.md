# Service Education

```text
azure-v2/Item/ManagementGovernance/ServiceEducation
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceEducation.png)|![](ServiceEducation.card.png)|![](ServiceEducation.element.png)|![](ServiceEducation.group.png)|



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
' loads the ServiceEducation element
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
ServiceEducationCard('service_education', 'Service Education', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceEducation element
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
ServiceEducationCard('service_education', 'Service Education', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceEducation element
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
ServiceEducation('service_education', 'Service Education', 'an optional tech field')
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
' loads the ServiceEducation element
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
ServiceEducation('service_education', 'Service Education', 'an optional tech field')
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
' loads the ServiceEducation element
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
ServiceEducationGroup('service_education', 'Service Education', 'an optional tech field'){
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
' loads the ServiceEducation element
include('azure-v2/Item/ManagementGovernance/ServiceEducation')
ServiceEducationGroup('service_education', 'Service Education', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

