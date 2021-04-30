# Amazon Lightsail

```text
aws-20210131/Architecture/Compute/AmazonLightsail
```

```text
include('aws-20210131/Architecture/Compute/AmazonLightsail')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonLightsail.png)|![](AmazonLightsail.card.png)|![](AmazonLightsail.element.png)|![](AmazonLightsail.group.png)|



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
' loads the AmazonLightsail element
include('aws-20210131/Architecture/Compute/AmazonLightsail')
AmazonLightsailCard('amazon_lightsail', 'Amazon Lightsail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonLightsail element
include('aws-20210131/Architecture/Compute/AmazonLightsail')
AmazonLightsailCard('amazon_lightsail', 'Amazon Lightsail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonLightsail element
include('aws-20210131/Architecture/Compute/AmazonLightsail')
AmazonLightsail('amazon_lightsail', 'Amazon Lightsail', 'an optional tech field')
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
' loads the AmazonLightsail element
include('aws-20210131/Architecture/Compute/AmazonLightsail')
AmazonLightsail('amazon_lightsail', 'Amazon Lightsail', 'an optional tech field')
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
' loads the AmazonLightsail element
include('aws-20210131/Architecture/Compute/AmazonLightsail')
AmazonLightsailGroup('amazon_lightsail', 'Amazon Lightsail', 'an optional tech field'){
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
' loads the AmazonLightsail element
include('aws-20210131/Architecture/Compute/AmazonLightsail')
AmazonLightsailGroup('amazon_lightsail', 'Amazon Lightsail', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

