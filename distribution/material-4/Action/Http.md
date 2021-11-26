# Http


```text
material-4/Action/Http
```

```text
include('material-4/Action/Http')
```



| Illustration | Http |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Http.png) | ![illustration for Http](../../material-4/Action/Http.Local.png) |




## Http

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Http
include('material-4/Action/Http')

' renders the element
Http('Http', 'Http', 'an optional tech label')
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

' loads the Item which embeds the element Http
include('material-4/Action/Http')

' renders the element
Http('Http', 'Http', 'an optional tech label')
@enduml
```

