# ServiceApplicationInsights


```text
azure-4/Item/DevOps/ServiceApplicationInsights
```

```text
include('azure-4/Item/DevOps/ServiceApplicationInsights')
```



| Illustration | ServiceApplicationInsights | ServiceApplicationInsightsCard | ServiceApplicationInsightsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/DevOps/ServiceApplicationInsights.png) | ![illustration for ServiceApplicationInsights](../../../azure-4/Item/DevOps/ServiceApplicationInsights.Local.png) | ![illustration for ServiceApplicationInsightsCard](../../../azure-4/Item/DevOps/ServiceApplicationInsightsCard.Local.png) | ![illustration for ServiceApplicationInsightsGroup](../../../azure-4/Item/DevOps/ServiceApplicationInsightsGroup.Local.png) |




## ServiceApplicationInsights

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceApplicationInsights
include('azure-4/Item/DevOps/ServiceApplicationInsights')

' renders the element
ServiceApplicationInsights('ServiceApplicationInsights', 'Service Application Insights', 'an optional tech label')
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

' loads the Item which embeds the element ServiceApplicationInsights
include('azure-4/Item/DevOps/ServiceApplicationInsights')

' renders the element
ServiceApplicationInsights('ServiceApplicationInsights', 'Service Application Insights', 'an optional tech label')
@enduml
```

## ServiceApplicationInsightsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceApplicationInsightsCard
include('azure-4/Item/DevOps/ServiceApplicationInsights')

' renders the element
ServiceApplicationInsightsCard('ServiceApplicationInsightsCard', 'Service Application Insights Card', 'an optional description')
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

' loads the Item which embeds the element ServiceApplicationInsightsCard
include('azure-4/Item/DevOps/ServiceApplicationInsights')

' renders the element
ServiceApplicationInsightsCard('ServiceApplicationInsightsCard', 'Service Application Insights Card', 'an optional description')
@enduml
```

## ServiceApplicationInsightsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceApplicationInsightsGroup
include('azure-4/Item/DevOps/ServiceApplicationInsights')

' renders the element
ServiceApplicationInsightsGroup('ServiceApplicationInsightsGroup', 'Service Application Insights Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceApplicationInsightsGroup
include('azure-4/Item/DevOps/ServiceApplicationInsights')

' renders the element
ServiceApplicationInsightsGroup('ServiceApplicationInsightsGroup', 'Service Application Insights Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

