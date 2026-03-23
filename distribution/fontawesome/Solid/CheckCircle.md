# CheckCircle


```text
fontawesome/Solid/CheckCircle
```

```text
include('fontawesome/Solid/CheckCircle')
```



| Illustration | CheckCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CheckCircle.png) | ![illustration for CheckCircle](../../fontawesome/Solid/CheckCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckCircleXs>`
- `<$CheckCircleSm>`
- `<$CheckCircleMd>`
- `<$CheckCircleLg>`





## CheckCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CheckCircle
include('fontawesome/Solid/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CheckCircle
include('fontawesome/Solid/CheckCircle')

' renders the element
CheckCircle('CheckCircle', 'Check Circle', 'an optional tech label', 'an optional description')
@enduml
```

