# Free Rtos

```text
aws-20210131/Architecture/InternetOfThings/FreeRtos
```

```text
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
```

|icon|card|element|group|
|---|---|---|---|
|![](FreeRtos.png)|![](FreeRtos.card.png)|![](FreeRtos.element.png)|![](FreeRtos.group.png)|



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
' loads the FreeRtos element
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
FreeRtosCard('free_rtos', 'Free Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the FreeRtos element
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
FreeRtosCard('free_rtos', 'Free Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the FreeRtos element
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
FreeRtos('free_rtos', 'Free Rtos', 'an optional tech field')
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
' loads the FreeRtos element
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
FreeRtos('free_rtos', 'Free Rtos', 'an optional tech field')
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
' loads the FreeRtos element
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
FreeRtosGroup('free_rtos', 'Free Rtos', 'an optional tech field'){
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
' loads the FreeRtos element
include('aws-20210131/Architecture/InternetOfThings/FreeRtos')
FreeRtosGroup('free_rtos', 'Free Rtos', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

