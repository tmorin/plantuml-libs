# Latex


```text
simpleicons-5/L/Latex
```

```text
include('simpleicons-5/L/Latex')
```



| Illustration | Latex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Latex.png) | ![illustration for Latex](../../simpleicons-5/L/Latex.Local.png) |




## Latex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Latex
include('simpleicons-5/L/Latex')

' renders the element
Latex('Latex', 'Latex', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Latex
include('simpleicons-5/L/Latex')

' renders the element
Latex('Latex', 'Latex', 'an optional tech label')
@enduml
```

