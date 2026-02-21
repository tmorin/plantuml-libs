# Astonmartin


```text
simpleicons/A/Astonmartin
```

```text
include('simpleicons/A/Astonmartin')
```



| Illustration | Astonmartin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Astonmartin.png) | ![illustration for Astonmartin](../../simpleicons/A/Astonmartin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AstonmartinXs>`
- `<$AstonmartinSm>`
- `<$AstonmartinMd>`
- `<$AstonmartinLg>`





## Astonmartin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Astonmartin
include('simpleicons/A/Astonmartin')

' renders the element
Astonmartin('Astonmartin', 'Astonmartin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Astonmartin
include('simpleicons/A/Astonmartin')

' renders the element
Astonmartin('Astonmartin', 'Astonmartin', 'an optional tech label', 'an optional description')
@enduml
```

