# Subscript


```text
material-4/Editor/Subscript
```

```text
include('material-4/Editor/Subscript')
```



| Illustration | Subscript |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Subscript.png) | ![illustration for Subscript](../../material-4/Editor/Subscript.Local.png) |




## Subscript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Subscript
include('material-4/Editor/Subscript')

' renders the element
Subscript('Subscript', 'Subscript', 'an optional tech label')
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

' loads the Item which embeds the element Subscript
include('material-4/Editor/Subscript')

' renders the element
Subscript('Subscript', 'Subscript', 'an optional tech label')
@enduml
```

