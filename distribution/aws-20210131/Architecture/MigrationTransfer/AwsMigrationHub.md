# AwsMigrationHub


```text
aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub
```

```text
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
```



| Illustration | AwsMigrationHub | AwsMigrationHubCard | AwsMigrationHubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub.png) | ![illustration for AwsMigrationHub](../../../aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub.Local.png) | ![illustration for AwsMigrationHubCard](../../../aws-20210131/Architecture/MigrationTransfer/AwsMigrationHubCard.Local.png) | ![illustration for AwsMigrationHubGroup](../../../aws-20210131/Architecture/MigrationTransfer/AwsMigrationHubGroup.Local.png) |




## AwsMigrationHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsMigrationHub
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')

' renders the element
AwsMigrationHub('AwsMigrationHub', 'Aws Migration Hub', 'an optional tech label')
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

' loads the Item which embeds the element AwsMigrationHub
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')

' renders the element
AwsMigrationHub('AwsMigrationHub', 'Aws Migration Hub', 'an optional tech label')
@enduml
```

## AwsMigrationHubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsMigrationHubCard
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')

' renders the element
AwsMigrationHubCard('AwsMigrationHubCard', 'Aws Migration Hub Card', 'an optional description')
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

' loads the Item which embeds the element AwsMigrationHubCard
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')

' renders the element
AwsMigrationHubCard('AwsMigrationHubCard', 'Aws Migration Hub Card', 'an optional description')
@enduml
```

## AwsMigrationHubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsMigrationHubGroup
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')

' renders the element
AwsMigrationHubGroup('AwsMigrationHubGroup', 'Aws Migration Hub Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsMigrationHubGroup
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')

' renders the element
AwsMigrationHubGroup('AwsMigrationHubGroup', 'Aws Migration Hub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

