# FileEdit


```text
fontawesome/Solid/FileEdit
```

```text
include('fontawesome/Solid/FileEdit')
```



| Illustration | FileEdit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileEdit.png) | ![illustration for FileEdit](../../fontawesome/Solid/FileEdit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileEditXs>`
- `<$FileEditSm>`
- `<$FileEditMd>`
- `<$FileEditLg>`





## FileEdit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileEdit
include('fontawesome/Solid/FileEdit')

' renders the element
FileEdit('FileEdit', 'File Edit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileEdit
include('fontawesome/Solid/FileEdit')

' renders the element
FileEdit('FileEdit', 'File Edit', 'an optional tech label', 'an optional description')
@enduml
```

