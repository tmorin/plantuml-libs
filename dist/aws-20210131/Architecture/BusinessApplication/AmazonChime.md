# Amazon Chime

```text
aws-20210131/Architecture/BusinessApplication/AmazonChime
```

```text
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonChime.png)|![](AmazonChime.card.png)|![](AmazonChime.element.png)|![](AmazonChime.group.png)|



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
' loads the AmazonChime element
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
AmazonChimeCard('amazon_chime', 'Amazon Chime', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonChime element
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
AmazonChimeCard('amazon_chime', 'Amazon Chime', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonChime element
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
AmazonChime('amazon_chime', 'Amazon Chime', 'an optional tech field')
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
' loads the AmazonChime element
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
AmazonChime('amazon_chime', 'Amazon Chime', 'an optional tech field')
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
' loads the AmazonChime element
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
AmazonChimeGroup('amazon_chime', 'Amazon Chime', 'an optional tech field'){
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
' loads the AmazonChime element
include('aws-20210131/Architecture/BusinessApplication/AmazonChime')
AmazonChimeGroup('amazon_chime', 'Amazon Chime', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

