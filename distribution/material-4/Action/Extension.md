# Extension


```text
material-4/Action/Extension
```

```text
include('material-4/Action/Extension')
```



| Illustration | Extension |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Extension.png) | ![illustration for Extension](../../material-4/Action/Extension.Local.png) |




## Extension

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Extension
include('material-4/Action/Extension')

' renders the element
Extension('Extension', 'Extension', 'an optional tech label')
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

' loads the Item which embeds the element Extension
include('material-4/Action/Extension')

' renders the element
Extension('Extension', 'Extension', 'an optional tech label')
@enduml
```

