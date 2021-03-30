# Nice Dcv

```text
aws-20210131/Architecture/Compute/NiceDcv
```

```text
include('aws-20210131/Architecture/Compute/NiceDcv')
```

|icon|card|element|group|
|---|---|---|---|
|![](NiceDcv.png)|![](NiceDcv.card.png)|![](NiceDcv.element.png)|![](NiceDcv.group.png)|



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
' loads the NiceDcv element
include('aws-20210131/Architecture/Compute/NiceDcv')
NiceDcvCard('nice_dcv', 'Nice Dcv', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the NiceDcv element
include('aws-20210131/Architecture/Compute/NiceDcv')
NiceDcvCard('nice_dcv', 'Nice Dcv', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the NiceDcv element
include('aws-20210131/Architecture/Compute/NiceDcv')
NiceDcv('nice_dcv', 'Nice Dcv', 'an optional tech field')
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
' loads the NiceDcv element
include('aws-20210131/Architecture/Compute/NiceDcv')
NiceDcv('nice_dcv', 'Nice Dcv', 'an optional tech field')
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
' loads the NiceDcv element
include('aws-20210131/Architecture/Compute/NiceDcv')
NiceDcvGroup('nice_dcv', 'Nice Dcv', 'an optional tech field'){
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
' loads the NiceDcv element
include('aws-20210131/Architecture/Compute/NiceDcv')
NiceDcvGroup('nice_dcv', 'Nice Dcv', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

