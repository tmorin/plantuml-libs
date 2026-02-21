# Horse


```text
fontawesome/Solid/Horse
```

```text
include('fontawesome/Solid/Horse')
```



| Illustration | Horse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Horse.png) | ![illustration for Horse](../../fontawesome/Solid/Horse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HorseXs>`
- `<$HorseSm>`
- `<$HorseMd>`
- `<$HorseLg>`





## Horse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Horse
include('fontawesome/Solid/Horse')

' renders the element
Horse('Horse', 'Horse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Horse
include('fontawesome/Solid/Horse')

' renders the element
Horse('Horse', 'Horse', 'an optional tech label', 'an optional description')
@enduml
```

