# Pencil


```text
fontawesome/Solid/Pencil
```

```text
include('fontawesome/Solid/Pencil')
```



| Illustration | Pencil |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pencil.png) | ![illustration for Pencil](../../fontawesome/Solid/Pencil.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PencilXs>`
- `<$PencilSm>`
- `<$PencilMd>`
- `<$PencilLg>`





## Pencil

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pencil
include('fontawesome/Solid/Pencil')

' renders the element
Pencil('Pencil', 'Pencil', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pencil
include('fontawesome/Solid/Pencil')

' renders the element
Pencil('Pencil', 'Pencil', 'an optional tech label', 'an optional description')
@enduml
```

