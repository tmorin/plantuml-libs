# Exclamation


```text
fontawesome-6/Solid/Exclamation
```

```text
include('fontawesome-6/Solid/Exclamation')
```



| Illustration | Exclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Exclamation.png) | ![illustration for Exclamation](../../fontawesome-6/Solid/Exclamation.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Exclamation
include('fontawesome-6/Solid/Exclamation')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Exclamation
include('fontawesome-6/Solid/Exclamation')

' renders the element
Exclamation('Exclamation', 'Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

