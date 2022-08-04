# Api


```text
material-4/Action/Api
```

```text
include('material-4/Action/Api')
```



| Illustration | Api |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Api.png) | ![illustration for Api](../../material-4/Action/Api.Local.png) |




## Api

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Api
include('material-4/Action/Api')

' renders the element
Api('Api', 'Api', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Api
include('material-4/Action/Api')

' renders the element
Api('Api', 'Api', 'an optional tech label', 'an optional description')
@enduml
```

