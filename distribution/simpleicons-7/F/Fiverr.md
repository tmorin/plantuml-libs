# Fiverr


```text
simpleicons-7/F/Fiverr
```

```text
include('simpleicons-7/F/Fiverr')
```



| Illustration | Fiverr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fiverr.png) | ![illustration for Fiverr](../../simpleicons-7/F/Fiverr.Local.png) |




## Fiverr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fiverr
include('simpleicons-7/F/Fiverr')

' renders the element
Fiverr('Fiverr', 'Fiverr', 'an optional tech label')
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

' loads the Item which embeds the element Fiverr
include('simpleicons-7/F/Fiverr')

' renders the element
Fiverr('Fiverr', 'Fiverr', 'an optional tech label')
@enduml
```

