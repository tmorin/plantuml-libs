# MigrationModernization


```text
aws-q2-2024/Category/MigrationModernization
```

```text
include('aws-q2-2024/Category/MigrationModernization')
```



| Illustration | MigrationModernization | MigrationModernizationCard | MigrationModernizationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q2-2024/Category/MigrationModernization.png) | ![illustration for MigrationModernization](../../aws-q2-2024/Category/MigrationModernization.Local.png) | ![illustration for MigrationModernizationCard](../../aws-q2-2024/Category/MigrationModernizationCard.Local.png) | ![illustration for MigrationModernizationGroup](../../aws-q2-2024/Category/MigrationModernizationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MigrationModernizationXs>`
- `<$MigrationModernizationSm>`
- `<$MigrationModernizationMd>`
- `<$MigrationModernizationLg>`





## MigrationModernization

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element MigrationModernization
include('aws-q2-2024/Category/MigrationModernization')

' renders the element
MigrationModernization('MigrationModernization', 'Migration Modernization', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element MigrationModernization
include('aws-q2-2024/Category/MigrationModernization')

' renders the element
MigrationModernization('MigrationModernization', 'Migration Modernization', 'an optional tech label', 'an optional description')
@enduml
```

## MigrationModernizationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element MigrationModernizationCard
include('aws-q2-2024/Category/MigrationModernization')

' renders the element
MigrationModernizationCard('MigrationModernizationCard', 'Migration Modernization Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element MigrationModernizationCard
include('aws-q2-2024/Category/MigrationModernization')

' renders the element
MigrationModernizationCard('MigrationModernizationCard', 'Migration Modernization Card', 'an optional description')
@enduml
```

## MigrationModernizationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element MigrationModernizationGroup
include('aws-q2-2024/Category/MigrationModernization')

' renders the element
MigrationModernizationGroup('MigrationModernizationGroup', 'Migration Modernization Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element MigrationModernizationGroup
include('aws-q2-2024/Category/MigrationModernization')

' renders the element
MigrationModernizationGroup('MigrationModernizationGroup', 'Migration Modernization Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

