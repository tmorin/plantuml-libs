# Aws Professional Services

```text
aws-20200430/Item/CustomerEnablement/AwsProfessionalServices
```

```text
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsProfessionalServices.png)|![](AwsProfessionalServices.card.png)|![](AwsProfessionalServices.element.png)|![](AwsProfessionalServices.group.png)|



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
' loads the AwsProfessionalServices element
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServicesCard('aws_professional_services', 'Aws Professional Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsProfessionalServices element
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServicesCard('aws_professional_services', 'Aws Professional Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsProfessionalServices element
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServices('aws_professional_services', 'Aws Professional Services', 'an optional tech field')
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
' loads the AwsProfessionalServices element
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServices('aws_professional_services', 'Aws Professional Services', 'an optional tech field')
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
' loads the AwsProfessionalServices element
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServicesGroup('aws_professional_services', 'Aws Professional Services', 'an optional tech field'){
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
' loads the AwsProfessionalServices element
include('aws-20200430/Item/CustomerEnablement/AwsProfessionalServices')
AwsProfessionalServicesGroup('aws_professional_services', 'Aws Professional Services', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

