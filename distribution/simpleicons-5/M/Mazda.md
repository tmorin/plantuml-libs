# Mazda


```text
simpleicons-5/M/Mazda
```

```text
include('simpleicons-5/M/Mazda')
```



| Illustration | Mazda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mazda.png) | ![illustration for Mazda](../../simpleicons-5/M/Mazda.Local.png) |




## Mazda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mazda
include('simpleicons-5/M/Mazda')

' renders the element
Mazda('Mazda', 'Mazda', 'an optional tech label')
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

' loads the Item which embeds the element Mazda
include('simpleicons-5/M/Mazda')

' renders the element
Mazda('Mazda', 'Mazda', 'an optional tech label')
@enduml
```

