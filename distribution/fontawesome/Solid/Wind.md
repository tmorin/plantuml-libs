# Wind


```text
fontawesome/Solid/Wind
```

```text
include('fontawesome/Solid/Wind')
```



| Illustration | Wind |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Wind.png) | ![illustration for Wind](../../fontawesome/Solid/Wind.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindXs>`
- `<$WindSm>`
- `<$WindMd>`
- `<$WindLg>`





## Wind

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Wind
include('fontawesome/Solid/Wind')

' renders the element
Wind('Wind', 'Wind', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wind
include('fontawesome/Solid/Wind')

' renders the element
Wind('Wind', 'Wind', 'an optional tech label', 'an optional description')
@enduml
```

