# Acclaim


```text
simpleicons-6/A/Acclaim
```

```text
include('simpleicons-6/A/Acclaim')
```



| Illustration | Acclaim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Acclaim.png) | ![illustration for Acclaim](../../simpleicons-6/A/Acclaim.Local.png) |




## Acclaim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Acclaim
include('simpleicons-6/A/Acclaim')

' renders the element
Acclaim('Acclaim', 'Acclaim', 'an optional tech label')
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

' loads the Item which embeds the element Acclaim
include('simpleicons-6/A/Acclaim')

' renders the element
Acclaim('Acclaim', 'Acclaim', 'an optional tech label')
@enduml
```

