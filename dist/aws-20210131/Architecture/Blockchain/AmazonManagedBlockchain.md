# Amazon Managed Blockchain

```text
aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain
```

```text
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonManagedBlockchain.png)|![](AmazonManagedBlockchain.card.png)|![](AmazonManagedBlockchain.element.png)|![](AmazonManagedBlockchain.group.png)|



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
' loads the AmazonManagedBlockchain element
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
AmazonManagedBlockchainCard('amazon_managed_blockchain', 'Amazon Managed Blockchain', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonManagedBlockchain element
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
AmazonManagedBlockchainCard('amazon_managed_blockchain', 'Amazon Managed Blockchain', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonManagedBlockchain element
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
AmazonManagedBlockchain('amazon_managed_blockchain', 'Amazon Managed Blockchain', 'an optional tech field')
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
' loads the AmazonManagedBlockchain element
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
AmazonManagedBlockchain('amazon_managed_blockchain', 'Amazon Managed Blockchain', 'an optional tech field')
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
' loads the AmazonManagedBlockchain element
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
AmazonManagedBlockchainGroup('amazon_managed_blockchain', 'Amazon Managed Blockchain', 'an optional tech field'){
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
' loads the AmazonManagedBlockchain element
include('aws-20210131/Architecture/Blockchain/AmazonManagedBlockchain')
AmazonManagedBlockchainGroup('amazon_managed_blockchain', 'Amazon Managed Blockchain', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

