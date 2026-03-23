# ServiceLogAnalyticsQueryPack


```text
azure/Item/Other/ServiceLogAnalyticsQueryPack
```

```text
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')
```



| Illustration | ServiceLogAnalyticsQueryPack | ServiceLogAnalyticsQueryPackCard | ServiceLogAnalyticsQueryPackGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceLogAnalyticsQueryPack.png) | ![illustration for ServiceLogAnalyticsQueryPack](../../../azure/Item/Other/ServiceLogAnalyticsQueryPack.Local.png) | ![illustration for ServiceLogAnalyticsQueryPackCard](../../../azure/Item/Other/ServiceLogAnalyticsQueryPackCard.Local.png) | ![illustration for ServiceLogAnalyticsQueryPackGroup](../../../azure/Item/Other/ServiceLogAnalyticsQueryPackGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLogAnalyticsQueryPackXs>`
- `<$ServiceLogAnalyticsQueryPackSm>`
- `<$ServiceLogAnalyticsQueryPackMd>`
- `<$ServiceLogAnalyticsQueryPackLg>`





## ServiceLogAnalyticsQueryPack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsQueryPack
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')

' renders the element
ServiceLogAnalyticsQueryPack('ServiceLogAnalyticsQueryPack', 'Service Log Analytics Query Pack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceLogAnalyticsQueryPack
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')

' renders the element
ServiceLogAnalyticsQueryPack('ServiceLogAnalyticsQueryPack', 'Service Log Analytics Query Pack', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLogAnalyticsQueryPackCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsQueryPackCard
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')

' renders the element
ServiceLogAnalyticsQueryPackCard('ServiceLogAnalyticsQueryPackCard', 'Service Log Analytics Query Pack Card', 'an optional description')
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

' loads the Item which embeds the element ServiceLogAnalyticsQueryPackCard
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')

' renders the element
ServiceLogAnalyticsQueryPackCard('ServiceLogAnalyticsQueryPackCard', 'Service Log Analytics Query Pack Card', 'an optional description')
@enduml
```

## ServiceLogAnalyticsQueryPackGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLogAnalyticsQueryPackGroup
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')

' renders the element
ServiceLogAnalyticsQueryPackGroup('ServiceLogAnalyticsQueryPackGroup', 'Service Log Analytics Query Pack Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceLogAnalyticsQueryPackGroup
include('azure/Item/Other/ServiceLogAnalyticsQueryPack')

' renders the element
ServiceLogAnalyticsQueryPackGroup('ServiceLogAnalyticsQueryPackGroup', 'Service Log Analytics Query Pack Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

