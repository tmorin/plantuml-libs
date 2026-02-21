# PersonSwimming


```text
fontawesome/Solid/PersonSwimming
```

```text
include('fontawesome/Solid/PersonSwimming')
```



| Illustration | PersonSwimming |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonSwimming.png) | ![illustration for PersonSwimming](../../fontawesome/Solid/PersonSwimming.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonSwimmingXs>`
- `<$PersonSwimmingSm>`
- `<$PersonSwimmingMd>`
- `<$PersonSwimmingLg>`





## PersonSwimming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonSwimming
include('fontawesome/Solid/PersonSwimming')

' renders the element
PersonSwimming('PersonSwimming', 'Person Swimming', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonSwimming
include('fontawesome/Solid/PersonSwimming')

' renders the element
PersonSwimming('PersonSwimming', 'Person Swimming', 'an optional tech label', 'an optional description')
@enduml
```

