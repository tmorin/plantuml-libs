# Female


```text
fontawesome/Solid/Female
```

```text
include('fontawesome/Solid/Female')
```



| Illustration | Female |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Female.png) | ![illustration for Female](../../fontawesome/Solid/Female.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FemaleXs>`
- `<$FemaleSm>`
- `<$FemaleMd>`
- `<$FemaleLg>`





## Female

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Female
include('fontawesome/Solid/Female')

' renders the element
Female('Female', 'Female', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Female
include('fontawesome/Solid/Female')

' renders the element
Female('Female', 'Female', 'an optional tech label', 'an optional description')
@enduml
```

