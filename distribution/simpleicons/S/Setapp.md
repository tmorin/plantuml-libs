# Setapp


```text
simpleicons/S/Setapp
```

```text
include('simpleicons/S/Setapp')
```



| Illustration | Setapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Setapp.png) | ![illustration for Setapp](../../simpleicons/S/Setapp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SetappXs>`
- `<$SetappSm>`
- `<$SetappMd>`
- `<$SetappLg>`





## Setapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Setapp
include('simpleicons/S/Setapp')

' renders the element
Setapp('Setapp', 'Setapp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Setapp
include('simpleicons/S/Setapp')

' renders the element
Setapp('Setapp', 'Setapp', 'an optional tech label', 'an optional description')
@enduml
```

