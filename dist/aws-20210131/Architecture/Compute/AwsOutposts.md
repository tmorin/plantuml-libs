# Aws Outposts

```text
aws-20210131/Architecture/Compute/AwsOutposts
```

```text
include('aws-20210131/Architecture/Compute/AwsOutposts')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsOutposts.png)|![](AwsOutposts.card.png)|![](AwsOutposts.element.png)|![](AwsOutposts.group.png)|



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
' loads the AwsOutposts element
include('aws-20210131/Architecture/Compute/AwsOutposts')
AwsOutpostsCard('aws_outposts', 'Aws Outposts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsOutposts element
include('aws-20210131/Architecture/Compute/AwsOutposts')
AwsOutpostsCard('aws_outposts', 'Aws Outposts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsOutposts element
include('aws-20210131/Architecture/Compute/AwsOutposts')
AwsOutposts('aws_outposts', 'Aws Outposts', 'an optional tech field')
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
' loads the AwsOutposts element
include('aws-20210131/Architecture/Compute/AwsOutposts')
AwsOutposts('aws_outposts', 'Aws Outposts', 'an optional tech field')
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
' loads the AwsOutposts element
include('aws-20210131/Architecture/Compute/AwsOutposts')
AwsOutpostsGroup('aws_outposts', 'Aws Outposts', 'an optional tech field'){
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
' loads the AwsOutposts element
include('aws-20210131/Architecture/Compute/AwsOutposts')
AwsOutpostsGroup('aws_outposts', 'Aws Outposts', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

