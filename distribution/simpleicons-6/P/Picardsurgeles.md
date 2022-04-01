# Picardsurgeles


```text
simpleicons-6/P/Picardsurgeles
```

```text
include('simpleicons-6/P/Picardsurgeles')
```



| Illustration | Picardsurgeles |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Picardsurgeles.png) | ![illustration for Picardsurgeles](../../simpleicons-6/P/Picardsurgeles.Local.png) |




## Picardsurgeles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Picardsurgeles
include('simpleicons-6/P/Picardsurgeles')

' renders the element
Picardsurgeles('Picardsurgeles', 'Picardsurgeles', 'an optional tech label')
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

' loads the Item which embeds the element Picardsurgeles
include('simpleicons-6/P/Picardsurgeles')

' renders the element
Picardsurgeles('Picardsurgeles', 'Picardsurgeles', 'an optional tech label')
@enduml
```

