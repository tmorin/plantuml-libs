# ReservedInstanceReporting


```text
aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting
```

```text
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')
```



| Illustration | ReservedInstanceReporting | ReservedInstanceReportingCard | ReservedInstanceReportingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting.png) | ![illustration for ReservedInstanceReporting](../../../aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting.Local.png) | ![illustration for ReservedInstanceReportingCard](../../../aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReportingCard.Local.png) | ![illustration for ReservedInstanceReportingGroup](../../../aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReportingGroup.Local.png) |




## ReservedInstanceReporting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ReservedInstanceReporting
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')

' renders the element
ReservedInstanceReporting('ReservedInstanceReporting', 'Reserved Instance Reporting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ReservedInstanceReporting
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')

' renders the element
ReservedInstanceReporting('ReservedInstanceReporting', 'Reserved Instance Reporting', 'an optional tech label', 'an optional description')
@enduml
```

## ReservedInstanceReportingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ReservedInstanceReportingCard
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')

' renders the element
ReservedInstanceReportingCard('ReservedInstanceReportingCard', 'Reserved Instance Reporting Card', 'an optional description')
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

' loads the Item which embeds the element ReservedInstanceReportingCard
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')

' renders the element
ReservedInstanceReportingCard('ReservedInstanceReportingCard', 'Reserved Instance Reporting Card', 'an optional description')
@enduml
```

## ReservedInstanceReportingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ReservedInstanceReportingGroup
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')

' renders the element
ReservedInstanceReportingGroup('ReservedInstanceReportingGroup', 'Reserved Instance Reporting Group', 'an optional tech label') {
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

' loads the Item which embeds the element ReservedInstanceReportingGroup
include('aws-q2-2022/Architecture/CloudFinancialManagement/ReservedInstanceReporting')

' renders the element
ReservedInstanceReportingGroup('ReservedInstanceReportingGroup', 'Reserved Instance Reporting Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

