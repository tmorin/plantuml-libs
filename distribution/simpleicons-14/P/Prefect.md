# Prefect


```text
simpleicons-14/P/Prefect
```

```text
include('simpleicons-14/P/Prefect')
```



| Illustration | Prefect |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Prefect.png) | ![illustration for Prefect](../../simpleicons-14/P/Prefect.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrefectXs>`
- `<$PrefectSm>`
- `<$PrefectMd>`
- `<$PrefectLg>`





## Prefect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Prefect
include('simpleicons-14/P/Prefect')

' renders the element
Prefect('Prefect', 'Prefect', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prefect
include('simpleicons-14/P/Prefect')

' renders the element
Prefect('Prefect', 'Prefect', 'an optional tech label', 'an optional description')
@enduml
```

