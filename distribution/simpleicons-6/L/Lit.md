# Lit


```text
simpleicons-6/L/Lit
```

```text
include('simpleicons-6/L/Lit')
```



| Illustration | Lit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lit.png) | ![illustration for Lit](../../simpleicons-6/L/Lit.Local.png) |




## Lit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lit
include('simpleicons-6/L/Lit')

' renders the element
Lit('Lit', 'Lit', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lit
include('simpleicons-6/L/Lit')

' renders the element
Lit('Lit', 'Lit', 'an optional tech label')
@enduml
```

