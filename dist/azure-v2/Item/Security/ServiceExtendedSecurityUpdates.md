# Service Extended Security Updates

```text
azure-v2/Item/Security/ServiceExtendedSecurityUpdates
```

```text
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceExtendedSecurityUpdates.png)|![](ServiceExtendedSecurityUpdates.card.png)|![](ServiceExtendedSecurityUpdates.element.png)|![](ServiceExtendedSecurityUpdates.group.png)|



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
' loads the ServiceExtendedSecurityUpdates element
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
ServiceExtendedSecurityUpdatesCard('service_extended_security_updates', 'Service Extended Security Updates', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceExtendedSecurityUpdates element
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
ServiceExtendedSecurityUpdatesCard('service_extended_security_updates', 'Service Extended Security Updates', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceExtendedSecurityUpdates element
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
ServiceExtendedSecurityUpdates('service_extended_security_updates', 'Service Extended Security Updates', 'an optional tech field')
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
' loads the ServiceExtendedSecurityUpdates element
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
ServiceExtendedSecurityUpdates('service_extended_security_updates', 'Service Extended Security Updates', 'an optional tech field')
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
' loads the ServiceExtendedSecurityUpdates element
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
ServiceExtendedSecurityUpdatesGroup('service_extended_security_updates', 'Service Extended Security Updates', 'an optional tech field'){
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
' loads the ServiceExtendedSecurityUpdates element
include('azure-v2/Item/Security/ServiceExtendedSecurityUpdates')
ServiceExtendedSecurityUpdatesGroup('service_extended_security_updates', 'Service Extended Security Updates', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

