# AwsCloudFormationStack


```text
aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack
```

```text
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')
```



| Illustration | AwsCloudFormationStack | AwsCloudFormationStackCard | AwsCloudFormationStackGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack.png) | ![illustration for AwsCloudFormationStack](../../../aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack.Local.png) | ![illustration for AwsCloudFormationStackCard](../../../aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStackCard.Local.png) | ![illustration for AwsCloudFormationStackGroup](../../../aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStackGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsCloudFormationStackXs>`
- `<$AwsCloudFormationStackSm>`
- `<$AwsCloudFormationStackMd>`
- `<$AwsCloudFormationStackLg>`





## AwsCloudFormationStack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsCloudFormationStack
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')

' renders the element
AwsCloudFormationStack('AwsCloudFormationStack', 'Aws Cloud Formation Stack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsCloudFormationStack
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')

' renders the element
AwsCloudFormationStack('AwsCloudFormationStack', 'Aws Cloud Formation Stack', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCloudFormationStackCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsCloudFormationStackCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')

' renders the element
AwsCloudFormationStackCard('AwsCloudFormationStackCard', 'Aws Cloud Formation Stack Card', 'an optional description')
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

' loads the Item which embeds the element AwsCloudFormationStackCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')

' renders the element
AwsCloudFormationStackCard('AwsCloudFormationStackCard', 'Aws Cloud Formation Stack Card', 'an optional description')
@enduml
```

## AwsCloudFormationStackGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsCloudFormationStackGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')

' renders the element
AwsCloudFormationStackGroup('AwsCloudFormationStackGroup', 'Aws Cloud Formation Stack Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCloudFormationStackGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsCloudFormationStack')

' renders the element
AwsCloudFormationStackGroup('AwsCloudFormationStackGroup', 'Aws Cloud Formation Stack Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

