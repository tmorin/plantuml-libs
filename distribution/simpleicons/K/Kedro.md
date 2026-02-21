# Kedro


```text
simpleicons/K/Kedro
```

```text
include('simpleicons/K/Kedro')
```



| Illustration | Kedro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kedro.png) | ![illustration for Kedro](../../simpleicons/K/Kedro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KedroXs>`
- `<$KedroSm>`
- `<$KedroMd>`
- `<$KedroLg>`





## Kedro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kedro
include('simpleicons/K/Kedro')

' renders the element
Kedro('Kedro', 'Kedro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kedro
include('simpleicons/K/Kedro')

' renders the element
Kedro('Kedro', 'Kedro', 'an optional tech label', 'an optional description')
@enduml
```

