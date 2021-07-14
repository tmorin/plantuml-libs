# Restaurant


```text
material-4/Maps/Restaurant
```

```text
include('material-4/Maps/Restaurant')
```



| Illustration | Restaurant |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Restaurant.png) | ![illustration for Restaurant](../../material-4/Maps/Restaurant.Local.png) |




## Restaurant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Restaurant
include('material-4/Maps/Restaurant')

' renders the element
Restaurant('Restaurant', 'Restaurant', 'an optional tech label')
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

' loads the Item which embeds the element Restaurant
include('material-4/Maps/Restaurant')

' renders the element
Restaurant('Restaurant', 'Restaurant', 'an optional tech label')
@enduml
```

