# Looker


```text
simpleicons-14/L/Looker
```

```text
include('simpleicons-14/L/Looker')
```



| Illustration | Looker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Looker.png) | ![illustration for Looker](../../simpleicons-14/L/Looker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LookerXs>`
- `<$LookerSm>`
- `<$LookerMd>`
- `<$LookerLg>`





## Looker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Looker
include('simpleicons-14/L/Looker')

' renders the element
Looker('Looker', 'Looker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Looker
include('simpleicons-14/L/Looker')

' renders the element
Looker('Looker', 'Looker', 'an optional tech label', 'an optional description')
@enduml
```

