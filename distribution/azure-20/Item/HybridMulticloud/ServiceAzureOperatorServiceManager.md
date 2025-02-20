# ServiceAzureOperatorServiceManager


```text
azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager
```

```text
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')
```



| Illustration | ServiceAzureOperatorServiceManager | ServiceAzureOperatorServiceManagerCard | ServiceAzureOperatorServiceManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager.png) | ![illustration for ServiceAzureOperatorServiceManager](../../../azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager.Local.png) | ![illustration for ServiceAzureOperatorServiceManagerCard](../../../azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManagerCard.Local.png) | ![illustration for ServiceAzureOperatorServiceManagerGroup](../../../azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureOperatorServiceManagerXs>`
- `<$ServiceAzureOperatorServiceManagerSm>`
- `<$ServiceAzureOperatorServiceManagerMd>`
- `<$ServiceAzureOperatorServiceManagerLg>`





## ServiceAzureOperatorServiceManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureOperatorServiceManager
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')

' renders the element
ServiceAzureOperatorServiceManager('ServiceAzureOperatorServiceManager', 'Service Azure Operator Service Manager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureOperatorServiceManager
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')

' renders the element
ServiceAzureOperatorServiceManager('ServiceAzureOperatorServiceManager', 'Service Azure Operator Service Manager', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureOperatorServiceManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureOperatorServiceManagerCard
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')

' renders the element
ServiceAzureOperatorServiceManagerCard('ServiceAzureOperatorServiceManagerCard', 'Service Azure Operator Service Manager Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureOperatorServiceManagerCard
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')

' renders the element
ServiceAzureOperatorServiceManagerCard('ServiceAzureOperatorServiceManagerCard', 'Service Azure Operator Service Manager Card', 'an optional description')
@enduml
```

## ServiceAzureOperatorServiceManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureOperatorServiceManagerGroup
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')

' renders the element
ServiceAzureOperatorServiceManagerGroup('ServiceAzureOperatorServiceManagerGroup', 'Service Azure Operator Service Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureOperatorServiceManagerGroup
include('azure-20/Item/HybridMulticloud/ServiceAzureOperatorServiceManager')

' renders the element
ServiceAzureOperatorServiceManagerGroup('ServiceAzureOperatorServiceManagerGroup', 'Service Azure Operator Service Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

