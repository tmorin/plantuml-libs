# Machine Learning

```text
aws-20210131/Category/MachineLearning
```

```text
include('aws-20210131/Category/MachineLearning')
```

|icon|card|element|group|
|---|---|---|---|
|![](MachineLearning.png)|![](MachineLearning.card.png)|![](MachineLearning.element.png)|![](MachineLearning.group.png)|



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
' loads the MachineLearning element
include('aws-20210131/Category/MachineLearning')
MachineLearningCard('machine_learning', 'Machine Learning', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the MachineLearning element
include('aws-20210131/Category/MachineLearning')
MachineLearningCard('machine_learning', 'Machine Learning', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the MachineLearning element
include('aws-20210131/Category/MachineLearning')
MachineLearning('machine_learning', 'Machine Learning', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the MachineLearning element
include('aws-20210131/Category/MachineLearning')
MachineLearning('machine_learning', 'Machine Learning', 'an optional tech field')
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
' loads the MachineLearning element
include('aws-20210131/Category/MachineLearning')
MachineLearningGroup('machine_learning', 'Machine Learning', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the MachineLearning element
include('aws-20210131/Category/MachineLearning')
MachineLearningGroup('machine_learning', 'Machine Learning', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

