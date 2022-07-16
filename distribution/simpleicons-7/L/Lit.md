# Lit


```text
simpleicons-7/L/Lit
```

```text
include('simpleicons-7/L/Lit')
```



| Illustration | Lit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lit.png) | ![illustration for Lit](../../simpleicons-7/L/Lit.Local.png) |




## Lit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lit
include('simpleicons-7/L/Lit')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lit
include('simpleicons-7/L/Lit')

' renders the element
Lit('Lit', 'Lit', 'an optional tech label')
@enduml
```

