# AppBlocking


```text
material-4/Action/AppBlocking
```

```text
include('material-4/Action/AppBlocking')
```



| Illustration | AppBlocking |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AppBlocking.png) | ![illustration for AppBlocking](../../material-4/Action/AppBlocking.Local.png) |




## AppBlocking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AppBlocking
include('material-4/Action/AppBlocking')

' renders the element
AppBlocking('AppBlocking', 'App Blocking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AppBlocking
include('material-4/Action/AppBlocking')

' renders the element
AppBlocking('AppBlocking', 'App Blocking', 'an optional tech label', 'an optional description')
@enduml
```

