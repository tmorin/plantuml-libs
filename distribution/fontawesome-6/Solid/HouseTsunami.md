# HouseTsunami


```text
fontawesome-6/Solid/HouseTsunami
```

```text
include('fontawesome-6/Solid/HouseTsunami')
```



| Illustration | HouseTsunami |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseTsunami.png) | ![illustration for HouseTsunami](../../fontawesome-6/Solid/HouseTsunami.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseTsunamiXs>`
- `<$HouseTsunamiSm>`
- `<$HouseTsunamiMd>`
- `<$HouseTsunamiLg>`





## HouseTsunami

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseTsunami
include('fontawesome-6/Solid/HouseTsunami')

' renders the element
HouseTsunami('HouseTsunami', 'House Tsunami', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseTsunami
include('fontawesome-6/Solid/HouseTsunami')

' renders the element
HouseTsunami('HouseTsunami', 'House Tsunami', 'an optional tech label', 'an optional description')
@enduml
```

