# KitchenSet


```text
fontawesome/Solid/KitchenSet
```

```text
include('fontawesome/Solid/KitchenSet')
```



| Illustration | KitchenSet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/KitchenSet.png) | ![illustration for KitchenSet](../../fontawesome/Solid/KitchenSet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KitchenSetXs>`
- `<$KitchenSetSm>`
- `<$KitchenSetMd>`
- `<$KitchenSetLg>`





## KitchenSet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KitchenSet
include('fontawesome/Solid/KitchenSet')

' renders the element
KitchenSet('KitchenSet', 'Kitchen Set', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KitchenSet
include('fontawesome/Solid/KitchenSet')

' renders the element
KitchenSet('KitchenSet', 'Kitchen Set', 'an optional tech label', 'an optional description')
@enduml
```

