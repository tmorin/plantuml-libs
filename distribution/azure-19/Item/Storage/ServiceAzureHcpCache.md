# ServiceAzureHcpCache


```text
azure-19/Item/Storage/ServiceAzureHcpCache
```

```text
include('azure-19/Item/Storage/ServiceAzureHcpCache')
```



| Illustration | ServiceAzureHcpCache | ServiceAzureHcpCacheCard | ServiceAzureHcpCacheGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Storage/ServiceAzureHcpCache.png) | ![illustration for ServiceAzureHcpCache](../../../azure-19/Item/Storage/ServiceAzureHcpCache.Local.png) | ![illustration for ServiceAzureHcpCacheCard](../../../azure-19/Item/Storage/ServiceAzureHcpCacheCard.Local.png) | ![illustration for ServiceAzureHcpCacheGroup](../../../azure-19/Item/Storage/ServiceAzureHcpCacheGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureHcpCacheXs>`
- `<$ServiceAzureHcpCacheSm>`
- `<$ServiceAzureHcpCacheMd>`
- `<$ServiceAzureHcpCacheLg>`





## ServiceAzureHcpCache

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureHcpCache
include('azure-19/Item/Storage/ServiceAzureHcpCache')

' renders the element
ServiceAzureHcpCache('ServiceAzureHcpCache', 'Service Azure Hcp Cache', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureHcpCache
include('azure-19/Item/Storage/ServiceAzureHcpCache')

' renders the element
ServiceAzureHcpCache('ServiceAzureHcpCache', 'Service Azure Hcp Cache', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureHcpCacheCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureHcpCacheCard
include('azure-19/Item/Storage/ServiceAzureHcpCache')

' renders the element
ServiceAzureHcpCacheCard('ServiceAzureHcpCacheCard', 'Service Azure Hcp Cache Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureHcpCacheCard
include('azure-19/Item/Storage/ServiceAzureHcpCache')

' renders the element
ServiceAzureHcpCacheCard('ServiceAzureHcpCacheCard', 'Service Azure Hcp Cache Card', 'an optional description')
@enduml
```

## ServiceAzureHcpCacheGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureHcpCacheGroup
include('azure-19/Item/Storage/ServiceAzureHcpCache')

' renders the element
ServiceAzureHcpCacheGroup('ServiceAzureHcpCacheGroup', 'Service Azure Hcp Cache Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureHcpCacheGroup
include('azure-19/Item/Storage/ServiceAzureHcpCache')

' renders the element
ServiceAzureHcpCacheGroup('ServiceAzureHcpCacheGroup', 'Service Azure Hcp Cache Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

