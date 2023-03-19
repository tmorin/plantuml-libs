# ComputerMouse


```text
fontawesome-6/Solid/ComputerMouse
```

```text
include('fontawesome-6/Solid/ComputerMouse')
```



| Illustration | ComputerMouse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ComputerMouse.png) | ![illustration for ComputerMouse](../../fontawesome-6/Solid/ComputerMouse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ComputerMouseXs>`
- `<$ComputerMouseSm>`
- `<$ComputerMouseMd>`
- `<$ComputerMouseLg>`





## ComputerMouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ComputerMouse
include('fontawesome-6/Solid/ComputerMouse')

' renders the element
ComputerMouse('ComputerMouse', 'Computer Mouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ComputerMouse
include('fontawesome-6/Solid/ComputerMouse')

' renders the element
ComputerMouse('ComputerMouse', 'Computer Mouse', 'an optional tech label', 'an optional description')
@enduml
```

