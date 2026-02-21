# Frog


```text
fontawesome/Solid/Frog
```

```text
include('fontawesome/Solid/Frog')
```



| Illustration | Frog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Frog.png) | ![illustration for Frog](../../fontawesome/Solid/Frog.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrogXs>`
- `<$FrogSm>`
- `<$FrogMd>`
- `<$FrogLg>`





## Frog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Frog
include('fontawesome/Solid/Frog')

' renders the element
Frog('Frog', 'Frog', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Frog
include('fontawesome/Solid/Frog')

' renders the element
Frog('Frog', 'Frog', 'an optional tech label', 'an optional description')
@enduml
```

