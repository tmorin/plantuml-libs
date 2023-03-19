# Photo


```text
material-4/Image/Photo
```

```text
include('material-4/Image/Photo')
```



| Illustration | Photo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Photo.png) | ![illustration for Photo](../../material-4/Image/Photo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotoXs>`
- `<$PhotoSm>`
- `<$PhotoMd>`
- `<$PhotoLg>`





## Photo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Photo
include('material-4/Image/Photo')

' renders the element
Photo('Photo', 'Photo', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Photo
include('material-4/Image/Photo')

' renders the element
Photo('Photo', 'Photo', 'an optional tech label', 'an optional description')
@enduml
```

