# Vowpalwabbit


```text
simpleicons-7/V/Vowpalwabbit
```

```text
include('simpleicons-7/V/Vowpalwabbit')
```



| Illustration | Vowpalwabbit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vowpalwabbit.png) | ![illustration for Vowpalwabbit](../../simpleicons-7/V/Vowpalwabbit.Local.png) |




## Vowpalwabbit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vowpalwabbit
include('simpleicons-7/V/Vowpalwabbit')

' renders the element
Vowpalwabbit('Vowpalwabbit', 'Vowpalwabbit', 'an optional tech label')
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

' loads the Item which embeds the element Vowpalwabbit
include('simpleicons-7/V/Vowpalwabbit')

' renders the element
Vowpalwabbit('Vowpalwabbit', 'Vowpalwabbit', 'an optional tech label')
@enduml
```

