# Linear


```text
simpleicons-7/L/Linear
```

```text
include('simpleicons-7/L/Linear')
```



| Illustration | Linear |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Linear.png) | ![illustration for Linear](../../simpleicons-7/L/Linear.Local.png) |




## Linear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linear
include('simpleicons-7/L/Linear')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Linear
include('simpleicons-7/L/Linear')

' renders the element
Linear('Linear', 'Linear', 'an optional tech label', 'an optional description')
@enduml
```

