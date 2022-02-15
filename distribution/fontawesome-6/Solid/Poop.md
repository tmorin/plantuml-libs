# Poop


```text
fontawesome-6/Solid/Poop
```

```text
include('fontawesome-6/Solid/Poop')
```



| Illustration | Poop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Poop.png) | ![illustration for Poop](../../fontawesome-6/Solid/Poop.Local.png) |




## Poop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Poop
include('fontawesome-6/Solid/Poop')

' renders the element
Poop('Poop', 'Poop', 'an optional tech label')
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

' loads the Item which embeds the element Poop
include('fontawesome-6/Solid/Poop')

' renders the element
Poop('Poop', 'Poop', 'an optional tech label')
@enduml
```

