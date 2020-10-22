# Internet Gateway

```text
aws-20200911/Resource/GeneralIcons/InternetGateway
```

```text
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](InternetGateway.png)|![](InternetGateway.card.png)|![](InternetGateway.element.png)|![](InternetGateway.group.png)|



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
' loads the InternetGateway element
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
InternetGatewayCard('internet_gateway', 'Internet Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the InternetGateway element
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
InternetGatewayCard('internet_gateway', 'Internet Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the InternetGateway element
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
InternetGateway('internet_gateway', 'Internet Gateway', 'an optional tech field')
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
' loads the InternetGateway element
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
InternetGateway('internet_gateway', 'Internet Gateway', 'an optional tech field')
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
' loads the InternetGateway element
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
InternetGatewayGroup('internet_gateway', 'Internet Gateway', 'an optional tech field'){
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
' loads the InternetGateway element
include('aws-20200911/Resource/GeneralIcons/InternetGateway')
InternetGatewayGroup('internet_gateway', 'Internet Gateway', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

