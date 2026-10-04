# ServiceArcKubernetes


```text
azure/Item/HybridMulticloud/ServiceArcKubernetes
```

```text
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')
```



| Illustration | ServiceArcKubernetes | ServiceArcKubernetesCard | ServiceArcKubernetesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/HybridMulticloud/ServiceArcKubernetes.png) | ![illustration for ServiceArcKubernetes](../../../azure/Item/HybridMulticloud/ServiceArcKubernetes.Local.png) | ![illustration for ServiceArcKubernetesCard](../../../azure/Item/HybridMulticloud/ServiceArcKubernetesCard.Local.png) | ![illustration for ServiceArcKubernetesGroup](../../../azure/Item/HybridMulticloud/ServiceArcKubernetesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceArcKubernetesXs>`
- `<$ServiceArcKubernetesSm>`
- `<$ServiceArcKubernetesMd>`
- `<$ServiceArcKubernetesLg>`





## ServiceArcKubernetes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceArcKubernetes
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')

' renders the element
ServiceArcKubernetes('ServiceArcKubernetes', 'Service Arc Kubernetes', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceArcKubernetes
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')

' renders the element
ServiceArcKubernetes('ServiceArcKubernetes', 'Service Arc Kubernetes', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceArcKubernetesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceArcKubernetesCard
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')

' renders the element
ServiceArcKubernetesCard('ServiceArcKubernetesCard', 'Service Arc Kubernetes Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceArcKubernetesCard
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')

' renders the element
ServiceArcKubernetesCard('ServiceArcKubernetesCard', 'Service Arc Kubernetes Card', 'an optional description')
@enduml
```

## ServiceArcKubernetesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceArcKubernetesGroup
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')

' renders the element
ServiceArcKubernetesGroup('ServiceArcKubernetesGroup', 'Service Arc Kubernetes Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceArcKubernetesGroup
include('azure/Item/HybridMulticloud/ServiceArcKubernetes')

' renders the element
ServiceArcKubernetesGroup('ServiceArcKubernetesGroup', 'Service Arc Kubernetes Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

