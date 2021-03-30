# Aws Deep Racer

```text
aws-20210131/Architecture/MachineLearning/AwsDeepRacer
```

```text
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDeepRacer.png)|![](AwsDeepRacer.card.png)|![](AwsDeepRacer.element.png)|![](AwsDeepRacer.group.png)|



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
' loads the AwsDeepRacer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
AwsDeepRacerCard('aws_deep_racer', 'Aws Deep Racer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDeepRacer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
AwsDeepRacerCard('aws_deep_racer', 'Aws Deep Racer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDeepRacer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
AwsDeepRacer('aws_deep_racer', 'Aws Deep Racer', 'an optional tech field')
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
' loads the AwsDeepRacer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
AwsDeepRacer('aws_deep_racer', 'Aws Deep Racer', 'an optional tech field')
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
' loads the AwsDeepRacer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
AwsDeepRacerGroup('aws_deep_racer', 'Aws Deep Racer', 'an optional tech field'){
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
' loads the AwsDeepRacer element
include('aws-20210131/Architecture/MachineLearning/AwsDeepRacer')
AwsDeepRacerGroup('aws_deep_racer', 'Aws Deep Racer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

