# ServiceMultiTenancy


```text
azure-4/Item/AzureStack/ServiceMultiTenancy
```

```text
include('azure-4/Item/AzureStack/ServiceMultiTenancy')
```



| Illustration | ServiceMultiTenancy | ServiceMultiTenancyCard | ServiceMultiTenancyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/AzureStack/ServiceMultiTenancy.png) | ![illustration for ServiceMultiTenancy](../../../azure-4/Item/AzureStack/ServiceMultiTenancy.Local.png) | ![illustration for ServiceMultiTenancyCard](../../../azure-4/Item/AzureStack/ServiceMultiTenancyCard.Local.png) | ![illustration for ServiceMultiTenancyGroup](../../../azure-4/Item/AzureStack/ServiceMultiTenancyGroup.Local.png) |




## ServiceMultiTenancy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancy
include('azure-4/Item/AzureStack/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancy('ServiceMultiTenancy', 'Service Multi Tenancy', 'an optional tech label')
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

' loads the Item which embeds the element ServiceMultiTenancy
include('azure-4/Item/AzureStack/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancy('ServiceMultiTenancy', 'Service Multi Tenancy', 'an optional tech label')
@enduml
```

## ServiceMultiTenancyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancyCard
include('azure-4/Item/AzureStack/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyCard('ServiceMultiTenancyCard', 'Service Multi Tenancy Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMultiTenancyCard
include('azure-4/Item/AzureStack/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyCard('ServiceMultiTenancyCard', 'Service Multi Tenancy Card', 'an optional description')
@enduml
```

## ServiceMultiTenancyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceMultiTenancyGroup
include('azure-4/Item/AzureStack/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyGroup('ServiceMultiTenancyGroup', 'Service Multi Tenancy Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMultiTenancyGroup
include('azure-4/Item/AzureStack/ServiceMultiTenancy')

' renders the element
ServiceMultiTenancyGroup('ServiceMultiTenancyGroup', 'Service Multi Tenancy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

