# Reorder


```text
fontawesome/Solid/Reorder
```

```text
include('fontawesome/Solid/Reorder')
```



| Illustration | Reorder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Reorder.png) | ![illustration for Reorder](../../fontawesome/Solid/Reorder.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Reorder
include('fontawesome/Solid/Reorder')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Reorder
include('fontawesome/Solid/Reorder')

' renders the element
Reorder('Reorder', 'Reorder', 'an optional tech label', 'an optional description')
@enduml
```

