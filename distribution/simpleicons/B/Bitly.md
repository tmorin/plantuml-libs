# Bitly


```text
simpleicons/B/Bitly
```

```text
include('simpleicons/B/Bitly')
```



| Illustration | Bitly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bitly.png) | ![illustration for Bitly](../../simpleicons/B/Bitly.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BitlyXs>`
- `<$BitlySm>`
- `<$BitlyMd>`
- `<$BitlyLg>`





## Bitly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bitly
include('simpleicons/B/Bitly')

' renders the element
Bitly('Bitly', 'Bitly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bitly
include('simpleicons/B/Bitly')

' renders the element
Bitly('Bitly', 'Bitly', 'an optional tech label', 'an optional description')
@enduml
```

