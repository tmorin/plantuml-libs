# Percy


```text
simpleicons-14/P/Percy
```

```text
include('simpleicons-14/P/Percy')
```



| Illustration | Percy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Percy.png) | ![illustration for Percy](../../simpleicons-14/P/Percy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PercyXs>`
- `<$PercySm>`
- `<$PercyMd>`
- `<$PercyLg>`





## Percy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Percy
include('simpleicons-14/P/Percy')

' renders the element
Percy('Percy', 'Percy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Percy
include('simpleicons-14/P/Percy')

' renders the element
Percy('Percy', 'Percy', 'an optional tech label', 'an optional description')
@enduml
```

