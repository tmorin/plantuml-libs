# Cloud Build

```text
gcp/Item/DeveloperTools/CloudBuild
```

```text
include('gcp/Item/DeveloperTools/CloudBuild')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudBuild.png)|![](CloudBuild.card.png)|![](CloudBuild.element.png)|![](CloudBuild.group.png)|



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
' loads the CloudBuild element
include('gcp/Item/DeveloperTools/CloudBuild')
CloudBuildCard('cloud_build', 'Cloud Build', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudBuild element
include('gcp/Item/DeveloperTools/CloudBuild')
CloudBuildCard('cloud_build', 'Cloud Build', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudBuild element
include('gcp/Item/DeveloperTools/CloudBuild')
CloudBuild('cloud_build', 'Cloud Build', 'an optional tech field')
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
' loads the CloudBuild element
include('gcp/Item/DeveloperTools/CloudBuild')
CloudBuild('cloud_build', 'Cloud Build', 'an optional tech field')
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
' loads the CloudBuild element
include('gcp/Item/DeveloperTools/CloudBuild')
CloudBuildGroup('cloud_build', 'Cloud Build', 'an optional tech field'){
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
' loads the CloudBuild element
include('gcp/Item/DeveloperTools/CloudBuild')
CloudBuildGroup('cloud_build', 'Cloud Build', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

