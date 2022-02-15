# Reasonstudios


```text
simpleicons-6/R/Reasonstudios
```

```text
include('simpleicons-6/R/Reasonstudios')
```



| Illustration | Reasonstudios |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Reasonstudios.png) | ![illustration for Reasonstudios](../../simpleicons-6/R/Reasonstudios.Local.png) |




## Reasonstudios

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Reasonstudios
include('simpleicons-6/R/Reasonstudios')

' renders the element
Reasonstudios('Reasonstudios', 'Reasonstudios', 'an optional tech label')
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

' loads the Item which embeds the element Reasonstudios
include('simpleicons-6/R/Reasonstudios')

' renders the element
Reasonstudios('Reasonstudios', 'Reasonstudios', 'an optional tech label')
@enduml
```

