# CarAlt


```text
fontawesome/Solid/CarAlt
```

```text
include('fontawesome/Solid/CarAlt')
```



| Illustration | CarAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CarAlt.png) | ![illustration for CarAlt](../../fontawesome/Solid/CarAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarAltXs>`
- `<$CarAltSm>`
- `<$CarAltMd>`
- `<$CarAltLg>`





## CarAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarAlt
include('fontawesome/Solid/CarAlt')

' renders the element
CarAlt('CarAlt', 'Car Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CarAlt
include('fontawesome/Solid/CarAlt')

' renders the element
CarAlt('CarAlt', 'Car Alt', 'an optional tech label', 'an optional description')
@enduml
```

