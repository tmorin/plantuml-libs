# Brenntag


```text
simpleicons-14/B/Brenntag
```

```text
include('simpleicons-14/B/Brenntag')
```



| Illustration | Brenntag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Brenntag.png) | ![illustration for Brenntag](../../simpleicons-14/B/Brenntag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrenntagXs>`
- `<$BrenntagSm>`
- `<$BrenntagMd>`
- `<$BrenntagLg>`





## Brenntag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Brenntag
include('simpleicons-14/B/Brenntag')

' renders the element
Brenntag('Brenntag', 'Brenntag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brenntag
include('simpleicons-14/B/Brenntag')

' renders the element
Brenntag('Brenntag', 'Brenntag', 'an optional tech label', 'an optional description')
@enduml
```

