# Image


```text
fontawesome-5/Solid/Image
```

```text
include('fontawesome-5/Solid/Image')
```



| Illustration | Image |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Image.png) | ![illustration for Image](../../fontawesome-5/Solid/Image.Local.png) |




## Image

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Image
include('fontawesome-5/Solid/Image')

' renders the element
Image('Image', 'Image', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Image
include('fontawesome-5/Solid/Image')

' renders the element
Image('Image', 'Image', 'an optional tech label')
@enduml
```

