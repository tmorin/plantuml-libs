# SchoolFlag


```text
fontawesome-6/Solid/SchoolFlag
```

```text
include('fontawesome-6/Solid/SchoolFlag')
```



| Illustration | SchoolFlag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SchoolFlag.png) | ![illustration for SchoolFlag](../../fontawesome-6/Solid/SchoolFlag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SchoolFlagXs>`
- `<$SchoolFlagSm>`
- `<$SchoolFlagMd>`
- `<$SchoolFlagLg>`





## SchoolFlag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SchoolFlag
include('fontawesome-6/Solid/SchoolFlag')

' renders the element
SchoolFlag('SchoolFlag', 'School Flag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolFlag
include('fontawesome-6/Solid/SchoolFlag')

' renders the element
SchoolFlag('SchoolFlag', 'School Flag', 'an optional tech label', 'an optional description')
@enduml
```

