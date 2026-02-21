# FileArrowDown


```text
fontawesome/Solid/FileArrowDown
```

```text
include('fontawesome/Solid/FileArrowDown')
```



| Illustration | FileArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileArrowDown.png) | ![illustration for FileArrowDown](../../fontawesome/Solid/FileArrowDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileArrowDownXs>`
- `<$FileArrowDownSm>`
- `<$FileArrowDownMd>`
- `<$FileArrowDownLg>`





## FileArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileArrowDown
include('fontawesome/Solid/FileArrowDown')

' renders the element
FileArrowDown('FileArrowDown', 'File Arrow Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileArrowDown
include('fontawesome/Solid/FileArrowDown')

' renders the element
FileArrowDown('FileArrowDown', 'File Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

