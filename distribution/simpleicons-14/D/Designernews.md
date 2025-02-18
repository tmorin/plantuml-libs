# Designernews


```text
simpleicons-14/D/Designernews
```

```text
include('simpleicons-14/D/Designernews')
```



| Illustration | Designernews |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Designernews.png) | ![illustration for Designernews](../../simpleicons-14/D/Designernews.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DesignernewsXs>`
- `<$DesignernewsSm>`
- `<$DesignernewsMd>`
- `<$DesignernewsLg>`





## Designernews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Designernews
include('simpleicons-14/D/Designernews')

' renders the element
Designernews('Designernews', 'Designernews', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Designernews
include('simpleicons-14/D/Designernews')

' renders the element
Designernews('Designernews', 'Designernews', 'an optional tech label', 'an optional description')
@enduml
```

