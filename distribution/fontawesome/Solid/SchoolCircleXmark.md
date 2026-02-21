# SchoolCircleXmark


```text
fontawesome/Solid/SchoolCircleXmark
```

```text
include('fontawesome/Solid/SchoolCircleXmark')
```



| Illustration | SchoolCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SchoolCircleXmark.png) | ![illustration for SchoolCircleXmark](../../fontawesome/Solid/SchoolCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SchoolCircleXmarkXs>`
- `<$SchoolCircleXmarkSm>`
- `<$SchoolCircleXmarkMd>`
- `<$SchoolCircleXmarkLg>`





## SchoolCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SchoolCircleXmark
include('fontawesome/Solid/SchoolCircleXmark')

' renders the element
SchoolCircleXmark('SchoolCircleXmark', 'School Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolCircleXmark
include('fontawesome/Solid/SchoolCircleXmark')

' renders the element
SchoolCircleXmark('SchoolCircleXmark', 'School Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

