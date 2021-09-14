# Reebok


```text
simpleicons-5/R/Reebok
```

```text
include('simpleicons-5/R/Reebok')
```



| Illustration | Reebok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reebok.png) | ![illustration for Reebok](../../simpleicons-5/R/Reebok.Local.png) |




## Reebok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reebok
include('simpleicons-5/R/Reebok')

' renders the element
Reebok('Reebok', 'Reebok', 'an optional tech label')
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

' loads the Item which embeds the element Reebok
include('simpleicons-5/R/Reebok')

' renders the element
Reebok('Reebok', 'Reebok', 'an optional tech label')
@enduml
```
