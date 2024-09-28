# AwsManagementConsole


```text
aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole
```

```text
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')
```



| Illustration | AwsManagementConsole | AwsManagementConsoleCard | AwsManagementConsoleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole.png) | ![illustration for AwsManagementConsole](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole.Local.png) | ![illustration for AwsManagementConsoleCard](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsoleCard.Local.png) | ![illustration for AwsManagementConsoleGroup](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsoleGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsManagementConsoleXs>`
- `<$AwsManagementConsoleSm>`
- `<$AwsManagementConsoleMd>`
- `<$AwsManagementConsoleLg>`





## AwsManagementConsole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsManagementConsole
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsole('AwsManagementConsole', 'Aws Management Console', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsManagementConsole
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsole('AwsManagementConsole', 'Aws Management Console', 'an optional tech label', 'an optional description')
@enduml
```

## AwsManagementConsoleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleCard
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleCard
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsoleCard('AwsManagementConsoleCard', 'Aws Management Console Card', 'an optional description')
@enduml
```

## AwsManagementConsoleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleGroup
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleGroup
include('aws-q2-2024/Architecture/ManagementGovernance/AwsManagementConsole')

' renders the element
AwsManagementConsoleGroup('AwsManagementConsoleGroup', 'Aws Management Console Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

