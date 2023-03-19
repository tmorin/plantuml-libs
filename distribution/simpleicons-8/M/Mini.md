# Mini


```text
simpleicons-8/M/Mini
```

```text
include('simpleicons-8/M/Mini')
```



| Illustration | Mini |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mini.png) | ![illustration for Mini](../../simpleicons-8/M/Mini.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MiniXs>`
- `<$MiniSm>`
- `<$MiniMd>`
- `<$MiniLg>`





## Mini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mini
include('simpleicons-8/M/Mini')

' renders the element
Mini('Mini', 'Mini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mini
include('simpleicons-8/M/Mini')

' renders the element
Mini('Mini', 'Mini', 'an optional tech label', 'an optional description')
@enduml
```

