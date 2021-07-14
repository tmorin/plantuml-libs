# Meteor


```text
simpleicons-5/M/Meteor
```

```text
include('simpleicons-5/M/Meteor')
```



| Illustration | Meteor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Meteor.png) | ![illustration for Meteor](../../simpleicons-5/M/Meteor.Local.png) |




## Meteor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Meteor
include('simpleicons-5/M/Meteor')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Meteor
include('simpleicons-5/M/Meteor')

' renders the element
Meteor('Meteor', 'Meteor', 'an optional tech label')
@enduml
```

