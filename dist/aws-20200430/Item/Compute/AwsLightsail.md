# Aws Lightsail

```text
aws-20200430/Item/Compute/AwsLightsail
```

```text
include('aws-20200430/Item/Compute/AwsLightsail')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsLightsail.png)|![](AwsLightsail.card.png)|![](AwsLightsail.element.png)|![](AwsLightsail.group.png)|



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
' loads the AwsLightsail element
include('aws-20200430/Item/Compute/AwsLightsail')
AwsLightsailCard('aws_lightsail', 'Aws Lightsail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsLightsail element
include('aws-20200430/Item/Compute/AwsLightsail')
AwsLightsailCard('aws_lightsail', 'Aws Lightsail', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsLightsail element
include('aws-20200430/Item/Compute/AwsLightsail')
AwsLightsail('aws_lightsail', 'Aws Lightsail', 'an optional tech field')
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
' loads the AwsLightsail element
include('aws-20200430/Item/Compute/AwsLightsail')
AwsLightsail('aws_lightsail', 'Aws Lightsail', 'an optional tech field')
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
' loads the AwsLightsail element
include('aws-20200430/Item/Compute/AwsLightsail')
AwsLightsailGroup('aws_lightsail', 'Aws Lightsail', 'an optional tech field'){
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
' loads the AwsLightsail element
include('aws-20200430/Item/Compute/AwsLightsail')
AwsLightsailGroup('aws_lightsail', 'Aws Lightsail', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

