# Codefactor


```text
simpleicons-6/C/Codefactor
```

```text
include('simpleicons-6/C/Codefactor')
```



| Illustration | Codefactor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Codefactor.png) | ![illustration for Codefactor](../../simpleicons-6/C/Codefactor.Local.png) |




## Codefactor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons-6/C/Codefactor')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Codefactor
include('simpleicons-6/C/Codefactor')

' renders the element
Codefactor('Codefactor', 'Codefactor', 'an optional tech label')
@enduml
```

