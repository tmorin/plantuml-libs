# Io T Rule

```text
aws-20200430/Item/InternetOfThings/IoTRule
```

```text
include('aws-20200430/Item/InternetOfThings/IoTRule')
```

|icon|card|element|group|
|---|---|---|---|
|![](IoTRule.png)|![](IoTRule.card.png)|![](IoTRule.element.png)|![](IoTRule.group.png)|



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
' loads the IoTRule element
include('aws-20200430/Item/InternetOfThings/IoTRule')
IoTRuleCard('io_t_rule', 'Io T Rule', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTRule element
include('aws-20200430/Item/InternetOfThings/IoTRule')
IoTRuleCard('io_t_rule', 'Io T Rule', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the IoTRule element
include('aws-20200430/Item/InternetOfThings/IoTRule')
IoTRule('io_t_rule', 'Io T Rule', 'an optional tech field')
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
' loads the IoTRule element
include('aws-20200430/Item/InternetOfThings/IoTRule')
IoTRule('io_t_rule', 'Io T Rule', 'an optional tech field')
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
' loads the IoTRule element
include('aws-20200430/Item/InternetOfThings/IoTRule')
IoTRuleGroup('io_t_rule', 'Io T Rule', 'an optional tech field'){
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
' loads the IoTRule element
include('aws-20200430/Item/InternetOfThings/IoTRule')
IoTRuleGroup('io_t_rule', 'Io T Rule', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

