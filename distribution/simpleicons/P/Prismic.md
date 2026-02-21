# Prismic


```text
simpleicons/P/Prismic
```

```text
include('simpleicons/P/Prismic')
```



| Illustration | Prismic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Prismic.png) | ![illustration for Prismic](../../simpleicons/P/Prismic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrismicXs>`
- `<$PrismicSm>`
- `<$PrismicMd>`
- `<$PrismicLg>`





## Prismic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Prismic
include('simpleicons/P/Prismic')

' renders the element
Prismic('Prismic', 'Prismic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prismic
include('simpleicons/P/Prismic')

' renders the element
Prismic('Prismic', 'Prismic', 'an optional tech label', 'an optional description')
@enduml
```

