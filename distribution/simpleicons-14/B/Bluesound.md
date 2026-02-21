# Bluesound


```text
simpleicons-14/B/Bluesound
```

```text
include('simpleicons-14/B/Bluesound')
```



| Illustration | Bluesound |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bluesound.png) | ![illustration for Bluesound](../../simpleicons-14/B/Bluesound.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BluesoundXs>`
- `<$BluesoundSm>`
- `<$BluesoundMd>`
- `<$BluesoundLg>`





## Bluesound

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bluesound
include('simpleicons-14/B/Bluesound')

' renders the element
Bluesound('Bluesound', 'Bluesound', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bluesound
include('simpleicons-14/B/Bluesound')

' renders the element
Bluesound('Bluesound', 'Bluesound', 'an optional tech label', 'an optional description')
@enduml
```

