# Maytag


```text
simpleicons-14/M/Maytag
```

```text
include('simpleicons-14/M/Maytag')
```



| Illustration | Maytag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Maytag.png) | ![illustration for Maytag](../../simpleicons-14/M/Maytag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaytagXs>`
- `<$MaytagSm>`
- `<$MaytagMd>`
- `<$MaytagLg>`





## Maytag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Maytag
include('simpleicons-14/M/Maytag')

' renders the element
Maytag('Maytag', 'Maytag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maytag
include('simpleicons-14/M/Maytag')

' renders the element
Maytag('Maytag', 'Maytag', 'an optional tech label', 'an optional description')
@enduml
```

