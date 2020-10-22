# Amazon Redshift

```text
aws-20200911/Service/Database/AmazonRedshift
```

```text
include('aws-20200911/Service/Database/AmazonRedshift')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonRedshift element
include('aws-20200911/Service/Database/AmazonRedshift')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonRedshift element
include('aws-20200911/Service/Database/AmazonRedshift')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonRedshift element
include('aws-20200911/Service/Database/AmazonRedshift')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonRedshift element
include('aws-20200911/Service/Database/AmazonRedshift')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonRedshift element
include('aws-20200911/Service/Database/AmazonRedshift')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonRedshift element
include('aws-20200911/Service/Database/AmazonRedshift')
AmazonRedshiftGroup('amazon_redshift', 'Amazon Redshift', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

