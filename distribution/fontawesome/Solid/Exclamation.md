# Exclamation


```text
fontawesome/Solid/Exclamation
```

```text
include('fontawesome/Solid/Exclamation')
```



| Illustration | Exclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Exclamation.png) | ![illustration for Exclamation](../../fontawesome/Solid/Exclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExclamationXs>`
- `<$ExclamationSm>`
- `<$ExclamationMd>`
- `<$ExclamationLg>`





## Exclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Exclamation
include('fontawesome/Solid/Exclamation')

' renders the element
Exclamation('Exclamation', 'Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Exclamation
include('fontawesome/Solid/Exclamation')

' renders the element
Exclamation('Exclamation', 'Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

