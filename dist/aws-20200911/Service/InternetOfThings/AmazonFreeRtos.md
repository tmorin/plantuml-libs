# Amazon Free Rtos

```text
aws-20200911/Service/InternetOfThings/AmazonFreeRtos
```

```text
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonFreeRtos.png)|![](AmazonFreeRtos.card.png)|![](AmazonFreeRtos.element.png)|![](AmazonFreeRtos.group.png)|



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
' loads the AmazonFreeRtos element
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
AmazonFreeRtosCard('amazon_free_rtos', 'Amazon Free Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonFreeRtos element
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
AmazonFreeRtosCard('amazon_free_rtos', 'Amazon Free Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonFreeRtos element
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
AmazonFreeRtos('amazon_free_rtos', 'Amazon Free Rtos', 'an optional tech field')
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
' loads the AmazonFreeRtos element
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
AmazonFreeRtos('amazon_free_rtos', 'Amazon Free Rtos', 'an optional tech field')
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
' loads the AmazonFreeRtos element
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
AmazonFreeRtosGroup('amazon_free_rtos', 'Amazon Free Rtos', 'an optional tech field'){
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
' loads the AmazonFreeRtos element
include('aws-20200911/Service/InternetOfThings/AmazonFreeRtos')
AmazonFreeRtosGroup('amazon_free_rtos', 'Amazon Free Rtos', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

