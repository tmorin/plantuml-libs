# Nhl


```text
simpleicons/N/Nhl
```

```text
include('simpleicons/N/Nhl')
```



| Illustration | Nhl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nhl.png) | ![illustration for Nhl](../../simpleicons/N/Nhl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NhlXs>`
- `<$NhlSm>`
- `<$NhlMd>`
- `<$NhlLg>`





## Nhl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nhl
include('simpleicons/N/Nhl')

' renders the element
Nhl('Nhl', 'Nhl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nhl
include('simpleicons/N/Nhl')

' renders the element
Nhl('Nhl', 'Nhl', 'an optional tech label', 'an optional description')
@enduml
```

