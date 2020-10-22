# Aws X Ray

```text
aws-20200430/Item/DeveloperTools/AwsXRay
```

```text
include('aws-20200430/Item/DeveloperTools/AwsXRay')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsXRay.png)|![](AwsXRay.card.png)|![](AwsXRay.element.png)|![](AwsXRay.group.png)|



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
' loads the AwsXRay element
include('aws-20200430/Item/DeveloperTools/AwsXRay')
AwsXRayCard('aws_x_ray', 'Aws X Ray', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsXRay element
include('aws-20200430/Item/DeveloperTools/AwsXRay')
AwsXRayCard('aws_x_ray', 'Aws X Ray', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsXRay element
include('aws-20200430/Item/DeveloperTools/AwsXRay')
AwsXRay('aws_x_ray', 'Aws X Ray', 'an optional tech field')
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
' loads the AwsXRay element
include('aws-20200430/Item/DeveloperTools/AwsXRay')
AwsXRay('aws_x_ray', 'Aws X Ray', 'an optional tech field')
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
' loads the AwsXRay element
include('aws-20200430/Item/DeveloperTools/AwsXRay')
AwsXRayGroup('aws_x_ray', 'Aws X Ray', 'an optional tech field'){
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
' loads the AwsXRay element
include('aws-20200430/Item/DeveloperTools/AwsXRay')
AwsXRayGroup('aws_x_ray', 'Aws X Ray', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

