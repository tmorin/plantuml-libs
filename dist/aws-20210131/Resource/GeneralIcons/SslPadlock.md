# Ssl Padlock

```text
aws-20210131/Resource/GeneralIcons/SslPadlock
```

```text
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
```

|icon|card|element|group|
|---|---|---|---|
|![](SslPadlock.png)|![](SslPadlock.card.png)|![](SslPadlock.element.png)|![](SslPadlock.group.png)|



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
' loads the SslPadlock element
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
SslPadlockCard('ssl_padlock', 'Ssl Padlock', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SslPadlock element
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
SslPadlockCard('ssl_padlock', 'Ssl Padlock', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SslPadlock element
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
SslPadlock('ssl_padlock', 'Ssl Padlock', 'an optional tech field')
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
' loads the SslPadlock element
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
SslPadlock('ssl_padlock', 'Ssl Padlock', 'an optional tech field')
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
' loads the SslPadlock element
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
SslPadlockGroup('ssl_padlock', 'Ssl Padlock', 'an optional tech field'){
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
' loads the SslPadlock element
include('aws-20210131/Resource/GeneralIcons/SslPadlock')
SslPadlockGroup('ssl_padlock', 'Ssl Padlock', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

