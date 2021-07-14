# Alitalia


```text
simpleicons-5/A/Alitalia
```

```text
include('simpleicons-5/A/Alitalia')
```



| Illustration | Alitalia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Alitalia.png) | ![illustration for Alitalia](../../simpleicons-5/A/Alitalia.Local.png) |




## Alitalia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Alitalia
include('simpleicons-5/A/Alitalia')

' renders the element
Alitalia('Alitalia', 'Alitalia', 'an optional tech label')
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

' loads the Item which embeds the element Alitalia
include('simpleicons-5/A/Alitalia')

' renders the element
Alitalia('Alitalia', 'Alitalia', 'an optional tech label')
@enduml
```

