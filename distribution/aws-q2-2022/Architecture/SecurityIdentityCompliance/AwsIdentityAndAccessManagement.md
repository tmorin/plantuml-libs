# AwsIdentityAndAccessManagement


```text
aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement
```

```text
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')
```



| Illustration | AwsIdentityAndAccessManagement | AwsIdentityAndAccessManagementCard | AwsIdentityAndAccessManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement.png) | ![illustration for AwsIdentityAndAccessManagement](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement.Local.png) | ![illustration for AwsIdentityAndAccessManagementCard](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagementCard.Local.png) | ![illustration for AwsIdentityAndAccessManagementGroup](../../../aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagementGroup.Local.png) |




## AwsIdentityAndAccessManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagement
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagement('AwsIdentityAndAccessManagement', 'Aws Identity And Access Management', 'an optional tech label')
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

' loads the Item which embeds the element AwsIdentityAndAccessManagement
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagement('AwsIdentityAndAccessManagement', 'Aws Identity And Access Management', 'an optional tech label')
@enduml
```

## AwsIdentityAndAccessManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagementCard
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagementCard('AwsIdentityAndAccessManagementCard', 'Aws Identity And Access Management Card', 'an optional description')
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

' loads the Item which embeds the element AwsIdentityAndAccessManagementCard
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagementCard('AwsIdentityAndAccessManagementCard', 'Aws Identity And Access Management Card', 'an optional description')
@enduml
```

## AwsIdentityAndAccessManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagementGroup
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagementGroup('AwsIdentityAndAccessManagementGroup', 'Aws Identity And Access Management Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIdentityAndAccessManagementGroup
include('aws-q2-2022/Architecture/SecurityIdentityCompliance/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagementGroup('AwsIdentityAndAccessManagementGroup', 'Aws Identity And Access Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

