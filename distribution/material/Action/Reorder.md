# Reorder


```text
material/Action/Reorder
```

```text
include('material/Action/Reorder')
```



| Illustration | Reorder |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Reorder.png) | ![illustration for Reorder](../../material/Action/Reorder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReorderXs>`
- `<$ReorderSm>`
- `<$ReorderMd>`
- `<$ReorderLg>`





## Reorder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Reorder
include('material/Action/Reorder')

' renders the element
Reorder('Reorder', 'Reorder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reorder
include('material/Action/Reorder')

' renders the element
Reorder('Reorder', 'Reorder', 'an optional tech label', 'an optional description')
@enduml
```

