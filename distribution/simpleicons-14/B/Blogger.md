# Blogger


```text
simpleicons-14/B/Blogger
```

```text
include('simpleicons-14/B/Blogger')
```



| Illustration | Blogger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Blogger.png) | ![illustration for Blogger](../../simpleicons-14/B/Blogger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BloggerXs>`
- `<$BloggerSm>`
- `<$BloggerMd>`
- `<$BloggerLg>`





## Blogger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Blogger
include('simpleicons-14/B/Blogger')

' renders the element
Blogger('Blogger', 'Blogger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blogger
include('simpleicons-14/B/Blogger')

' renders the element
Blogger('Blogger', 'Blogger', 'an optional tech label', 'an optional description')
@enduml
```

