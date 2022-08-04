# North


```text
material-4/Navigation/North
```

```text
include('material-4/Navigation/North')
```



| Illustration | North |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/North.png) | ![illustration for North](../../material-4/Navigation/North.Local.png) |




## North

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element North
include('material-4/Navigation/North')

' renders the element
North('North', 'North', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element North
include('material-4/Navigation/North')

' renders the element
North('North', 'North', 'an optional tech label', 'an optional description')
@enduml
```

