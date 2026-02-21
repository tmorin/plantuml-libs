# Brenntag


```text
simpleicons/B/Brenntag
```

```text
include('simpleicons/B/Brenntag')
```



| Illustration | Brenntag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Brenntag.png) | ![illustration for Brenntag](../../simpleicons/B/Brenntag.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Brenntag
include('simpleicons/B/Brenntag')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Brenntag
include('simpleicons/B/Brenntag')

' renders the element
Brenntag('Brenntag', 'Brenntag', 'an optional tech label', 'an optional description')
@enduml
```

