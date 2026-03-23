# Hourglass1


```text
fontawesome/Solid/Hourglass1
```

```text
include('fontawesome/Solid/Hourglass1')
```



| Illustration | Hourglass1 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hourglass1.png) | ![illustration for Hourglass1](../../fontawesome/Solid/Hourglass1.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Hourglass1Xs>`
- `<$Hourglass1Sm>`
- `<$Hourglass1Md>`
- `<$Hourglass1Lg>`





## Hourglass1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hourglass1
include('fontawesome/Solid/Hourglass1')

' renders the element
Hourglass1('Hourglass1', 'Hourglass1', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hourglass1
include('fontawesome/Solid/Hourglass1')

' renders the element
Hourglass1('Hourglass1', 'Hourglass1', 'an optional tech label', 'an optional description')
@enduml
```

