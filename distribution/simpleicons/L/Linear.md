# Linear


```text
simpleicons/L/Linear
```

```text
include('simpleicons/L/Linear')
```



| Illustration | Linear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Linear.png) | ![illustration for Linear](../../simpleicons/L/Linear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinearXs>`
- `<$LinearSm>`
- `<$LinearMd>`
- `<$LinearLg>`





## Linear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Linear
include('simpleicons/L/Linear')

' renders the element
Linear('Linear', 'Linear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Linear
include('simpleicons/L/Linear')

' renders the element
Linear('Linear', 'Linear', 'an optional tech label', 'an optional description')
@enduml
```

