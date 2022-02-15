# Sefaria


```text
simpleicons-6/S/Sefaria
```

```text
include('simpleicons-6/S/Sefaria')
```



| Illustration | Sefaria |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sefaria.png) | ![illustration for Sefaria](../../simpleicons-6/S/Sefaria.Local.png) |




## Sefaria

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sefaria
include('simpleicons-6/S/Sefaria')

' renders the element
Sefaria('Sefaria', 'Sefaria', 'an optional tech label')
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

' loads the Item which embeds the element Sefaria
include('simpleicons-6/S/Sefaria')

' renders the element
Sefaria('Sefaria', 'Sefaria', 'an optional tech label')
@enduml
```

