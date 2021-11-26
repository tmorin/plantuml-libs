# ServiceCache


```text
azure-4/Item/General/ServiceCache
```

```text
include('azure-4/Item/General/ServiceCache')
```



| Illustration | ServiceCache | ServiceCacheCard | ServiceCacheGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceCache.png) | ![illustration for ServiceCache](../../../azure-4/Item/General/ServiceCache.Local.png) | ![illustration for ServiceCacheCard](../../../azure-4/Item/General/ServiceCacheCard.Local.png) | ![illustration for ServiceCacheGroup](../../../azure-4/Item/General/ServiceCacheGroup.Local.png) |




## ServiceCache

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCache
include('azure-4/Item/General/ServiceCache')

' renders the element
ServiceCache('ServiceCache', 'Service Cache', 'an optional tech label')
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

' loads the Item which embeds the element ServiceCache
include('azure-4/Item/General/ServiceCache')

' renders the element
ServiceCache('ServiceCache', 'Service Cache', 'an optional tech label')
@enduml
```

## ServiceCacheCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCacheCard
include('azure-4/Item/General/ServiceCache')

' renders the element
ServiceCacheCard('ServiceCacheCard', 'Service Cache Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCacheCard
include('azure-4/Item/General/ServiceCache')

' renders the element
ServiceCacheCard('ServiceCacheCard', 'Service Cache Card', 'an optional description')
@enduml
```

## ServiceCacheGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCacheGroup
include('azure-4/Item/General/ServiceCache')

' renders the element
ServiceCacheGroup('ServiceCacheGroup', 'Service Cache Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCacheGroup
include('azure-4/Item/General/ServiceCache')

' renders the element
ServiceCacheGroup('ServiceCacheGroup', 'Service Cache Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

