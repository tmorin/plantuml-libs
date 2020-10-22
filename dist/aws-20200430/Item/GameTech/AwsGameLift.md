# Aws Game Lift

```text
aws-20200430/Item/GameTech/AwsGameLift
```

```text
include('aws-20200430/Item/GameTech/AwsGameLift')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsGameLift.png)|![](AwsGameLift.card.png)|![](AwsGameLift.element.png)|![](AwsGameLift.group.png)|



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
' loads the AwsGameLift element
include('aws-20200430/Item/GameTech/AwsGameLift')
AwsGameLiftCard('aws_game_lift', 'Aws Game Lift', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGameLift element
include('aws-20200430/Item/GameTech/AwsGameLift')
AwsGameLiftCard('aws_game_lift', 'Aws Game Lift', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsGameLift element
include('aws-20200430/Item/GameTech/AwsGameLift')
AwsGameLift('aws_game_lift', 'Aws Game Lift', 'an optional tech field')
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
' loads the AwsGameLift element
include('aws-20200430/Item/GameTech/AwsGameLift')
AwsGameLift('aws_game_lift', 'Aws Game Lift', 'an optional tech field')
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
' loads the AwsGameLift element
include('aws-20200430/Item/GameTech/AwsGameLift')
AwsGameLiftGroup('aws_game_lift', 'Aws Game Lift', 'an optional tech field'){
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
' loads the AwsGameLift element
include('aws-20200430/Item/GameTech/AwsGameLift')
AwsGameLiftGroup('aws_game_lift', 'Aws Game Lift', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

