# Cloudinary


```text
simpleicons/C/Cloudinary
```

```text
include('simpleicons/C/Cloudinary')
```



| Illustration | Cloudinary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cloudinary.png) | ![illustration for Cloudinary](../../simpleicons/C/Cloudinary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudinaryXs>`
- `<$CloudinarySm>`
- `<$CloudinaryMd>`
- `<$CloudinaryLg>`





## Cloudinary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cloudinary
include('simpleicons/C/Cloudinary')

' renders the element
Cloudinary('Cloudinary', 'Cloudinary', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cloudinary
include('simpleicons/C/Cloudinary')

' renders the element
Cloudinary('Cloudinary', 'Cloudinary', 'an optional tech label', 'an optional description')
@enduml
```

