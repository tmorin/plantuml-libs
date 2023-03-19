# Assemblyscript


```text
simpleicons-8/A/Assemblyscript
```

```text
include('simpleicons-8/A/Assemblyscript')
```



| Illustration | Assemblyscript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Assemblyscript.png) | ![illustration for Assemblyscript](../../simpleicons-8/A/Assemblyscript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AssemblyscriptXs>`
- `<$AssemblyscriptSm>`
- `<$AssemblyscriptMd>`
- `<$AssemblyscriptLg>`





## Assemblyscript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Assemblyscript
include('simpleicons-8/A/Assemblyscript')

' renders the element
Assemblyscript('Assemblyscript', 'Assemblyscript', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Assemblyscript
include('simpleicons-8/A/Assemblyscript')

' renders the element
Assemblyscript('Assemblyscript', 'Assemblyscript', 'an optional tech label', 'an optional description')
@enduml
```

