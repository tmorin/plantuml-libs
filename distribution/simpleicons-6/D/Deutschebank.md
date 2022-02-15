# Deutschebank


```text
simpleicons-6/D/Deutschebank
```

```text
include('simpleicons-6/D/Deutschebank')
```



| Illustration | Deutschebank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Deutschebank.png) | ![illustration for Deutschebank](../../simpleicons-6/D/Deutschebank.Local.png) |




## Deutschebank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Deutschebank
include('simpleicons-6/D/Deutschebank')

' renders the element
Deutschebank('Deutschebank', 'Deutschebank', 'an optional tech label')
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

' loads the Item which embeds the element Deutschebank
include('simpleicons-6/D/Deutschebank')

' renders the element
Deutschebank('Deutschebank', 'Deutschebank', 'an optional tech label')
@enduml
```

