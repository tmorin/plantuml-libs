# Artifact Registry

```text
gcp/Item/DeveloperTools/ArtifactRegistry
```

```text
include('gcp/Item/DeveloperTools/ArtifactRegistry')
```

|icon|card|element|group|
|---|---|---|---|
|![](ArtifactRegistry.png)|![](ArtifactRegistry.card.png)|![](ArtifactRegistry.element.png)|![](ArtifactRegistry.group.png)|



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
' loads the ArtifactRegistry element
include('gcp/Item/DeveloperTools/ArtifactRegistry')
ArtifactRegistryCard('artifact_registry', 'Artifact Registry', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ArtifactRegistry element
include('gcp/Item/DeveloperTools/ArtifactRegistry')
ArtifactRegistryCard('artifact_registry', 'Artifact Registry', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ArtifactRegistry element
include('gcp/Item/DeveloperTools/ArtifactRegistry')
ArtifactRegistry('artifact_registry', 'Artifact Registry', 'an optional tech field')
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
' loads the ArtifactRegistry element
include('gcp/Item/DeveloperTools/ArtifactRegistry')
ArtifactRegistry('artifact_registry', 'Artifact Registry', 'an optional tech field')
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
' loads the ArtifactRegistry element
include('gcp/Item/DeveloperTools/ArtifactRegistry')
ArtifactRegistryGroup('artifact_registry', 'Artifact Registry', 'an optional tech field'){
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
' loads the ArtifactRegistry element
include('gcp/Item/DeveloperTools/ArtifactRegistry')
ArtifactRegistryGroup('artifact_registry', 'Artifact Registry', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

