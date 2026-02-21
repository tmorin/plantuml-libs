# Localxpose


```text
simpleicons/L/Localxpose
```

```text
include('simpleicons/L/Localxpose')
```



| Illustration | Localxpose |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Localxpose.png) | ![illustration for Localxpose](../../simpleicons/L/Localxpose.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalxposeXs>`
- `<$LocalxposeSm>`
- `<$LocalxposeMd>`
- `<$LocalxposeLg>`





## Localxpose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Localxpose
include('simpleicons/L/Localxpose')

' renders the element
Localxpose('Localxpose', 'Localxpose', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Localxpose
include('simpleicons/L/Localxpose')

' renders the element
Localxpose('Localxpose', 'Localxpose', 'an optional tech label', 'an optional description')
@enduml
```

