# Acm


```text
simpleicons-5/A/Acm
```

```text
include('simpleicons-5/A/Acm')
```



| Illustration | Acm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Acm.png) | ![illustration for Acm](../../simpleicons-5/A/Acm.Local.png) |




## Acm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Acm
include('simpleicons-5/A/Acm')

' renders the element
Acm('Acm', 'Acm', 'an optional tech label')
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

' loads the Item which embeds the element Acm
include('simpleicons-5/A/Acm')

' renders the element
Acm('Acm', 'Acm', 'an optional tech label')
@enduml
```

