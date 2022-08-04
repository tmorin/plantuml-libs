# Commerzbank


```text
simpleicons-7/C/Commerzbank
```

```text
include('simpleicons-7/C/Commerzbank')
```



| Illustration | Commerzbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Commerzbank.png) | ![illustration for Commerzbank](../../simpleicons-7/C/Commerzbank.Local.png) |




## Commerzbank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Commerzbank
include('simpleicons-7/C/Commerzbank')

' renders the element
Commerzbank('Commerzbank', 'Commerzbank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Commerzbank
include('simpleicons-7/C/Commerzbank')

' renders the element
Commerzbank('Commerzbank', 'Commerzbank', 'an optional tech label', 'an optional description')
@enduml
```

