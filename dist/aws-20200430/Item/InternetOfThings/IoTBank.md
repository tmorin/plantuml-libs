# Io T Bank

```text
aws-20200430/Item/InternetOfThings/IoTBank
```

```text
include('aws-20200430/Item/InternetOfThings/IoTBank')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTBank.png)|![](IoTBank.card.png)|![](IoTBank.element.png)|![](IoTBank.group.png)|



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
' loads the IoTBank element
include('aws-20200430/Item/InternetOfThings/IoTBank')
IoTBankCard('io_t_bank', 'Io T Bank', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTBank element
include('aws-20200430/Item/InternetOfThings/IoTBank')
IoTBankCard('io_t_bank', 'Io T Bank', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTBank element
include('aws-20200430/Item/InternetOfThings/IoTBank')
IoTBank('io_t_bank', 'Io T Bank', 'an optional tech field')
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
' loads the IoTBank element
include('aws-20200430/Item/InternetOfThings/IoTBank')
IoTBank('io_t_bank', 'Io T Bank', 'an optional tech field')
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
' loads the IoTBank element
include('aws-20200430/Item/InternetOfThings/IoTBank')
IoTBankGroup('io_t_bank', 'Io T Bank', 'an optional tech field'){
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
' loads the IoTBank element
include('aws-20200430/Item/InternetOfThings/IoTBank')
IoTBankGroup('io_t_bank', 'Io T Bank', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

