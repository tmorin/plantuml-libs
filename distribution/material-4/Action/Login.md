# Login


```text
material-4/Action/Login
```

```text
include('material-4/Action/Login')
```



| Illustration | Login |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Login.png) | ![illustration for Login](../../material-4/Action/Login.Local.png) |




## Login

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Login
include('material-4/Action/Login')

' renders the element
Login('Login', 'Login', 'an optional tech label')
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

' loads the Item which embeds the element Login
include('material-4/Action/Login')

' renders the element
Login('Login', 'Login', 'an optional tech label')
@enduml
```

