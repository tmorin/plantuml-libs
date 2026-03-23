# Hourglass3


```text
fontawesome/Solid/Hourglass3
```

```text
include('fontawesome/Solid/Hourglass3')
```



| Illustration | Hourglass3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hourglass3.png) | ![illustration for Hourglass3](../../fontawesome/Solid/Hourglass3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Hourglass3Xs>`
- `<$Hourglass3Sm>`
- `<$Hourglass3Md>`
- `<$Hourglass3Lg>`





## Hourglass3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hourglass3
include('fontawesome/Solid/Hourglass3')

' renders the element
Hourglass3('Hourglass3', 'Hourglass3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hourglass3
include('fontawesome/Solid/Hourglass3')

' renders the element
Hourglass3('Hourglass3', 'Hourglass3', 'an optional tech label', 'an optional description')
@enduml
```

