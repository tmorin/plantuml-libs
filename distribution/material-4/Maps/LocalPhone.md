# LocalPhone


```text
material-4/Maps/LocalPhone
```

```text
include('material-4/Maps/LocalPhone')
```



| Illustration | LocalPhone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalPhone.png) | ![illustration for LocalPhone](../../material-4/Maps/LocalPhone.Local.png) |




## LocalPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalPhone
include('material-4/Maps/LocalPhone')

' renders the element
LocalPhone('LocalPhone', 'Local Phone', 'an optional tech label')
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

' loads the Item which embeds the element LocalPhone
include('material-4/Maps/LocalPhone')

' renders the element
LocalPhone('LocalPhone', 'Local Phone', 'an optional tech label')
@enduml
```

