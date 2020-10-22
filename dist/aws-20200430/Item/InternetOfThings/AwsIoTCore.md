# Aws Io T Core

```text
aws-20200430/Item/InternetOfThings/AwsIoTCore
```

```text
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIoTCore.png)|![](AwsIoTCore.card.png)|![](AwsIoTCore.element.png)|![](AwsIoTCore.group.png)|



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
' loads the AwsIoTCore element
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
AwsIoTCoreCard('aws_io_t_core', 'Aws Io T Core', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTCore element
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
AwsIoTCoreCard('aws_io_t_core', 'Aws Io T Core', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTCore element
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
AwsIoTCore('aws_io_t_core', 'Aws Io T Core', 'an optional tech field')
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
' loads the AwsIoTCore element
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
AwsIoTCore('aws_io_t_core', 'Aws Io T Core', 'an optional tech field')
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
' loads the AwsIoTCore element
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
AwsIoTCoreGroup('aws_io_t_core', 'Aws Io T Core', 'an optional tech field'){
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
' loads the AwsIoTCore element
include('aws-20200430/Item/InternetOfThings/AwsIoTCore')
AwsIoTCoreGroup('aws_io_t_core', 'Aws Io T Core', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

