# ApplicationIntegration


```text
aws-q2-2022/Category/ApplicationIntegration
```

```text
include('aws-q2-2022/Category/ApplicationIntegration')
```



| Illustration | ApplicationIntegration | ApplicationIntegrationCard | ApplicationIntegrationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2022/Category/ApplicationIntegration.png) | ![illustration for ApplicationIntegration](../../aws-q2-2022/Category/ApplicationIntegration.Local.png) | ![illustration for ApplicationIntegrationCard](../../aws-q2-2022/Category/ApplicationIntegrationCard.Local.png) | ![illustration for ApplicationIntegrationGroup](../../aws-q2-2022/Category/ApplicationIntegrationGroup.Local.png) |




## ApplicationIntegration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ApplicationIntegration
include('aws-q2-2022/Category/ApplicationIntegration')

' renders the element
ApplicationIntegration('ApplicationIntegration', 'Application Integration', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ApplicationIntegration
include('aws-q2-2022/Category/ApplicationIntegration')

' renders the element
ApplicationIntegration('ApplicationIntegration', 'Application Integration', 'an optional tech label')
@enduml
```

## ApplicationIntegrationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationCard
include('aws-q2-2022/Category/ApplicationIntegration')

' renders the element
ApplicationIntegrationCard('ApplicationIntegrationCard', 'Application Integration Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationCard
include('aws-q2-2022/Category/ApplicationIntegration')

' renders the element
ApplicationIntegrationCard('ApplicationIntegrationCard', 'Application Integration Card', 'an optional description')
@enduml
```

## ApplicationIntegrationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationGroup
include('aws-q2-2022/Category/ApplicationIntegration')

' renders the element
ApplicationIntegrationGroup('ApplicationIntegrationGroup', 'Application Integration Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationGroup
include('aws-q2-2022/Category/ApplicationIntegration')

' renders the element
ApplicationIntegrationGroup('ApplicationIntegrationGroup', 'Application Integration Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

