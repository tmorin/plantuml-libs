# Snowman


```text
fontawesome-6/Solid/Snowman
```

```text
include('fontawesome-6/Solid/Snowman')
```



| Illustration | Snowman |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Snowman.png) | ![illustration for Snowman](../../fontawesome-6/Solid/Snowman.Local.png) |




## Snowman

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Snowman
include('fontawesome-6/Solid/Snowman')

' renders the element
Snowman('Snowman', 'Snowman', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snowman
include('fontawesome-6/Solid/Snowman')

' renders the element
Snowman('Snowman', 'Snowman', 'an optional tech label', 'an optional description')
@enduml
```

