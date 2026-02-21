# Adaway


```text
simpleicons-14/A/Adaway
```

```text
include('simpleicons-14/A/Adaway')
```



| Illustration | Adaway |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Adaway.png) | ![illustration for Adaway](../../simpleicons-14/A/Adaway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AdawayXs>`
- `<$AdawaySm>`
- `<$AdawayMd>`
- `<$AdawayLg>`





## Adaway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Adaway
include('simpleicons-14/A/Adaway')

' renders the element
Adaway('Adaway', 'Adaway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Adaway
include('simpleicons-14/A/Adaway')

' renders the element
Adaway('Adaway', 'Adaway', 'an optional tech label', 'an optional description')
@enduml
```

