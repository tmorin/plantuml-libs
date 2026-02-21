# Trash


```text
fontawesome/Solid/Trash
```

```text
include('fontawesome/Solid/Trash')
```



| Illustration | Trash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Trash.png) | ![illustration for Trash](../../fontawesome/Solid/Trash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrashXs>`
- `<$TrashSm>`
- `<$TrashMd>`
- `<$TrashLg>`





## Trash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Trash
include('fontawesome/Solid/Trash')

' renders the element
Trash('Trash', 'Trash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trash
include('fontawesome/Solid/Trash')

' renders the element
Trash('Trash', 'Trash', 'an optional tech label', 'an optional description')
@enduml
```

