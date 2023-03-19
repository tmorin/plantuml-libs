# AddModerator


```text
material-4/Social/AddModerator
```

```text
include('material-4/Social/AddModerator')
```



| Illustration | AddModerator |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/AddModerator.png) | ![illustration for AddModerator](../../material-4/Social/AddModerator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddModeratorXs>`
- `<$AddModeratorSm>`
- `<$AddModeratorMd>`
- `<$AddModeratorLg>`





## AddModerator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddModerator
include('material-4/Social/AddModerator')

' renders the element
AddModerator('AddModerator', 'Add Moderator', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element AddModerator
include('material-4/Social/AddModerator')

' renders the element
AddModerator('AddModerator', 'Add Moderator', 'an optional tech label', 'an optional description')
@enduml
```

