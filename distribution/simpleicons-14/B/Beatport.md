# Beatport


```text
simpleicons-14/B/Beatport
```

```text
include('simpleicons-14/B/Beatport')
```



| Illustration | Beatport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Beatport.png) | ![illustration for Beatport](../../simpleicons-14/B/Beatport.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BeatportXs>`
- `<$BeatportSm>`
- `<$BeatportMd>`
- `<$BeatportLg>`





## Beatport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Beatport
include('simpleicons-14/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Beatport
include('simpleicons-14/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label', 'an optional description')
@enduml
```

