# Tired


```text
fontawesome/Regular/Tired
```

```text
include('fontawesome/Regular/Tired')
```



| Illustration | Tired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Tired.png) | ![illustration for Tired](../../fontawesome/Regular/Tired.Local.png) |



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
include('fontawesome/Regular/Tired')

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
include('fontawesome/Regular/Tired')

' renders the element
Tired('Tired', 'Tired', 'an optional tech label', 'an optional description')
@enduml
```

