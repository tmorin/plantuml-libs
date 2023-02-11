# AwsManagementConsole


```text
aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole
```

```text
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')
```



| Illustration | AwsManagementConsole | AwsManagementConsoleCard | AwsManagementConsoleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole.png) | ![illustration for AwsManagementConsole](../../../aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole.Local.png) | ![illustration for AwsManagementConsoleCard](../../../aws-q1-2023/Resource/GeneralIcons/AwsManagementConsoleCard.Local.png) | ![illustration for AwsManagementConsoleGroup](../../../aws-q1-2023/Resource/GeneralIcons/AwsManagementConsoleGroup.Local.png) |




## AwsManagementConsole

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsManagementConsole
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsManagementConsole
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleCard
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleCard
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleGroup
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsManagementConsoleGroup
include('aws-q1-2023/Resource/GeneralIcons/AwsManagementConsole')

' renders the element
AwsManagementConsoleGroup('AwsManagementConsoleGroup', 'Aws Management Console Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

