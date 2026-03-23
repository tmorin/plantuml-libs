# Dizzy


```text
fontawesome/Solid/Dizzy
```

```text
include('fontawesome/Solid/Dizzy')
```



| Illustration | Dizzy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dizzy.png) | ![illustration for Dizzy](../../fontawesome/Solid/Dizzy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DizzyXs>`
- `<$DizzySm>`
- `<$DizzyMd>`
- `<$DizzyLg>`





## Dizzy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dizzy
include('fontawesome/Solid/Dizzy')

' renders the element
Dizzy('Dizzy', 'Dizzy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dizzy
include('fontawesome/Solid/Dizzy')

' renders the element
Dizzy('Dizzy', 'Dizzy', 'an optional tech label', 'an optional description')
@enduml
```

