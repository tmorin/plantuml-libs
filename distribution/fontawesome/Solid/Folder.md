# Folder


```text
fontawesome/Solid/Folder
```

```text
include('fontawesome/Solid/Folder')
```



| Illustration | Folder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Folder.png) | ![illustration for Folder](../../fontawesome/Solid/Folder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FolderXs>`
- `<$FolderSm>`
- `<$FolderMd>`
- `<$FolderLg>`





## Folder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Folder
include('fontawesome/Solid/Folder')

' renders the element
Folder('Folder', 'Folder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Folder
include('fontawesome/Solid/Folder')

' renders the element
Folder('Folder', 'Folder', 'an optional tech label', 'an optional description')
@enduml
```

