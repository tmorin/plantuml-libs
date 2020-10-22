# Service Conditional Access

```text
azure-v2/Item/Security/ServiceConditionalAccess
```

```text
include('azure-v2/Item/Security/ServiceConditionalAccess')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceConditionalAccess.png)|![](ServiceConditionalAccess.card.png)|![](ServiceConditionalAccess.element.png)|![](ServiceConditionalAccess.group.png)|



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
' loads the ServiceConditionalAccess element
include('azure-v2/Item/Security/ServiceConditionalAccess')
ServiceConditionalAccessCard('service_conditional_access', 'Service Conditional Access', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceConditionalAccess element
include('azure-v2/Item/Security/ServiceConditionalAccess')
ServiceConditionalAccessCard('service_conditional_access', 'Service Conditional Access', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceConditionalAccess element
include('azure-v2/Item/Security/ServiceConditionalAccess')
ServiceConditionalAccess('service_conditional_access', 'Service Conditional Access', 'an optional tech field')
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
' loads the ServiceConditionalAccess element
include('azure-v2/Item/Security/ServiceConditionalAccess')
ServiceConditionalAccess('service_conditional_access', 'Service Conditional Access', 'an optional tech field')
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
' loads the ServiceConditionalAccess element
include('azure-v2/Item/Security/ServiceConditionalAccess')
ServiceConditionalAccessGroup('service_conditional_access', 'Service Conditional Access', 'an optional tech field'){
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
' loads the ServiceConditionalAccess element
include('azure-v2/Item/Security/ServiceConditionalAccess')
ServiceConditionalAccessGroup('service_conditional_access', 'Service Conditional Access', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

