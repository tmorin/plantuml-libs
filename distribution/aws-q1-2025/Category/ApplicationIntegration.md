# ApplicationIntegration


```text
aws-q1-2025/Category/ApplicationIntegration
```

```text
include('aws-q1-2025/Category/ApplicationIntegration')
```



| Illustration | ApplicationIntegration | ApplicationIntegrationCard | ApplicationIntegrationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2025/Category/ApplicationIntegration.png) | ![illustration for ApplicationIntegration](../../aws-q1-2025/Category/ApplicationIntegration.Local.png) | ![illustration for ApplicationIntegrationCard](../../aws-q1-2025/Category/ApplicationIntegrationCard.Local.png) | ![illustration for ApplicationIntegrationGroup](../../aws-q1-2025/Category/ApplicationIntegrationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApplicationIntegrationXs>`
- `<$ApplicationIntegrationSm>`
- `<$ApplicationIntegrationMd>`
- `<$ApplicationIntegrationLg>`





## ApplicationIntegration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ApplicationIntegration
include('aws-q1-2025/Category/ApplicationIntegration')

' renders the element
ApplicationIntegration('ApplicationIntegration', 'Application Integration', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ApplicationIntegration
include('aws-q1-2025/Category/ApplicationIntegration')

' renders the element
ApplicationIntegration('ApplicationIntegration', 'Application Integration', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationCard
include('aws-q1-2025/Category/ApplicationIntegration')

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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationCard
include('aws-q1-2025/Category/ApplicationIntegration')

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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationGroup
include('aws-q1-2025/Category/ApplicationIntegration')

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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ApplicationIntegrationGroup
include('aws-q1-2025/Category/ApplicationIntegration')

' renders the element
ApplicationIntegrationGroup('ApplicationIntegrationGroup', 'Application Integration Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

