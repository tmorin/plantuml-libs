# AmazonManagedWorkflowsForApacheAirflow


```text
aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow
```

```text
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')
```



| Illustration | AmazonManagedWorkflowsForApacheAirflow | AmazonManagedWorkflowsForApacheAirflowCard | AmazonManagedWorkflowsForApacheAirflowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow.png) | ![illustration for AmazonManagedWorkflowsForApacheAirflow](../../../aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow.Local.png) | ![illustration for AmazonManagedWorkflowsForApacheAirflowCard](../../../aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflowCard.Local.png) | ![illustration for AmazonManagedWorkflowsForApacheAirflowGroup](../../../aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflowGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonManagedWorkflowsForApacheAirflowXs>`
- `<$AmazonManagedWorkflowsForApacheAirflowSm>`
- `<$AmazonManagedWorkflowsForApacheAirflowMd>`
- `<$AmazonManagedWorkflowsForApacheAirflowLg>`





## AmazonManagedWorkflowsForApacheAirflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedWorkflowsForApacheAirflow
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')

' renders the element
AmazonManagedWorkflowsForApacheAirflow('AmazonManagedWorkflowsForApacheAirflow', 'Amazon Managed Workflows For Apache Airflow', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedWorkflowsForApacheAirflow
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')

' renders the element
AmazonManagedWorkflowsForApacheAirflow('AmazonManagedWorkflowsForApacheAirflow', 'Amazon Managed Workflows For Apache Airflow', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonManagedWorkflowsForApacheAirflowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedWorkflowsForApacheAirflowCard
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')

' renders the element
AmazonManagedWorkflowsForApacheAirflowCard('AmazonManagedWorkflowsForApacheAirflowCard', 'Amazon Managed Workflows For Apache Airflow Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedWorkflowsForApacheAirflowCard
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')

' renders the element
AmazonManagedWorkflowsForApacheAirflowCard('AmazonManagedWorkflowsForApacheAirflowCard', 'Amazon Managed Workflows For Apache Airflow Card', 'an optional description')
@enduml
```

## AmazonManagedWorkflowsForApacheAirflowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedWorkflowsForApacheAirflowGroup
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')

' renders the element
AmazonManagedWorkflowsForApacheAirflowGroup('AmazonManagedWorkflowsForApacheAirflowGroup', 'Amazon Managed Workflows For Apache Airflow Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonManagedWorkflowsForApacheAirflowGroup
include('aws/Architecture/ApplicationIntegration/AmazonManagedWorkflowsForApacheAirflow')

' renders the element
AmazonManagedWorkflowsForApacheAirflowGroup('AmazonManagedWorkflowsForApacheAirflowGroup', 'Amazon Managed Workflows For Apache Airflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

