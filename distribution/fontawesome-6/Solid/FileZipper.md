# FileZipper


```text
fontawesome-6/Solid/FileZipper
```

```text
include('fontawesome-6/Solid/FileZipper')
```



| Illustration | FileZipper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileZipper.png) | ![illustration for FileZipper](../../fontawesome-6/Solid/FileZipper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileZipperXs>`
- `<$FileZipperSm>`
- `<$FileZipperMd>`
- `<$FileZipperLg>`





## FileZipper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileZipper
include('fontawesome-6/Solid/FileZipper')

' renders the element
FileZipper('FileZipper', 'File Zipper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileZipper
include('fontawesome-6/Solid/FileZipper')

' renders the element
FileZipper('FileZipper', 'File Zipper', 'an optional tech label', 'an optional description')
@enduml
```

