# Ruff


```text
simpleicons-14/R/Ruff
```

```text
include('simpleicons-14/R/Ruff')
```



| Illustration | Ruff |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Ruff.png) | ![illustration for Ruff](../../simpleicons-14/R/Ruff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RuffXs>`
- `<$RuffSm>`
- `<$RuffMd>`
- `<$RuffLg>`





## Ruff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ruff
include('simpleicons-14/R/Ruff')

' renders the element
Ruff('Ruff', 'Ruff', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ruff
include('simpleicons-14/R/Ruff')

' renders the element
Ruff('Ruff', 'Ruff', 'an optional tech label', 'an optional description')
@enduml
```

