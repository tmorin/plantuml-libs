# AwsDatasyncAgent


```text
aws/Resource/MigrationModernization/AwsDatasyncAgent
```

```text
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')
```



| Illustration | AwsDatasyncAgent | AwsDatasyncAgentCard | AwsDatasyncAgentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/MigrationModernization/AwsDatasyncAgent.png) | ![illustration for AwsDatasyncAgent](../../../aws/Resource/MigrationModernization/AwsDatasyncAgent.Local.png) | ![illustration for AwsDatasyncAgentCard](../../../aws/Resource/MigrationModernization/AwsDatasyncAgentCard.Local.png) | ![illustration for AwsDatasyncAgentGroup](../../../aws/Resource/MigrationModernization/AwsDatasyncAgentGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsDatasyncAgentXs>`
- `<$AwsDatasyncAgentSm>`
- `<$AwsDatasyncAgentMd>`
- `<$AwsDatasyncAgentLg>`





## AwsDatasyncAgent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsDatasyncAgent
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')

' renders the element
AwsDatasyncAgent('AwsDatasyncAgent', 'Aws Datasync Agent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsDatasyncAgent
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')

' renders the element
AwsDatasyncAgent('AwsDatasyncAgent', 'Aws Datasync Agent', 'an optional tech label', 'an optional description')
@enduml
```

## AwsDatasyncAgentCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsDatasyncAgentCard
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')

' renders the element
AwsDatasyncAgentCard('AwsDatasyncAgentCard', 'Aws Datasync Agent Card', 'an optional description')
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

' loads the Item which embeds the element AwsDatasyncAgentCard
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')

' renders the element
AwsDatasyncAgentCard('AwsDatasyncAgentCard', 'Aws Datasync Agent Card', 'an optional description')
@enduml
```

## AwsDatasyncAgentGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsDatasyncAgentGroup
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')

' renders the element
AwsDatasyncAgentGroup('AwsDatasyncAgentGroup', 'Aws Datasync Agent Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDatasyncAgentGroup
include('aws/Resource/MigrationModernization/AwsDatasyncAgent')

' renders the element
AwsDatasyncAgentGroup('AwsDatasyncAgentGroup', 'Aws Datasync Agent Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

