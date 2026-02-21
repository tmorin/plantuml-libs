# Pretzel


```text
simpleicons/P/Pretzel
```

```text
include('simpleicons/P/Pretzel')
```



| Illustration | Pretzel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pretzel.png) | ![illustration for Pretzel](../../simpleicons/P/Pretzel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PretzelXs>`
- `<$PretzelSm>`
- `<$PretzelMd>`
- `<$PretzelLg>`





## Pretzel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pretzel
include('simpleicons/P/Pretzel')

' renders the element
Pretzel('Pretzel', 'Pretzel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pretzel
include('simpleicons/P/Pretzel')

' renders the element
Pretzel('Pretzel', 'Pretzel', 'an optional tech label', 'an optional description')
@enduml
```

