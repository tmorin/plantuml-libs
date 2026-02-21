# Yammer


```text
fontawesome/Brands/Yammer
```

```text
include('fontawesome/Brands/Yammer')
```



| Illustration | Yammer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Yammer.png) | ![illustration for Yammer](../../fontawesome/Brands/Yammer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YammerXs>`
- `<$YammerSm>`
- `<$YammerMd>`
- `<$YammerLg>`





## Yammer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Yammer
include('fontawesome/Brands/Yammer')

' renders the element
Yammer('Yammer', 'Yammer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Yammer
include('fontawesome/Brands/Yammer')

' renders the element
Yammer('Yammer', 'Yammer', 'an optional tech label', 'an optional description')
@enduml
```

