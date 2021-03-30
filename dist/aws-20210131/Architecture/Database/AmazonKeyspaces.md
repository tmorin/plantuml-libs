# Amazon Keyspaces

```text
aws-20210131/Architecture/Database/AmazonKeyspaces
```

```text
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKeyspaces.png)|![](AmazonKeyspaces.card.png)|![](AmazonKeyspaces.element.png)|![](AmazonKeyspaces.group.png)|



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
' loads the AmazonKeyspaces element
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
AmazonKeyspacesCard('amazon_keyspaces', 'Amazon Keyspaces', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKeyspaces element
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
AmazonKeyspacesCard('amazon_keyspaces', 'Amazon Keyspaces', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKeyspaces element
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
AmazonKeyspaces('amazon_keyspaces', 'Amazon Keyspaces', 'an optional tech field')
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
' loads the AmazonKeyspaces element
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
AmazonKeyspaces('amazon_keyspaces', 'Amazon Keyspaces', 'an optional tech field')
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
' loads the AmazonKeyspaces element
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
AmazonKeyspacesGroup('amazon_keyspaces', 'Amazon Keyspaces', 'an optional tech field'){
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
' loads the AmazonKeyspaces element
include('aws-20210131/Architecture/Database/AmazonKeyspaces')
AmazonKeyspacesGroup('amazon_keyspaces', 'Amazon Keyspaces', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

