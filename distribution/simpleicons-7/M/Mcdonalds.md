# Mcdonalds


```text
simpleicons-7/M/Mcdonalds
```

```text
include('simpleicons-7/M/Mcdonalds')
```



| Illustration | Mcdonalds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mcdonalds.png) | ![illustration for Mcdonalds](../../simpleicons-7/M/Mcdonalds.Local.png) |




## Mcdonalds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mcdonalds
include('simpleicons-7/M/Mcdonalds')

' renders the element
Mcdonalds('Mcdonalds', 'Mcdonalds', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mcdonalds
include('simpleicons-7/M/Mcdonalds')

' renders the element
Mcdonalds('Mcdonalds', 'Mcdonalds', 'an optional tech label', 'an optional description')
@enduml
```

