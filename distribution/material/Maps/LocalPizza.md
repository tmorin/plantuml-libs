# LocalPizza


```text
material/Maps/LocalPizza
```

```text
include('material/Maps/LocalPizza')
```



| Illustration | LocalPizza |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalPizza.png) | ![illustration for LocalPizza](../../material/Maps/LocalPizza.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalPizzaXs>`
- `<$LocalPizzaSm>`
- `<$LocalPizzaMd>`
- `<$LocalPizzaLg>`





## LocalPizza

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalPizza
include('material/Maps/LocalPizza')

' renders the element
LocalPizza('LocalPizza', 'Local Pizza', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LocalPizza
include('material/Maps/LocalPizza')

' renders the element
LocalPizza('LocalPizza', 'Local Pizza', 'an optional tech label', 'an optional description')
@enduml
```

