# Appimage


```text
simpleicons-14/A/Appimage
```

```text
include('simpleicons-14/A/Appimage')
```



| Illustration | Appimage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Appimage.png) | ![illustration for Appimage](../../simpleicons-14/A/Appimage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppimageXs>`
- `<$AppimageSm>`
- `<$AppimageMd>`
- `<$AppimageLg>`





## Appimage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Appimage
include('simpleicons-14/A/Appimage')

' renders the element
Appimage('Appimage', 'Appimage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Appimage
include('simpleicons-14/A/Appimage')

' renders the element
Appimage('Appimage', 'Appimage', 'an optional tech label', 'an optional description')
@enduml
```

