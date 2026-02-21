# Dataiku


```text
simpleicons/D/Dataiku
```

```text
include('simpleicons/D/Dataiku')
```



| Illustration | Dataiku |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dataiku.png) | ![illustration for Dataiku](../../simpleicons/D/Dataiku.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DataikuXs>`
- `<$DataikuSm>`
- `<$DataikuMd>`
- `<$DataikuLg>`





## Dataiku

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dataiku
include('simpleicons/D/Dataiku')

' renders the element
Dataiku('Dataiku', 'Dataiku', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dataiku
include('simpleicons/D/Dataiku')

' renders the element
Dataiku('Dataiku', 'Dataiku', 'an optional tech label', 'an optional description')
@enduml
```

