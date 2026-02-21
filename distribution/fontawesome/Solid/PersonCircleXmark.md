# PersonCircleXmark


```text
fontawesome/Solid/PersonCircleXmark
```

```text
include('fontawesome/Solid/PersonCircleXmark')
```



| Illustration | PersonCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonCircleXmark.png) | ![illustration for PersonCircleXmark](../../fontawesome/Solid/PersonCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonCircleXmarkXs>`
- `<$PersonCircleXmarkSm>`
- `<$PersonCircleXmarkMd>`
- `<$PersonCircleXmarkLg>`





## PersonCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonCircleXmark
include('fontawesome/Solid/PersonCircleXmark')

' renders the element
PersonCircleXmark('PersonCircleXmark', 'Person Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCircleXmark
include('fontawesome/Solid/PersonCircleXmark')

' renders the element
PersonCircleXmark('PersonCircleXmark', 'Person Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

