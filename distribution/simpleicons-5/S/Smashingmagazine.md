# Smashingmagazine


```text
simpleicons-5/S/Smashingmagazine
```

```text
include('simpleicons-5/S/Smashingmagazine')
```



| Illustration | Smashingmagazine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Smashingmagazine.png) | ![illustration for Smashingmagazine](../../simpleicons-5/S/Smashingmagazine.Local.png) |




## Smashingmagazine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Smashingmagazine
include('simpleicons-5/S/Smashingmagazine')

' renders the element
Smashingmagazine('Smashingmagazine', 'Smashingmagazine', 'an optional tech label')
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

' loads the Item which embeds the element Smashingmagazine
include('simpleicons-5/S/Smashingmagazine')

' renders the element
Smashingmagazine('Smashingmagazine', 'Smashingmagazine', 'an optional tech label')
@enduml
```

