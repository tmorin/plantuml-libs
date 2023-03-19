# Pencil


```text
fontawesome-6/Solid/Pencil
```

```text
include('fontawesome-6/Solid/Pencil')
```



| Illustration | Pencil |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Pencil.png) | ![illustration for Pencil](../../fontawesome-6/Solid/Pencil.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pencil
include('fontawesome-6/Solid/Pencil')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pencil
include('fontawesome-6/Solid/Pencil')

' renders the element
Pencil('Pencil', 'Pencil', 'an optional tech label', 'an optional description')
@enduml
```

