# Bruno


```text
simpleicons/B/Bruno
```

```text
include('simpleicons/B/Bruno')
```



| Illustration | Bruno |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bruno.png) | ![illustration for Bruno](../../simpleicons/B/Bruno.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrunoXs>`
- `<$BrunoSm>`
- `<$BrunoMd>`
- `<$BrunoLg>`





## Bruno

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bruno
include('simpleicons/B/Bruno')

' renders the element
Bruno('Bruno', 'Bruno', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bruno
include('simpleicons/B/Bruno')

' renders the element
Bruno('Bruno', 'Bruno', 'an optional tech label', 'an optional description')
@enduml
```

