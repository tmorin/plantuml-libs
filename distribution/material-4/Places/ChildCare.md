# ChildCare


```text
material-4/Places/ChildCare
```

```text
include('material-4/Places/ChildCare')
```



| Illustration | ChildCare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/ChildCare.png) | ![illustration for ChildCare](../../material-4/Places/ChildCare.Local.png) |




## ChildCare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ChildCare
include('material-4/Places/ChildCare')

' renders the element
ChildCare('ChildCare', 'Child Care', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChildCare
include('material-4/Places/ChildCare')

' renders the element
ChildCare('ChildCare', 'Child Care', 'an optional tech label', 'an optional description')
@enduml
```

