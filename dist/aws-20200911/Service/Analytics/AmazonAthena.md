# Amazon Athena

```text
aws-20200911/Service/Analytics/AmazonAthena
```

```text
include('aws-20200911/Service/Analytics/AmazonAthena')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAthena.png)|![](AmazonAthena.card.png)|![](AmazonAthena.element.png)|![](AmazonAthena.group.png)|



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
' loads the AmazonAthena element
include('aws-20200911/Service/Analytics/AmazonAthena')
AmazonAthenaCard('amazon_athena', 'Amazon Athena', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAthena element
include('aws-20200911/Service/Analytics/AmazonAthena')
AmazonAthenaCard('amazon_athena', 'Amazon Athena', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAthena element
include('aws-20200911/Service/Analytics/AmazonAthena')
AmazonAthena('amazon_athena', 'Amazon Athena', 'an optional tech field')
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
' loads the AmazonAthena element
include('aws-20200911/Service/Analytics/AmazonAthena')
AmazonAthena('amazon_athena', 'Amazon Athena', 'an optional tech field')
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
' loads the AmazonAthena element
include('aws-20200911/Service/Analytics/AmazonAthena')
AmazonAthenaGroup('amazon_athena', 'Amazon Athena', 'an optional tech field'){
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
' loads the AmazonAthena element
include('aws-20200911/Service/Analytics/AmazonAthena')
AmazonAthenaGroup('amazon_athena', 'Amazon Athena', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

