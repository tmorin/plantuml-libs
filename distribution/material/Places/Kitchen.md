# Kitchen


```text
material/Places/Kitchen
```

```text
include('material/Places/Kitchen')
```



| Illustration | Kitchen |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Kitchen.png) | ![illustration for Kitchen](../../material/Places/Kitchen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KitchenXs>`
- `<$KitchenSm>`
- `<$KitchenMd>`
- `<$KitchenLg>`





## Kitchen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Kitchen
include('material/Places/Kitchen')

' renders the element
Kitchen('Kitchen', 'Kitchen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kitchen
include('material/Places/Kitchen')

' renders the element
Kitchen('Kitchen', 'Kitchen', 'an optional tech label', 'an optional description')
@enduml
```

