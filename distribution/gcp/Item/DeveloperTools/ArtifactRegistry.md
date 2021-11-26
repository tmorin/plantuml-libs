# ArtifactRegistry


```text
gcp/Item/DeveloperTools/ArtifactRegistry
```

```text
include('gcp/Item/DeveloperTools/ArtifactRegistry')
```



| Illustration | ArtifactRegistry | ArtifactRegistryCard | ArtifactRegistryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/DeveloperTools/ArtifactRegistry.png) | ![illustration for ArtifactRegistry](../../../gcp/Item/DeveloperTools/ArtifactRegistry.Local.png) | ![illustration for ArtifactRegistryCard](../../../gcp/Item/DeveloperTools/ArtifactRegistryCard.Local.png) | ![illustration for ArtifactRegistryGroup](../../../gcp/Item/DeveloperTools/ArtifactRegistryGroup.Local.png) |




## ArtifactRegistry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ArtifactRegistry
include('gcp/Item/DeveloperTools/ArtifactRegistry')

' renders the element
ArtifactRegistry('ArtifactRegistry', 'Artifact Registry', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ArtifactRegistry
include('gcp/Item/DeveloperTools/ArtifactRegistry')

' renders the element
ArtifactRegistry('ArtifactRegistry', 'Artifact Registry', 'an optional tech label')
@enduml
```

## ArtifactRegistryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ArtifactRegistryCard
include('gcp/Item/DeveloperTools/ArtifactRegistry')

' renders the element
ArtifactRegistryCard('ArtifactRegistryCard', 'Artifact Registry Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ArtifactRegistryCard
include('gcp/Item/DeveloperTools/ArtifactRegistry')

' renders the element
ArtifactRegistryCard('ArtifactRegistryCard', 'Artifact Registry Card', 'an optional description')
@enduml
```

## ArtifactRegistryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ArtifactRegistryGroup
include('gcp/Item/DeveloperTools/ArtifactRegistry')

' renders the element
ArtifactRegistryGroup('ArtifactRegistryGroup', 'Artifact Registry Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ArtifactRegistryGroup
include('gcp/Item/DeveloperTools/ArtifactRegistry')

' renders the element
ArtifactRegistryGroup('ArtifactRegistryGroup', 'Artifact Registry Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

