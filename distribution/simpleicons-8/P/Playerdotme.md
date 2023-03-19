# Playerdotme


```text
simpleicons-8/P/Playerdotme
```

```text
include('simpleicons-8/P/Playerdotme')
```



| Illustration | Playerdotme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Playerdotme.png) | ![illustration for Playerdotme](../../simpleicons-8/P/Playerdotme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlayerdotmeXs>`
- `<$PlayerdotmeSm>`
- `<$PlayerdotmeMd>`
- `<$PlayerdotmeLg>`





## Playerdotme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Playerdotme
include('simpleicons-8/P/Playerdotme')

' renders the element
Playerdotme('Playerdotme', 'Playerdotme', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Playerdotme
include('simpleicons-8/P/Playerdotme')

' renders the element
Playerdotme('Playerdotme', 'Playerdotme', 'an optional tech label', 'an optional description')
@enduml
```

