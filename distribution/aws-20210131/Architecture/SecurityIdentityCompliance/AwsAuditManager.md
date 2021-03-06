# AwsAuditManager


```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')
```



| Illustration | AwsAuditManager | AwsAuditManagerCard | AwsAuditManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager.png) | ![illustration for AwsAuditManager](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager.Local.png) | ![illustration for AwsAuditManagerCard](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManagerCard.Local.png) | ![illustration for AwsAuditManagerGroup](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManagerGroup.Local.png) |




## AwsAuditManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAuditManager
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')

' renders the element
AwsAuditManager('AwsAuditManager', 'Aws Audit Manager', 'an optional tech label')
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

' loads the Item which embeds the element AwsAuditManager
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')

' renders the element
AwsAuditManager('AwsAuditManager', 'Aws Audit Manager', 'an optional tech label')
@enduml
```

## AwsAuditManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAuditManagerCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')

' renders the element
AwsAuditManagerCard('AwsAuditManagerCard', 'Aws Audit Manager Card', 'an optional description')
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

' loads the Item which embeds the element AwsAuditManagerCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')

' renders the element
AwsAuditManagerCard('AwsAuditManagerCard', 'Aws Audit Manager Card', 'an optional description')
@enduml
```

## AwsAuditManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsAuditManagerGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')

' renders the element
AwsAuditManagerGroup('AwsAuditManagerGroup', 'Aws Audit Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsAuditManagerGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsAuditManager')

' renders the element
AwsAuditManagerGroup('AwsAuditManagerGroup', 'Aws Audit Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

