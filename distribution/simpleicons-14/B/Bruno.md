# Bruno


```text
simpleicons-14/B/Bruno
```

```text
include('simpleicons-14/B/Bruno')
```



| Illustration | Bruno |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bruno.png) | ![illustration for Bruno](../../simpleicons-14/B/Bruno.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bruno
include('simpleicons-14/B/Bruno')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bruno
include('simpleicons-14/B/Bruno')

' renders the element
Bruno('Bruno', 'Bruno', 'an optional tech label', 'an optional description')
@enduml
```

