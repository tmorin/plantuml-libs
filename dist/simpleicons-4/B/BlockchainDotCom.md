# Blockchain Dot Com

```text
simpleicons-4/B/BlockchainDotCom
```

```text
include('simpleicons-4/B/BlockchainDotCom')
```

|icon|element|
|---|---|
|![](BlockchainDotCom.png)|![](BlockchainDotCom.element.png)|



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
' loads the BlockchainDotCom element
include('simpleicons-4/B/BlockchainDotCom')
BlockchainDotCom('blockchain_dot_com', 'Blockchain Dot Com', 'an optional tech field')
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
' loads the BlockchainDotCom element
include('simpleicons-4/B/BlockchainDotCom')
BlockchainDotCom('blockchain_dot_com', 'Blockchain Dot Com', 'an optional tech field')
@enduml
```

