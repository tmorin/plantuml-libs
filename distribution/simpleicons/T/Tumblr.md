# Tumblr


```text
simpleicons/T/Tumblr
```

```text
include('simpleicons/T/Tumblr')
```



| Illustration | Tumblr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tumblr.png) | ![illustration for Tumblr](../../simpleicons/T/Tumblr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TumblrXs>`
- `<$TumblrSm>`
- `<$TumblrMd>`
- `<$TumblrLg>`





## Tumblr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tumblr
include('simpleicons/T/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tumblr
include('simpleicons/T/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label', 'an optional description')
@enduml
```

