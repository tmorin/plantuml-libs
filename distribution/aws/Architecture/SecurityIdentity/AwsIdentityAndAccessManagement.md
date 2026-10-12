# AwsIdentityAndAccessManagement


```text
aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement
```

```text
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')
```



| Illustration | AwsIdentityAndAccessManagement | AwsIdentityAndAccessManagementCard | AwsIdentityAndAccessManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement.png) | ![illustration for AwsIdentityAndAccessManagement](../../../aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement.Local.png) | ![illustration for AwsIdentityAndAccessManagementCard](../../../aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagementCard.Local.png) | ![illustration for AwsIdentityAndAccessManagementGroup](../../../aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagementGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIdentityAndAccessManagementXs>`
- `<$AwsIdentityAndAccessManagementSm>`
- `<$AwsIdentityAndAccessManagementMd>`
- `<$AwsIdentityAndAccessManagementLg>`





## AwsIdentityAndAccessManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagement
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagement('AwsIdentityAndAccessManagement', 'Aws Identity And Access Management', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIdentityAndAccessManagement
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagement('AwsIdentityAndAccessManagement', 'Aws Identity And Access Management', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagementCard
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagementCard
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagementGroup
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')

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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIdentityAndAccessManagementGroup
include('aws/Architecture/SecurityIdentity/AwsIdentityAndAccessManagement')

' renders the element
AwsIdentityAndAccessManagementGroup('AwsIdentityAndAccessManagementGroup', 'Aws Identity And Access Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

