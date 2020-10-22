# Amazon Neptune

```text
aws-20200911/Service/Database/AmazonNeptune
```

```text
include('aws-20200911/Service/Database/AmazonNeptune')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonNeptune.png)|![](AmazonNeptune.card.png)|![](AmazonNeptune.element.png)|![](AmazonNeptune.group.png)|



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
' loads the AmazonNeptune element
include('aws-20200911/Service/Database/AmazonNeptune')
AmazonNeptuneCard('amazon_neptune', 'Amazon Neptune', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonNeptune element
include('aws-20200911/Service/Database/AmazonNeptune')
AmazonNeptuneCard('amazon_neptune', 'Amazon Neptune', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonNeptune element
include('aws-20200911/Service/Database/AmazonNeptune')
AmazonNeptune('amazon_neptune', 'Amazon Neptune', 'an optional tech field')
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
' loads the AmazonNeptune element
include('aws-20200911/Service/Database/AmazonNeptune')
AmazonNeptune('amazon_neptune', 'Amazon Neptune', 'an optional tech field')
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
' loads the AmazonNeptune element
include('aws-20200911/Service/Database/AmazonNeptune')
AmazonNeptuneGroup('amazon_neptune', 'Amazon Neptune', 'an optional tech field'){
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
' loads the AmazonNeptune element
include('aws-20200911/Service/Database/AmazonNeptune')
AmazonNeptuneGroup('amazon_neptune', 'Amazon Neptune', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

