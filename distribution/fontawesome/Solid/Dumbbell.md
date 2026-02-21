# Dumbbell


```text
fontawesome/Solid/Dumbbell
```

```text
include('fontawesome/Solid/Dumbbell')
```



| Illustration | Dumbbell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dumbbell.png) | ![illustration for Dumbbell](../../fontawesome/Solid/Dumbbell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DumbbellXs>`
- `<$DumbbellSm>`
- `<$DumbbellMd>`
- `<$DumbbellLg>`





## Dumbbell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dumbbell
include('fontawesome/Solid/Dumbbell')

' renders the element
Dumbbell('Dumbbell', 'Dumbbell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dumbbell
include('fontawesome/Solid/Dumbbell')

' renders the element
Dumbbell('Dumbbell', 'Dumbbell', 'an optional tech label', 'an optional description')
@enduml
```

