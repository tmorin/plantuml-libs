# AmazonManagedServiceForGrafana


```text
aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana
```

```text
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')
```



| Illustration | AmazonManagedServiceForGrafana | AmazonManagedServiceForGrafanaCard | AmazonManagedServiceForGrafanaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana.png) | ![illustration for AmazonManagedServiceForGrafana](../../../aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana.Local.png) | ![illustration for AmazonManagedServiceForGrafanaCard](../../../aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafanaCard.Local.png) | ![illustration for AmazonManagedServiceForGrafanaGroup](../../../aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafanaGroup.Local.png) |




## AmazonManagedServiceForGrafana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForGrafana
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')

' renders the element
AmazonManagedServiceForGrafana('AmazonManagedServiceForGrafana', 'Amazon Managed Service For Grafana', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForGrafana
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')

' renders the element
AmazonManagedServiceForGrafana('AmazonManagedServiceForGrafana', 'Amazon Managed Service For Grafana', 'an optional tech label')
@enduml
```

## AmazonManagedServiceForGrafanaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForGrafanaCard
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')

' renders the element
AmazonManagedServiceForGrafanaCard('AmazonManagedServiceForGrafanaCard', 'Amazon Managed Service For Grafana Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForGrafanaCard
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')

' renders the element
AmazonManagedServiceForGrafanaCard('AmazonManagedServiceForGrafanaCard', 'Amazon Managed Service For Grafana Card', 'an optional description')
@enduml
```

## AmazonManagedServiceForGrafanaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForGrafanaGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')

' renders the element
AmazonManagedServiceForGrafanaGroup('AmazonManagedServiceForGrafanaGroup', 'Amazon Managed Service For Grafana Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonManagedServiceForGrafanaGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AmazonManagedServiceForGrafana')

' renders the element
AmazonManagedServiceForGrafanaGroup('AmazonManagedServiceForGrafanaGroup', 'Amazon Managed Service For Grafana Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

