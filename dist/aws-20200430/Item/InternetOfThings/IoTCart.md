# Io T Cart

```text
aws-20200430/Item/InternetOfThings/IoTCart
```

```text
include('aws-20200430/Item/InternetOfThings/IoTCart')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTCart.png)|![](IoTCart.card.png)|![](IoTCart.element.png)|![](IoTCart.group.png)|



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
' loads the IoTCart element
include('aws-20200430/Item/InternetOfThings/IoTCart')
IoTCartCard('io_t_cart', 'Io T Cart', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTCart element
include('aws-20200430/Item/InternetOfThings/IoTCart')
IoTCartCard('io_t_cart', 'Io T Cart', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTCart element
include('aws-20200430/Item/InternetOfThings/IoTCart')
IoTCart('io_t_cart', 'Io T Cart', 'an optional tech field')
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
' loads the IoTCart element
include('aws-20200430/Item/InternetOfThings/IoTCart')
IoTCart('io_t_cart', 'Io T Cart', 'an optional tech field')
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
' loads the IoTCart element
include('aws-20200430/Item/InternetOfThings/IoTCart')
IoTCartGroup('io_t_cart', 'Io T Cart', 'an optional tech field'){
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
' loads the IoTCart element
include('aws-20200430/Item/InternetOfThings/IoTCart')
IoTCartGroup('io_t_cart', 'Io T Cart', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

