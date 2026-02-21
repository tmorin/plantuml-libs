# Unsplash


```text
fontawesome/Brands/Unsplash
```

```text
include('fontawesome/Brands/Unsplash')
```



| Illustration | Unsplash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Unsplash.png) | ![illustration for Unsplash](../../fontawesome/Brands/Unsplash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnsplashXs>`
- `<$UnsplashSm>`
- `<$UnsplashMd>`
- `<$UnsplashLg>`





## Unsplash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Unsplash
include('fontawesome/Brands/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Unsplash
include('fontawesome/Brands/Unsplash')

' renders the element
Unsplash('Unsplash', 'Unsplash', 'an optional tech label', 'an optional description')
@enduml
```

