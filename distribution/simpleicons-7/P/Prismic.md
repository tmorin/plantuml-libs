# Prismic


```text
simpleicons-7/P/Prismic
```

```text
include('simpleicons-7/P/Prismic')
```



| Illustration | Prismic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Prismic.png) | ![illustration for Prismic](../../simpleicons-7/P/Prismic.Local.png) |




## Prismic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prismic
include('simpleicons-7/P/Prismic')

' renders the element
Prismic('Prismic', 'Prismic', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prismic
include('simpleicons-7/P/Prismic')

' renders the element
Prismic('Prismic', 'Prismic', 'an optional tech label')
@enduml
```

