# AwsApplicationCostProfiler


```text
aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler
```

```text
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')
```



| Illustration | AwsApplicationCostProfiler | AwsApplicationCostProfilerCard | AwsApplicationCostProfilerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler.png) | ![illustration for AwsApplicationCostProfiler](../../../aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler.Local.png) | ![illustration for AwsApplicationCostProfilerCard](../../../aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfilerCard.Local.png) | ![illustration for AwsApplicationCostProfilerGroup](../../../aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfilerGroup.Local.png) |




## AwsApplicationCostProfiler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsApplicationCostProfiler
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')

' renders the element
AwsApplicationCostProfiler('AwsApplicationCostProfiler', 'Aws Application Cost Profiler', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsApplicationCostProfiler
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')

' renders the element
AwsApplicationCostProfiler('AwsApplicationCostProfiler', 'Aws Application Cost Profiler', 'an optional tech label')
@enduml
```

## AwsApplicationCostProfilerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsApplicationCostProfilerCard
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')

' renders the element
AwsApplicationCostProfilerCard('AwsApplicationCostProfilerCard', 'Aws Application Cost Profiler Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsApplicationCostProfilerCard
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')

' renders the element
AwsApplicationCostProfilerCard('AwsApplicationCostProfilerCard', 'Aws Application Cost Profiler Card', 'an optional description')
@enduml
```

## AwsApplicationCostProfilerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsApplicationCostProfilerGroup
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')

' renders the element
AwsApplicationCostProfilerGroup('AwsApplicationCostProfilerGroup', 'Aws Application Cost Profiler Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsApplicationCostProfilerGroup
include('aws-q2-2022/Architecture/CloudFinancialManagement/AwsApplicationCostProfiler')

' renders the element
AwsApplicationCostProfilerGroup('AwsApplicationCostProfilerGroup', 'Aws Application Cost Profiler Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

