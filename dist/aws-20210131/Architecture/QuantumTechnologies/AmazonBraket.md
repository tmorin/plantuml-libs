# Amazon Braket

```text
aws-20210131/Architecture/QuantumTechnologies/AmazonBraket
```

```text
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonBraket.png)|![](AmazonBraket.card.png)|![](AmazonBraket.element.png)|![](AmazonBraket.group.png)|



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
' loads the AmazonBraket element
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
AmazonBraketCard('amazon_braket', 'Amazon Braket', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonBraket element
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
AmazonBraketCard('amazon_braket', 'Amazon Braket', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonBraket element
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
AmazonBraket('amazon_braket', 'Amazon Braket', 'an optional tech field')
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
' loads the AmazonBraket element
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
AmazonBraket('amazon_braket', 'Amazon Braket', 'an optional tech field')
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
' loads the AmazonBraket element
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
AmazonBraketGroup('amazon_braket', 'Amazon Braket', 'an optional tech field'){
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
' loads the AmazonBraket element
include('aws-20210131/Architecture/QuantumTechnologies/AmazonBraket')
AmazonBraketGroup('amazon_braket', 'Amazon Braket', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

