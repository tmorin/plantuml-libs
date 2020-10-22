# Amazon Aurora

```text
aws-20200911/Service/Database/AmazonAurora
```

```text
include('aws-20200911/Service/Database/AmazonAurora')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAurora.png)|![](AmazonAurora.card.png)|![](AmazonAurora.element.png)|![](AmazonAurora.group.png)|



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
' loads the AmazonAurora element
include('aws-20200911/Service/Database/AmazonAurora')
AmazonAuroraCard('amazon_aurora', 'Amazon Aurora', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAurora element
include('aws-20200911/Service/Database/AmazonAurora')
AmazonAuroraCard('amazon_aurora', 'Amazon Aurora', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAurora element
include('aws-20200911/Service/Database/AmazonAurora')
AmazonAurora('amazon_aurora', 'Amazon Aurora', 'an optional tech field')
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
' loads the AmazonAurora element
include('aws-20200911/Service/Database/AmazonAurora')
AmazonAurora('amazon_aurora', 'Amazon Aurora', 'an optional tech field')
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
' loads the AmazonAurora element
include('aws-20200911/Service/Database/AmazonAurora')
AmazonAuroraGroup('amazon_aurora', 'Amazon Aurora', 'an optional tech field'){
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
' loads the AmazonAurora element
include('aws-20200911/Service/Database/AmazonAurora')
AmazonAuroraGroup('amazon_aurora', 'Amazon Aurora', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

