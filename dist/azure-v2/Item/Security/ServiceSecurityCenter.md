# Service Security Center

```text
azure-v2/Item/Security/ServiceSecurityCenter
```

```text
include('azure-v2/Item/Security/ServiceSecurityCenter')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSecurityCenter.png)|![](ServiceSecurityCenter.card.png)|![](ServiceSecurityCenter.element.png)|![](ServiceSecurityCenter.group.png)|



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
' loads the ServiceSecurityCenter element
include('azure-v2/Item/Security/ServiceSecurityCenter')
ServiceSecurityCenterCard('service_security_center', 'Service Security Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSecurityCenter element
include('azure-v2/Item/Security/ServiceSecurityCenter')
ServiceSecurityCenterCard('service_security_center', 'Service Security Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSecurityCenter element
include('azure-v2/Item/Security/ServiceSecurityCenter')
ServiceSecurityCenter('service_security_center', 'Service Security Center', 'an optional tech field')
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
' loads the ServiceSecurityCenter element
include('azure-v2/Item/Security/ServiceSecurityCenter')
ServiceSecurityCenter('service_security_center', 'Service Security Center', 'an optional tech field')
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
' loads the ServiceSecurityCenter element
include('azure-v2/Item/Security/ServiceSecurityCenter')
ServiceSecurityCenterGroup('service_security_center', 'Service Security Center', 'an optional tech field'){
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
' loads the ServiceSecurityCenter element
include('azure-v2/Item/Security/ServiceSecurityCenter')
ServiceSecurityCenterGroup('service_security_center', 'Service Security Center', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

