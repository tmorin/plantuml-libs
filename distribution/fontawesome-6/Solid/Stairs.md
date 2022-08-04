# Stairs


```text
fontawesome-6/Solid/Stairs
```

```text
include('fontawesome-6/Solid/Stairs')
```



| Illustration | Stairs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Stairs.png) | ![illustration for Stairs](../../fontawesome-6/Solid/Stairs.Local.png) |




## Stairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stairs
include('fontawesome-6/Solid/Stairs')

' renders the element
Stairs('Stairs', 'Stairs', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Stairs
include('fontawesome-6/Solid/Stairs')

' renders the element
Stairs('Stairs', 'Stairs', 'an optional tech label', 'an optional description')
@enduml
```

