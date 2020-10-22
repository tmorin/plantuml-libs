# Aws Batch

```text
aws-20200430/Item/Compute/AwsBatch
```

```text
include('aws-20200430/Item/Compute/AwsBatch')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsBatch.png)|![](AwsBatch.card.png)|![](AwsBatch.element.png)|![](AwsBatch.group.png)|



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
' loads the AwsBatch element
include('aws-20200430/Item/Compute/AwsBatch')
AwsBatchCard('aws_batch', 'Aws Batch', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBatch element
include('aws-20200430/Item/Compute/AwsBatch')
AwsBatchCard('aws_batch', 'Aws Batch', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBatch element
include('aws-20200430/Item/Compute/AwsBatch')
AwsBatch('aws_batch', 'Aws Batch', 'an optional tech field')
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
' loads the AwsBatch element
include('aws-20200430/Item/Compute/AwsBatch')
AwsBatch('aws_batch', 'Aws Batch', 'an optional tech field')
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
' loads the AwsBatch element
include('aws-20200430/Item/Compute/AwsBatch')
AwsBatchGroup('aws_batch', 'Aws Batch', 'an optional tech field'){
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
' loads the AwsBatch element
include('aws-20200430/Item/Compute/AwsBatch')
AwsBatchGroup('aws_batch', 'Aws Batch', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

