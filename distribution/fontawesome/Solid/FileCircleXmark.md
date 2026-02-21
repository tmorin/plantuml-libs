# FileCircleXmark


```text
fontawesome/Solid/FileCircleXmark
```

```text
include('fontawesome/Solid/FileCircleXmark')
```



| Illustration | FileCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileCircleXmark.png) | ![illustration for FileCircleXmark](../../fontawesome/Solid/FileCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileCircleXmarkXs>`
- `<$FileCircleXmarkSm>`
- `<$FileCircleXmarkMd>`
- `<$FileCircleXmarkLg>`





## FileCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileCircleXmark
include('fontawesome/Solid/FileCircleXmark')

' renders the element
FileCircleXmark('FileCircleXmark', 'File Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileCircleXmark
include('fontawesome/Solid/FileCircleXmark')

' renders the element
FileCircleXmark('FileCircleXmark', 'File Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

