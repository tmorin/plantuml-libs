# Gun


```text
fontawesome/Solid/Gun
```

```text
include('fontawesome/Solid/Gun')
```



| Illustration | Gun |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Gun.png) | ![illustration for Gun](../../fontawesome/Solid/Gun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GunXs>`
- `<$GunSm>`
- `<$GunMd>`
- `<$GunLg>`





## Gun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Gun
include('fontawesome/Solid/Gun')

' renders the element
Gun('Gun', 'Gun', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gun
include('fontawesome/Solid/Gun')

' renders the element
Gun('Gun', 'Gun', 'an optional tech label', 'an optional description')
@enduml
```

