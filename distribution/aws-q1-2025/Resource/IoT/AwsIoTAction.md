# AwsIoTAction


```text
aws-q1-2025/Resource/IoT/AwsIoTAction
```

```text
include('aws-q1-2025/Resource/IoT/AwsIoTAction')
```



| Illustration | AwsIoTAction | AwsIoTActionCard | AwsIoTActionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/IoT/AwsIoTAction.png) | ![illustration for AwsIoTAction](../../../aws-q1-2025/Resource/IoT/AwsIoTAction.Local.png) | ![illustration for AwsIoTActionCard](../../../aws-q1-2025/Resource/IoT/AwsIoTActionCard.Local.png) | ![illustration for AwsIoTActionGroup](../../../aws-q1-2025/Resource/IoT/AwsIoTActionGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTActionXs>`
- `<$AwsIoTActionSm>`
- `<$AwsIoTActionMd>`
- `<$AwsIoTActionLg>`





## AwsIoTAction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTAction
include('aws-q1-2025/Resource/IoT/AwsIoTAction')

' renders the element
AwsIoTAction('AwsIoTAction', 'Aws Io T Action', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTAction
include('aws-q1-2025/Resource/IoT/AwsIoTAction')

' renders the element
AwsIoTAction('AwsIoTAction', 'Aws Io T Action', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTActionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActionCard
include('aws-q1-2025/Resource/IoT/AwsIoTAction')

' renders the element
AwsIoTActionCard('AwsIoTActionCard', 'Aws Io T Action Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTActionCard
include('aws-q1-2025/Resource/IoT/AwsIoTAction')

' renders the element
AwsIoTActionCard('AwsIoTActionCard', 'Aws Io T Action Card', 'an optional description')
@enduml
```

## AwsIoTActionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsIoTActionGroup
include('aws-q1-2025/Resource/IoT/AwsIoTAction')

' renders the element
AwsIoTActionGroup('AwsIoTActionGroup', 'Aws Io T Action Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTActionGroup
include('aws-q1-2025/Resource/IoT/AwsIoTAction')

' renders the element
AwsIoTActionGroup('AwsIoTActionGroup', 'Aws Io T Action Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

