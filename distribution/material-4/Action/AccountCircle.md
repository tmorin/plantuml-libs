# AccountCircle


```text
material-4/Action/AccountCircle
```

```text
include('material-4/Action/AccountCircle')
```



| Illustration | AccountCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AccountCircle.png) | ![illustration for AccountCircle](../../material-4/Action/AccountCircle.Local.png) |




## AccountCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AccountCircle
include('material-4/Action/AccountCircle')

' renders the element
AccountCircle('AccountCircle', 'Account Circle', 'an optional tech label')
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

' loads the Item which embeds the element AccountCircle
include('material-4/Action/AccountCircle')

' renders the element
AccountCircle('AccountCircle', 'Account Circle', 'an optional tech label')
@enduml
```

