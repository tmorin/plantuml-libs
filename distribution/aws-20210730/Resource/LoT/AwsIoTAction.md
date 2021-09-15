# AwsIoTAction


```text
aws-20210730/Resource/LoT/AwsIoTAction
```

```text
include('aws-20210730/Resource/LoT/AwsIoTAction')
```



| Illustration | AwsIoTAction | AwsIoTActionCard | AwsIoTActionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/LoT/AwsIoTAction.png) | ![illustration for AwsIoTAction](../../../aws-20210730/Resource/LoT/AwsIoTAction.Local.png) | ![illustration for AwsIoTActionCard](../../../aws-20210730/Resource/LoT/AwsIoTActionCard.Local.png) | ![illustration for AwsIoTActionGroup](../../../aws-20210730/Resource/LoT/AwsIoTActionGroup.Local.png) |




## AwsIoTAction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTAction
include('aws-20210730/Resource/LoT/AwsIoTAction')

' renders the element
AwsIoTAction('AwsIoTAction', 'Aws Io T Action', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTAction
include('aws-20210730/Resource/LoT/AwsIoTAction')

' renders the element
AwsIoTAction('AwsIoTAction', 'Aws Io T Action', 'an optional tech label')
@enduml
```

## AwsIoTActionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTActionCard
include('aws-20210730/Resource/LoT/AwsIoTAction')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTActionCard
include('aws-20210730/Resource/LoT/AwsIoTAction')

' renders the element
AwsIoTActionCard('AwsIoTActionCard', 'Aws Io T Action Card', 'an optional description')
@enduml
```

## AwsIoTActionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTActionGroup
include('aws-20210730/Resource/LoT/AwsIoTAction')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTActionGroup
include('aws-20210730/Resource/LoT/AwsIoTAction')

' renders the element
AwsIoTActionGroup('AwsIoTActionGroup', 'Aws Io T Action Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

