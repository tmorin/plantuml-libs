# Aurora Maria Db Instance

```text
aws-20200911/Resource/Database/AuroraMariaDbInstance
```

```text
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraMariaDbInstance.png)|![](AuroraMariaDbInstance.card.png)|![](AuroraMariaDbInstance.element.png)|![](AuroraMariaDbInstance.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraMariaDbInstance element
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
AuroraMariaDbInstanceCard('aurora_maria_db_instance', 'Aurora Maria Db Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraMariaDbInstance element
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
AuroraMariaDbInstanceCard('aurora_maria_db_instance', 'Aurora Maria Db Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraMariaDbInstance element
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
AuroraMariaDbInstance('aurora_maria_db_instance', 'Aurora Maria Db Instance', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraMariaDbInstance element
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
AuroraMariaDbInstance('aurora_maria_db_instance', 'Aurora Maria Db Instance', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraMariaDbInstance element
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
AuroraMariaDbInstanceGroup('aurora_maria_db_instance', 'Aurora Maria Db Instance', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AuroraMariaDbInstance element
include('aws-20200911/Resource/Database/AuroraMariaDbInstance')
AuroraMariaDbInstanceGroup('aurora_maria_db_instance', 'Aurora Maria Db Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

