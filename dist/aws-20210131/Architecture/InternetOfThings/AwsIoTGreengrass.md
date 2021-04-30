# Aws Io T Greengrass

```text
aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass
```

```text
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsIoTGreengrass.png)|![](AwsIoTGreengrass.card.png)|![](AwsIoTGreengrass.element.png)|![](AwsIoTGreengrass.group.png)|



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
' loads the AwsIoTGreengrass element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
AwsIoTGreengrassCard('aws_io_t_greengrass', 'Aws Io T Greengrass', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTGreengrass element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
AwsIoTGreengrassCard('aws_io_t_greengrass', 'Aws Io T Greengrass', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsIoTGreengrass element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
AwsIoTGreengrass('aws_io_t_greengrass', 'Aws Io T Greengrass', 'an optional tech field')
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
' loads the AwsIoTGreengrass element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
AwsIoTGreengrass('aws_io_t_greengrass', 'Aws Io T Greengrass', 'an optional tech field')
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
' loads the AwsIoTGreengrass element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
AwsIoTGreengrassGroup('aws_io_t_greengrass', 'Aws Io T Greengrass', 'an optional tech field'){
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
' loads the AwsIoTGreengrass element
include('aws-20210131/Architecture/InternetOfThings/AwsIoTGreengrass')
AwsIoTGreengrassGroup('aws_io_t_greengrass', 'Aws Io T Greengrass', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

