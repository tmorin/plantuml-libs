# LocalDrink


```text
material-4/Maps/LocalDrink
```

```text
include('material-4/Maps/LocalDrink')
```



| Illustration | LocalDrink |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalDrink.png) | ![illustration for LocalDrink](../../material-4/Maps/LocalDrink.Local.png) |




## LocalDrink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalDrink
include('material-4/Maps/LocalDrink')

' renders the element
LocalDrink('LocalDrink', 'Local Drink', 'an optional tech label')
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

' loads the Item which embeds the element LocalDrink
include('material-4/Maps/LocalDrink')

' renders the element
LocalDrink('LocalDrink', 'Local Drink', 'an optional tech label')
@enduml
```

