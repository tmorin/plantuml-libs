# Aws Data Exchange

```text
aws-20210131/Architecture/Analytics/AwsDataExchange
```

```text
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDataExchange.png)|![](AwsDataExchange.card.png)|![](AwsDataExchange.element.png)|![](AwsDataExchange.group.png)|



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
' loads the AwsDataExchange element
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
AwsDataExchangeCard('aws_data_exchange', 'Aws Data Exchange', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDataExchange element
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
AwsDataExchangeCard('aws_data_exchange', 'Aws Data Exchange', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDataExchange element
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
AwsDataExchange('aws_data_exchange', 'Aws Data Exchange', 'an optional tech field')
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
' loads the AwsDataExchange element
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
AwsDataExchange('aws_data_exchange', 'Aws Data Exchange', 'an optional tech field')
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
' loads the AwsDataExchange element
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
AwsDataExchangeGroup('aws_data_exchange', 'Aws Data Exchange', 'an optional tech field'){
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
' loads the AwsDataExchange element
include('aws-20210131/Architecture/Analytics/AwsDataExchange')
AwsDataExchangeGroup('aws_data_exchange', 'Aws Data Exchange', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

