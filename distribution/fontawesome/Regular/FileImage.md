# FileImage


```text
fontawesome/Regular/FileImage
```

```text
include('fontawesome/Regular/FileImage')
```



| Illustration | FileImage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FileImage.png) | ![illustration for FileImage](../../fontawesome/Regular/FileImage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileImageXs>`
- `<$FileImageSm>`
- `<$FileImageMd>`
- `<$FileImageLg>`





## FileImage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileImage
include('fontawesome/Regular/FileImage')

' renders the element
FileImage('FileImage', 'File Image', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileImage
include('fontawesome/Regular/FileImage')

' renders the element
FileImage('FileImage', 'File Image', 'an optional tech label', 'an optional description')
@enduml
```

