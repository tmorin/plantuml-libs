# Service Traffic Manager Profiles

```text
azure-v2/Item/Networking/ServiceTrafficManagerProfiles
```

```text
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceTrafficManagerProfiles.png)|![](ServiceTrafficManagerProfiles.card.png)|![](ServiceTrafficManagerProfiles.element.png)|![](ServiceTrafficManagerProfiles.group.png)|



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
' loads the ServiceTrafficManagerProfiles element
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
ServiceTrafficManagerProfilesCard('service_traffic_manager_profiles', 'Service Traffic Manager Profiles', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceTrafficManagerProfiles element
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
ServiceTrafficManagerProfilesCard('service_traffic_manager_profiles', 'Service Traffic Manager Profiles', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceTrafficManagerProfiles element
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
ServiceTrafficManagerProfiles('service_traffic_manager_profiles', 'Service Traffic Manager Profiles', 'an optional tech field')
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
' loads the ServiceTrafficManagerProfiles element
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
ServiceTrafficManagerProfiles('service_traffic_manager_profiles', 'Service Traffic Manager Profiles', 'an optional tech field')
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
' loads the ServiceTrafficManagerProfiles element
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
ServiceTrafficManagerProfilesGroup('service_traffic_manager_profiles', 'Service Traffic Manager Profiles', 'an optional tech field'){
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
' loads the ServiceTrafficManagerProfiles element
include('azure-v2/Item/Networking/ServiceTrafficManagerProfiles')
ServiceTrafficManagerProfilesGroup('service_traffic_manager_profiles', 'Service Traffic Manager Profiles', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

