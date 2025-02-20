# ServiceNotificationHubNamespaces


```text
azure-20/Item/Web/ServiceNotificationHubNamespaces
```

```text
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')
```



| Illustration | ServiceNotificationHubNamespaces | ServiceNotificationHubNamespacesCard | ServiceNotificationHubNamespacesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Web/ServiceNotificationHubNamespaces.png) | ![illustration for ServiceNotificationHubNamespaces](../../../azure-20/Item/Web/ServiceNotificationHubNamespaces.Local.png) | ![illustration for ServiceNotificationHubNamespacesCard](../../../azure-20/Item/Web/ServiceNotificationHubNamespacesCard.Local.png) | ![illustration for ServiceNotificationHubNamespacesGroup](../../../azure-20/Item/Web/ServiceNotificationHubNamespacesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceNotificationHubNamespacesXs>`
- `<$ServiceNotificationHubNamespacesSm>`
- `<$ServiceNotificationHubNamespacesMd>`
- `<$ServiceNotificationHubNamespacesLg>`





## ServiceNotificationHubNamespaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubNamespaces
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')

' renders the element
ServiceNotificationHubNamespaces('ServiceNotificationHubNamespaces', 'Service Notification Hub Namespaces', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubNamespaces
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')

' renders the element
ServiceNotificationHubNamespaces('ServiceNotificationHubNamespaces', 'Service Notification Hub Namespaces', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceNotificationHubNamespacesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubNamespacesCard
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')

' renders the element
ServiceNotificationHubNamespacesCard('ServiceNotificationHubNamespacesCard', 'Service Notification Hub Namespaces Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubNamespacesCard
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')

' renders the element
ServiceNotificationHubNamespacesCard('ServiceNotificationHubNamespacesCard', 'Service Notification Hub Namespaces Card', 'an optional description')
@enduml
```

## ServiceNotificationHubNamespacesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubNamespacesGroup
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')

' renders the element
ServiceNotificationHubNamespacesGroup('ServiceNotificationHubNamespacesGroup', 'Service Notification Hub Namespaces Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubNamespacesGroup
include('azure-20/Item/Web/ServiceNotificationHubNamespaces')

' renders the element
ServiceNotificationHubNamespacesGroup('ServiceNotificationHubNamespacesGroup', 'Service Notification Hub Namespaces Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

