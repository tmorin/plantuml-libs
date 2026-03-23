# ExclamationCircle


```text
fontawesome/Solid/ExclamationCircle
```

```text
include('fontawesome/Solid/ExclamationCircle')
```



| Illustration | ExclamationCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExclamationCircle.png) | ![illustration for ExclamationCircle](../../fontawesome/Solid/ExclamationCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExclamationCircleXs>`
- `<$ExclamationCircleSm>`
- `<$ExclamationCircleMd>`
- `<$ExclamationCircleLg>`





## ExclamationCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExclamationCircle
include('fontawesome/Solid/ExclamationCircle')

' renders the element
ExclamationCircle('ExclamationCircle', 'Exclamation Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExclamationCircle
include('fontawesome/Solid/ExclamationCircle')

' renders the element
ExclamationCircle('ExclamationCircle', 'Exclamation Circle', 'an optional tech label', 'an optional description')
@enduml
```

