# AmazonManagedServiceForPrometheus


```text
aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus
```

```text
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')
```



| Illustration | AmazonManagedServiceForPrometheus | AmazonManagedServiceForPrometheusCard | AmazonManagedServiceForPrometheusGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus.png) | ![illustration for AmazonManagedServiceForPrometheus](../../../aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus.Local.png) | ![illustration for AmazonManagedServiceForPrometheusCard](../../../aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheusCard.Local.png) | ![illustration for AmazonManagedServiceForPrometheusGroup](../../../aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheusGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonManagedServiceForPrometheusXs>`
- `<$AmazonManagedServiceForPrometheusSm>`
- `<$AmazonManagedServiceForPrometheusMd>`
- `<$AmazonManagedServiceForPrometheusLg>`





## AmazonManagedServiceForPrometheus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheus
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheus('AmazonManagedServiceForPrometheus', 'Amazon Managed Service For Prometheus', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheus
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheus('AmazonManagedServiceForPrometheus', 'Amazon Managed Service For Prometheus', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonManagedServiceForPrometheusCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusCard
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusCard
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheusCard('AmazonManagedServiceForPrometheusCard', 'Amazon Managed Service For Prometheus Card', 'an optional description')
@enduml
```

## AmazonManagedServiceForPrometheusGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusGroup
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForPrometheusGroup
include('aws-q1-2023/Architecture/ManagementGovernance/AmazonManagedServiceForPrometheus')

' renders the element
AmazonManagedServiceForPrometheusGroup('AmazonManagedServiceForPrometheusGroup', 'Amazon Managed Service For Prometheus Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

