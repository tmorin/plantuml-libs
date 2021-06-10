# ServiceStorageQueue


```text
azure-4/Item/General/ServiceStorageQueue
```

```text
include('azure-4/Item/General/ServiceStorageQueue')
```



| Illustration | ServiceStorageQueue | ServiceStorageQueueCard | ServiceStorageQueueGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceStorageQueue.png) | ![illustration for ServiceStorageQueue](../../../azure-4/Item/General/ServiceStorageQueue.Local.png) | ![illustration for ServiceStorageQueueCard](../../../azure-4/Item/General/ServiceStorageQueueCard.Local.png) | ![illustration for ServiceStorageQueueGroup](../../../azure-4/Item/General/ServiceStorageQueueGroup.Local.png) |




## ServiceStorageQueue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorageQueue
include('azure-4/Item/General/ServiceStorageQueue')

' renders the element
ServiceStorageQueue('ServiceStorageQueue', 'Service Storage Queue', 'an optional tech label')
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

' loads the Item which embeds the element ServiceStorageQueue
include('azure-4/Item/General/ServiceStorageQueue')

' renders the element
ServiceStorageQueue('ServiceStorageQueue', 'Service Storage Queue', 'an optional tech label')
@enduml
```

## ServiceStorageQueueCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorageQueueCard
include('azure-4/Item/General/ServiceStorageQueue')

' renders the element
ServiceStorageQueueCard('ServiceStorageQueueCard', 'Service Storage Queue Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStorageQueueCard
include('azure-4/Item/General/ServiceStorageQueue')

' renders the element
ServiceStorageQueueCard('ServiceStorageQueueCard', 'Service Storage Queue Card', 'an optional description')
@enduml
```

## ServiceStorageQueueGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStorageQueueGroup
include('azure-4/Item/General/ServiceStorageQueue')

' renders the element
ServiceStorageQueueGroup('ServiceStorageQueueGroup', 'Service Storage Queue Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStorageQueueGroup
include('azure-4/Item/General/ServiceStorageQueue')

' renders the element
ServiceStorageQueueGroup('ServiceStorageQueueGroup', 'Service Storage Queue Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

