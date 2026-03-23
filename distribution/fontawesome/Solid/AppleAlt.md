# AppleAlt


```text
fontawesome/Solid/AppleAlt
```

```text
include('fontawesome/Solid/AppleAlt')
```



| Illustration | AppleAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AppleAlt.png) | ![illustration for AppleAlt](../../fontawesome/Solid/AppleAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AppleAltXs>`
- `<$AppleAltSm>`
- `<$AppleAltMd>`
- `<$AppleAltLg>`





## AppleAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AppleAlt
include('fontawesome/Solid/AppleAlt')

' renders the element
AppleAlt('AppleAlt', 'Apple Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AppleAlt
include('fontawesome/Solid/AppleAlt')

' renders the element
AppleAlt('AppleAlt', 'Apple Alt', 'an optional tech label', 'an optional description')
@enduml
```

