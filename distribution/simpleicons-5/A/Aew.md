# Aew


```text
simpleicons-5/A/Aew
```

```text
include('simpleicons-5/A/Aew')
```



| Illustration | Aew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Aew.png) | ![illustration for Aew](../../simpleicons-5/A/Aew.Local.png) |




## Aew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Aew
include('simpleicons-5/A/Aew')

' renders the element
Aew('Aew', 'Aew', 'an optional tech label')
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

' loads the Item which embeds the element Aew
include('simpleicons-5/A/Aew')

' renders the element
Aew('Aew', 'Aew', 'an optional tech label')
@enduml
```

