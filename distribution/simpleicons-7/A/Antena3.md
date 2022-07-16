# Antena3


```text
simpleicons-7/A/Antena3
```

```text
include('simpleicons-7/A/Antena3')
```



| Illustration | Antena3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Antena3.png) | ![illustration for Antena3](../../simpleicons-7/A/Antena3.Local.png) |




## Antena3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Antena3
include('simpleicons-7/A/Antena3')

' renders the element
Antena3('Antena3', 'Antena3', 'an optional tech label')
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

' loads the Item which embeds the element Antena3
include('simpleicons-7/A/Antena3')

' renders the element
Antena3('Antena3', 'Antena3', 'an optional tech label')
@enduml
```

