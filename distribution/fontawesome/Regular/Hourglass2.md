# Hourglass2


```text
fontawesome/Regular/Hourglass2
```

```text
include('fontawesome/Regular/Hourglass2')
```



| Illustration | Hourglass2 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Hourglass2.png) | ![illustration for Hourglass2](../../fontawesome/Regular/Hourglass2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Hourglass2Xs>`
- `<$Hourglass2Sm>`
- `<$Hourglass2Md>`
- `<$Hourglass2Lg>`





## Hourglass2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hourglass2
include('fontawesome/Regular/Hourglass2')

' renders the element
Hourglass2('Hourglass2', 'Hourglass2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hourglass2
include('fontawesome/Regular/Hourglass2')

' renders the element
Hourglass2('Hourglass2', 'Hourglass2', 'an optional tech label', 'an optional description')
@enduml
```

