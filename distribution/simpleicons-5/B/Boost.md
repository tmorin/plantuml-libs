# Boost


```text
simpleicons-5/B/Boost
```

```text
include('simpleicons-5/B/Boost')
```



| Illustration | Boost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Boost.png) | ![illustration for Boost](../../simpleicons-5/B/Boost.Local.png) |




## Boost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Boost
include('simpleicons-5/B/Boost')

' renders the element
Boost('Boost', 'Boost', 'an optional tech label')
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

' loads the Item which embeds the element Boost
include('simpleicons-5/B/Boost')

' renders the element
Boost('Boost', 'Boost', 'an optional tech label')
@enduml
```

