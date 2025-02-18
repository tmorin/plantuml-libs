# Slideshare


```text
simpleicons-14/S/Slideshare
```

```text
include('simpleicons-14/S/Slideshare')
```



| Illustration | Slideshare |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Slideshare.png) | ![illustration for Slideshare](../../simpleicons-14/S/Slideshare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlideshareXs>`
- `<$SlideshareSm>`
- `<$SlideshareMd>`
- `<$SlideshareLg>`





## Slideshare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Slideshare
include('simpleicons-14/S/Slideshare')

' renders the element
Slideshare('Slideshare', 'Slideshare', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Slideshare
include('simpleicons-14/S/Slideshare')

' renders the element
Slideshare('Slideshare', 'Slideshare', 'an optional tech label', 'an optional description')
@enduml
```

