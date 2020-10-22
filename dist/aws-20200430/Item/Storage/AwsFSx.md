# Aws F Sx

```text
aws-20200430/Item/Storage/AwsFSx
```

```text
include('aws-20200430/Item/Storage/AwsFSx')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsFSx.png)|![](AwsFSx.card.png)|![](AwsFSx.element.png)|![](AwsFSx.group.png)|



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
' loads the AwsFSx element
include('aws-20200430/Item/Storage/AwsFSx')
AwsFSxCard('aws_f_sx', 'Aws F Sx', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFSx element
include('aws-20200430/Item/Storage/AwsFSx')
AwsFSxCard('aws_f_sx', 'Aws F Sx', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFSx element
include('aws-20200430/Item/Storage/AwsFSx')
AwsFSx('aws_f_sx', 'Aws F Sx', 'an optional tech field')
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
' loads the AwsFSx element
include('aws-20200430/Item/Storage/AwsFSx')
AwsFSx('aws_f_sx', 'Aws F Sx', 'an optional tech field')
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
' loads the AwsFSx element
include('aws-20200430/Item/Storage/AwsFSx')
AwsFSxGroup('aws_f_sx', 'Aws F Sx', 'an optional tech field'){
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
' loads the AwsFSx element
include('aws-20200430/Item/Storage/AwsFSx')
AwsFSxGroup('aws_f_sx', 'Aws F Sx', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

