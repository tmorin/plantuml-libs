# Images


```text
fontawesome/Solid/Images
```

```text
include('fontawesome/Solid/Images')
```



| Illustration | Images |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Images.png) | ![illustration for Images](../../fontawesome/Solid/Images.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImagesXs>`
- `<$ImagesSm>`
- `<$ImagesMd>`
- `<$ImagesLg>`





## Images

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Images
include('fontawesome/Solid/Images')

' renders the element
Images('Images', 'Images', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Images
include('fontawesome/Solid/Images')

' renders the element
Images('Images', 'Images', 'an optional tech label', 'an optional description')
@enduml
```

