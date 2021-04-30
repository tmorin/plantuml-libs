# Aws Budgets

```text
aws-20210131/Architecture/AwsCostManagement/AwsBudgets
```

```text
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsBudgets.png)|![](AwsBudgets.card.png)|![](AwsBudgets.element.png)|![](AwsBudgets.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBudgets element
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
AwsBudgetsCard('aws_budgets', 'Aws Budgets', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBudgets element
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
AwsBudgetsCard('aws_budgets', 'Aws Budgets', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBudgets element
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
AwsBudgets('aws_budgets', 'Aws Budgets', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBudgets element
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
AwsBudgets('aws_budgets', 'Aws Budgets', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBudgets element
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
AwsBudgetsGroup('aws_budgets', 'Aws Budgets', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBudgets element
include('aws-20210131/Architecture/AwsCostManagement/AwsBudgets')
AwsBudgetsGroup('aws_budgets', 'Aws Budgets', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

