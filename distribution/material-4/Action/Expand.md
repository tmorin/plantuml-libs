# Expand


```text
material-4/Action/Expand
```

```text
include('material-4/Action/Expand')
```



| Illustration | Expand |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Expand.png) | ![illustration for Expand](../../material-4/Action/Expand.Local.png) |




## Expand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Expand
include('material-4/Action/Expand')

' renders the element
Expand('Expand', 'Expand', 'an optional tech label')
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

' loads the Item which embeds the element Expand
include('material-4/Action/Expand')

' renders the element
Expand('Expand', 'Expand', 'an optional tech label')
@enduml
```

