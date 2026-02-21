# Toml


```text
simpleicons/T/Toml
```

```text
include('simpleicons/T/Toml')
```



| Illustration | Toml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Toml.png) | ![illustration for Toml](../../simpleicons/T/Toml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TomlXs>`
- `<$TomlSm>`
- `<$TomlMd>`
- `<$TomlLg>`





## Toml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Toml
include('simpleicons/T/Toml')

' renders the element
Toml('Toml', 'Toml', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Toml
include('simpleicons/T/Toml')

' renders the element
Toml('Toml', 'Toml', 'an optional tech label', 'an optional description')
@enduml
```

