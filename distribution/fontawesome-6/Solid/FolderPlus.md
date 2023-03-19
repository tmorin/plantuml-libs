# FolderPlus


```text
fontawesome-6/Solid/FolderPlus
```

```text
include('fontawesome-6/Solid/FolderPlus')
```



| Illustration | FolderPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FolderPlus.png) | ![illustration for FolderPlus](../../fontawesome-6/Solid/FolderPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FolderPlusXs>`
- `<$FolderPlusSm>`
- `<$FolderPlusMd>`
- `<$FolderPlusLg>`





## FolderPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FolderPlus
include('fontawesome-6/Solid/FolderPlus')

' renders the element
FolderPlus('FolderPlus', 'Folder Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FolderPlus
include('fontawesome-6/Solid/FolderPlus')

' renders the element
FolderPlus('FolderPlus', 'Folder Plus', 'an optional tech label', 'an optional description')
@enduml
```

