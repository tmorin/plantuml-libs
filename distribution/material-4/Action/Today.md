# Today


```text
material-4/Action/Today
```

```text
include('material-4/Action/Today')
```



| Illustration | Today |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Today.png) | ![illustration for Today](../../material-4/Action/Today.Local.png) |




## Today

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Today
include('material-4/Action/Today')

' renders the element
Today('Today', 'Today', 'an optional tech label')
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

' loads the Item which embeds the element Today
include('material-4/Action/Today')

' renders the element
Today('Today', 'Today', 'an optional tech label')
@enduml
```

