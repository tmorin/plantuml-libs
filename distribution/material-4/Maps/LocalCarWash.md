# LocalCarWash


```text
material-4/Maps/LocalCarWash
```

```text
include('material-4/Maps/LocalCarWash')
```



| Illustration | LocalCarWash |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalCarWash.png) | ![illustration for LocalCarWash](../../material-4/Maps/LocalCarWash.Local.png) |




## LocalCarWash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalCarWash
include('material-4/Maps/LocalCarWash')

' renders the element
LocalCarWash('LocalCarWash', 'Local Car Wash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalCarWash
include('material-4/Maps/LocalCarWash')

' renders the element
LocalCarWash('LocalCarWash', 'Local Car Wash', 'an optional tech label', 'an optional description')
@enduml
```

