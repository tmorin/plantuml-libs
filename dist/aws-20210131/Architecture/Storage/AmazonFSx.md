# Amazon F Sx

```text
aws-20210131/Architecture/Storage/AmazonFSx
```

```text
include('aws-20210131/Architecture/Storage/AmazonFSx')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonFSx.png)|![](AmazonFSx.card.png)|![](AmazonFSx.element.png)|![](AmazonFSx.group.png)|



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
' loads the AmazonFSx element
include('aws-20210131/Architecture/Storage/AmazonFSx')
AmazonFSxCard('amazon_f_sx', 'Amazon F Sx', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonFSx element
include('aws-20210131/Architecture/Storage/AmazonFSx')
AmazonFSxCard('amazon_f_sx', 'Amazon F Sx', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonFSx element
include('aws-20210131/Architecture/Storage/AmazonFSx')
AmazonFSx('amazon_f_sx', 'Amazon F Sx', 'an optional tech field')
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
' loads the AmazonFSx element
include('aws-20210131/Architecture/Storage/AmazonFSx')
AmazonFSx('amazon_f_sx', 'Amazon F Sx', 'an optional tech field')
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
' loads the AmazonFSx element
include('aws-20210131/Architecture/Storage/AmazonFSx')
AmazonFSxGroup('amazon_f_sx', 'Amazon F Sx', 'an optional tech field'){
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
' loads the AmazonFSx element
include('aws-20210131/Architecture/Storage/AmazonFSx')
AmazonFSxGroup('amazon_f_sx', 'Amazon F Sx', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

