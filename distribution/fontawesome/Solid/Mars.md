# Mars


```text
fontawesome/Solid/Mars
```

```text
include('fontawesome/Solid/Mars')
```



| Illustration | Mars |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Mars.png) | ![illustration for Mars](../../fontawesome/Solid/Mars.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarsXs>`
- `<$MarsSm>`
- `<$MarsMd>`
- `<$MarsLg>`





## Mars

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mars
include('fontawesome/Solid/Mars')

' renders the element
Mars('Mars', 'Mars', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mars
include('fontawesome/Solid/Mars')

' renders the element
Mars('Mars', 'Mars', 'an optional tech label', 'an optional description')
@enduml
```

