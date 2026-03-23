# StarHalfAlt


```text
fontawesome/Solid/StarHalfAlt
```

```text
include('fontawesome/Solid/StarHalfAlt')
```



| Illustration | StarHalfAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/StarHalfAlt.png) | ![illustration for StarHalfAlt](../../fontawesome/Solid/StarHalfAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarHalfAltXs>`
- `<$StarHalfAltSm>`
- `<$StarHalfAltMd>`
- `<$StarHalfAltLg>`





## StarHalfAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StarHalfAlt
include('fontawesome/Solid/StarHalfAlt')

' renders the element
StarHalfAlt('StarHalfAlt', 'Star Half Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarHalfAlt
include('fontawesome/Solid/StarHalfAlt')

' renders the element
StarHalfAlt('StarHalfAlt', 'Star Half Alt', 'an optional tech label', 'an optional description')
@enduml
```

