# Dumbbell


```text
fontawesome-6/Solid/Dumbbell
```

```text
include('fontawesome-6/Solid/Dumbbell')
```



| Illustration | Dumbbell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Dumbbell.png) | ![illustration for Dumbbell](../../fontawesome-6/Solid/Dumbbell.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dumbbell
include('fontawesome-6/Solid/Dumbbell')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dumbbell
include('fontawesome-6/Solid/Dumbbell')

' renders the element
Dumbbell('Dumbbell', 'Dumbbell', 'an optional tech label', 'an optional description')
@enduml
```

