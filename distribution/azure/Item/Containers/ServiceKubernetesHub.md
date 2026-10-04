# ServiceKubernetesHub


```text
azure/Item/Containers/ServiceKubernetesHub
```

```text
include('azure/Item/Containers/ServiceKubernetesHub')
```



| Illustration | ServiceKubernetesHub | ServiceKubernetesHubCard | ServiceKubernetesHubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Containers/ServiceKubernetesHub.png) | ![illustration for ServiceKubernetesHub](../../../azure/Item/Containers/ServiceKubernetesHub.Local.png) | ![illustration for ServiceKubernetesHubCard](../../../azure/Item/Containers/ServiceKubernetesHubCard.Local.png) | ![illustration for ServiceKubernetesHubGroup](../../../azure/Item/Containers/ServiceKubernetesHubGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceKubernetesHubXs>`
- `<$ServiceKubernetesHubSm>`
- `<$ServiceKubernetesHubMd>`
- `<$ServiceKubernetesHubLg>`





## ServiceKubernetesHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceKubernetesHub
include('azure/Item/Containers/ServiceKubernetesHub')

' renders the element
ServiceKubernetesHub('ServiceKubernetesHub', 'Service Kubernetes Hub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceKubernetesHub
include('azure/Item/Containers/ServiceKubernetesHub')

' renders the element
ServiceKubernetesHub('ServiceKubernetesHub', 'Service Kubernetes Hub', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceKubernetesHubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceKubernetesHubCard
include('azure/Item/Containers/ServiceKubernetesHub')

' renders the element
ServiceKubernetesHubCard('ServiceKubernetesHubCard', 'Service Kubernetes Hub Card', 'an optional description')
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

' loads the Item which embeds the element ServiceKubernetesHubCard
include('azure/Item/Containers/ServiceKubernetesHub')

' renders the element
ServiceKubernetesHubCard('ServiceKubernetesHubCard', 'Service Kubernetes Hub Card', 'an optional description')
@enduml
```

## ServiceKubernetesHubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceKubernetesHubGroup
include('azure/Item/Containers/ServiceKubernetesHub')

' renders the element
ServiceKubernetesHubGroup('ServiceKubernetesHubGroup', 'Service Kubernetes Hub Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceKubernetesHubGroup
include('azure/Item/Containers/ServiceKubernetesHub')

' renders the element
ServiceKubernetesHubGroup('ServiceKubernetesHubGroup', 'Service Kubernetes Hub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

