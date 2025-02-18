# Reddit


```text
simpleicons-14/R/Reddit
```

```text
include('simpleicons-14/R/Reddit')
```



| Illustration | Reddit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Reddit.png) | ![illustration for Reddit](../../simpleicons-14/R/Reddit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedditXs>`
- `<$RedditSm>`
- `<$RedditMd>`
- `<$RedditLg>`





## Reddit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Reddit
include('simpleicons-14/R/Reddit')

' renders the element
Reddit('Reddit', 'Reddit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reddit
include('simpleicons-14/R/Reddit')

' renders the element
Reddit('Reddit', 'Reddit', 'an optional tech label', 'an optional description')
@enduml
```

