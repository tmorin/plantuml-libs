# Solid


```text
simpleicons-14/S/Solid
```

```text
include('simpleicons-14/S/Solid')
```



| Illustration | Solid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Solid.png) | ![illustration for Solid](../../simpleicons-14/S/Solid.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SolidXs>`
- `<$SolidSm>`
- `<$SolidMd>`
- `<$SolidLg>`





## Solid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Solid
include('simpleicons-14/S/Solid')

' renders the element
Solid('Solid', 'Solid', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Solid
include('simpleicons-14/S/Solid')

' renders the element
Solid('Solid', 'Solid', 'an optional tech label', 'an optional description')
@enduml
```

