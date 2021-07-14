# ComputeEngine


```text
gcp/Item/Compute/ComputeEngine
```

```text
include('gcp/Item/Compute/ComputeEngine')
```



| Illustration | ComputeEngine | ComputeEngineCard | ComputeEngineGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/Compute/ComputeEngine.png) | ![illustration for ComputeEngine](../../../gcp/Item/Compute/ComputeEngine.Local.png) | ![illustration for ComputeEngineCard](../../../gcp/Item/Compute/ComputeEngineCard.Local.png) | ![illustration for ComputeEngineGroup](../../../gcp/Item/Compute/ComputeEngineGroup.Local.png) |




## ComputeEngine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ComputeEngine
include('gcp/Item/Compute/ComputeEngine')

' renders the element
ComputeEngine('ComputeEngine', 'Compute Engine', 'an optional tech label')
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

' loads the Item which embeds the element ComputeEngine
include('gcp/Item/Compute/ComputeEngine')

' renders the element
ComputeEngine('ComputeEngine', 'Compute Engine', 'an optional tech label')
@enduml
```

## ComputeEngineCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ComputeEngineCard
include('gcp/Item/Compute/ComputeEngine')

' renders the element
ComputeEngineCard('ComputeEngineCard', 'Compute Engine Card', 'an optional description')
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

' loads the Item which embeds the element ComputeEngineCard
include('gcp/Item/Compute/ComputeEngine')

' renders the element
ComputeEngineCard('ComputeEngineCard', 'Compute Engine Card', 'an optional description')
@enduml
```

## ComputeEngineGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element ComputeEngineGroup
include('gcp/Item/Compute/ComputeEngine')

' renders the element
ComputeEngineGroup('ComputeEngineGroup', 'Compute Engine Group', 'an optional tech label') {
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

' loads the Item which embeds the element ComputeEngineGroup
include('gcp/Item/Compute/ComputeEngine')

' renders the element
ComputeEngineGroup('ComputeEngineGroup', 'Compute Engine Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

