# Won


```text
fontawesome/Solid/Won
```

```text
include('fontawesome/Solid/Won')
```



| Illustration | Won |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Won.png) | ![illustration for Won](../../fontawesome/Solid/Won.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WonXs>`
- `<$WonSm>`
- `<$WonMd>`
- `<$WonLg>`





## Won

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Won
include('fontawesome/Solid/Won')

' renders the element
Won('Won', 'Won', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Won
include('fontawesome/Solid/Won')

' renders the element
Won('Won', 'Won', 'an optional tech label', 'an optional description')
@enduml
```

