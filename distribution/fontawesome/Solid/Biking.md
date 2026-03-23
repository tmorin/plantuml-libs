# Biking


```text
fontawesome/Solid/Biking
```

```text
include('fontawesome/Solid/Biking')
```



| Illustration | Biking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Biking.png) | ![illustration for Biking](../../fontawesome/Solid/Biking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BikingXs>`
- `<$BikingSm>`
- `<$BikingMd>`
- `<$BikingLg>`





## Biking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Biking
include('fontawesome/Solid/Biking')

' renders the element
Biking('Biking', 'Biking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Biking
include('fontawesome/Solid/Biking')

' renders the element
Biking('Biking', 'Biking', 'an optional tech label', 'an optional description')
@enduml
```

