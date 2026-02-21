# Swiper


```text
simpleicons/S/Swiper
```

```text
include('simpleicons/S/Swiper')
```



| Illustration | Swiper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Swiper.png) | ![illustration for Swiper](../../simpleicons/S/Swiper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwiperXs>`
- `<$SwiperSm>`
- `<$SwiperMd>`
- `<$SwiperLg>`





## Swiper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Swiper
include('simpleicons/S/Swiper')

' renders the element
Swiper('Swiper', 'Swiper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swiper
include('simpleicons/S/Swiper')

' renders the element
Swiper('Swiper', 'Swiper', 'an optional tech label', 'an optional description')
@enduml
```

