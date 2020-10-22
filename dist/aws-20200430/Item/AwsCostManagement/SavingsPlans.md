# Savings Plans

```text
aws-20200430/Item/AwsCostManagement/SavingsPlans
```

```text
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
```

|icon|card|element|group|
|---|---|---|---|
|![](SavingsPlans.png)|![](SavingsPlans.card.png)|![](SavingsPlans.element.png)|![](SavingsPlans.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SavingsPlans element
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
SavingsPlansCard('savings_plans', 'Savings Plans', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SavingsPlans element
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
SavingsPlansCard('savings_plans', 'Savings Plans', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SavingsPlans element
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
SavingsPlans('savings_plans', 'Savings Plans', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SavingsPlans element
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
SavingsPlans('savings_plans', 'Savings Plans', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SavingsPlans element
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
SavingsPlansGroup('savings_plans', 'Savings Plans', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SavingsPlans element
include('aws-20200430/Item/AwsCostManagement/SavingsPlans')
SavingsPlansGroup('savings_plans', 'Savings Plans', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

