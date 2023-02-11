# Boost


```text
simpleicons-8/B/Boost
```

```text
include('simpleicons-8/B/Boost')
```



| Illustration | Boost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Boost.png) | ![illustration for Boost](../../simpleicons-8/B/Boost.Local.png) |




## Boost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Boost
include('simpleicons-8/B/Boost')

' renders the element
Boost('Boost', 'Boost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Boost
include('simpleicons-8/B/Boost')

' renders the element
Boost('Boost', 'Boost', 'an optional tech label', 'an optional description')
@enduml
```

