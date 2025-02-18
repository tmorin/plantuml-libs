# Tumblr


```text
simpleicons-14/T/Tumblr
```

```text
include('simpleicons-14/T/Tumblr')
```



| Illustration | Tumblr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tumblr.png) | ![illustration for Tumblr](../../simpleicons-14/T/Tumblr.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tumblr
include('simpleicons-14/T/Tumblr')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tumblr
include('simpleicons-14/T/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label', 'an optional description')
@enduml
```

