# Purgecss


```text
simpleicons/P/Purgecss
```

```text
include('simpleicons/P/Purgecss')
```



| Illustration | Purgecss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Purgecss.png) | ![illustration for Purgecss](../../simpleicons/P/Purgecss.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PurgecssXs>`
- `<$PurgecssSm>`
- `<$PurgecssMd>`
- `<$PurgecssLg>`





## Purgecss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Purgecss
include('simpleicons/P/Purgecss')

' renders the element
Purgecss('Purgecss', 'Purgecss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Purgecss
include('simpleicons/P/Purgecss')

' renders the element
Purgecss('Purgecss', 'Purgecss', 'an optional tech label', 'an optional description')
@enduml
```

