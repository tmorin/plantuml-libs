# Aws Robo Maker

```text
aws-20210131/Architecture/Robotics/AwsRoboMaker
```

```text
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsRoboMaker.png)|![](AwsRoboMaker.card.png)|![](AwsRoboMaker.element.png)|![](AwsRoboMaker.group.png)|



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
' loads the AwsRoboMaker element
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
AwsRoboMakerCard('aws_robo_maker', 'Aws Robo Maker', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRoboMaker element
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
AwsRoboMakerCard('aws_robo_maker', 'Aws Robo Maker', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsRoboMaker element
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
AwsRoboMaker('aws_robo_maker', 'Aws Robo Maker', 'an optional tech field')
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
' loads the AwsRoboMaker element
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
AwsRoboMaker('aws_robo_maker', 'Aws Robo Maker', 'an optional tech field')
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
' loads the AwsRoboMaker element
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
AwsRoboMakerGroup('aws_robo_maker', 'Aws Robo Maker', 'an optional tech field'){
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
' loads the AwsRoboMaker element
include('aws-20210131/Architecture/Robotics/AwsRoboMaker')
AwsRoboMakerGroup('aws_robo_maker', 'Aws Robo Maker', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

