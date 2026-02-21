# HandBackFist


```text
fontawesome/Solid/HandBackFist
```

```text
include('fontawesome/Solid/HandBackFist')
```



| Illustration | HandBackFist |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandBackFist.png) | ![illustration for HandBackFist](../../fontawesome/Solid/HandBackFist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandBackFistXs>`
- `<$HandBackFistSm>`
- `<$HandBackFistMd>`
- `<$HandBackFistLg>`





## HandBackFist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandBackFist
include('fontawesome/Solid/HandBackFist')

' renders the element
HandBackFist('HandBackFist', 'Hand Back Fist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandBackFist
include('fontawesome/Solid/HandBackFist')

' renders the element
HandBackFist('HandBackFist', 'Hand Back Fist', 'an optional tech label', 'an optional description')
@enduml
```

