# Slides


```text
simpleicons-14/S/Slides
```

```text
include('simpleicons-14/S/Slides')
```



| Illustration | Slides |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Slides.png) | ![illustration for Slides](../../simpleicons-14/S/Slides.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlidesXs>`
- `<$SlidesSm>`
- `<$SlidesMd>`
- `<$SlidesLg>`





## Slides

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Slides
include('simpleicons-14/S/Slides')

' renders the element
Slides('Slides', 'Slides', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Slides
include('simpleicons-14/S/Slides')

' renders the element
Slides('Slides', 'Slides', 'an optional tech label', 'an optional description')
@enduml
```

