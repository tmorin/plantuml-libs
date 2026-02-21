# Appgallery


```text
simpleicons/A/Appgallery
```

```text
include('simpleicons/A/Appgallery')
```



| Illustration | Appgallery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Appgallery.png) | ![illustration for Appgallery](../../simpleicons/A/Appgallery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppgalleryXs>`
- `<$AppgallerySm>`
- `<$AppgalleryMd>`
- `<$AppgalleryLg>`





## Appgallery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Appgallery
include('simpleicons/A/Appgallery')

' renders the element
Appgallery('Appgallery', 'Appgallery', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Appgallery
include('simpleicons/A/Appgallery')

' renders the element
Appgallery('Appgallery', 'Appgallery', 'an optional tech label', 'an optional description')
@enduml
```

