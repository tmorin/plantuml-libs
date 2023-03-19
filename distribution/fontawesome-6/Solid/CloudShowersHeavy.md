# CloudShowersHeavy


```text
fontawesome-6/Solid/CloudShowersHeavy
```

```text
include('fontawesome-6/Solid/CloudShowersHeavy')
```



| Illustration | CloudShowersHeavy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudShowersHeavy.png) | ![illustration for CloudShowersHeavy](../../fontawesome-6/Solid/CloudShowersHeavy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudShowersHeavyXs>`
- `<$CloudShowersHeavySm>`
- `<$CloudShowersHeavyMd>`
- `<$CloudShowersHeavyLg>`





## CloudShowersHeavy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudShowersHeavy
include('fontawesome-6/Solid/CloudShowersHeavy')

' renders the element
CloudShowersHeavy('CloudShowersHeavy', 'Cloud Showers Heavy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudShowersHeavy
include('fontawesome-6/Solid/CloudShowersHeavy')

' renders the element
CloudShowersHeavy('CloudShowersHeavy', 'Cloud Showers Heavy', 'an optional tech label', 'an optional description')
@enduml
```

