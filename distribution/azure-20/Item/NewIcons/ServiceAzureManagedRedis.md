# ServiceAzureManagedRedis


```text
azure-20/Item/NewIcons/ServiceAzureManagedRedis
```

```text
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')
```



| Illustration | ServiceAzureManagedRedis | ServiceAzureManagedRedisCard | ServiceAzureManagedRedisGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/NewIcons/ServiceAzureManagedRedis.png) | ![illustration for ServiceAzureManagedRedis](../../../azure-20/Item/NewIcons/ServiceAzureManagedRedis.Local.png) | ![illustration for ServiceAzureManagedRedisCard](../../../azure-20/Item/NewIcons/ServiceAzureManagedRedisCard.Local.png) | ![illustration for ServiceAzureManagedRedisGroup](../../../azure-20/Item/NewIcons/ServiceAzureManagedRedisGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureManagedRedisXs>`
- `<$ServiceAzureManagedRedisSm>`
- `<$ServiceAzureManagedRedisMd>`
- `<$ServiceAzureManagedRedisLg>`





## ServiceAzureManagedRedis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedRedis
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')

' renders the element
ServiceAzureManagedRedis('ServiceAzureManagedRedis', 'Service Azure Managed Redis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureManagedRedis
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')

' renders the element
ServiceAzureManagedRedis('ServiceAzureManagedRedis', 'Service Azure Managed Redis', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureManagedRedisCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedRedisCard
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')

' renders the element
ServiceAzureManagedRedisCard('ServiceAzureManagedRedisCard', 'Service Azure Managed Redis Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureManagedRedisCard
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')

' renders the element
ServiceAzureManagedRedisCard('ServiceAzureManagedRedisCard', 'Service Azure Managed Redis Card', 'an optional description')
@enduml
```

## ServiceAzureManagedRedisGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAzureManagedRedisGroup
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')

' renders the element
ServiceAzureManagedRedisGroup('ServiceAzureManagedRedisGroup', 'Service Azure Managed Redis Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureManagedRedisGroup
include('azure-20/Item/NewIcons/ServiceAzureManagedRedis')

' renders the element
ServiceAzureManagedRedisGroup('ServiceAzureManagedRedisGroup', 'Service Azure Managed Redis Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

