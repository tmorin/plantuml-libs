# Meteor


```text
simpleicons-14/M/Meteor
```

```text
include('simpleicons-14/M/Meteor')
```



| Illustration | Meteor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Meteor.png) | ![illustration for Meteor](../../simpleicons-14/M/Meteor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MeteorXs>`
- `<$MeteorSm>`
- `<$MeteorMd>`
- `<$MeteorLg>`





## Meteor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meteor
include('simpleicons-14/M/Meteor')

' renders the element
Meteor('Meteor', 'Meteor', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Meteor
include('simpleicons-14/M/Meteor')

' renders the element
Meteor('Meteor', 'Meteor', 'an optional tech label', 'an optional description')
@enduml
```

