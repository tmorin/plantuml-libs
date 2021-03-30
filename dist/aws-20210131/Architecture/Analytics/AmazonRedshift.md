# Amazon Redshift

```text
aws-20210131/Architecture/Analytics/AmazonRedshift
```

```text
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonRedshift.png)|![](AmazonRedshift.card.png)|![](AmazonRedshift.element.png)|![](AmazonRedshift.group.png)|



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
' loads the AmazonRedshift element
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
AmazonRedshiftCard('amazon_redshift', 'Amazon Redshift', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRedshift element
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
AmazonRedshiftCard('amazon_redshift', 'Amazon Redshift', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRedshift element
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
AmazonRedshift('amazon_redshift', 'Amazon Redshift', 'an optional tech field')
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
' loads the AmazonRedshift element
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
AmazonRedshift('amazon_redshift', 'Amazon Redshift', 'an optional tech field')
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
' loads the AmazonRedshift element
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
AmazonRedshiftGroup('amazon_redshift', 'Amazon Redshift', 'an optional tech field'){
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
' loads the AmazonRedshift element
include('aws-20210131/Architecture/Analytics/AmazonRedshift')
AmazonRedshiftGroup('amazon_redshift', 'Amazon Redshift', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

