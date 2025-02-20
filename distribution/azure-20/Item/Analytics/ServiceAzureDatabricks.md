# ServiceAzureDatabricks


```text
azure-20/Item/Analytics/ServiceAzureDatabricks
```

```text
include('azure-20/Item/Analytics/ServiceAzureDatabricks')
```



| Illustration | ServiceAzureDatabricks | ServiceAzureDatabricksCard | ServiceAzureDatabricksGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Analytics/ServiceAzureDatabricks.png) | ![illustration for ServiceAzureDatabricks](../../../azure-20/Item/Analytics/ServiceAzureDatabricks.Local.png) | ![illustration for ServiceAzureDatabricksCard](../../../azure-20/Item/Analytics/ServiceAzureDatabricksCard.Local.png) | ![illustration for ServiceAzureDatabricksGroup](../../../azure-20/Item/Analytics/ServiceAzureDatabricksGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureDatabricksXs>`
- `<$ServiceAzureDatabricksSm>`
- `<$ServiceAzureDatabricksMd>`
- `<$ServiceAzureDatabricksLg>`





## ServiceAzureDatabricks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabricks
include('azure-20/Item/Analytics/ServiceAzureDatabricks')

' renders the element
ServiceAzureDatabricks('ServiceAzureDatabricks', 'Service Azure Databricks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureDatabricks
include('azure-20/Item/Analytics/ServiceAzureDatabricks')

' renders the element
ServiceAzureDatabricks('ServiceAzureDatabricks', 'Service Azure Databricks', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureDatabricksCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabricksCard
include('azure-20/Item/Analytics/ServiceAzureDatabricks')

' renders the element
ServiceAzureDatabricksCard('ServiceAzureDatabricksCard', 'Service Azure Databricks Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureDatabricksCard
include('azure-20/Item/Analytics/ServiceAzureDatabricks')

' renders the element
ServiceAzureDatabricksCard('ServiceAzureDatabricksCard', 'Service Azure Databricks Card', 'an optional description')
@enduml
```

## ServiceAzureDatabricksGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabricksGroup
include('azure-20/Item/Analytics/ServiceAzureDatabricks')

' renders the element
ServiceAzureDatabricksGroup('ServiceAzureDatabricksGroup', 'Service Azure Databricks Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureDatabricksGroup
include('azure-20/Item/Analytics/ServiceAzureDatabricks')

' renders the element
ServiceAzureDatabricksGroup('ServiceAzureDatabricksGroup', 'Service Azure Databricks Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

