# Meteor


```text
fontawesome-5/Solid/Meteor
```

```text
include('fontawesome-5/Solid/Meteor')
```



| Illustration | Meteor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Meteor.png) | ![illustration for Meteor](../../fontawesome-5/Solid/Meteor.Local.png) |




## Meteor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Meteor
include('fontawesome-5/Solid/Meteor')

' renders the element
Meteor('Meteor', 'Meteor', 'an optional tech label')
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

' loads the Item which embeds the element Meteor
include('fontawesome-5/Solid/Meteor')

' renders the element
Meteor('Meteor', 'Meteor', 'an optional tech label')
@enduml
```

