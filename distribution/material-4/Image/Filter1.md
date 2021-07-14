# Filter1


```text
material-4/Image/Filter1
```

```text
include('material-4/Image/Filter1')
```



| Illustration | Filter1 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Filter1.png) | ![illustration for Filter1](../../material-4/Image/Filter1.Local.png) |




## Filter1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Filter1
include('material-4/Image/Filter1')

' renders the element
Filter1('Filter1', 'Filter1', 'an optional tech label')
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

' loads the Item which embeds the element Filter1
include('material-4/Image/Filter1')

' renders the element
Filter1('Filter1', 'Filter1', 'an optional tech label')
@enduml
```

