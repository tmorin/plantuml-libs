# Pastafarianism


```text
fontawesome/Solid/Pastafarianism
```

```text
include('fontawesome/Solid/Pastafarianism')
```



| Illustration | Pastafarianism |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pastafarianism.png) | ![illustration for Pastafarianism](../../fontawesome/Solid/Pastafarianism.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PastafarianismXs>`
- `<$PastafarianismSm>`
- `<$PastafarianismMd>`
- `<$PastafarianismLg>`





## Pastafarianism

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pastafarianism
include('fontawesome/Solid/Pastafarianism')

' renders the element
Pastafarianism('Pastafarianism', 'Pastafarianism', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pastafarianism
include('fontawesome/Solid/Pastafarianism')

' renders the element
Pastafarianism('Pastafarianism', 'Pastafarianism', 'an optional tech label', 'an optional description')
@enduml
```

