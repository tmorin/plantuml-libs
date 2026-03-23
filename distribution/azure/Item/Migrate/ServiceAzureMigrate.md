# ServiceAzureMigrate


```text
azure/Item/Migrate/ServiceAzureMigrate
```

```text
include('azure/Item/Migrate/ServiceAzureMigrate')
```



| Illustration | ServiceAzureMigrate | ServiceAzureMigrateCard | ServiceAzureMigrateGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Migrate/ServiceAzureMigrate.png) | ![illustration for ServiceAzureMigrate](../../../azure/Item/Migrate/ServiceAzureMigrate.Local.png) | ![illustration for ServiceAzureMigrateCard](../../../azure/Item/Migrate/ServiceAzureMigrateCard.Local.png) | ![illustration for ServiceAzureMigrateGroup](../../../azure/Item/Migrate/ServiceAzureMigrateGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureMigrateXs>`
- `<$ServiceAzureMigrateSm>`
- `<$ServiceAzureMigrateMd>`
- `<$ServiceAzureMigrateLg>`





## ServiceAzureMigrate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrate
include('azure/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrate('ServiceAzureMigrate', 'Service Azure Migrate', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrate
include('azure/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrate('ServiceAzureMigrate', 'Service Azure Migrate', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureMigrateCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateCard
include('azure/Item/Migrate/ServiceAzureMigrate')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateCard
include('azure/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrateCard('ServiceAzureMigrateCard', 'Service Azure Migrate Card', 'an optional description')
@enduml
```

## ServiceAzureMigrateGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateGroup
include('azure/Item/Migrate/ServiceAzureMigrate')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMigrateGroup
include('azure/Item/Migrate/ServiceAzureMigrate')

' renders the element
ServiceAzureMigrateGroup('ServiceAzureMigrateGroup', 'Service Azure Migrate Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

