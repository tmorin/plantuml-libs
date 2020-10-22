# Blockchain Resource

```text
aws-20200430/Item/Blockchain/BlockchainResource
```

```text
include('aws-20200430/Item/Blockchain/BlockchainResource')
```

|icon|card|element|group|
|---|---|---|---|
|![](BlockchainResource.png)|![](BlockchainResource.card.png)|![](BlockchainResource.element.png)|![](BlockchainResource.group.png)|



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
' loads the BlockchainResource element
include('aws-20200430/Item/Blockchain/BlockchainResource')
BlockchainResourceCard('blockchain_resource', 'Blockchain Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the BlockchainResource element
include('aws-20200430/Item/Blockchain/BlockchainResource')
BlockchainResourceCard('blockchain_resource', 'Blockchain Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the BlockchainResource element
include('aws-20200430/Item/Blockchain/BlockchainResource')
BlockchainResource('blockchain_resource', 'Blockchain Resource', 'an optional tech field')
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
' loads the BlockchainResource element
include('aws-20200430/Item/Blockchain/BlockchainResource')
BlockchainResource('blockchain_resource', 'Blockchain Resource', 'an optional tech field')
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
' loads the BlockchainResource element
include('aws-20200430/Item/Blockchain/BlockchainResource')
BlockchainResourceGroup('blockchain_resource', 'Blockchain Resource', 'an optional tech field'){
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
' loads the BlockchainResource element
include('aws-20200430/Item/Blockchain/BlockchainResource')
BlockchainResourceGroup('blockchain_resource', 'Blockchain Resource', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

