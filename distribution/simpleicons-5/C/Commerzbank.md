# Commerzbank


```text
simpleicons-5/C/Commerzbank
```

```text
include('simpleicons-5/C/Commerzbank')
```



| Illustration | Commerzbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Commerzbank.png) | ![illustration for Commerzbank](../../simpleicons-5/C/Commerzbank.Local.png) |




## Commerzbank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Commerzbank
include('simpleicons-5/C/Commerzbank')

' renders the element
Commerzbank('Commerzbank', 'Commerzbank', 'an optional tech label')
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

' loads the Item which embeds the element Commerzbank
include('simpleicons-5/C/Commerzbank')

' renders the element
Commerzbank('Commerzbank', 'Commerzbank', 'an optional tech label')
@enduml
```

