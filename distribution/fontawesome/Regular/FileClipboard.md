# FileClipboard


```text
fontawesome/Regular/FileClipboard
```

```text
include('fontawesome/Regular/FileClipboard')
```



| Illustration | FileClipboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FileClipboard.png) | ![illustration for FileClipboard](../../fontawesome/Regular/FileClipboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileClipboardXs>`
- `<$FileClipboardSm>`
- `<$FileClipboardMd>`
- `<$FileClipboardLg>`





## FileClipboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileClipboard
include('fontawesome/Regular/FileClipboard')

' renders the element
FileClipboard('FileClipboard', 'File Clipboard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileClipboard
include('fontawesome/Regular/FileClipboard')

' renders the element
FileClipboard('FileClipboard', 'File Clipboard', 'an optional tech label', 'an optional description')
@enduml
```

