# Cloud9 Resource

```text
aws-20200430/Item/DeveloperTools/Cloud9Resource
```

```text
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
```

|icon|card|element|group|
|---|---|---|---|
|![](Cloud9Resource.png)|![](Cloud9Resource.card.png)|![](Cloud9Resource.element.png)|![](Cloud9Resource.group.png)|



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
' loads the Cloud9Resource element
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
Cloud9ResourceCard('cloud_9_resource', 'Cloud9 Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Cloud9Resource element
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
Cloud9ResourceCard('cloud_9_resource', 'Cloud9 Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Cloud9Resource element
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
Cloud9Resource('cloud_9_resource', 'Cloud9 Resource', 'an optional tech field')
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
' loads the Cloud9Resource element
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
Cloud9Resource('cloud_9_resource', 'Cloud9 Resource', 'an optional tech field')
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
' loads the Cloud9Resource element
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
Cloud9ResourceGroup('cloud_9_resource', 'Cloud9 Resource', 'an optional tech field'){
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
' loads the Cloud9Resource element
include('aws-20200430/Item/DeveloperTools/Cloud9Resource')
Cloud9ResourceGroup('cloud_9_resource', 'Cloud9 Resource', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

