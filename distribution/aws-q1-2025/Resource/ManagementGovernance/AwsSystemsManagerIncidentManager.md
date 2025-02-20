# AwsSystemsManagerIncidentManager


```text
aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager
```

```text
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')
```



| Illustration | AwsSystemsManagerIncidentManager | AwsSystemsManagerIncidentManagerCard | AwsSystemsManagerIncidentManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager.png) | ![illustration for AwsSystemsManagerIncidentManager](../../../aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager.Local.png) | ![illustration for AwsSystemsManagerIncidentManagerCard](../../../aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManagerCard.Local.png) | ![illustration for AwsSystemsManagerIncidentManagerGroup](../../../aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsSystemsManagerIncidentManagerXs>`
- `<$AwsSystemsManagerIncidentManagerSm>`
- `<$AwsSystemsManagerIncidentManagerMd>`
- `<$AwsSystemsManagerIncidentManagerLg>`





## AwsSystemsManagerIncidentManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerIncidentManager
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')

' renders the element
AwsSystemsManagerIncidentManager('AwsSystemsManagerIncidentManager', 'Aws Systems Manager Incident Manager', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerIncidentManager
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')

' renders the element
AwsSystemsManagerIncidentManager('AwsSystemsManagerIncidentManager', 'Aws Systems Manager Incident Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSystemsManagerIncidentManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerIncidentManagerCard
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')

' renders the element
AwsSystemsManagerIncidentManagerCard('AwsSystemsManagerIncidentManagerCard', 'Aws Systems Manager Incident Manager Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerIncidentManagerCard
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')

' renders the element
AwsSystemsManagerIncidentManagerCard('AwsSystemsManagerIncidentManagerCard', 'Aws Systems Manager Incident Manager Card', 'an optional description')
@enduml
```

## AwsSystemsManagerIncidentManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerIncidentManagerGroup
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')

' renders the element
AwsSystemsManagerIncidentManagerGroup('AwsSystemsManagerIncidentManagerGroup', 'Aws Systems Manager Incident Manager Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerIncidentManagerGroup
include('aws-q1-2025/Resource/ManagementGovernance/AwsSystemsManagerIncidentManager')

' renders the element
AwsSystemsManagerIncidentManagerGroup('AwsSystemsManagerIncidentManagerGroup', 'Aws Systems Manager Incident Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

