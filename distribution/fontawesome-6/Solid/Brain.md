# Brain


```text
fontawesome-6/Solid/Brain
```

```text
include('fontawesome-6/Solid/Brain')
```



| Illustration | Brain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Brain.png) | ![illustration for Brain](../../fontawesome-6/Solid/Brain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BrainXs>`
- `<$BrainSm>`
- `<$BrainMd>`
- `<$BrainLg>`





## Brain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Brain
include('fontawesome-6/Solid/Brain')

' renders the element
Brain('Brain', 'Brain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Brain
include('fontawesome-6/Solid/Brain')

' renders the element
Brain('Brain', 'Brain', 'an optional tech label', 'an optional description')
@enduml
```

