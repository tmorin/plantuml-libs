# FileAlt


```text
fontawesome/Solid/FileAlt
```

```text
include('fontawesome/Solid/FileAlt')
```



| Illustration | FileAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileAlt.png) | ![illustration for FileAlt](../../fontawesome/Solid/FileAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileAltXs>`
- `<$FileAltSm>`
- `<$FileAltMd>`
- `<$FileAltLg>`





## FileAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileAlt
include('fontawesome/Solid/FileAlt')

' renders the element
FileAlt('FileAlt', 'File Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileAlt
include('fontawesome/Solid/FileAlt')

' renders the element
FileAlt('FileAlt', 'File Alt', 'an optional tech label', 'an optional description')
@enduml
```

