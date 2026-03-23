# AwsBudgets


```text
aws/Architecture/CloudFinancialManagement/AwsBudgets
```

```text
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')
```



| Illustration | AwsBudgets | AwsBudgetsCard | AwsBudgetsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/CloudFinancialManagement/AwsBudgets.png) | ![illustration for AwsBudgets](../../../aws/Architecture/CloudFinancialManagement/AwsBudgets.Local.png) | ![illustration for AwsBudgetsCard](../../../aws/Architecture/CloudFinancialManagement/AwsBudgetsCard.Local.png) | ![illustration for AwsBudgetsGroup](../../../aws/Architecture/CloudFinancialManagement/AwsBudgetsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsBudgetsXs>`
- `<$AwsBudgetsSm>`
- `<$AwsBudgetsMd>`
- `<$AwsBudgetsLg>`





## AwsBudgets

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsBudgets
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')

' renders the element
AwsBudgets('AwsBudgets', 'Aws Budgets', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsBudgets
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')

' renders the element
AwsBudgets('AwsBudgets', 'Aws Budgets', 'an optional tech label', 'an optional description')
@enduml
```

## AwsBudgetsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsBudgetsCard
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')

' renders the element
AwsBudgetsCard('AwsBudgetsCard', 'Aws Budgets Card', 'an optional description')
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

' loads the Item which embeds the element AwsBudgetsCard
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')

' renders the element
AwsBudgetsCard('AwsBudgetsCard', 'Aws Budgets Card', 'an optional description')
@enduml
```

## AwsBudgetsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsBudgetsGroup
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')

' renders the element
AwsBudgetsGroup('AwsBudgetsGroup', 'Aws Budgets Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsBudgetsGroup
include('aws/Architecture/CloudFinancialManagement/AwsBudgets')

' renders the element
AwsBudgetsGroup('AwsBudgetsGroup', 'Aws Budgets Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

