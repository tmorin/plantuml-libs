# Aws Fault Injection Simulator

```text
aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsFaultInjectionSimulator.png)|![](AwsFaultInjectionSimulator.card.png)|![](AwsFaultInjectionSimulator.element.png)|![](AwsFaultInjectionSimulator.group.png)|



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
' loads the AwsFaultInjectionSimulator element
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
AwsFaultInjectionSimulatorCard('aws_fault_injection_simulator', 'Aws Fault Injection Simulator', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFaultInjectionSimulator element
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
AwsFaultInjectionSimulatorCard('aws_fault_injection_simulator', 'Aws Fault Injection Simulator', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFaultInjectionSimulator element
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
AwsFaultInjectionSimulator('aws_fault_injection_simulator', 'Aws Fault Injection Simulator', 'an optional tech field')
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
' loads the AwsFaultInjectionSimulator element
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
AwsFaultInjectionSimulator('aws_fault_injection_simulator', 'Aws Fault Injection Simulator', 'an optional tech field')
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
' loads the AwsFaultInjectionSimulator element
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
AwsFaultInjectionSimulatorGroup('aws_fault_injection_simulator', 'Aws Fault Injection Simulator', 'an optional tech field'){
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
' loads the AwsFaultInjectionSimulator element
include('aws-20210131/Architecture/ManagementGovernance/AwsFaultInjectionSimulator')
AwsFaultInjectionSimulatorGroup('aws_fault_injection_simulator', 'Aws Fault Injection Simulator', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

