# ServiceStreamAnalyticsJobs


```text
azure-4/Item/Analytics/ServiceStreamAnalyticsJobs
```

```text
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')
```



| Illustration | ServiceStreamAnalyticsJobs | ServiceStreamAnalyticsJobsCard | ServiceStreamAnalyticsJobsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Analytics/ServiceStreamAnalyticsJobs.png) | ![illustration for ServiceStreamAnalyticsJobs](../../../azure-4/Item/Analytics/ServiceStreamAnalyticsJobs.Local.png) | ![illustration for ServiceStreamAnalyticsJobsCard](../../../azure-4/Item/Analytics/ServiceStreamAnalyticsJobsCard.Local.png) | ![illustration for ServiceStreamAnalyticsJobsGroup](../../../azure-4/Item/Analytics/ServiceStreamAnalyticsJobsGroup.Local.png) |




## ServiceStreamAnalyticsJobs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobs
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobs('ServiceStreamAnalyticsJobs', 'Service Stream Analytics Jobs', 'an optional tech label')
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

' loads the Item which embeds the element ServiceStreamAnalyticsJobs
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobs('ServiceStreamAnalyticsJobs', 'Service Stream Analytics Jobs', 'an optional tech label')
@enduml
```

## ServiceStreamAnalyticsJobsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobsCard
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobsCard('ServiceStreamAnalyticsJobsCard', 'Service Stream Analytics Jobs Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStreamAnalyticsJobsCard
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobsCard('ServiceStreamAnalyticsJobsCard', 'Service Stream Analytics Jobs Card', 'an optional description')
@enduml
```

## ServiceStreamAnalyticsJobsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobsGroup
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobsGroup('ServiceStreamAnalyticsJobsGroup', 'Service Stream Analytics Jobs Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStreamAnalyticsJobsGroup
include('azure-4/Item/Analytics/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobsGroup('ServiceStreamAnalyticsJobsGroup', 'Service Stream Analytics Jobs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

