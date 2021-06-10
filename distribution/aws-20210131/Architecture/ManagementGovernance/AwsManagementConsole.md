# AwsManagementConsole


```text
aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')
```



| Illustration | AwsManagementConsole | AwsManagementConsoleCard | AwsManagementConsoleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole.png) | ![illustration for AwsManagementConsole](../../../aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole.Local.png) | ![illustration for AwsManagementConsoleCard](../../../aws-20210131/Architecture/ManagementGovernance/AwsManagementConsoleCard.Local.png) | ![illustration for AwsManagementConsoleGroup](../../../aws-20210131/Architecture/ManagementGovernance/AwsManagementConsoleGroup.Local.png) |




## AwsManagementConsole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsManagementConsole
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsole('AwsManagementConsole', 'Aws Management Console', 'an optional tech label')
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

' loads the Item which embeds the element AwsManagementConsole
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsole('AwsManagementConsole', 'Aws Management Console', 'an optional tech label')
@enduml
```

## AwsManagementConsoleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleCard
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsoleCard('AwsManagementConsoleCard', 'Aws Management Console Card', 'an optional description')
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

' loads the Item which embeds the element AwsManagementConsoleCard
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsoleCard('AwsManagementConsoleCard', 'Aws Management Console Card', 'an optional description')
@enduml
```

## AwsManagementConsoleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsoleGroup('AwsManagementConsoleGroup', 'Aws Management Console Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsManagementConsoleGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsoleGroup('AwsManagementConsoleGroup', 'Aws Management Console Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

