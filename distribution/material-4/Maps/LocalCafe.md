# LocalCafe


```text
material-4/Maps/LocalCafe
```

```text
include('material-4/Maps/LocalCafe')
```



| Illustration | LocalCafe |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalCafe.png) | ![illustration for LocalCafe](../../material-4/Maps/LocalCafe.Local.png) |




## LocalCafe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalCafe
include('material-4/Maps/LocalCafe')

' renders the element
LocalCafe('LocalCafe', 'Local Cafe', 'an optional tech label')
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

' loads the Item which embeds the element LocalCafe
include('material-4/Maps/LocalCafe')

' renders the element
LocalCafe('LocalCafe', 'Local Cafe', 'an optional tech label')
@enduml
```

