# ServiceChangeAnalysis


```text
azure-11/Item/Devops/ServiceChangeAnalysis
```

```text
include('azure-11/Item/Devops/ServiceChangeAnalysis')
```



| Illustration | ServiceChangeAnalysis | ServiceChangeAnalysisCard | ServiceChangeAnalysisGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Devops/ServiceChangeAnalysis.png) | ![illustration for ServiceChangeAnalysis](../../../azure-11/Item/Devops/ServiceChangeAnalysis.Local.png) | ![illustration for ServiceChangeAnalysisCard](../../../azure-11/Item/Devops/ServiceChangeAnalysisCard.Local.png) | ![illustration for ServiceChangeAnalysisGroup](../../../azure-11/Item/Devops/ServiceChangeAnalysisGroup.Local.png) |




## ServiceChangeAnalysis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceChangeAnalysis
include('azure-11/Item/Devops/ServiceChangeAnalysis')

' renders the element
ServiceChangeAnalysis('ServiceChangeAnalysis', 'Service Change Analysis', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceChangeAnalysis
include('azure-11/Item/Devops/ServiceChangeAnalysis')

' renders the element
ServiceChangeAnalysis('ServiceChangeAnalysis', 'Service Change Analysis', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceChangeAnalysisCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceChangeAnalysisCard
include('azure-11/Item/Devops/ServiceChangeAnalysis')

' renders the element
ServiceChangeAnalysisCard('ServiceChangeAnalysisCard', 'Service Change Analysis Card', 'an optional description')
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

' loads the Item which embeds the element ServiceChangeAnalysisCard
include('azure-11/Item/Devops/ServiceChangeAnalysis')

' renders the element
ServiceChangeAnalysisCard('ServiceChangeAnalysisCard', 'Service Change Analysis Card', 'an optional description')
@enduml
```

## ServiceChangeAnalysisGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceChangeAnalysisGroup
include('azure-11/Item/Devops/ServiceChangeAnalysis')

' renders the element
ServiceChangeAnalysisGroup('ServiceChangeAnalysisGroup', 'Service Change Analysis Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceChangeAnalysisGroup
include('azure-11/Item/Devops/ServiceChangeAnalysis')

' renders the element
ServiceChangeAnalysisGroup('ServiceChangeAnalysisGroup', 'Service Change Analysis Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

