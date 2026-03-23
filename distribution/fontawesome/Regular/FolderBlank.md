# FolderBlank


```text
fontawesome/Regular/FolderBlank
```

```text
include('fontawesome/Regular/FolderBlank')
```



| Illustration | FolderBlank |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FolderBlank.png) | ![illustration for FolderBlank](../../fontawesome/Regular/FolderBlank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FolderBlankXs>`
- `<$FolderBlankSm>`
- `<$FolderBlankMd>`
- `<$FolderBlankLg>`





## FolderBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FolderBlank
include('fontawesome/Regular/FolderBlank')

' renders the element
FolderBlank('FolderBlank', 'Folder Blank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FolderBlank
include('fontawesome/Regular/FolderBlank')

' renders the element
FolderBlank('FolderBlank', 'Folder Blank', 'an optional tech label', 'an optional description')
@enduml
```

