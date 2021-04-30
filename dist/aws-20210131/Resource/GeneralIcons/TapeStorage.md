# Tape Storage

```text
aws-20210131/Resource/GeneralIcons/TapeStorage
```

```text
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
```

|icon|card|element|group|
|---|---|---|---|
|![](TapeStorage.png)|![](TapeStorage.card.png)|![](TapeStorage.element.png)|![](TapeStorage.group.png)|



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
' loads the TapeStorage element
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
TapeStorageCard('tape_storage', 'Tape Storage', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TapeStorage element
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
TapeStorageCard('tape_storage', 'Tape Storage', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TapeStorage element
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
TapeStorage('tape_storage', 'Tape Storage', 'an optional tech field')
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
' loads the TapeStorage element
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
TapeStorage('tape_storage', 'Tape Storage', 'an optional tech field')
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
' loads the TapeStorage element
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
TapeStorageGroup('tape_storage', 'Tape Storage', 'an optional tech field'){
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
' loads the TapeStorage element
include('aws-20210131/Resource/GeneralIcons/TapeStorage')
TapeStorageGroup('tape_storage', 'Tape Storage', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

