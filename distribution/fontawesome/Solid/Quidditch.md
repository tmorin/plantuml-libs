# Quidditch


```text
fontawesome/Solid/Quidditch
```

```text
include('fontawesome/Solid/Quidditch')
```



| Illustration | Quidditch |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Quidditch.png) | ![illustration for Quidditch](../../fontawesome/Solid/Quidditch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuidditchXs>`
- `<$QuidditchSm>`
- `<$QuidditchMd>`
- `<$QuidditchLg>`





## Quidditch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Quidditch
include('fontawesome/Solid/Quidditch')

' renders the element
Quidditch('Quidditch', 'Quidditch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quidditch
include('fontawesome/Solid/Quidditch')

' renders the element
Quidditch('Quidditch', 'Quidditch', 'an optional tech label', 'an optional description')
@enduml
```

