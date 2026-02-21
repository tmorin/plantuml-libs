# Cloudinary


```text
simpleicons-14/C/Cloudinary
```

```text
include('simpleicons-14/C/Cloudinary')
```



| Illustration | Cloudinary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudinary.png) | ![illustration for Cloudinary](../../simpleicons-14/C/Cloudinary.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudinary
include('simpleicons-14/C/Cloudinary')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudinary
include('simpleicons-14/C/Cloudinary')

' renders the element
Cloudinary('Cloudinary', 'Cloudinary', 'an optional tech label', 'an optional description')
@enduml
```

