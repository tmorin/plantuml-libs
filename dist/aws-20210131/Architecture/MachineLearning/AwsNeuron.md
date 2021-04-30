# Aws Neuron

```text
aws-20210131/Architecture/MachineLearning/AwsNeuron
```

```text
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsNeuron.png)|![](AwsNeuron.card.png)|![](AwsNeuron.element.png)|![](AwsNeuron.group.png)|



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
' loads the AwsNeuron element
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
AwsNeuronCard('aws_neuron', 'Aws Neuron', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsNeuron element
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
AwsNeuronCard('aws_neuron', 'Aws Neuron', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsNeuron element
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
AwsNeuron('aws_neuron', 'Aws Neuron', 'an optional tech field')
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
' loads the AwsNeuron element
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
AwsNeuron('aws_neuron', 'Aws Neuron', 'an optional tech field')
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
' loads the AwsNeuron element
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
AwsNeuronGroup('aws_neuron', 'Aws Neuron', 'an optional tech field'){
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
' loads the AwsNeuron element
include('aws-20210131/Architecture/MachineLearning/AwsNeuron')
AwsNeuronGroup('aws_neuron', 'Aws Neuron', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

