# Pagekit


```text
simpleicons-8/P/Pagekit
```

```text
include('simpleicons-8/P/Pagekit')
```



| Illustration | Pagekit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pagekit.png) | ![illustration for Pagekit](../../simpleicons-8/P/Pagekit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PagekitXs>`
- `<$PagekitSm>`
- `<$PagekitMd>`
- `<$PagekitLg>`





## Pagekit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pagekit
include('simpleicons-8/P/Pagekit')

' renders the element
Pagekit('Pagekit', 'Pagekit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pagekit
include('simpleicons-8/P/Pagekit')

' renders the element
Pagekit('Pagekit', 'Pagekit', 'an optional tech label', 'an optional description')
@enduml
```

