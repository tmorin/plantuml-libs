# Tired


```text
fontawesome/Solid/Tired
```

```text
include('fontawesome/Solid/Tired')
```



| Illustration | Tired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tired.png) | ![illustration for Tired](../../fontawesome/Solid/Tired.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TiredXs>`
- `<$TiredSm>`
- `<$TiredMd>`
- `<$TiredLg>`





## Tired

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tired
include('fontawesome/Solid/Tired')

' renders the element
Tired('Tired', 'Tired', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tired
include('fontawesome/Solid/Tired')

' renders the element
Tired('Tired', 'Tired', 'an optional tech label', 'an optional description')
@enduml
```

