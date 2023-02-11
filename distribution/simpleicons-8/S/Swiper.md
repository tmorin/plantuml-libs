# Swiper


```text
simpleicons-8/S/Swiper
```

```text
include('simpleicons-8/S/Swiper')
```



| Illustration | Swiper |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Swiper.png) | ![illustration for Swiper](../../simpleicons-8/S/Swiper.Local.png) |




## Swiper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Swiper
include('simpleicons-8/S/Swiper')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Swiper
include('simpleicons-8/S/Swiper')

' renders the element
Swiper('Swiper', 'Swiper', 'an optional tech label', 'an optional description')
@enduml
```

