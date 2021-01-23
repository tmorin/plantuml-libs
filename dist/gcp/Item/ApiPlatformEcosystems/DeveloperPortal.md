# Developer Portal

```text
gcp/Item/ApiPlatformEcosystems/DeveloperPortal
```

```text
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
```

|icon|card|element|group|
|---|---|---|---|
|![](DeveloperPortal.png)|![](DeveloperPortal.card.png)|![](DeveloperPortal.element.png)|![](DeveloperPortal.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the DeveloperPortal element
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
DeveloperPortalCard('developer_portal', 'Developer Portal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the DeveloperPortal element
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
DeveloperPortalCard('developer_portal', 'Developer Portal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the DeveloperPortal element
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
DeveloperPortal('developer_portal', 'Developer Portal', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the DeveloperPortal element
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
DeveloperPortal('developer_portal', 'Developer Portal', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the DeveloperPortal element
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
DeveloperPortalGroup('developer_portal', 'Developer Portal', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the DeveloperPortal element
include('gcp/Item/ApiPlatformEcosystems/DeveloperPortal')
DeveloperPortalGroup('developer_portal', 'Developer Portal', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

