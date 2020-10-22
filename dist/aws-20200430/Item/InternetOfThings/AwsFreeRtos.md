# Aws Free Rtos

```text
aws-20200430/Item/InternetOfThings/AwsFreeRtos
```

```text
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsFreeRtos.png)|![](AwsFreeRtos.card.png)|![](AwsFreeRtos.element.png)|![](AwsFreeRtos.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsFreeRtos element
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
AwsFreeRtosCard('aws_free_rtos', 'Aws Free Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsFreeRtos element
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
AwsFreeRtosCard('aws_free_rtos', 'Aws Free Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsFreeRtos element
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
AwsFreeRtos('aws_free_rtos', 'Aws Free Rtos', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsFreeRtos element
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
AwsFreeRtos('aws_free_rtos', 'Aws Free Rtos', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsFreeRtos element
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
AwsFreeRtosGroup('aws_free_rtos', 'Aws Free Rtos', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsFreeRtos element
include('aws-20200430/Item/InternetOfThings/AwsFreeRtos')
AwsFreeRtosGroup('aws_free_rtos', 'Aws Free Rtos', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

