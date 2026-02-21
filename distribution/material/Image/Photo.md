# Photo


```text
material/Image/Photo
```

```text
include('material/Image/Photo')
```



| Illustration | Photo |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/Photo.png) | ![illustration for Photo](../../material/Image/Photo.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Photo
include('material/Image/Photo')

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
include('material/bootstrap')

' loads the Item which embeds the element Photo
include('material/Image/Photo')

' renders the element
Photo('Photo', 'Photo', 'an optional tech label', 'an optional description')
@enduml
```

