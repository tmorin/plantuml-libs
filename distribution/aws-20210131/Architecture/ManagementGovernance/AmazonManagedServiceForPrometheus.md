# AmazonManagedServiceForPrometheus


```text
aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')
```



| Illustration | AmazonManagedServiceForPrometheus | AmazonManagedServiceForPrometheusCard | AmazonManagedServiceForPrometheusGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus.png) | ![illustration for AmazonManagedServiceForPrometheus](../../../aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus.Local.png) | ![illustration for AmazonManagedServiceForPrometheusCard](../../../aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheusCard.Local.png) | ![illustration for AmazonManagedServiceForPrometheusGroup](../../../aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheusGroup.Local.png) |




## AmazonManagedServiceForPrometheus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheus
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheus('AmazonManagedServiceForPrometheus', 'Amazon Managed Service For Prometheus', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheus
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheus('AmazonManagedServiceForPrometheus', 'Amazon Managed Service For Prometheus', 'an optional tech label')
@enduml
```

## AmazonManagedServiceForPrometheusCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusCard
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheusCard('AmazonManagedServiceForPrometheusCard', 'Amazon Managed Service For Prometheus Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusCard
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheusCard('AmazonManagedServiceForPrometheusCard', 'Amazon Managed Service For Prometheus Card', 'an optional description')
@enduml
```

## AmazonManagedServiceForPrometheusGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusGroup
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheusGroup('AmazonManagedServiceForPrometheusGroup', 'Amazon Managed Service For Prometheus Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusGroup
include('aws-20210131/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheusGroup('AmazonManagedServiceForPrometheusGroup', 'Amazon Managed Service For Prometheus Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

