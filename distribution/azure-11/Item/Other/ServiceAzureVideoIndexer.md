# ServiceAzureVideoIndexer


```text
azure-11/Item/Other/ServiceAzureVideoIndexer
```

```text
include('azure-11/Item/Other/ServiceAzureVideoIndexer')
```



| Illustration | ServiceAzureVideoIndexer | ServiceAzureVideoIndexerCard | ServiceAzureVideoIndexerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Other/ServiceAzureVideoIndexer.png) | ![illustration for ServiceAzureVideoIndexer](../../../azure-11/Item/Other/ServiceAzureVideoIndexer.Local.png) | ![illustration for ServiceAzureVideoIndexerCard](../../../azure-11/Item/Other/ServiceAzureVideoIndexerCard.Local.png) | ![illustration for ServiceAzureVideoIndexerGroup](../../../azure-11/Item/Other/ServiceAzureVideoIndexerGroup.Local.png) |




## ServiceAzureVideoIndexer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureVideoIndexer
include('azure-11/Item/Other/ServiceAzureVideoIndexer')

' renders the element
ServiceAzureVideoIndexer('ServiceAzureVideoIndexer', 'Service Azure Video Indexer', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureVideoIndexer
include('azure-11/Item/Other/ServiceAzureVideoIndexer')

' renders the element
ServiceAzureVideoIndexer('ServiceAzureVideoIndexer', 'Service Azure Video Indexer', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureVideoIndexerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureVideoIndexerCard
include('azure-11/Item/Other/ServiceAzureVideoIndexer')

' renders the element
ServiceAzureVideoIndexerCard('ServiceAzureVideoIndexerCard', 'Service Azure Video Indexer Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureVideoIndexerCard
include('azure-11/Item/Other/ServiceAzureVideoIndexer')

' renders the element
ServiceAzureVideoIndexerCard('ServiceAzureVideoIndexerCard', 'Service Azure Video Indexer Card', 'an optional description')
@enduml
```

## ServiceAzureVideoIndexerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureVideoIndexerGroup
include('azure-11/Item/Other/ServiceAzureVideoIndexer')

' renders the element
ServiceAzureVideoIndexerGroup('ServiceAzureVideoIndexerGroup', 'Service Azure Video Indexer Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureVideoIndexerGroup
include('azure-11/Item/Other/ServiceAzureVideoIndexer')

' renders the element
ServiceAzureVideoIndexerGroup('ServiceAzureVideoIndexerGroup', 'Service Azure Video Indexer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

