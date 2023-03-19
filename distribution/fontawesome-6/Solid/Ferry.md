# Ferry


```text
fontawesome-6/Solid/Ferry
```

```text
include('fontawesome-6/Solid/Ferry')
```



| Illustration | Ferry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Ferry.png) | ![illustration for Ferry](../../fontawesome-6/Solid/Ferry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FerryXs>`
- `<$FerrySm>`
- `<$FerryMd>`
- `<$FerryLg>`





## Ferry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ferry
include('fontawesome-6/Solid/Ferry')

' renders the element
Ferry('Ferry', 'Ferry', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ferry
include('fontawesome-6/Solid/Ferry')

' renders the element
Ferry('Ferry', 'Ferry', 'an optional tech label', 'an optional description')
@enduml
```

