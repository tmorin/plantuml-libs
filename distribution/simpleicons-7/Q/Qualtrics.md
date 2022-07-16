# Qualtrics


```text
simpleicons-7/Q/Qualtrics
```

```text
include('simpleicons-7/Q/Qualtrics')
```



| Illustration | Qualtrics |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Q/Qualtrics.png) | ![illustration for Qualtrics](../../simpleicons-7/Q/Qualtrics.Local.png) |




## Qualtrics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Qualtrics
include('simpleicons-7/Q/Qualtrics')

' renders the element
Qualtrics('Qualtrics', 'Qualtrics', 'an optional tech label')
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

' loads the Item which embeds the element Qualtrics
include('simpleicons-7/Q/Qualtrics')

' renders the element
Qualtrics('Qualtrics', 'Qualtrics', 'an optional tech label')
@enduml
```

