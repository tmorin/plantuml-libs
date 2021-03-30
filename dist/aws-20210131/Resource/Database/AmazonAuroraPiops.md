# Amazon Aurora Piops

```text
aws-20210131/Resource/Database/AmazonAuroraPiops
```

```text
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAuroraPiops.png)|![](AmazonAuroraPiops.card.png)|![](AmazonAuroraPiops.element.png)|![](AmazonAuroraPiops.group.png)|



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
' loads the AmazonAuroraPiops element
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
AmazonAuroraPiopsCard('amazon_aurora_piops', 'Amazon Aurora Piops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAuroraPiops element
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
AmazonAuroraPiopsCard('amazon_aurora_piops', 'Amazon Aurora Piops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAuroraPiops element
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
AmazonAuroraPiops('amazon_aurora_piops', 'Amazon Aurora Piops', 'an optional tech field')
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
' loads the AmazonAuroraPiops element
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
AmazonAuroraPiops('amazon_aurora_piops', 'Amazon Aurora Piops', 'an optional tech field')
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
' loads the AmazonAuroraPiops element
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
AmazonAuroraPiopsGroup('amazon_aurora_piops', 'Amazon Aurora Piops', 'an optional tech field'){
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
' loads the AmazonAuroraPiops element
include('aws-20210131/Resource/Database/AmazonAuroraPiops')
AmazonAuroraPiopsGroup('amazon_aurora_piops', 'Amazon Aurora Piops', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

