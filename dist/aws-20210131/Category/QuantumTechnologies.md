# Quantum Technologies

```text
aws-20210131/Category/QuantumTechnologies
```

```text
include('aws-20210131/Category/QuantumTechnologies')
```

|icon|card|element|group|
|---|---|---|---|
|![](QuantumTechnologies.png)|![](QuantumTechnologies.card.png)|![](QuantumTechnologies.element.png)|![](QuantumTechnologies.group.png)|



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
' loads the QuantumTechnologies element
include('aws-20210131/Category/QuantumTechnologies')
QuantumTechnologiesCard('quantum_technologies', 'Quantum Technologies', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the QuantumTechnologies element
include('aws-20210131/Category/QuantumTechnologies')
QuantumTechnologiesCard('quantum_technologies', 'Quantum Technologies', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the QuantumTechnologies element
include('aws-20210131/Category/QuantumTechnologies')
QuantumTechnologies('quantum_technologies', 'Quantum Technologies', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the QuantumTechnologies element
include('aws-20210131/Category/QuantumTechnologies')
QuantumTechnologies('quantum_technologies', 'Quantum Technologies', 'an optional tech field')
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
' loads the QuantumTechnologies element
include('aws-20210131/Category/QuantumTechnologies')
QuantumTechnologiesGroup('quantum_technologies', 'Quantum Technologies', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the QuantumTechnologies element
include('aws-20210131/Category/QuantumTechnologies')
QuantumTechnologiesGroup('quantum_technologies', 'Quantum Technologies', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

