# LocalBar


```text
material-4/Maps/LocalBar
```

```text
include('material-4/Maps/LocalBar')
```



| Illustration | LocalBar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalBar.png) | ![illustration for LocalBar](../../material-4/Maps/LocalBar.Local.png) |




## LocalBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalBar
include('material-4/Maps/LocalBar')

' renders the element
LocalBar('LocalBar', 'Local Bar', 'an optional tech label')
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

' loads the Item which embeds the element LocalBar
include('material-4/Maps/LocalBar')

' renders the element
LocalBar('LocalBar', 'Local Bar', 'an optional tech label')
@enduml
```

