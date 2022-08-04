# Paintbrush


```text
fontawesome-6/Solid/Paintbrush
```

```text
include('fontawesome-6/Solid/Paintbrush')
```



| Illustration | Paintbrush |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Paintbrush.png) | ![illustration for Paintbrush](../../fontawesome-6/Solid/Paintbrush.Local.png) |




## Paintbrush

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Paintbrush
include('fontawesome-6/Solid/Paintbrush')

' renders the element
Paintbrush('Paintbrush', 'Paintbrush', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paintbrush
include('fontawesome-6/Solid/Paintbrush')

' renders the element
Paintbrush('Paintbrush', 'Paintbrush', 'an optional tech label', 'an optional description')
@enduml
```

