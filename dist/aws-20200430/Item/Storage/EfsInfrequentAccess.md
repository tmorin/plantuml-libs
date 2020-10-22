# Efs Infrequent Access

```text
aws-20200430/Item/Storage/EfsInfrequentAccess
```

```text
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
```

|icon|card|element|group|
|---|---|---|---|
|![](EfsInfrequentAccess.png)|![](EfsInfrequentAccess.card.png)|![](EfsInfrequentAccess.element.png)|![](EfsInfrequentAccess.group.png)|



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
' loads the EfsInfrequentAccess element
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
EfsInfrequentAccessCard('efs_infrequent_access', 'Efs Infrequent Access', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the EfsInfrequentAccess element
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
EfsInfrequentAccessCard('efs_infrequent_access', 'Efs Infrequent Access', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the EfsInfrequentAccess element
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
EfsInfrequentAccess('efs_infrequent_access', 'Efs Infrequent Access', 'an optional tech field')
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
' loads the EfsInfrequentAccess element
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
EfsInfrequentAccess('efs_infrequent_access', 'Efs Infrequent Access', 'an optional tech field')
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
' loads the EfsInfrequentAccess element
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
EfsInfrequentAccessGroup('efs_infrequent_access', 'Efs Infrequent Access', 'an optional tech field'){
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
' loads the EfsInfrequentAccess element
include('aws-20200430/Item/Storage/EfsInfrequentAccess')
EfsInfrequentAccessGroup('efs_infrequent_access', 'Efs Infrequent Access', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

