# Code


```text
fontawesome/Solid/Code
```

```text
include('fontawesome/Solid/Code')
```



| Illustration | Code |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Code.png) | ![illustration for Code](../../fontawesome/Solid/Code.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodeXs>`
- `<$CodeSm>`
- `<$CodeMd>`
- `<$CodeLg>`





## Code

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Code
include('fontawesome/Solid/Code')

' renders the element
Code('Code', 'Code', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Code
include('fontawesome/Solid/Code')

' renders the element
Code('Code', 'Code', 'an optional tech label', 'an optional description')
@enduml
```

