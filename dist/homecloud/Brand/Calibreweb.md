# Calibreweb

```text
homecloud/Brand/Calibreweb
```

```text
include('homecloud/Brand/Calibreweb')
```

|icon|card|element|group|
|---|---|---|---|
|![](Calibreweb.png)|![](Calibreweb.card.png)|![](Calibreweb.element.png)|![](Calibreweb.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the Calibreweb element
include('homecloud/Brand/Calibreweb')
CalibrewebCard('calibreweb', 'Calibreweb', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the Calibreweb element
include('homecloud/Brand/Calibreweb')
CalibrewebCard('calibreweb', 'Calibreweb', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the Calibreweb element
include('homecloud/Brand/Calibreweb')
Calibreweb('calibreweb', 'Calibreweb', 'an optional tech field')
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
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the Calibreweb element
include('homecloud/Brand/Calibreweb')
Calibreweb('calibreweb', 'Calibreweb', 'an optional tech field')
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
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the Calibreweb element
include('homecloud/Brand/Calibreweb')
CalibrewebGroup('calibreweb', 'Calibreweb', 'an optional tech field'){
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
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the Calibreweb element
include('homecloud/Brand/Calibreweb')
CalibrewebGroup('calibreweb', 'Calibreweb', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

