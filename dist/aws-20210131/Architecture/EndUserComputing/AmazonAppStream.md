# Amazon App Stream

```text
aws-20210131/Architecture/EndUserComputing/AmazonAppStream
```

```text
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAppStream.png)|![](AmazonAppStream.card.png)|![](AmazonAppStream.element.png)|![](AmazonAppStream.group.png)|



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
' loads the AmazonAppStream element
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
AmazonAppStreamCard('amazon_app_stream', 'Amazon App Stream', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAppStream element
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
AmazonAppStreamCard('amazon_app_stream', 'Amazon App Stream', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAppStream element
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
AmazonAppStream('amazon_app_stream', 'Amazon App Stream', 'an optional tech field')
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
' loads the AmazonAppStream element
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
AmazonAppStream('amazon_app_stream', 'Amazon App Stream', 'an optional tech field')
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
' loads the AmazonAppStream element
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
AmazonAppStreamGroup('amazon_app_stream', 'Amazon App Stream', 'an optional tech field'){
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
' loads the AmazonAppStream element
include('aws-20210131/Architecture/EndUserComputing/AmazonAppStream')
AmazonAppStreamGroup('amazon_app_stream', 'Amazon App Stream', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

