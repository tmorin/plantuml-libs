# Aws Managed Services

```text
aws-20200911/Service/CustomerEnablement/AwsManagedServices
```

```text
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsManagedServices.png)|![](AwsManagedServices.card.png)|![](AwsManagedServices.element.png)|![](AwsManagedServices.group.png)|



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
' loads the AwsManagedServices element
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
AwsManagedServicesCard('aws_managed_services', 'Aws Managed Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsManagedServices element
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
AwsManagedServicesCard('aws_managed_services', 'Aws Managed Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsManagedServices element
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
AwsManagedServices('aws_managed_services', 'Aws Managed Services', 'an optional tech field')
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
' loads the AwsManagedServices element
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
AwsManagedServices('aws_managed_services', 'Aws Managed Services', 'an optional tech field')
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
' loads the AwsManagedServices element
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
AwsManagedServicesGroup('aws_managed_services', 'Aws Managed Services', 'an optional tech field'){
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
' loads the AwsManagedServices element
include('aws-20200911/Service/CustomerEnablement/AwsManagedServices')
AwsManagedServicesGroup('aws_managed_services', 'Aws Managed Services', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

