# Cloud Deployment Manager

```text
gcp/Item/DeveloperTools/CloudDeploymentManager
```

```text
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudDeploymentManager.png)|![](CloudDeploymentManager.card.png)|![](CloudDeploymentManager.element.png)|![](CloudDeploymentManager.group.png)|



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
' loads the CloudDeploymentManager element
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
CloudDeploymentManagerCard('cloud_deployment_manager', 'Cloud Deployment Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudDeploymentManager element
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
CloudDeploymentManagerCard('cloud_deployment_manager', 'Cloud Deployment Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudDeploymentManager element
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
CloudDeploymentManager('cloud_deployment_manager', 'Cloud Deployment Manager', 'an optional tech field')
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
' loads the CloudDeploymentManager element
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
CloudDeploymentManager('cloud_deployment_manager', 'Cloud Deployment Manager', 'an optional tech field')
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
' loads the CloudDeploymentManager element
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
CloudDeploymentManagerGroup('cloud_deployment_manager', 'Cloud Deployment Manager', 'an optional tech field'){
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
' loads the CloudDeploymentManager element
include('gcp/Item/DeveloperTools/CloudDeploymentManager')
CloudDeploymentManagerGroup('cloud_deployment_manager', 'Cloud Deployment Manager', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

