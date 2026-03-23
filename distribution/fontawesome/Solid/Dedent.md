# Dedent


```text
fontawesome/Solid/Dedent
```

```text
include('fontawesome/Solid/Dedent')
```



| Illustration | Dedent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Dedent.png) | ![illustration for Dedent](../../fontawesome/Solid/Dedent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DedentXs>`
- `<$DedentSm>`
- `<$DedentMd>`
- `<$DedentLg>`





## Dedent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dedent
include('fontawesome/Solid/Dedent')

' renders the element
Dedent('Dedent', 'Dedent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dedent
include('fontawesome/Solid/Dedent')

' renders the element
Dedent('Dedent', 'Dedent', 'an optional tech label', 'an optional description')
@enduml
```

