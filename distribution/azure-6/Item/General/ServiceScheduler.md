# ServiceScheduler


```text
azure-6/Item/General/ServiceScheduler
```

```text
include('azure-6/Item/General/ServiceScheduler')
```



| Illustration | ServiceScheduler | ServiceSchedulerCard | ServiceSchedulerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServiceScheduler.png) | ![illustration for ServiceScheduler](../../../azure-6/Item/General/ServiceScheduler.Local.png) | ![illustration for ServiceSchedulerCard](../../../azure-6/Item/General/ServiceSchedulerCard.Local.png) | ![illustration for ServiceSchedulerGroup](../../../azure-6/Item/General/ServiceSchedulerGroup.Local.png) |




## ServiceScheduler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceScheduler
include('azure-6/Item/General/ServiceScheduler')

' renders the element
ServiceScheduler('ServiceScheduler', 'Service Scheduler', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceScheduler
include('azure-6/Item/General/ServiceScheduler')

' renders the element
ServiceScheduler('ServiceScheduler', 'Service Scheduler', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSchedulerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSchedulerCard
include('azure-6/Item/General/ServiceScheduler')

' renders the element
ServiceSchedulerCard('ServiceSchedulerCard', 'Service Scheduler Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSchedulerCard
include('azure-6/Item/General/ServiceScheduler')

' renders the element
ServiceSchedulerCard('ServiceSchedulerCard', 'Service Scheduler Card', 'an optional description')
@enduml
```

## ServiceSchedulerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSchedulerGroup
include('azure-6/Item/General/ServiceScheduler')

' renders the element
ServiceSchedulerGroup('ServiceSchedulerGroup', 'Service Scheduler Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceSchedulerGroup
include('azure-6/Item/General/ServiceScheduler')

' renders the element
ServiceSchedulerGroup('ServiceSchedulerGroup', 'Service Scheduler Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

