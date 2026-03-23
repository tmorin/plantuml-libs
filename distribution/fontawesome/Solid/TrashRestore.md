# TrashRestore


```text
fontawesome/Solid/TrashRestore
```

```text
include('fontawesome/Solid/TrashRestore')
```



| Illustration | TrashRestore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TrashRestore.png) | ![illustration for TrashRestore](../../fontawesome/Solid/TrashRestore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrashRestoreXs>`
- `<$TrashRestoreSm>`
- `<$TrashRestoreMd>`
- `<$TrashRestoreLg>`





## TrashRestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TrashRestore
include('fontawesome/Solid/TrashRestore')

' renders the element
TrashRestore('TrashRestore', 'Trash Restore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrashRestore
include('fontawesome/Solid/TrashRestore')

' renders the element
TrashRestore('TrashRestore', 'Trash Restore', 'an optional tech label', 'an optional description')
@enduml
```

