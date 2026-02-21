# PersonDrowning


```text
fontawesome/Solid/PersonDrowning
```

```text
include('fontawesome/Solid/PersonDrowning')
```



| Illustration | PersonDrowning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonDrowning.png) | ![illustration for PersonDrowning](../../fontawesome/Solid/PersonDrowning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonDrowningXs>`
- `<$PersonDrowningSm>`
- `<$PersonDrowningMd>`
- `<$PersonDrowningLg>`





## PersonDrowning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonDrowning
include('fontawesome/Solid/PersonDrowning')

' renders the element
PersonDrowning('PersonDrowning', 'Person Drowning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonDrowning
include('fontawesome/Solid/PersonDrowning')

' renders the element
PersonDrowning('PersonDrowning', 'Person Drowning', 'an optional tech label', 'an optional description')
@enduml
```

