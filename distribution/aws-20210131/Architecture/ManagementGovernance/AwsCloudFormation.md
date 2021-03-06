# AwsCloudFormation


```text
aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')
```



| Illustration | AwsCloudFormation | AwsCloudFormationCard | AwsCloudFormationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation.png) | ![illustration for AwsCloudFormation](../../../aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation.Local.png) | ![illustration for AwsCloudFormationCard](../../../aws-20210131/Architecture/ManagementGovernance/AwsCloudFormationCard.Local.png) | ![illustration for AwsCloudFormationGroup](../../../aws-20210131/Architecture/ManagementGovernance/AwsCloudFormationGroup.Local.png) |




## AwsCloudFormation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudFormation
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')

' renders the element
AwsCloudFormation('AwsCloudFormation', 'Aws Cloud Formation', 'an optional tech label')
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

' loads the Item which embeds the element AwsCloudFormation
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')

' renders the element
AwsCloudFormation('AwsCloudFormation', 'Aws Cloud Formation', 'an optional tech label')
@enduml
```

## AwsCloudFormationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudFormationCard
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')

' renders the element
AwsCloudFormationCard('AwsCloudFormationCard', 'Aws Cloud Formation Card', 'an optional description')
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

' loads the Item which embeds the element AwsCloudFormationCard
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')

' renders the element
AwsCloudFormationCard('AwsCloudFormationCard', 'Aws Cloud Formation Card', 'an optional description')
@enduml
```

## AwsCloudFormationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudFormationGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')

' renders the element
AwsCloudFormationGroup('AwsCloudFormationGroup', 'Aws Cloud Formation Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCloudFormationGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsCloudFormation')

' renders the element
AwsCloudFormationGroup('AwsCloudFormationGroup', 'Aws Cloud Formation Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

