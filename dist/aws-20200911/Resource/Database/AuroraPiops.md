# Aurora Piops

```text
aws-20200911/Resource/Database/AuroraPiops
```

```text
include('aws-20200911/Resource/Database/AuroraPiops')
```

|icon|card|element|group|
|---|---|---|---|
|![](AuroraPiops.png)|![](AuroraPiops.card.png)|![](AuroraPiops.element.png)|![](AuroraPiops.group.png)|



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
' loads the AuroraPiops element
include('aws-20200911/Resource/Database/AuroraPiops')
AuroraPiopsCard('aurora_piops', 'Aurora Piops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraPiops element
include('aws-20200911/Resource/Database/AuroraPiops')
AuroraPiopsCard('aurora_piops', 'Aurora Piops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AuroraPiops element
include('aws-20200911/Resource/Database/AuroraPiops')
AuroraPiops('aurora_piops', 'Aurora Piops', 'an optional tech field')
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
' loads the AuroraPiops element
include('aws-20200911/Resource/Database/AuroraPiops')
AuroraPiops('aurora_piops', 'Aurora Piops', 'an optional tech field')
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
' loads the AuroraPiops element
include('aws-20200911/Resource/Database/AuroraPiops')
AuroraPiopsGroup('aurora_piops', 'Aurora Piops', 'an optional tech field'){
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
' loads the AuroraPiops element
include('aws-20200911/Resource/Database/AuroraPiops')
AuroraPiopsGroup('aurora_piops', 'Aurora Piops', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

