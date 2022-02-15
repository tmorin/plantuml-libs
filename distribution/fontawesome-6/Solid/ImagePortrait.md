# ImagePortrait


```text
fontawesome-6/Solid/ImagePortrait
```

```text
include('fontawesome-6/Solid/ImagePortrait')
```



| Illustration | ImagePortrait |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ImagePortrait.png) | ![illustration for ImagePortrait](../../fontawesome-6/Solid/ImagePortrait.Local.png) |




## ImagePortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ImagePortrait
include('fontawesome-6/Solid/ImagePortrait')

' renders the element
ImagePortrait('ImagePortrait', 'Image Portrait', 'an optional tech label')
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

' loads the Item which embeds the element ImagePortrait
include('fontawesome-6/Solid/ImagePortrait')

' renders the element
ImagePortrait('ImagePortrait', 'Image Portrait', 'an optional tech label')
@enduml
```

