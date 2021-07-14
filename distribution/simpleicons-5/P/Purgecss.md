# Purgecss


```text
simpleicons-5/P/Purgecss
```

```text
include('simpleicons-5/P/Purgecss')
```



| Illustration | Purgecss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Purgecss.png) | ![illustration for Purgecss](../../simpleicons-5/P/Purgecss.Local.png) |




## Purgecss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Purgecss
include('simpleicons-5/P/Purgecss')

' renders the element
Purgecss('Purgecss', 'Purgecss', 'an optional tech label')
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

' loads the Item which embeds the element Purgecss
include('simpleicons-5/P/Purgecss')

' renders the element
Purgecss('Purgecss', 'Purgecss', 'an optional tech label')
@enduml
```

