# ServiceDownload


```text
azure/Item/General/ServiceDownload
```

```text
include('azure/Item/General/ServiceDownload')
```



| Illustration | ServiceDownload | ServiceDownloadCard | ServiceDownloadGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceDownload.png) | ![illustration for ServiceDownload](../../../azure/Item/General/ServiceDownload.Local.png) | ![illustration for ServiceDownloadCard](../../../azure/Item/General/ServiceDownloadCard.Local.png) | ![illustration for ServiceDownloadGroup](../../../azure/Item/General/ServiceDownloadGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDownloadXs>`
- `<$ServiceDownloadSm>`
- `<$ServiceDownloadMd>`
- `<$ServiceDownloadLg>`





## ServiceDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDownload
include('azure/Item/General/ServiceDownload')

' renders the element
ServiceDownload('ServiceDownload', 'Service Download', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceDownload
include('azure/Item/General/ServiceDownload')

' renders the element
ServiceDownload('ServiceDownload', 'Service Download', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDownloadCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDownloadCard
include('azure/Item/General/ServiceDownload')

' renders the element
ServiceDownloadCard('ServiceDownloadCard', 'Service Download Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDownloadCard
include('azure/Item/General/ServiceDownload')

' renders the element
ServiceDownloadCard('ServiceDownloadCard', 'Service Download Card', 'an optional description')
@enduml
```

## ServiceDownloadGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDownloadGroup
include('azure/Item/General/ServiceDownload')

' renders the element
ServiceDownloadGroup('ServiceDownloadGroup', 'Service Download Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDownloadGroup
include('azure/Item/General/ServiceDownload')

' renders the element
ServiceDownloadGroup('ServiceDownloadGroup', 'Service Download Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

