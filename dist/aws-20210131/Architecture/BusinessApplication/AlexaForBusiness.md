# Alexa For Business

```text
aws-20210131/Architecture/BusinessApplication/AlexaForBusiness
```

```text
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
```

|icon|card|element|group|
|---|---|---|---|
|![](AlexaForBusiness.png)|![](AlexaForBusiness.card.png)|![](AlexaForBusiness.element.png)|![](AlexaForBusiness.group.png)|



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
' loads the AlexaForBusiness element
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
AlexaForBusinessCard('alexa_for_business', 'Alexa For Business', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AlexaForBusiness element
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
AlexaForBusinessCard('alexa_for_business', 'Alexa For Business', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AlexaForBusiness element
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
AlexaForBusiness('alexa_for_business', 'Alexa For Business', 'an optional tech field')
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
' loads the AlexaForBusiness element
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
AlexaForBusiness('alexa_for_business', 'Alexa For Business', 'an optional tech field')
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
' loads the AlexaForBusiness element
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
AlexaForBusinessGroup('alexa_for_business', 'Alexa For Business', 'an optional tech field'){
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
' loads the AlexaForBusiness element
include('aws-20210131/Architecture/BusinessApplication/AlexaForBusiness')
AlexaForBusinessGroup('alexa_for_business', 'Alexa For Business', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

