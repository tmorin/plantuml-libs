# Rubocop


```text
simpleicons-7/R/Rubocop
```

```text
include('simpleicons-7/R/Rubocop')
```



| Illustration | Rubocop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rubocop.png) | ![illustration for Rubocop](../../simpleicons-7/R/Rubocop.Local.png) |




## Rubocop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rubocop
include('simpleicons-7/R/Rubocop')

' renders the element
Rubocop('Rubocop', 'Rubocop', 'an optional tech label')
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

' loads the Item which embeds the element Rubocop
include('simpleicons-7/R/Rubocop')

' renders the element
Rubocop('Rubocop', 'Rubocop', 'an optional tech label')
@enduml
```

