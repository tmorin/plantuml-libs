# Zettlr


```text
simpleicons-7/Z/Zettlr
```

```text
include('simpleicons-7/Z/Zettlr')
```



| Illustration | Zettlr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zettlr.png) | ![illustration for Zettlr](../../simpleicons-7/Z/Zettlr.Local.png) |




## Zettlr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zettlr
include('simpleicons-7/Z/Zettlr')

' renders the element
Zettlr('Zettlr', 'Zettlr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zettlr
include('simpleicons-7/Z/Zettlr')

' renders the element
Zettlr('Zettlr', 'Zettlr', 'an optional tech label', 'an optional description')
@enduml
```

