# InfoCircle


```text
fontawesome/Solid/InfoCircle
```

```text
include('fontawesome/Solid/InfoCircle')
```



| Illustration | InfoCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/InfoCircle.png) | ![illustration for InfoCircle](../../fontawesome/Solid/InfoCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InfoCircleXs>`
- `<$InfoCircleSm>`
- `<$InfoCircleMd>`
- `<$InfoCircleLg>`





## InfoCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element InfoCircle
include('fontawesome/Solid/InfoCircle')

' renders the element
InfoCircle('InfoCircle', 'Info Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InfoCircle
include('fontawesome/Solid/InfoCircle')

' renders the element
InfoCircle('InfoCircle', 'Info Circle', 'an optional tech label', 'an optional description')
@enduml
```

