# Angry


```text
fontawesome/Solid/Angry
```

```text
include('fontawesome/Solid/Angry')
```



| Illustration | Angry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Angry.png) | ![illustration for Angry](../../fontawesome/Solid/Angry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngryXs>`
- `<$AngrySm>`
- `<$AngryMd>`
- `<$AngryLg>`





## Angry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Angry
include('fontawesome/Solid/Angry')

' renders the element
Angry('Angry', 'Angry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Angry
include('fontawesome/Solid/Angry')

' renders the element
Angry('Angry', 'Angry', 'an optional tech label', 'an optional description')
@enduml
```

