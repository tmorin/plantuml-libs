# Teespring


```text
simpleicons-5/T/Teespring
```

```text
include('simpleicons-5/T/Teespring')
```



| Illustration | Teespring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Teespring.png) | ![illustration for Teespring](../../simpleicons-5/T/Teespring.Local.png) |




## Teespring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Teespring
include('simpleicons-5/T/Teespring')

' renders the element
Teespring('Teespring', 'Teespring', 'an optional tech label')
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

' loads the Item which embeds the element Teespring
include('simpleicons-5/T/Teespring')

' renders the element
Teespring('Teespring', 'Teespring', 'an optional tech label')
@enduml
```

