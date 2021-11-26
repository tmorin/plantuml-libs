# Ember


```text
fontawesome-5/Brands/Ember
```

```text
include('fontawesome-5/Brands/Ember')
```



| Illustration | Ember |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Ember.png) | ![illustration for Ember](../../fontawesome-5/Brands/Ember.Local.png) |




## Ember

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ember
include('fontawesome-5/Brands/Ember')

' renders the element
Ember('Ember', 'Ember', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ember
include('fontawesome-5/Brands/Ember')

' renders the element
Ember('Ember', 'Ember', 'an optional tech label')
@enduml
```

