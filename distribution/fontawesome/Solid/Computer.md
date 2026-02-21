# Computer


```text
fontawesome/Solid/Computer
```

```text
include('fontawesome/Solid/Computer')
```



| Illustration | Computer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Computer.png) | ![illustration for Computer](../../fontawesome/Solid/Computer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ComputerXs>`
- `<$ComputerSm>`
- `<$ComputerMd>`
- `<$ComputerLg>`





## Computer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Computer
include('fontawesome/Solid/Computer')

' renders the element
Computer('Computer', 'Computer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Computer
include('fontawesome/Solid/Computer')

' renders the element
Computer('Computer', 'Computer', 'an optional tech label', 'an optional description')
@enduml
```

