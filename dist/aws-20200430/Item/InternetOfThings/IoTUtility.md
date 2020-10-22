# Io T Utility

```text
aws-20200430/Item/InternetOfThings/IoTUtility
```

```text
include('aws-20200430/Item/InternetOfThings/IoTUtility')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTUtility.png)|![](IoTUtility.card.png)|![](IoTUtility.element.png)|![](IoTUtility.group.png)|



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
' loads the IoTUtility element
include('aws-20200430/Item/InternetOfThings/IoTUtility')
IoTUtilityCard('io_t_utility', 'Io T Utility', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTUtility element
include('aws-20200430/Item/InternetOfThings/IoTUtility')
IoTUtilityCard('io_t_utility', 'Io T Utility', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTUtility element
include('aws-20200430/Item/InternetOfThings/IoTUtility')
IoTUtility('io_t_utility', 'Io T Utility', 'an optional tech field')
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
' loads the IoTUtility element
include('aws-20200430/Item/InternetOfThings/IoTUtility')
IoTUtility('io_t_utility', 'Io T Utility', 'an optional tech field')
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
' loads the IoTUtility element
include('aws-20200430/Item/InternetOfThings/IoTUtility')
IoTUtilityGroup('io_t_utility', 'Io T Utility', 'an optional tech field'){
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
' loads the IoTUtility element
include('aws-20200430/Item/InternetOfThings/IoTUtility')
IoTUtilityGroup('io_t_utility', 'Io T Utility', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

