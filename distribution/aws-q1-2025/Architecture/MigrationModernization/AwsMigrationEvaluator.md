# AwsMigrationEvaluator


```text
aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator
```

```text
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')
```



| Illustration | AwsMigrationEvaluator | AwsMigrationEvaluatorCard | AwsMigrationEvaluatorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator.png) | ![illustration for AwsMigrationEvaluator](../../../aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator.Local.png) | ![illustration for AwsMigrationEvaluatorCard](../../../aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluatorCard.Local.png) | ![illustration for AwsMigrationEvaluatorGroup](../../../aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluatorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsMigrationEvaluatorXs>`
- `<$AwsMigrationEvaluatorSm>`
- `<$AwsMigrationEvaluatorMd>`
- `<$AwsMigrationEvaluatorLg>`





## AwsMigrationEvaluator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsMigrationEvaluator
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')

' renders the element
AwsMigrationEvaluator('AwsMigrationEvaluator', 'Aws Migration Evaluator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsMigrationEvaluator
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')

' renders the element
AwsMigrationEvaluator('AwsMigrationEvaluator', 'Aws Migration Evaluator', 'an optional tech label', 'an optional description')
@enduml
```

## AwsMigrationEvaluatorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsMigrationEvaluatorCard
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')

' renders the element
AwsMigrationEvaluatorCard('AwsMigrationEvaluatorCard', 'Aws Migration Evaluator Card', 'an optional description')
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

' loads the Item which embeds the element AwsMigrationEvaluatorCard
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')

' renders the element
AwsMigrationEvaluatorCard('AwsMigrationEvaluatorCard', 'Aws Migration Evaluator Card', 'an optional description')
@enduml
```

## AwsMigrationEvaluatorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsMigrationEvaluatorGroup
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')

' renders the element
AwsMigrationEvaluatorGroup('AwsMigrationEvaluatorGroup', 'Aws Migration Evaluator Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsMigrationEvaluatorGroup
include('aws-q1-2025/Architecture/MigrationModernization/AwsMigrationEvaluator')

' renders the element
AwsMigrationEvaluatorGroup('AwsMigrationEvaluatorGroup', 'Aws Migration Evaluator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

