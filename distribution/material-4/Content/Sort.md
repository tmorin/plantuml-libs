# Sort


```text
material-4/Content/Sort
```

```text
include('material-4/Content/Sort')
```



| Illustration | Sort |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Sort.png) | ![illustration for Sort](../../material-4/Content/Sort.Local.png) |




## Sort

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Sort
include('material-4/Content/Sort')

' renders the element
Sort('Sort', 'Sort', 'an optional tech label')
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

' loads the Item which embeds the element Sort
include('material-4/Content/Sort')

' renders the element
Sort('Sort', 'Sort', 'an optional tech label')
@enduml
```

