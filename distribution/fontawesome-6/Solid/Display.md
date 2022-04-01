# Display


```text
fontawesome-6/Solid/Display
```

```text
include('fontawesome-6/Solid/Display')
```



| Illustration | Display |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Display.png) | ![illustration for Display](../../fontawesome-6/Solid/Display.Local.png) |




## Display

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Display
include('fontawesome-6/Solid/Display')

' renders the element
Display('Display', 'Display', 'an optional tech label')
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

' loads the Item which embeds the element Display
include('fontawesome-6/Solid/Display')

' renders the element
Display('Display', 'Display', 'an optional tech label')
@enduml
```

