# Listenhub


```text
simpleicons/L/Listenhub
```

```text
include('simpleicons/L/Listenhub')
```



| Illustration | Listenhub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Listenhub.png) | ![illustration for Listenhub](../../simpleicons/L/Listenhub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ListenhubXs>`
- `<$ListenhubSm>`
- `<$ListenhubMd>`
- `<$ListenhubLg>`





## Listenhub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Listenhub
include('simpleicons/L/Listenhub')

' renders the element
Listenhub('Listenhub', 'Listenhub', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Listenhub
include('simpleicons/L/Listenhub')

' renders the element
Listenhub('Listenhub', 'Listenhub', 'an optional tech label', 'an optional description')
@enduml
```

