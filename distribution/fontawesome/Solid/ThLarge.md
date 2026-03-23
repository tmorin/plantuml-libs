# ThLarge


```text
fontawesome/Solid/ThLarge
```

```text
include('fontawesome/Solid/ThLarge')
```



| Illustration | ThLarge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ThLarge.png) | ![illustration for ThLarge](../../fontawesome/Solid/ThLarge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThLargeXs>`
- `<$ThLargeSm>`
- `<$ThLargeMd>`
- `<$ThLargeLg>`





## ThLarge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ThLarge
include('fontawesome/Solid/ThLarge')

' renders the element
ThLarge('ThLarge', 'Th Large', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ThLarge
include('fontawesome/Solid/ThLarge')

' renders the element
ThLarge('ThLarge', 'Th Large', 'an optional tech label', 'an optional description')
@enduml
```

