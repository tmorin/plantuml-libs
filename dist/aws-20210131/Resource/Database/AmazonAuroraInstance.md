# Amazon Aurora Instance

```text
aws-20210131/Resource/Database/AmazonAuroraInstance
```

```text
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonAuroraInstance.png)|![](AmazonAuroraInstance.card.png)|![](AmazonAuroraInstance.element.png)|![](AmazonAuroraInstance.group.png)|



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
' loads the AmazonAuroraInstance element
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
AmazonAuroraInstanceCard('amazon_aurora_instance', 'Amazon Aurora Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAuroraInstance element
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
AmazonAuroraInstanceCard('amazon_aurora_instance', 'Amazon Aurora Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonAuroraInstance element
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
AmazonAuroraInstance('amazon_aurora_instance', 'Amazon Aurora Instance', 'an optional tech field')
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
' loads the AmazonAuroraInstance element
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
AmazonAuroraInstance('amazon_aurora_instance', 'Amazon Aurora Instance', 'an optional tech field')
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
' loads the AmazonAuroraInstance element
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
AmazonAuroraInstanceGroup('amazon_aurora_instance', 'Amazon Aurora Instance', 'an optional tech field'){
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
' loads the AmazonAuroraInstance element
include('aws-20210131/Resource/Database/AmazonAuroraInstance')
AmazonAuroraInstanceGroup('amazon_aurora_instance', 'Amazon Aurora Instance', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

