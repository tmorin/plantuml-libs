# HorizontalSplit


```text
material-4/Action/HorizontalSplit
```

```text
include('material-4/Action/HorizontalSplit')
```



| Illustration | HorizontalSplit |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/HorizontalSplit.png) | ![illustration for HorizontalSplit](../../material-4/Action/HorizontalSplit.Local.png) |




## HorizontalSplit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element HorizontalSplit
include('material-4/Action/HorizontalSplit')

' renders the element
HorizontalSplit('HorizontalSplit', 'Horizontal Split', 'an optional tech label')
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

' loads the Item which embeds the element HorizontalSplit
include('material-4/Action/HorizontalSplit')

' renders the element
HorizontalSplit('HorizontalSplit', 'Horizontal Split', 'an optional tech label')
@enduml
```

