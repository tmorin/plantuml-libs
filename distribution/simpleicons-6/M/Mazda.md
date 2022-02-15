# Mazda


```text
simpleicons-6/M/Mazda
```

```text
include('simpleicons-6/M/Mazda')
```



| Illustration | Mazda |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mazda.png) | ![illustration for Mazda](../../simpleicons-6/M/Mazda.Local.png) |




## Mazda

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mazda
include('simpleicons-6/M/Mazda')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mazda
include('simpleicons-6/M/Mazda')

' renders the element
Mazda('Mazda', 'Mazda', 'an optional tech label')
@enduml
```

