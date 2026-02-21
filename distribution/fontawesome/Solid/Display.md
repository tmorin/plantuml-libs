# Display


```text
fontawesome/Solid/Display
```

```text
include('fontawesome/Solid/Display')
```



| Illustration | Display |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Display.png) | ![illustration for Display](../../fontawesome/Solid/Display.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DisplayXs>`
- `<$DisplaySm>`
- `<$DisplayMd>`
- `<$DisplayLg>`





## Display

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Display
include('fontawesome/Solid/Display')

' renders the element
Display('Display', 'Display', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Display
include('fontawesome/Solid/Display')

' renders the element
Display('Display', 'Display', 'an optional tech label', 'an optional description')
@enduml
```

