# Male


```text
fontawesome/Solid/Male
```

```text
include('fontawesome/Solid/Male')
```



| Illustration | Male |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Male.png) | ![illustration for Male](../../fontawesome/Solid/Male.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaleXs>`
- `<$MaleSm>`
- `<$MaleMd>`
- `<$MaleLg>`





## Male

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Male
include('fontawesome/Solid/Male')

' renders the element
Male('Male', 'Male', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Male
include('fontawesome/Solid/Male')

' renders the element
Male('Male', 'Male', 'an optional tech label', 'an optional description')
@enduml
```

