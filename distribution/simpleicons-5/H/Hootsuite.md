# Hootsuite


```text
simpleicons-5/H/Hootsuite
```

```text
include('simpleicons-5/H/Hootsuite')
```



| Illustration | Hootsuite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hootsuite.png) | ![illustration for Hootsuite](../../simpleicons-5/H/Hootsuite.Local.png) |




## Hootsuite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hootsuite
include('simpleicons-5/H/Hootsuite')

' renders the element
Hootsuite('Hootsuite', 'Hootsuite', 'an optional tech label')
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

' loads the Item which embeds the element Hootsuite
include('simpleicons-5/H/Hootsuite')

' renders the element
Hootsuite('Hootsuite', 'Hootsuite', 'an optional tech label')
@enduml
```

