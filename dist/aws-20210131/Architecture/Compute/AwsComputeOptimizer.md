# Aws Compute Optimizer

```text
aws-20210131/Architecture/Compute/AwsComputeOptimizer
```

```text
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsComputeOptimizer.png)|![](AwsComputeOptimizer.card.png)|![](AwsComputeOptimizer.element.png)|![](AwsComputeOptimizer.group.png)|



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
' loads the AwsComputeOptimizer element
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
AwsComputeOptimizerCard('aws_compute_optimizer', 'Aws Compute Optimizer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsComputeOptimizer element
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
AwsComputeOptimizerCard('aws_compute_optimizer', 'Aws Compute Optimizer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsComputeOptimizer element
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
AwsComputeOptimizer('aws_compute_optimizer', 'Aws Compute Optimizer', 'an optional tech field')
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
' loads the AwsComputeOptimizer element
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
AwsComputeOptimizer('aws_compute_optimizer', 'Aws Compute Optimizer', 'an optional tech field')
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
' loads the AwsComputeOptimizer element
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
AwsComputeOptimizerGroup('aws_compute_optimizer', 'Aws Compute Optimizer', 'an optional tech field'){
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
' loads the AwsComputeOptimizer element
include('aws-20210131/Architecture/Compute/AwsComputeOptimizer')
AwsComputeOptimizerGroup('aws_compute_optimizer', 'Aws Compute Optimizer', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

