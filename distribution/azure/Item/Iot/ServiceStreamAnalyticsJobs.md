# ServiceStreamAnalyticsJobs


```text
azure/Item/Iot/ServiceStreamAnalyticsJobs
```

```text
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')
```



| Illustration | ServiceStreamAnalyticsJobs | ServiceStreamAnalyticsJobsCard | ServiceStreamAnalyticsJobsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Iot/ServiceStreamAnalyticsJobs.png) | ![illustration for ServiceStreamAnalyticsJobs](../../../azure/Item/Iot/ServiceStreamAnalyticsJobs.Local.png) | ![illustration for ServiceStreamAnalyticsJobsCard](../../../azure/Item/Iot/ServiceStreamAnalyticsJobsCard.Local.png) | ![illustration for ServiceStreamAnalyticsJobsGroup](../../../azure/Item/Iot/ServiceStreamAnalyticsJobsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceStreamAnalyticsJobsXs>`
- `<$ServiceStreamAnalyticsJobsSm>`
- `<$ServiceStreamAnalyticsJobsMd>`
- `<$ServiceStreamAnalyticsJobsLg>`





## ServiceStreamAnalyticsJobs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobs
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobs('ServiceStreamAnalyticsJobs', 'Service Stream Analytics Jobs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceStreamAnalyticsJobs
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobs('ServiceStreamAnalyticsJobs', 'Service Stream Analytics Jobs', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobsCard
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobsCard
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobsGroup
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStreamAnalyticsJobsGroup
include('azure/Item/Iot/ServiceStreamAnalyticsJobs')

' renders the element
ServiceStreamAnalyticsJobsGroup('ServiceStreamAnalyticsJobsGroup', 'Service Stream Analytics Jobs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

