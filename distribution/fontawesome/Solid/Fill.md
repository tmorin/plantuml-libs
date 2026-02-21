# Fill


```text
fontawesome/Solid/Fill
```

```text
include('fontawesome/Solid/Fill')
```



| Illustration | Fill |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Fill.png) | ![illustration for Fill](../../fontawesome/Solid/Fill.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FillXs>`
- `<$FillSm>`
- `<$FillMd>`
- `<$FillLg>`





## Fill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Fill
include('fontawesome/Solid/Fill')

' renders the element
Fill('Fill', 'Fill', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fill
include('fontawesome/Solid/Fill')

' renders the element
Fill('Fill', 'Fill', 'an optional tech label', 'an optional description')
@enduml
```

