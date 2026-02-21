# Smoking


```text
fontawesome/Solid/Smoking
```

```text
include('fontawesome/Solid/Smoking')
```



| Illustration | Smoking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Smoking.png) | ![illustration for Smoking](../../fontawesome/Solid/Smoking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmokingXs>`
- `<$SmokingSm>`
- `<$SmokingMd>`
- `<$SmokingLg>`





## Smoking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Smoking
include('fontawesome/Solid/Smoking')

' renders the element
Smoking('Smoking', 'Smoking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Smoking
include('fontawesome/Solid/Smoking')

' renders the element
Smoking('Smoking', 'Smoking', 'an optional tech label', 'an optional description')
@enduml
```

