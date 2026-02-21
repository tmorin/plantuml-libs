# Gleam


```text
simpleicons/G/Gleam
```

```text
include('simpleicons/G/Gleam')
```



| Illustration | Gleam |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gleam.png) | ![illustration for Gleam](../../simpleicons/G/Gleam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GleamXs>`
- `<$GleamSm>`
- `<$GleamMd>`
- `<$GleamLg>`





## Gleam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gleam
include('simpleicons/G/Gleam')

' renders the element
Gleam('Gleam', 'Gleam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gleam
include('simpleicons/G/Gleam')

' renders the element
Gleam('Gleam', 'Gleam', 'an optional tech label', 'an optional description')
@enduml
```

