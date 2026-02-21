# Velocity


```text
simpleicons/V/Velocity
```

```text
include('simpleicons/V/Velocity')
```



| Illustration | Velocity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Velocity.png) | ![illustration for Velocity](../../simpleicons/V/Velocity.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VelocityXs>`
- `<$VelocitySm>`
- `<$VelocityMd>`
- `<$VelocityLg>`





## Velocity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Velocity
include('simpleicons/V/Velocity')

' renders the element
Velocity('Velocity', 'Velocity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Velocity
include('simpleicons/V/Velocity')

' renders the element
Velocity('Velocity', 'Velocity', 'an optional tech label', 'an optional description')
@enduml
```

