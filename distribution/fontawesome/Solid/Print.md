# Print


```text
fontawesome/Solid/Print
```

```text
include('fontawesome/Solid/Print')
```



| Illustration | Print |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Print.png) | ![illustration for Print](../../fontawesome/Solid/Print.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrintXs>`
- `<$PrintSm>`
- `<$PrintMd>`
- `<$PrintLg>`





## Print

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Print
include('fontawesome/Solid/Print')

' renders the element
Print('Print', 'Print', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Print
include('fontawesome/Solid/Print')

' renders the element
Print('Print', 'Print', 'an optional tech label', 'an optional description')
@enduml
```

