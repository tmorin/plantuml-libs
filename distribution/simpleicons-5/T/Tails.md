# Tails


```text
simpleicons-5/T/Tails
```

```text
include('simpleicons-5/T/Tails')
```



| Illustration | Tails |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tails.png) | ![illustration for Tails](../../simpleicons-5/T/Tails.Local.png) |




## Tails

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tails
include('simpleicons-5/T/Tails')

' renders the element
Tails('Tails', 'Tails', 'an optional tech label')
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

' loads the Item which embeds the element Tails
include('simpleicons-5/T/Tails')

' renders the element
Tails('Tails', 'Tails', 'an optional tech label')
@enduml
```

