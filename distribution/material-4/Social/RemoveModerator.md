# RemoveModerator


```text
material-4/Social/RemoveModerator
```

```text
include('material-4/Social/RemoveModerator')
```



| Illustration | RemoveModerator |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/RemoveModerator.png) | ![illustration for RemoveModerator](../../material-4/Social/RemoveModerator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemoveModeratorXs>`
- `<$RemoveModeratorSm>`
- `<$RemoveModeratorMd>`
- `<$RemoveModeratorLg>`





## RemoveModerator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RemoveModerator
include('material-4/Social/RemoveModerator')

' renders the element
RemoveModerator('RemoveModerator', 'Remove Moderator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RemoveModerator
include('material-4/Social/RemoveModerator')

' renders the element
RemoveModerator('RemoveModerator', 'Remove Moderator', 'an optional tech label', 'an optional description')
@enduml
```

