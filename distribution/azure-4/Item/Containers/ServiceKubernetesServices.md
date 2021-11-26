# ServiceKubernetesServices


```text
azure-4/Item/Containers/ServiceKubernetesServices
```

```text
include('azure-4/Item/Containers/ServiceKubernetesServices')
```



| Illustration | ServiceKubernetesServices | ServiceKubernetesServicesCard | ServiceKubernetesServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Containers/ServiceKubernetesServices.png) | ![illustration for ServiceKubernetesServices](../../../azure-4/Item/Containers/ServiceKubernetesServices.Local.png) | ![illustration for ServiceKubernetesServicesCard](../../../azure-4/Item/Containers/ServiceKubernetesServicesCard.Local.png) | ![illustration for ServiceKubernetesServicesGroup](../../../azure-4/Item/Containers/ServiceKubernetesServicesGroup.Local.png) |




## ServiceKubernetesServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceKubernetesServices
include('azure-4/Item/Containers/ServiceKubernetesServices')

' renders the element
ServiceKubernetesServices('ServiceKubernetesServices', 'Service Kubernetes Services', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceKubernetesServices
include('azure-4/Item/Containers/ServiceKubernetesServices')

' renders the element
ServiceKubernetesServices('ServiceKubernetesServices', 'Service Kubernetes Services', 'an optional tech label')
@enduml
```

## ServiceKubernetesServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceKubernetesServicesCard
include('azure-4/Item/Containers/ServiceKubernetesServices')

' renders the element
ServiceKubernetesServicesCard('ServiceKubernetesServicesCard', 'Service Kubernetes Services Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceKubernetesServicesCard
include('azure-4/Item/Containers/ServiceKubernetesServices')

' renders the element
ServiceKubernetesServicesCard('ServiceKubernetesServicesCard', 'Service Kubernetes Services Card', 'an optional description')
@enduml
```

## ServiceKubernetesServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceKubernetesServicesGroup
include('azure-4/Item/Containers/ServiceKubernetesServices')

' renders the element
ServiceKubernetesServicesGroup('ServiceKubernetesServicesGroup', 'Service Kubernetes Services Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceKubernetesServicesGroup
include('azure-4/Item/Containers/ServiceKubernetesServices')

' renders the element
ServiceKubernetesServicesGroup('ServiceKubernetesServicesGroup', 'Service Kubernetes Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

