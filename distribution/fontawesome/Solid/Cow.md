# Cow


```text
fontawesome/Solid/Cow
```

```text
include('fontawesome/Solid/Cow')
```



| Illustration | Cow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cow.png) | ![illustration for Cow](../../fontawesome/Solid/Cow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CowXs>`
- `<$CowSm>`
- `<$CowMd>`
- `<$CowLg>`





## Cow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cow
include('fontawesome/Solid/Cow')

' renders the element
Cow('Cow', 'Cow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cow
include('fontawesome/Solid/Cow')

' renders the element
Cow('Cow', 'Cow', 'an optional tech label', 'an optional description')
@enduml
```

