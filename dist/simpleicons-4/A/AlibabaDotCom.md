# Alibaba Dot Com

```text
simpleicons-4/A/AlibabaDotCom
```

```text
include('simpleicons-4/A/AlibabaDotCom')
```

|icon|element|
|---|---|
|![](AlibabaDotCom.png)|![](AlibabaDotCom.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the AlibabaDotCom element
include('simpleicons-4/A/AlibabaDotCom')
AlibabaDotCom('alibaba_dot_com', 'Alibaba Dot Com', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the AlibabaDotCom element
include('simpleicons-4/A/AlibabaDotCom')
AlibabaDotCom('alibaba_dot_com', 'Alibaba Dot Com', 'an optional tech field')
@enduml
```

