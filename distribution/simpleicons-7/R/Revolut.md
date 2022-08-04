# Revolut


```text
simpleicons-7/R/Revolut
```

```text
include('simpleicons-7/R/Revolut')
```



| Illustration | Revolut |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Revolut.png) | ![illustration for Revolut](../../simpleicons-7/R/Revolut.Local.png) |




## Revolut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Revolut
include('simpleicons-7/R/Revolut')

' renders the element
Revolut('Revolut', 'Revolut', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Revolut
include('simpleicons-7/R/Revolut')

' renders the element
Revolut('Revolut', 'Revolut', 'an optional tech label', 'an optional description')
@enduml
```

