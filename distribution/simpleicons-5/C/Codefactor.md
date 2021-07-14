# Codefactor


```text
simpleicons-5/C/Codefactor
```

```text
include('simpleicons-5/C/Codefactor')
```



| Illustration | Codefactor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codefactor.png) | ![illustration for Codefactor](../../simpleicons-5/C/Codefactor.Local.png) |




## Codefactor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons-5/C/Codefactor')

' renders the element
Codefactor('Codefactor', 'Codefactor', 'an optional tech label')
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

' loads the Item which embeds the element Codefactor
include('simpleicons-5/C/Codefactor')

' renders the element
Codefactor('Codefactor', 'Codefactor', 'an optional tech label')
@enduml
```

