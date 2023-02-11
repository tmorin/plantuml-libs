# Teespring


```text
simpleicons-8/T/Teespring
```

```text
include('simpleicons-8/T/Teespring')
```



| Illustration | Teespring |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Teespring.png) | ![illustration for Teespring](../../simpleicons-8/T/Teespring.Local.png) |




## Teespring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Teespring
include('simpleicons-8/T/Teespring')

' renders the element
Teespring('Teespring', 'Teespring', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Teespring
include('simpleicons-8/T/Teespring')

' renders the element
Teespring('Teespring', 'Teespring', 'an optional tech label', 'an optional description')
@enduml
```

