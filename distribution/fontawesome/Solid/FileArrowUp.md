# FileArrowUp


```text
fontawesome/Solid/FileArrowUp
```

```text
include('fontawesome/Solid/FileArrowUp')
```



| Illustration | FileArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileArrowUp.png) | ![illustration for FileArrowUp](../../fontawesome/Solid/FileArrowUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileArrowUpXs>`
- `<$FileArrowUpSm>`
- `<$FileArrowUpMd>`
- `<$FileArrowUpLg>`





## FileArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileArrowUp
include('fontawesome/Solid/FileArrowUp')

' renders the element
FileArrowUp('FileArrowUp', 'File Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileArrowUp
include('fontawesome/Solid/FileArrowUp')

' renders the element
FileArrowUp('FileArrowUp', 'File Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

