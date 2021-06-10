# ServiceAzureMigrate


```text
azure-4/Item/Migrate/ServiceAzureMigrate
```

```text
include('azure-4/Item/Migrate/ServiceAzureMigrate')
```



| Illustration | ServiceAzureMigrate | ServiceAzureMigrateCard | ServiceAzureMigrateGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Migrate/ServiceAzureMigrate.png) | ![illustration for ServiceAzureMigrate](../../../azure-4/Item/Migrate/ServiceAzureMigrate.Local.png) | ![illustration for ServiceAzureMigrateCard](../../../azure-4/Item/Migrate/ServiceAzureMigrateCard.Local.png) | ![illustration for ServiceAzureMigrateGroup](../../../azure-4/Item/Migrate/ServiceAzureMigrateGroup.Local.png) |




## ServiceAzureMigrate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrate
include('azure-4/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrate('ServiceAzureMigrate', 'Service Azure Migrate', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrate
include('azure-4/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrate('ServiceAzureMigrate', 'Service Azure Migrate', 'an optional tech label')
@enduml
```

## ServiceAzureMigrateCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateCard
include('azure-4/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrateCard('ServiceAzureMigrateCard', 'Service Azure Migrate Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateCard
include('azure-4/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrateCard('ServiceAzureMigrateCard', 'Service Azure Migrate Card', 'an optional description')
@enduml
```

## ServiceAzureMigrateGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateGroup
include('azure-4/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrateGroup('ServiceAzureMigrateGroup', 'Service Azure Migrate Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateGroup
include('azure-4/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrateGroup('ServiceAzureMigrateGroup', 'Service Azure Migrate Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

