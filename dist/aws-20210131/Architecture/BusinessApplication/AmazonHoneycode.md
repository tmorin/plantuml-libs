# Amazon Honeycode

```text
aws-20210131/Architecture/BusinessApplication/AmazonHoneycode
```

```text
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonHoneycode.png)|![](AmazonHoneycode.card.png)|![](AmazonHoneycode.element.png)|![](AmazonHoneycode.group.png)|



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
' loads the AmazonHoneycode element
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
AmazonHoneycodeCard('amazon_honeycode', 'Amazon Honeycode', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonHoneycode element
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
AmazonHoneycodeCard('amazon_honeycode', 'Amazon Honeycode', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonHoneycode element
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
AmazonHoneycode('amazon_honeycode', 'Amazon Honeycode', 'an optional tech field')
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
' loads the AmazonHoneycode element
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
AmazonHoneycode('amazon_honeycode', 'Amazon Honeycode', 'an optional tech field')
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
' loads the AmazonHoneycode element
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
AmazonHoneycodeGroup('amazon_honeycode', 'Amazon Honeycode', 'an optional tech field'){
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
' loads the AmazonHoneycode element
include('aws-20210131/Architecture/BusinessApplication/AmazonHoneycode')
AmazonHoneycodeGroup('amazon_honeycode', 'Amazon Honeycode', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

