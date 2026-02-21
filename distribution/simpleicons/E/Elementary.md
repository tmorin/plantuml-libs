# Elementary


```text
simpleicons/E/Elementary
```

```text
include('simpleicons/E/Elementary')
```



| Illustration | Elementary |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Elementary.png) | ![illustration for Elementary](../../simpleicons/E/Elementary.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElementaryXs>`
- `<$ElementarySm>`
- `<$ElementaryMd>`
- `<$ElementaryLg>`





## Elementary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Elementary
include('simpleicons/E/Elementary')

' renders the element
Elementary('Elementary', 'Elementary', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elementary
include('simpleicons/E/Elementary')

' renders the element
Elementary('Elementary', 'Elementary', 'an optional tech label', 'an optional description')
@enduml
```

