# Ember


```text
fontawesome/Brands/Ember
```

```text
include('fontawesome/Brands/Ember')
```



| Illustration | Ember |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Ember.png) | ![illustration for Ember](../../fontawesome/Brands/Ember.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmberXs>`
- `<$EmberSm>`
- `<$EmberMd>`
- `<$EmberLg>`





## Ember

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ember
include('fontawesome/Brands/Ember')

' renders the element
Ember('Ember', 'Ember', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ember
include('fontawesome/Brands/Ember')

' renders the element
Ember('Ember', 'Ember', 'an optional tech label', 'an optional description')
@enduml
```

