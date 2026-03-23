# Redo


```text
fontawesome/Solid/Redo
```

```text
include('fontawesome/Solid/Redo')
```



| Illustration | Redo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Redo.png) | ![illustration for Redo](../../fontawesome/Solid/Redo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedoXs>`
- `<$RedoSm>`
- `<$RedoMd>`
- `<$RedoLg>`





## Redo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Redo
include('fontawesome/Solid/Redo')

' renders the element
Redo('Redo', 'Redo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redo
include('fontawesome/Solid/Redo')

' renders the element
Redo('Redo', 'Redo', 'an optional tech label', 'an optional description')
@enduml
```

