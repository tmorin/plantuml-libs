# Service Nat

```text
azure-v2/Item/Networking/ServiceNat
```

```text
include('azure-v2/Item/Networking/ServiceNat')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceNat.png)|![](ServiceNat.card.png)|![](ServiceNat.element.png)|![](ServiceNat.group.png)|



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
' loads the ServiceNat element
include('azure-v2/Item/Networking/ServiceNat')
ServiceNatCard('service_nat', 'Service Nat', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceNat element
include('azure-v2/Item/Networking/ServiceNat')
ServiceNatCard('service_nat', 'Service Nat', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceNat element
include('azure-v2/Item/Networking/ServiceNat')
ServiceNat('service_nat', 'Service Nat', 'an optional tech field')
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
' loads the ServiceNat element
include('azure-v2/Item/Networking/ServiceNat')
ServiceNat('service_nat', 'Service Nat', 'an optional tech field')
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
' loads the ServiceNat element
include('azure-v2/Item/Networking/ServiceNat')
ServiceNatGroup('service_nat', 'Service Nat', 'an optional tech field'){
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
' loads the ServiceNat element
include('azure-v2/Item/Networking/ServiceNat')
ServiceNatGroup('service_nat', 'Service Nat', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

