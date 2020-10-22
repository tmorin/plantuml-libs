# Server Contents

```text
aws-20200430/Item/Groups/ServerContents
```

```text
include('aws-20200430/Item/Groups/ServerContents')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServerContents.png)|![](ServerContents.card.png)|![](ServerContents.element.png)|![](ServerContents.group.png)|



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
' loads the ServerContents element
include('aws-20200430/Item/Groups/ServerContents')
ServerContentsCard('server_contents', 'Server Contents', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServerContents element
include('aws-20200430/Item/Groups/ServerContents')
ServerContentsCard('server_contents', 'Server Contents', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServerContents element
include('aws-20200430/Item/Groups/ServerContents')
ServerContents('server_contents', 'Server Contents', 'an optional tech field')
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
' loads the ServerContents element
include('aws-20200430/Item/Groups/ServerContents')
ServerContents('server_contents', 'Server Contents', 'an optional tech field')
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
' loads the ServerContents element
include('aws-20200430/Item/Groups/ServerContents')
ServerContentsGroup('server_contents', 'Server Contents', 'an optional tech field'){
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
' loads the ServerContents element
include('aws-20200430/Item/Groups/ServerContents')
ServerContentsGroup('server_contents', 'Server Contents', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

